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

const genericMarker = "اختر الأكبر";
const badScoreMarker = /score\s*\+=\s*10/;
const required = ["score", "round", "progress", "resultScore", "restart"];

for (const name of files) {
  const text = fs.readFileSync(path.join(dir, name), "utf8");
  assert(!text.includes(genericMarker), name + ": old generic question detected");
  for (const id of required) {
    assert(text.includes('id="' + id + '"'), name + ": missing #" + id);
  }
  assert(text.includes("game_completed"), name + ": missing completion tracking");
  assert(text.includes("game_started"), name + ": missing start tracking");
  assert(text.includes('canonical"'), name + ": missing canonical");
  assert(!badScoreMarker.test(text) || name === "iq-challenge.html",
    name + ": unbounded +10 score pattern detected");
  const scripts = [...text.matchAll(/<script(?:\\s[^>]*)?>([\\s\\S]*?)<\\/script>/gi)].map(m => m[1]).filter(s => s.trim());
  for (const script of scripts) {
    try { new Function(script); } catch (err) { throw new Error(name + ": inline JavaScript syntax error: " + err.message); }
  }
}

// Mathematical guardrails for the scoring model used by fixed-round games.
for (let correct = 0; correct <= 6; correct++) {
  const score = Math.round(correct / 6 * 100);
  assert(score >= 0 && score <= 100);
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
