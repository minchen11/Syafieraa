function showGame(game) {
  const gameArea = document.getElementById("gameArea");
  if (game === "quiz") {
    gameArea.innerHTML = `
      <h2>Tebak-Tebakan Cinta 💘</h2>
      <p id="quizQ">[Pertanyaan kamu di sini]</p>
      <button onclick="alert('Salah 😢')">A</button>
      <button onclick="alert('Benar! 😍')">B</button>
      <button onclick="alert('Salah 😢')">C</button>
      <button onclick="alert('Salah 😢')">D</button>
    `;
  } else if (game === "findHeart") {
    let hearts = '';
    const correct = Math.floor(Math.random() * 9);
    for (let i = 0; i < 9; i++) {
      hearts += `<button onclick="alert('${i === correct ? "Kamu nemu hatiku! 💗" : "Bukan di sini 😜"}')">💖</button> `;
      if ((i + 1) % 3 === 0) hearts += '<br>';
    }
    gameArea.innerHTML = `<h2>Cari Hati Aku 💗</h2>` + hearts;
  } else if (game === "loveBomb") {
    gameArea.innerHTML = `
      <h2>Click the Love Bomb 💣❤️</h2>
      <button onclick="dropLove()">💣 Click me!</button>
      <div id="loveZone"></div>
    `;
  }
}

function dropLove() {
  const zone = document.getElementById("loveZone");
  const heart = document.createElement("div");
  heart.innerText = "💖";
  heart.style.fontSize = "2em";
  zone.appendChild(heart);
}
