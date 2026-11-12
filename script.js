let button = document.getElementById("surpriseBtn");
let message = document.getElementById("message");

let letterBtn = document.getElementById("letterBtn");
let letter = document.getElementById("letter");

button.onclick = function() {
    message.style.display = "block";
    letterBtn.style.display = "block";
    launchConfetti();
};

letterBtn.onclick = function() {
    letter.style.display = "block";
};

function launchConfetti() {

    let colors = ["#ff69b4", "#ffd700", "#9370db", "#00ced1", "#ff6347"];

    for (let i = 0; i < 80; i++) {

        let piece = document.createElement("span");

        piece.className = "confetti";

        piece.style.left = Math.random() * 100 + "vw";

        piece.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        document.body.appendChild(piece);

        setTimeout(function() {
            piece.remove();
        }, 5000);
    }
}