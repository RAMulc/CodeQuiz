var initialsEl = document.querySelector("#last-score");
var highScoresEl = document.querySelector("#high-scores");
var highScoresListEL = document.querySelector("#high-scores-list");
var clearScoresEl = document.querySelector("#clear-scores");

var highScores = [];

var myScore = 0;

function init() {
    retrieveStoredValues();
}

function storeHighScores() {
    localStorage.setItem("HighScores", JSON.stringify(highScores));
}

function clearHighScores() {
    highScores = [];
    storeHighScores();
    updateHighScores();
}

function retrieveStoredValues() {
    var storedScore = localStorage.getItem("QuizScore");
    if (storedScore !== null) {
        myScore = parseInt(storedScore);
    }
    var storedHighScores = localStorage.getItem("HighScores");
    if (storedHighScores !== null) {
        highScores = JSON.parse(storedHighScores);
    }
    var gameComplete = localStorage.getItem("GameComplete");
    if (gameComplete !== null) {
        if (gameComplete === "true") {
            setVisibilty(true);
        }
        else {
            updateHighScores();
        }
    }
    else {
        updateHighScores();
    }
}

function setVisibilty(gamePlayed) {
    if (gamePlayed) {
        document.getElementById("high-scores").style.visibility = "hidden";
        document.getElementById("my-score").style.visibility = "visible";
        clearScoresEl.style.visibility = "hidden";
    }
    else {
        document.getElementById("my-score").style.visibility = "hidden";
        document.getElementById("high-scores").style.visibility = "visible";
        if (highScores.length > 0) {
            clearScoresEl.style.visibility = "visible";
        }
    }
}

function updateHighScores() {
    highScoresListEL.innerHTML = "";

    var ul = document.createElement("ul");
    ul.classList.add("list-group");
    highScoresListEL.appendChild(ul);
    if (highScores.length > 0) {
        highScores.forEach(highScore => {
            var li = document.createElement("li");
            li.classList.add("list-group-item")
            li.classList.add("d-flex");
            li.classList.add("justify-content-between");
            li.classList.add("align-items-center");
            li.textContent = highScore[0];
            ul.appendChild(li);
            var span = document.createElement("span");
            span.classList.add("badge");
            span.classList.add("badge-primary");
            span.classList.add("badge-pill");
            span.textContent = highScore[1];
            li.appendChild(span);
        });
        clearScoresEl.style.visibility = "visible";
    }
    else {
        clearScoresEl.style.visibility = "hidden";
        var li = document.createElement("p");
        li.textContent = "No high scores yet. Be the first to play!";
        ul.appendChild(li);
    }
    setVisibilty(false);
}

function checkForDuplicate(newEntry) {
    for (var i = 0; i < highScores.length; i++) {
        if (newEntry[0] === highScores[i][0]) {
            highScores[i][1] = Math.max(newEntry[1], highScores[i][1]);
            return;
        }
    }
    highScores.push(newEntry);

}

function sortInitials(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}

window.onbeforeunload = function () {
    localStorage.setItem("QuizScore", 0);
    localStorage.setItem("GameComplete", false);
}

initialsEl.addEventListener("submit", function (event) {
    event.preventDefault();
    var initials = document.querySelector("#initials-text").value.trim().toUpperCase();
    if (initials !== "") {
        var newEntry = [initials, parseInt(myScore)];
        checkForDuplicate(newEntry);
        highScores.sort(sortInitials);
        highScores.sort(function (a, b) { return b[1] - a[1]; })
        highScores = highScores.slice(0, 10);
        console.log(highScores);
        storeHighScores();
        updateHighScores();
        setVisibilty(false);
    }
});

clearScoresEl.addEventListener("click", function (event) {
    event.preventDefault();
    var clearScores = confirm("Clear the high scores?");
    if (clearScores) {
        clearHighScores();
    }
});

init();