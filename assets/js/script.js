//question array
const quizData = [
  {
    question: "What company developed JavaScript?",
    a: "Netscape",
    b: "Amazon",
    c: "Walmart",
    d: "AOL",
    correct: "Netscape",
  },
  {
    question: "What would show up on the screen 9+9+'9'",
    a: "189",
    b: "27",
    c: "9+9+9",
    d: "error message",
    correct: "189",
  },
  {
    question: "What does DOM stand for?",
    a: "That's Vin Diesel form Fast and Furious",
    b: "Dot Object Mapping",
    c: "Document Object Model",
    d: "Dont Operate Machines",
    correct: "Document Object Model",
  },
  {
    question: "How do you tell the number of elements in an Array?",
    a: "SIMPLE!  You count them!",
    b: "You cant, you just guess",
    c: "both a and b",
    d: "use the length property",
    correct: "use the length property",
  },
  {
    question: "What is an Event handler?",
    a: "A person who plans/runs events",
    b: "script that runs when an event occurs",
    c: "neither a or b",
    d: "script that logs events into the console",
    correct: "script that runs when an event occurs",
  },
];

//DOM elements
const quizBox = document.getElementById("quizbox");
const questionEl = document.getElementById("question");
const answer_1 = document.getElementById("answer_1");
const answer_2 = document.getElementById("answer_2");
const answer_3 = document.getElementById("answer_3");
const answer_4 = document.getElementById("answer_4");
const nxtBtn = document.getElementById("nxtbtn");

let currentQuiz = 0;
let score = 0;
let lost = '<div><img src="assets/images/lost.gif"></div>';
let won = '<div><img src="assets/images/won.gif"></div>';

loadQuiz();
//function that loads the questions
function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  answer_1.innerText = currentQuizData.a;
  answer_2.innerText = currentQuizData.b;
  answer_3.innerText = currentQuizData.c;
  answer_4.innerText = currentQuizData.d;
}

//next button and victory conditions
nxtBtn.addEventListener("click", () => {
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
    checkAnswer();
    resetBtns();
  } else {
    if (score < 3) {
      quizBox.innerHTML =
        "<h2>The Quiz is Complete, you got " +
        score +
        "/5 Please Try Again!</h2><br>" +
        lost;
    } else {
      quizBox.innerHTML =
        "<h2>The Quiz is Complete, you got " +
        score +
        "/5 correct! Congrats!!</h2><br>" +
        won;
    }
  }
});

//reseting buttons after each question
function resetBtns() {
  answer_1.style.backgroundColor = "transparent";
  answer_1.disabled = false; 
  answer_2.style.backgroundColor = "transparent";
  answer_2.disabled = false;
  answer_3.style.backgroundColor = "transparent";
  answer_3.disabled = false;
  answer_4.style.backgroundColor = "transparent";
  answer_4.disabled = false;
}

//checking for the right answers
function checkAnswer() {
  const currentQuizData = quizData[currentQuiz];
  let correctAnswer = [currentQuizData.correct];

  answer_1.onclick = function () {
    if (currentQuizData.a == correctAnswer) {
      score++;
      answer_1.style.backgroundColor = "green";
      answer_2.disabled=true
      answer_3.disabled=true
      answer_4.disabled=true
    } else {
      score - 1;
      answer_1.style.backgroundColor = "red";
      answer_2.disabled=true
      answer_3.disabled=true
      answer_4.disabled=true
    }
  };

  answer_2.onclick = function () {
    if (currentQuizData.b == correctAnswer) {
      score++;
      answer_2.style.backgroundColor = "green";
      answer_1.disabled = true;
      answer_3.disabled=true
      answer_4.disabled=true
    } else {
      score - 1;
      answer_2.style.backgroundColor = "red";
      answer_1.disabled = true;
      answer_3.disabled=true
      answer_4.disabled=true
    }
  };

  answer_3.onclick = function () {
    if (currentQuizData.c == correctAnswer) {
      score++;
      answer_3.style.backgroundColor = "green";
      answer_2.disabled=true
      answer_1.disabled=true
      answer_4.disabled=true
        } else {
      score - 1;
      answer_3.style.backgroundColor = "red";
      answer_2.disabled=true
      answer_1.disabled=true
      answer_4.disabled=true
    }
  };

  answer_4.onclick = function () {
    if (currentQuizData.d == correctAnswer) {
      score++;
      answer_4.style.backgroundColor = "green";
      answer_2.disabled=true
      answer_3.disabled=true
      answer_1.disabled=true
    } else {
      score - 1;
      answer_4.style.backgroundColor = "red";
      answer_2.disabled=true
      answer_3.disabled=true
      answer_1.disabled=true    }
  };
}
