var timeEl = document.querySelector("time");
var mainEl = document.getElementById("main");
var startButton = document.getElementById("startButton");
var timer = document.getElementById("remaining-time");
var responses = document.getElementById("answers");
var testscreen = document.getElementById("quiz-screen");
var results = document.getElementById("highscore");

var questionsArray = [{
  question: "Commonly used data types don't include:",
  answers: ["Strings", "booleans", "alerts", "alerts"],
  rightAnswer: "Strings",
},
{
  question: "the condition in an If/else statement is enclose within",
  answers: ["quotes", "parentheses", "curly brackets", "square bracket"],
  rightAnswer: "Curly brackets",
}, {
  question: "Arrays in Javascript can be use to store",
  answers: ["numbers and strings", "other array", "booleans", "all above"],
  rightAnswer: "all above",
}, {
  question: "string values must be enclosed within -----------when being assigned to variables.",
  answers: ["commas", "curly braces", "quotes", "parentheses"],
  rightAnswer: "quotes",
}, {
  question: "a very useful tool used during development and debugging for printing content to the debuger is",
  answers: ["Javascript", "terminal/bash", "for loops", "console log"],
  rightAnswer: "console log",
}];
console.log(timer)

var currentQuestionIndex = 0;
var userScore = 0;
var secondsLeft = "80";

function displayResult(){
  testscreen.innerHTML = "";
  var newEl = document.createElement("h4");
  newEl.textContent = "You finished with " + userScore + " correct!";
  testscreen.append(newEl);

  var restart = document.createElement("button");
  restart.textContent = "Restart?";
  testscreen.append(restart);
  restart.addEventListener("click", function (event) {
    currentQuestionIndex = 0;
    secondsLeft = 80;
    console.log(event.target);
    displayQuestions();

})
}

function startTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;

    timer.textContent = secondsLeft + " seconds left";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      testscreen.style = "display: none";
    }
  }, 1000);
}
;
function displayQuestions() {
  var currentQuestion = questionsArray[currentQuestionIndex];
  startButton.remove();
  testscreen.innerHTML = "";
  var newEl = document.createElement("h4");
  newEl.textContent = currentQuestion.question;
  testscreen.append(newEl);
  var i = 0;
  for (i = 0; i < currentQuestion.answers.length; i++) {
    var answersElement = document.createElement("button");

  answersElement.setAttribute("class", "answers-i");
  answersElement.setAttribute("class", "button btn-primary m-5 rounded-pill");
  answersElement.setAttribute("data-index", i);
  var quizAnswers = currentQuestion.answers[i];
  answersElement.textContent = quizAnswers;
  testscreen.append(answersElement);
  answersElement.addEventListener("click", function (event) {
    currentQuestionIndex++;
    console.log(event.target);
    displayQuestions();
    var userchoice = event.target.textContent;
    if (userchoice === currentQuestion.rightAnswer) {

      alert("correct");
      userScore++;
  results.textContent = "Score: " + userScore;
  testscreen.append(results);
    } else {
      secondsLeft = secondsLeft - 10;
      alert("incorrect");
    }
    console.log(userScore);
  })
}
// if(i===currentQuestionIndex){
// var resultEl = document.createElement("h4");
//   resultEl.textContent = "Nice, you got " + userScore + " correct";
//   testscreen.append(resultEl);
// }
if(currentQuestionIndex===questionsArray.length-1){
  displayResult();

}

}
startButton.addEventListener("click", function () {
  displayQuestions();
  startTime()
});