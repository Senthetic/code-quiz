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
function renderAnswers() {
  answersHtml.innerHTML = "";
  if (quizDone) {
    endGame();
  } else {
    questionHtml.innerHTML = questions[questionNum].text;
    for (var i = 0; i < questions[questionNum].answers.length; i++) {
     // console.log("Length" + questions[questionNum].answers.length);

      var currentAnswer = questions[questionNum].answers[i];
      //console.log("CurrentAnswer " + questions[questionNum].answers[i]);

      var answerButton = document.createElement("button");
      answerButton.textContent = currentAnswer;
      answerButton.setAttribute("data-index", i);
      //answerButton.setAttribute("class", )    styling later
      answersHtml.appendChild(answerButton);
      answerButton.addEventListener("click", function () {
        checkAnswer(this.innerHTML);
      });
    }
    
    if (questionNum === questions.length) {
      quizDone = true;
    }
  }
}
function checkAnswer(choice) {
    console.log(choice + "---" + questions[questionNum].rightAnswer);
    if(choice===questions[questionNum].rightAnswer)
    {
        score +=100;

        console.log(score);
        questionNum++;
        renderAnswers()
    }
    else{
        questionNum++;

        renderAnswers();
        secondsLeft -= 10;


    }
}
function endGame() {

    //push onto array everytime new score/initial
}

//array of questions, as well as counters for right and wrong answers

//display questions method

//saving initials and score function

startButton.addEventListener("click", timer);
// renderAnswers();
//nextButton.addEventListener("click", renderAnswers);

//     timer();

//    function renderTodos() {
//     // Clear todoList element and update todoCountSpan
//     todoList.innerHTML = "";
//     todoCountSpan.textContent = todos.length;

//     // Render a new li for each todo
//     for (var i = 0; i < todos.length; i++) {
//       var todo = todos[i];

//       var li = document.createElement("li");
//       li.textContent = todo;
//       li.setAttribute("data-index", i);

//       var button = document.createElement("button");
//       button.textContent = "Complete";

//       li.appendChild(button);
//       todoList.appendChild(li);
//     }
//   }
