// On click event on the start button\
var startButton = document.querySelector("#start-timer");
var secondsDisplayed = document.querySelector("#timer");
var answersHtml = document.querySelector("#answers-list");
var questionHtml = document.querySelector("#question");
var nextButton = document.querySelector("#next-button");
var questionNum = 0;
var quizDone = false;
var score = 0;
var secondsLeft = 60;

var questions = [
  {
    text: "What is javascript?",
    answers: ["what", "no clue", "still learning", "everything"],
    rightAnswer: "everything",
  },
  {
    text: "What is css?",
    answers: [
      "no clue",
      "where am i",
      "sir im still learning",
      "its everything",
    ],
    rightAnswer: "its everything",
  },
  {
    text: "What is sshkey?",
    answers: ["whattttt", "no clueeeee", "still learningggg", "everythingggg"],
    rightAnswer: "everythingggg",
  },
  {
    text: "What is a node?",
    answers: ["what", "no clue", "still learning", "everything"],
    rightAnswer: "everything",
  },
  {
    text: "What is an element?",
    answers: ["who", "why", "is what", "element"],
    rightAnswer: "element",
  },
];
//timer function, subtracts time on wrong answer, game ends at 0 setInterval
$(document).ready(function () {
  $("#next-button").on("click", function () {
    renderAnswers();
    //console.log("This Val: ", $(this));
  });
  $("#answer-list");
});

function timer() {
 // console.log("1");
  
  var seconds = setInterval(function () {
    if (secondsLeft === 0) {
      endGame();
    }
    secondsLeft--;
    console.log("Seconds Left: " + secondsLeft);
    secondsDisplayed.innerHTML = secondsLeft;
  }, 1000);
}
function displayQuestions() {
  var currentQuestion = questionsArray[currentQuestionIndex];
  startButton.remove();
  testscreen.innerHTML = "";
  var newEl = document.createElement("h4");
  newEl.textContent = currentQuestion.question;
  testscreen.append(newEl);
  for (var i = 0; i < currentQuestion.answers.length; i++) {
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
    } else {
      secondsLeft = secondsLeft - 10;
      alert("incorrect");
    }
    console.log(userScore);
  })
}}
startButton.addEventListener("click", function () {
  displayQuestions();
  startTime()
});