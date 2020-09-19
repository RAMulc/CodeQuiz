
//console.log(allQuestions);

var questionNum = document.querySelector("#question-number");
var questionEl = document.querySelector("#question");
var answerList = document.querySelector("#answer-list");
var isRight = document.querySelector("#isRight");
var score = document.querySelector("#score");
var nextQ = document.querySelector("#next");
var timer = document.querySelector("#timer");

var correctAudio = new Audio("..//audio/correct.wav");
var incorrectAudio = new Audio("..//audio/incorrect.wav");

var currentQuestion;
var totalScore;
var quizEnd;
var countdown;
var initialCounterValue;
var quizTimer;

var optionSelected = false;

function init() {
    currentQuestion = 0;
    totalScore = 0;
    quizEnd = false;
    localStorage.setItem("GameComplete", false);
    localStorage.setItem("QuizScore", 0);
    initialCounterValue = quizTime;
    setTimer(initialCounterValue);
    startTimer();
    renderQA(0);
}

function setTimer(amnt) {
    countdown = amnt;
    setTimerEl();
}

function pad(numb, len) {
    var s = numb + "";
    while (s.length < len) s = "0" + s;
    return s;
}

function startTimer(iSec = 1) {
    quizTimer = setInterval(function () {
        countdown--;
        setTimerEl();

        if (countdown < 0) {
            timer.textContent = "0:00";
            stopTimer();
            alert("Out of time! You should have worked faster.");
            addScoreToLocalStorage();
            window.location = "./score.html";
        }
    }, iSec * 1000);
}

function setTimerEl() {
    var mins = Math.floor(countdown / 60);
    var secs = Math.floor(countdown - mins * 60);
    timer.textContent = mins + ":" + pad(secs, 2);
}

function stopTimer() {
    clearInterval(quizTimer);
}

function isCorrect() {
    totalScore++;
    isRight.textContent = "Correct!"
    correctAudio.play();
    countdown = initialCounterValue;
}

function isNotCorrect() {
    totalScore--;
    isRight.textContent = "Incorrect!";
    incorrectAudio.play();
    initialCounterValue = countdown;
}

function setNextLink() {
    if (currentQuestion === allQuestions.length) {
        nextQ.textContent = "Go to final score."
        quizEnd = true;
    }
    else {
        nextQ.textContent = "Next question."
    }
}

function nextQuestion() {
    renderQA(currentQuestion);
}

function checkAnswer(userSelected, eventTarget) {
    if (allQuestions[currentQuestion].AnswerIndex === userSelected) {
        isCorrect();
        eventTarget.style.backgroundColor = "green";
    }
    else {
        isNotCorrect();
        eventTarget.style.backgroundColor = "red";
    }
    score.textContent = totalScore;
    currentQuestion++;
    setNextLink();
}

function addScoreToLocalStorage() {
    localStorage.setItem("QuizScore", totalScore);
    localStorage.setItem("GameComplete", true);
}

function renderQA() {
    answerList.innerHTML = "";
    isRight.textContent = "Try your best!"

    var question = allQuestions[currentQuestion];
    questionNum.textContent = currentQuestion + 1;
    questionEl.textContent = question.Question;
    for (var i = 0; i < question.Options.length; i++) {
        var answerEl = document.createElement("li");
        answerEl.setAttribute("answer-index", i)
        answerList.appendChild(answerEl);
        var answerBut = document.createElement("button");
        answerBut.textContent = question.Options[i];
        answerEl.appendChild(answerBut);
    }
}

answerList.addEventListener("click", function (event) {
    event.preventDefault();
    if (!optionSelected) {
        if (event.target.matches("button")) {
            stopTimer();
            var index = event.target.parentElement.getAttribute("answer-index");
            checkAnswer(parseInt(index), event.target);
            optionSelected = true;
        }
    }

});

nextQ.addEventListener("click", function (event) {
    event.preventDefault();
    if (quizEnd) {
        addScoreToLocalStorage();
        window.location = "./score.html";
    }
    else {
        if (optionSelected) {
            startTimer();
        }
        optionSelected = false;
        nextQuestion();
    }
});

init();