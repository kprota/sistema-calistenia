let level = 1;
let xp = 0;
let xpMax = 100;

function ganharXP(valor) {
  xp += valor;

  if (xp >= xpMax) {
    xp -= xpMax;
    level++;
    xpMax += 20;
    alert("LEVEL UP! Você agora é nível " + level);
  }

  atualizarHUD();
}

function atualizarHUD() {
  document.getElementById("level").innerText = level;
  document.getElementById("xp").innerText = xp;
  document.getElementById("xpMax").innerText = xpMax;

  let rank = "E";
  if (level >= 10) rank = "D";
  if (level >= 20) rank = "C";
  if (level >= 30) rank = "B";

  document.getElementById("rank").innerText = rank;
}

atualizarHUD();
