var card = $("#quiz-area");

// Question set
var questions = [
  {
    question: "Who was the first president of United States?",
    answers: ["Grover Gleveland", "William Henry Harrison.", "George Washington", "Donald Trump"],
    correctAnswer: "George Washington"
  },
  {
    question: "Which of these is NOT a one of the first thirteen states of United States?",
    answers: ["Connecticut", "Delaware", "MaryLand", "California"],
    answers: ["Connecticut", "Delaware", "MaryLand", "California"],
    correctAnswer: "California"
  },
  {
    question: "Which of the following is not part of the 90's pop music?",
    answers: ["Madonna", "Spice Girls", "Back Street Boys", "Justin Bieber"],
    correctAnswer: "Justin Bieber"
  },
  {
    question: "Which of the following is not part of the 50 States'?",
    answers: ["New York", "Iowa", "Wisconsin", "District of Columbia"],
    correctAnswer: "District of Columbia"
  },
  {
    question: "Which of the following African Countries is not part of East Africa?",
    answers: ["Uganda", "Kenya", "Rwanda", "South Africa"],
    correctAnswer: "South Africa"
  },
  {
    question:
      "Which of the following Cities has the largest Metropolitan area in North America?'",
    answers: ["New York", "Los Angeles", "Mexico City", "Chicago"],
    correctAnswer: "Mexico City"
  },
  {
    question: "Which of the following is not the richest man in the World?",
    answers: ["Donald Trump", "Jeff Bezos", "Bill Gates", "Warren Buffett"],
    correctAnswer: "Donald Trump"
  },
  {
    question: "Which State in the United States has the most NBA teams?",
    answers: ["Colorado", "Florida", "California", "New York"],
    correctAnswer: "Califorina"
  }
];

// Variable that will hold the setInterval
var timer;

var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend(
      "<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>"
    );

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    card.append("<button id='done'>Done</button>");
  },

  done: function() {
    var inputs = card.children("input:checked");
    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === questions[i].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    }
    this.result();
  },

  result: function() {
    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    card.html("<h2>All Done!</h2>");
    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});

$(document).on("click", "#done", function() {
  game.done();
});
