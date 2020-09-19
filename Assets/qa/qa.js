// Information about the quiz, read by the welcome page
var quizName = "HTML and JavaScript";
var description = "A simple HTML and JavaScript quiz.";
var instructions = ["Select the correct option to answer each question.",
    "Get an answer correct, score a point.",
    "Get an answer wrong, lose a point.",
    "There is a time limit so don't take too long to answer!"];
var quizTime = 120;

// Questions stored with array of answers, and index of correct answer.
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

var Q5 = {
    Question: "Markup tags tell the web browser",
    Options: ["How to organise the page",
        "How to display the page",
        "How to display message box on page",
        "None of these"],
    AnswerIndex: 1
};

var Q6 = {
    Question: "WWW is based on which model",
    Options: ["Local-server",
        "Client-server",
        "3-tier",
        "None of these"],
    AnswerIndex: 1
};

var Q7 = {
    Question: "A web pages starts with which of the following tags?",
    Options: ["<Body>",
        "<Title>",
        "<HTML>",
        "<Form>"],
    AnswerIndex: 2
};

var Q8 = {
    Question: "Which of the following is a container?",
    Options: ["<SELECT>",
        "<BODY>",
        "<INPUT>",
        "Both <SELECT> and <BODY>"],
    AnswerIndex: 3
};

var Q9 = {
    Question: "From which tag does the descriptive list start?",
    Options: ["<LL>",
        "<DD>",
        "<DL>",
        "<DS>"],
    AnswerIndex: 2
};

var Q10 = {
    Question: "<Base> tag is designed to appear only between",
    Options: ["<HEAD>",
        "<TITLE>",
        "<BODY>",
        "<FORM>"],
    AnswerIndex: 0
};

var Q11 = {
    Question: "Inside which HTML element do we put JavaScript?",
    Options: ["<scripting>",
        "<script>",
        "<javascript>",
        "<js>"],
    AnswerIndex: 1
};

var Q12 = {
    Question: "Which of the following is not a JavaScript Data Type?",
    Options: ["Undefined",
        "Number",
        "Boolean",
        "Float"],
    AnswerIndex: 3
};

var Q13 = {
    Question: "What is the original name of JavaScript?",
    Options: ["LiveScript",
        "EScript",
        "Mocha",
        "JavaScript"],
    AnswerIndex: 2
};

var Q14 = {
    Question: "Which of these is not a looping structures in JavaScript?",
    Options: ["for",
        "while",
        "forwhich",
        "dowhile"],
    AnswerIndex: 2
};

var Q15 = {
    Question: "Javascript string using double quotes is the same as a string using single quotes?",
    Options: ["True",
        "I do not know",
        "False",
        "All of the above"],
    AnswerIndex: 0
};

var Q16 = {
    Question: "Which of the following method checks if its argument is not a number?",
    Options: ["isNaN()",
        "nonNaN()",
        "NaN()",
        "None of the above"],
    AnswerIndex: 0
};

var Q17 = {
    Question: "JavaScript can be written ........",
    Options: ["directly into JS file and included in the HTML",
        "directly on the server page",
        "directly into HTML pages",
        "directly into the css file"],
    AnswerIndex: 0
};

var Q18 = {
    Question: "Which of the following is not a property of the screen object in JavaScript?",
    Options: ["AvailHeight",
        "ColorsDepth",
        "AvailWidth",
        "ColorDepth"],
    AnswerIndex: 1
};

var Q19 = {
    Question: "What are the types of Pop up boxes available in JavaScript?",
    Options: ["Alert",
        "Prompt",
        "Confirm",
        "All of the above"],
    AnswerIndex: 3
};

var Q20 = {
    Question: "Would you do this quiz again?",
    Options: ["Yes",
        "No",
        "Maybe",
        "Ummmm"],
    AnswerIndex: 0
};

// All questions stored as an array 
var allQuestions = [Q0, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19, Q20];
