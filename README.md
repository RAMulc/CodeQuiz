# UWA_HW04
# 04 Web APIs: Code Quiz



https://ramulc.github.io/UWA_HW04/

An application utilising html in combination with JavaScript to create a simple multiple choice quiz. 

A welcome page opens the application, contains a simple set of instructions and links to the quiz and high score page.

In the quiz, the user is presented with a question and four possible answers, the user selects an option, if correct scores a point, if incorrect loses a point. Additionally the game is timed, counting down whilst the user thinks of the answer. If the question is answered correctly, the time reverts back to the time when the question was started, otherwise if incorrect the countdown continues. 

When the quiz is completed, or times out, the user is requested to enter initials to record their score.

The top 10 high scores are recorded in descending order.



**<u>Core Files:</u>**

**Index.html**

Welcome page with instructions for the use of the quiz, links to start the quiz and a link to the high scores page.

![WelcomeScreen](.\Assets\images\WelcomeScreen.JPG)

**./Assets/html/quiz.html**

html content for the quiz pages, dynamically updated via scipt.js

![SampleQuestion](.\Assets\images\SampleQuestion.JPG)

**./Assets/script/script.js**

Contains the core logic for the quiz questions and answers.



**./Assets/html/score.html**

html content to record user score and top 10 high scores. Dynamically updated via score.js.

The user is prompted to enter their initials at the end of the quiz, for addition into the top 10 scores (should the score be good enough).

![EnterInitials](.\Assets\images\EnterInitials.JPG)

The top 10 scores are maintained within LocalStorage for the application, and may be erased by the user.

![HighScores](.\Assets\images\HighScores.JPG)

**./Assets/script/score.js**

Contains the core logic for the maintaining the scores page.



**./Assets/qa/qa.js**

Contains all the questions, and answers for the multiple choice questions. Read by all the html pages for headers, instructions, quiz time etc.