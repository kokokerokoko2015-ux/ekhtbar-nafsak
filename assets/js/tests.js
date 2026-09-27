(function(){
"use strict";
var TESTS={
 brain:{
  title:"اختبار الدماغ السريع",
  intro:"اختبار تدريبي قصير من 8 أسئلة في الذاكرة والانتباه والمنطق والحساب.",
  questions:[
   ["أكمل التسلسل: 2، 4، 8، 16، ؟",["20","24","32","36"],2],
   ["أي كلمة تختلف عن الباقي؟",["تفاح","موز","برتقال","كرسي"],3],
   ["إذا كان اليوم الاثنين، فما اليوم بعد 3 أيام؟",["الثلاثاء","الأربعاء","الخميس","الجمعة"],2],
   ["ما العدد الأصغر؟",["0.8","0.08","0.18","0.8"],1],
   ["كتاب بالنسبة للقراءة مثل ملعقة بالنسبة لـ...",["الكتابة","الأكل","النوم","الرسم"],1],
   ["أكمل: 5، 10، 15، 20، ؟",["22","24","25","30"],2],
   ["إذا كان أحمد أطول من علي وعلي أطول من سامي، فمن الأقصر؟",["أحمد","علي","سامي","لا يمكن معرفة ذلك"],2],
   ["أي شكل له 3 أضلاع؟",["مربع","دائرة","مثلث","مستطيل"],2]
  ]
 },
 memory:{
  title:"اختبار الذاكرة السريع",
  intro:"اختبار تدريبي للذاكرة قصيرة المدى والتذكر والانتباه.",
  questions:[
   ["احفظ هذه السلسلة: 7 - 2 - 9 - 4. ما الرقم الثاني؟",["2","7","9","4"],0],
   ["أي كلمة كانت في السؤال السابق؟",["بحر","قلم","شجرة","سيارة"],null],
   ["احفظ: قمر، باب، كتاب. ما الكلمة الثانية؟",["قمر","باب","كتاب","بيت"],1],
   ["أي رقم مختلف؟ 3، 3، 3، 8، 3",["الأول","الثاني","الرابع","الخامس"],2],
   ["احفظ: 1 - 5 - 8. ما الرقم الأخير؟",["1","5","8","6"],2],
   ["أي ترتيب صحيح؟",["أ، ب، ج","ج، أ، ب","ب، ج، أ","ج، ب، أ"],0],
   ["كم عدد الكلمات في العبارة: بيت كبير أزرق؟",["2","3","4","5"],1],
   ["إذا تذكرت 6 من 8 أسئلة بشكل صحيح، فما نسبة الإجابة الصحيحة؟",["50%","60%","75%","80%"],2]
  ]
 },
 concentration:{
  title:"اختبار التركيز والانتباه",
  intro:"اختبار قصير لقياس دقة الانتباه داخل هذه المهمة فقط.",
  questions:[
   ["اختر الرقم 7: 3، 5، 7، 9",["3","5","7","9"],2],
   ["أي كلمة تبدأ بحرف م؟",["بيت","مفتاح","قلم","كتاب"],1],
   ["اختر العدد الزوجي:",["3","7","10","15"],2],
   ["أي كلمة مكتوبة بشكل مختلف؟",["تركيز","تركيز","تركيز","تركيز"],1],
   ["كم مرة يظهر الرقم 2؟ 2 5 2 8 2",["1","2","3","4"],2],
   ["اختر الكلمة الأطول:",["باب","مدرسة","بيت","قلم"],1],
   ["أي اتجاه صحيح؟",["يمين","يسار","فوق","تحت"],0],
   ["أكمل: 10، 9، 8، ؟",["5","6","7","9"],2]
  ]
 },
 intelligence:{
  title:"اختبار التفكير والمنطق",
  intro:"اختبار ترفيهي قصير للمنطق وحل المشكلات، وليس اختبار ذكاء معياريًا.",
  questions:[
   ["أكمل: 1، 1، 2، 3، 5، ؟",["6","7","8","10"],2],
   ["إذا كان 4 × 3 = 12، فما 12 ÷ 3؟",["3","4","5","6"],1],
   ["العدد المختلف: 9، 16، 25، 30، 36",["9","16","30","36"],2],
   ["ما عكس كلمة «صاعد»؟",["سريع","نازل","بعيد","مرتفع"],1],
   ["إذا كانت كل القطط حيوانات، فهل كل الحيوانات قطط؟",["نعم","لا","أحيانًا","لا يمكن التفكير"],1],
   ["أكمل: 100، 90، 80، ؟",["75","70","60","50"],1],
   ["لديك 10 تفاحات وأخذت 3. كم معك؟",["3","7","10","13"],0],
   ["أي عنصر لا ينتمي؟",["دائرة","مربع","مثلث","تفاحة"],3]
  ]
 },
 observation:{
  title:"اختبار قوة الملاحظة",
  intro:"اختبار سريع لملاحظة التفاصيل والتمييز البصري واللفظي.",
  questions:[
   ["أي رقم مختلف؟ 4 4 4 9 4",["الأول","الثاني","الرابع","الخامس"],2],
   ["أي كلمة مختلفة؟",["كتاب","كتاب","كتتب","كتاب"],2],
   ["كم حرفًا في كلمة «مدرسة»؟",["4","5","6","7"],1],
   ["أي لون ليس لونًا؟",["أحمر","أزرق","طاولة","أخضر"],2],
   ["أي رقم يتكرر 3 مرات؟ 5، 2، 5، 8، 5",["2","5","8","لا يوجد"],1],
   ["أي كلمة تحتوي على حرف ش؟",["قلم","شمس","باب","بيت"],1],
   ["أي عدد أكبر؟",["19","91","29","39"],1],
   ["أي كلمة تبدأ بحرف س؟",["قمر","شمس","سيارة","بيت"],2]
  ]
 }
};
function init(){
 var root=document.querySelector("[data-test]");
 if(!root)return;
 var key=root.getAttribute("data-test"),test=TESTS[key];
 if(!test)return;
 var title=root.querySelector("[data-test-title]"),intro=root.querySelector("[data-test-intro]"),box=root.querySelector("[data-test-box]");
 if(title)title.textContent=test.title;
 if(intro)intro.textContent=test.intro;
 var i=0,score=0,answered=false;
 function render(){
  var q=test.questions[i];
  box.innerHTML='<div class="test-progress">السؤال '+(i+1)+' من '+test.questions.length+'</div><div class="test-question">'+q[0]+'</div><div class="test-options">'+q[1].map(function(o,n){return '<button type="button" class="test-option" data-answer="'+n+'">'+o+'</button>';}).join("")+'</div>';
  box.querySelectorAll("[data-answer]").forEach(function(btn){
   btn.addEventListener("click",function(){
    if(answered)return;
    answered=true;
    var n=Number(btn.getAttribute("data-answer"));
    box.querySelectorAll("[data-answer]").forEach(function(b){b.disabled=true;});
    if(q[2]===n){score++;btn.classList.add("correct");}
    else{btn.classList.add("wrong");if(q[2]!==null){var correct=box.querySelector('[data-answer="'+q[2]+'"]');if(correct)correct.classList.add("correct");}}
    setTimeout(function(){i++;answered=false;i<test.questions.length?render():finish();},550);
   });
  });
 }
 function finish(){
  var percent=Math.round(score/test.questions.length*100);
  var level=percent>=80?"أداء قوي داخل هذا الاختبار":percent>=60?"أداء جيد ويمكن تحسينه بالتدريب":"جرّب مرة أخرى وراجع الأسئلة بهدوء";
  box.innerHTML='<div class="test-result"><span class="badge">النتيجة</span><h2>'+percent+'%</h2><p>أجبت بشكل صحيح عن '+score+' من '+test.questions.length+' أسئلة.</p><strong>'+level+'</strong><p class="muted">هذه النتيجة تخص هذه المهمة فقط وليست تشخيصًا أو مقياسًا نفسيًا معياريًا.</p><button type="button" class="btn" id="restart-test">إعادة الاختبار</button></div>';
  var r=document.getElementById("restart-test");if(r)r.addEventListener("click",function(){i=0;score=0;render();});
 }
 render();
}
document.addEventListener("DOMContentLoaded",init);
})();