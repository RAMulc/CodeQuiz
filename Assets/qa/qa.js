var quizName = "HTML";
var description = "A simple HTML quiz.";
var instructions = ["Select the correct option to answer each question.",
    "Get an answer correct, score a point.",
    "Get an answer wrong, lose a point.",
    "There is a time limit so don't take too long to answer!"];
var quizTime = 12;

var Q0 = {
    Question: "HTML stands for?",
    Options: ["Hyper Text Markup Language",
        "High Text Markup Language",
        "Hyper Tabular Markup Language",
        "None of these"],
    AnswerIndex: 0
};

var Q1 = {
    Question: "Which of the following tag is used to mark the begining of paragraph?",
    Options: ["<TD>",
        "<br>",
        "<p>",
        "<TR>"],
    AnswerIndex: 2
};

var Q2 = {
    Question: "HTML is what type of language?",
    Options: ["Scripting Language",
        "Markup Language",
        "Programming Language",
        "Network Protocol"],
    AnswerIndex: 1
};

var Q3 = {
    Question: "The primary header is denoted by:",
    Options: ["h1",
        "h2",
        "h3",
        "h4"],
    AnswerIndex: 0
};

var Q4 = {
    Question: "HTML uses:",
    Options: ["User defined tags",
        "Pre-specified tags",
        "Fixed tags defined by the language",
        "Tags only for linking"],
    AnswerIndex: 2
};

var allQuestions = [Q0, Q1, Q2, Q3, Q4];
