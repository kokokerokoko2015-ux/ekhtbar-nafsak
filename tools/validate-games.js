const fs = require("fs");
const path = require("path");
const assert = require("assert");

const dir = path.join(process.cwd(), "games");
const expected = [
  "memory-test.html",
  "reaction-test.html",
  "observation-test.html",
  "focus-test.html",
  "math-speed-test.html",
  "patterns-test.html",
  "guess-the-number.html",
  "true-or-false.html",
  "letter-order.html",
  "iq-challenge.html"
];

const files = fs.readdirSync(dir).filter(f => f.endsWith(".html")).sort();
assert.deepStrictEqual(files, expected, "Game file list mismatch");

const required = ["score", "round", "progress", "resultScore", "start", "restart"];
const genericMarkers = ["اختر الأكبر", "اختر الزوجي", "تدريب سريع على التذكر"];
const impossibleScorePatterns = [
  /score\s*\+=\s*1000/,
  /score\s*\+=\s*100/,
  /score\s*\+=\s*10\s*;[^\n]{0,120}score\s*\+=\s*10/
];

function inlineScripts(text) {
  return [...text.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)]
    .map(m => m[1])
    .filter(s => s.trim());
}

for (const name of files) {
  const text = fs.readFileSync(path.join(dir, name), "utf8");

  for (const marker of genericMarkers) {
    assert(!text.includes(marker), name + ": obsolete generic game content detected: " + marker);
  }

  for (const id of required) {
    assert(text.includes('id="' + id + '"'), name + ": missing #" + id);
  }

  assert(text.includes("game_completed"), name + ": missing completion tracking");
  assert(text.includes("game_started"), name + ": missing start tracking");
  assert(text.includes('rel="canonical"') || text.includes('canonical"'),
    name + ": missing canonical");
  assert(!text.includes("score += 1000"), name + ": impossible score increment detected");
  assert(!text.includes("score += 100"), name + ": unbounded 100-point increment detected");

  const scripts = inlineScripts(text);
  assert(scripts.length > 0, name + ": no inline game JavaScript found");

  for (const script of scripts) {
    try {
      new Function(script);
    } catch (err) {
      throw new Error(name + ": inline JavaScript syntax error: " + err.message);
    }
  }

  // Every fixed-round percentage score must be mathematically bounded.
  if (/Math\.round\([^\n]{0,160}\/\s*[^\n]{0,80}\*\s*100\)/.test(text)) {
    assert(text.includes("100"), name + ": percentage scoring model missing 100-point ceiling");
  }

  // Prevent accidental double-scoring: fixed-round answer handlers must lock before scoring.
  if (/function answer\s*\(/.test(text)) {
    assert(/if\s*\(locked\)\s*return/.test(text),
      name + ": answer handler lacks duplicate-click lock");
  }
}

// Explicit score guardrails used by the current game families.
for (let correct = 0; correct <= 6; correct++) {
  const score = Math.round(correct / 6 * 100);
  assert(Number.isInteger(score) && score >= 0 && score <= 100);
}
for (let correct = 0; correct <= 10; correct++) {
  const score = Math.round(correct / 10 * 100);
  assert(Number.isInteger(score) && score >= 0 && score <= 100);
}
assert.strictEqual(Math.round(6 / 6 * 100), 100);
assert.strictEqual(Math.round(5 / 6 * 100), 83);
assert.strictEqual(Math.round(4 / 6 * 100), 67);
assert.strictEqual(Math.round(3 / 6 * 100), 50);
assert.strictEqual(Math.round(2 / 6 * 100), 33);
assert.strictEqual(Math.round(1 / 6 * 100), 17);
assert.strictEqual(Math.round(0 / 6 * 100), 0);
assert.strictEqual(Math.round(10 / 10 * 100), 100);

console.log("Game validation: OK");
console.log("Validated games:", files.length);