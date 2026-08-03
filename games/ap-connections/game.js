(function(){
"use strict";

/* =========================================================================
   LEVELS: difficulty tiers, ordered easiest to trickiest. Every unit's
   category list follows this same order.
========================================================================= */
const LEVELS = [
  { label:"Straightforward", bg:"var(--lvl0-bg)", text:"var(--lvl0-text)" },
  { label:"Solid Recall",    bg:"var(--lvl1-bg)", text:"var(--lvl1-text)" },
  { label:"Tricky",          bg:"var(--lvl2-bg)", text:"var(--lvl2-text)" },
  { label:"Trickiest",       bg:"var(--lvl3-bg)", text:"var(--lvl3-text)" }
];
const MAX_MISTAKES = 4;
const DIFF_DESC = {
  easy: "Categories mostly group like with like. A good first pass through the unit.",
  hard: "Categories cut across types on purpose: mirrored pairs, shared years, vocabulary that looks interchangeable but isn't."
};

/* =========================================================================
   STATE
========================================================================= */
let S = null;
let currentCourse = null;
let currentDifficulty = "easy";
const completedPuzzles = new Set(); // keys like "apworld:apwh-u1:hard"

function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1; i>0; i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

function showScreen(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/* -------- course select screen -------- */
function renderCourseGrid(){
  const grid = document.getElementById("courseGrid");
  grid.innerHTML = "";
  COURSES.forEach(course=>{
    const total = course.units.length * 2;
    let solved = 0;
    course.units.forEach(u=>{
      if(completedPuzzles.has(course.id+":"+u.id+":easy")) solved++;
      if(completedPuzzles.has(course.id+":"+u.id+":hard")) solved++;
    });
    const card = document.createElement("button");
    card.className = "course-card";
    card.innerHTML = `
      <span class="icon">${course.icon}</span>
      <span class="unit-count">${course.units.length} Units</span>
      <h3>${course.name}</h3>
      <p>${course.blurb}</p>
      ${solved > 0 ? `<span class="progress">${solved}/${total} puzzles solved</span>` : ''}
    `;
    card.addEventListener("click", ()=> openCourse(course.id));
    grid.appendChild(card);
  });
}

function openCourse(courseId){
  currentCourse = COURSES.find(c=>c.id===courseId);
  document.getElementById("unitsEyebrow").textContent = currentCourse.units.length + " Units";
  document.getElementById("unitsTitle").textContent = currentCourse.name;
  document.getElementById("unitsSub").textContent = currentCourse.blurb;
  setDifficulty(currentDifficulty);
  showScreen("screen-units");
}

/* -------- unit select screen -------- */
function setDifficulty(diff){
  currentDifficulty = diff;
  document.getElementById("diffEasyBtn").classList.toggle("active", diff === "easy");
  document.getElementById("diffHardBtn").classList.toggle("active", diff === "hard");
  document.getElementById("diffDesc").textContent = DIFF_DESC[diff];
  renderUnitGrid();
}

function renderUnitGrid(){
  const grid = document.getElementById("puzzleGrid");
  grid.innerHTML = "";
  currentCourse.units.forEach(unit=>{
    const variant = unit[currentDifficulty];
    const card = document.createElement("button");
    card.className = "puzzle-card";
    card.innerHTML = `
      <span class="era-tag">${unit.unit}${unit.range ? " · " + unit.range : ""}</span>
      <h3>${unit.title}</h3>
      <p>${variant.blurb}</p>
      ${completedPuzzles.has(currentCourse.id+":"+unit.id+":"+currentDifficulty) ? '<span class="played">✓ Solved</span>' : ''}
    `;
    card.addEventListener("click", ()=> startPuzzle(currentCourse.id, unit.id, currentDifficulty));
    grid.appendChild(card);
  });
}

/* -------- start / init a puzzle -------- */
function startPuzzle(courseId, unitId, difficulty){
  const course = COURSES.find(c=>c.id===courseId);
  const unit = course.units.find(u=>u.id===unitId);
  const variant = unit[difficulty];
  const tiles = [];
  let tid = 0;
  variant.categories.forEach((cat, ci)=>{
    cat.items.forEach(word=>{
      tiles.push({ id: tid++, word, cat: ci });
    });
  });
  S = {
    course, unit, difficulty,
    categories: variant.categories,
    title: unit.title,
    tiles,
    order: shuffle(tiles.map(t=>t.id)),
    selected: new Set(),
    solvedOrder: [],
    mistakesUsed: 0,
    triedCombos: new Set(),
    status: "playing"
  };
  document.getElementById("gameEra").textContent = course.name + " · " + unit.unit;
  document.getElementById("gameTitle").innerHTML =
    `${unit.title} <span class="diff-tag ${difficulty}">${difficulty === "hard" ? "Hard Mode" : "Easy Mode"}</span>`;
  clearMessage();
  showScreen("screen-game");
  renderGame();
}

function tileById(id){ return S.tiles.find(t=>t.id===id); }

/* -------- rendering -------- */
function renderGame(){
  renderMistakeDots();
  renderSolvedBars();
  renderTileGrid();
  renderSubmitState();
}

function renderMistakeDots(){
  const wrap = document.getElementById("mistakeDots");
  wrap.innerHTML = "";
  const remaining = MAX_MISTAKES - S.mistakesUsed;
  for(let i=0; i<MAX_MISTAKES; i++){
    const dot = document.createElement("span");
    dot.className = "dot" + (i < remaining ? "" : " used");
    wrap.appendChild(dot);
  }
}

function renderSolvedBars(){
  const wrap = document.getElementById("solvedBars");
  wrap.innerHTML = "";
  S.solvedOrder.forEach(catIndex=>{
    const cat = S.categories[catIndex];
    const lvl = LEVELS[catIndex];
    const bar = document.createElement("div");
    bar.className = "solved-bar";
    bar.style.background = lvl.bg;
    bar.style.color = lvl.text;
    bar.innerHTML = `<div class="cat-name">${cat.name}</div><div class="cat-items">${cat.items.join(" · ")}</div>`;
    wrap.appendChild(bar);
  });
}

function renderTileGrid(){
  const wrap = document.getElementById("tileGrid");
  wrap.innerHTML = "";
  S.order.forEach(id=>{
    const t = tileById(id);
    const btn = document.createElement("button");
    btn.className = "tile" + (S.selected.has(id) ? " selected" : "");
    btn.textContent = t.word;
    btn.addEventListener("click", ()=> toggleTile(id));
    wrap.appendChild(btn);
  });
}

function renderSubmitState(){
  document.getElementById("submitBtn").disabled = S.selected.size !== 4 || S.status !== "playing";
}

function clearMessage(){
  document.getElementById("msgArea").innerHTML = "";
}

function showMessage(text, kind){
  const area = document.getElementById("msgArea");
  area.innerHTML = `<span class="msg${kind ? " "+kind : ""}">${text}</span>`;
}

/* -------- interactions -------- */
function toggleTile(id){
  if(S.status !== "playing") return;
  if(S.selected.has(id)){
    S.selected.delete(id);
  } else {
    if(S.selected.size >= 4) return;
    S.selected.add(id);
  }
  clearMessage();
  renderTileGrid();
  renderSubmitState();
}

function deselectAll(){
  if(S.status !== "playing") return;
  S.selected.clear();
  clearMessage();
  renderTileGrid();
  renderSubmitState();
}

function shuffleTiles(){
  if(S.status !== "playing") return;
  S.order = shuffle(S.order);
  renderTileGrid();
}

function submitGuess(){
  if(S.status !== "playing" || S.selected.size !== 4) return;
  const ids = Array.from(S.selected);
  const cats = ids.map(id=> tileById(id).cat);
  const combo = ids.slice().sort((a,b)=>a-b).join(",");

  const allSame = cats.every(c=> c === cats[0]);

  if(allSame){
    const catIndex = cats[0];
    S.solvedOrder.push(catIndex);
    S.order = S.order.filter(id=> !ids.includes(id));
    S.selected.clear();
    showMessage("Correct!", "good");
    renderGame();
    if(S.solvedOrder.length === 4){
      S.status = "won";
      setTimeout(endGame, 500);
    }
    return;
  }

  if(S.triedCombos.has(combo)){
    showMessage("You already tried that group.");
    return;
  }
  S.triedCombos.add(combo);
  S.mistakesUsed++;

  const counts = {};
  cats.forEach(c=> counts[c] = (counts[c]||0) + 1);
  const maxCount = Math.max(...Object.values(counts));
  if(maxCount === 3){
    showMessage("One away...", "err");
  } else {
    showMessage("Not quite. Try again.", "err");
  }

  flashShake(ids);
  renderMistakeDots();
  renderSubmitState();

  if(S.mistakesUsed >= MAX_MISTAKES){
    S.status = "lost";
    setTimeout(endGame, 900);
  }
}

function flashShake(ids){
  const wrap = document.getElementById("tileGrid");
  Array.from(wrap.children).forEach((btn, i)=>{
    if(ids.includes(S.order[i])){
      btn.classList.add("shake");
      setTimeout(()=> btn.classList.remove("shake"), 400);
    }
  });
}

/* -------- end screen -------- */
function endGame(){
  const won = S.status === "won";
  completedPuzzles.add(S.course.id+":"+S.unit.id+":"+S.difficulty);

  const diffLabel = S.difficulty === "hard" ? "Hard Mode" : "Easy Mode";
  document.getElementById("endEyebrow").textContent = won ? "PUZZLE SOLVED" : "PUZZLE OVER";
  document.getElementById("endHeadline").textContent = won
    ? (S.mistakesUsed === 0 ? "Perfect!" : "Solved It!")
    : "Nice Try!";
  document.getElementById("endSub").textContent = won
    ? `You solved ${S.title} (${diffLabel}) with ${S.mistakesUsed} mistake${S.mistakesUsed===1?"":"s"}.`
    : `You ran out of mistakes on ${S.title} (${diffLabel}). Here's how it breaks down — review it before trying again.`;

  const wrap = document.getElementById("endBars");
  wrap.innerHTML = "";
  S.categories.forEach((cat, ci)=>{
    const lvl = LEVELS[ci];
    const bar = document.createElement("div");
    bar.className = "end-bar";
    bar.style.background = lvl.bg;
    bar.style.color = lvl.text;
    bar.innerHTML = `<div class="cat-name">${lvl.label}: ${cat.name}</div><div class="cat-items">${cat.items.join(" · ")}</div>`;
    wrap.appendChild(bar);
  });

  showScreen("screen-end");
}

/* =========================================================================
   EVENTS
========================================================================= */
document.getElementById("instructionsContinueBtn").addEventListener("click", ()=>{
  renderCourseGrid();
  showScreen("screen-courses");
});
document.getElementById("reviewRulesBtn").addEventListener("click", ()=> showScreen("screen-instructions"));
document.getElementById("backToCoursesBtn").addEventListener("click", ()=>{
  renderCourseGrid();
  showScreen("screen-courses");
});
document.getElementById("switchPuzzleBtn").addEventListener("click", ()=>{
  openCourse(S.course.id);
});
document.getElementById("diffEasyBtn").addEventListener("click", ()=> setDifficulty("easy"));
document.getElementById("diffHardBtn").addEventListener("click", ()=> setDifficulty("hard"));
document.getElementById("shuffleBtn").addEventListener("click", shuffleTiles);
document.getElementById("deselectBtn").addEventListener("click", deselectAll);
document.getElementById("submitBtn").addEventListener("click", submitGuess);
document.getElementById("playAgainBtn").addEventListener("click", ()=> startPuzzle(S.course.id, S.unit.id, S.difficulty));
document.getElementById("chooseAnotherBtn").addEventListener("click", ()=>{
  openCourse(S.course.id);
});

})();
