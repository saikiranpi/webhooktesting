let score = 0;

const scorekeeper = {
    addScore: function() {
        score++;
        document.getElementById('score').textContent = score;
        if (score % 5 === 0) {
            alert("Keep it up! You're on a roll!");
        }
    }
};
