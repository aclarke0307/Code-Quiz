// variables to to ids in html
var startTimeEl = document.querySelector("#startTime");
var beginEl = document.querySelector("#begin");
var questionsEl = document.querySelector("#questions");
var containerEl = document.querySelector("#container");
var score = 0;
var optionsIndex= 0;
//var for an array for options
var options = [
    {
        title: "Commonly used data types DO NOT include",
        choices:["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
    },
    {
        title: "The condition in an if/else statement is enclosed within ___.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses",
    },
    {
        title: "Arrays in JavaScrtip can be used to store ___.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title:"String values must be enclosed within ___ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "qoutes"
    },
    {
        title: "A very useful tool used during development and debugging for printing context to the debugger is:",
        choices: ["Javascript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    },
];
//timed section

var totalSeconds = 80;
var penalty = 10;
var holdInterval = 0;
var olNew = document.createElement("ol");

beginEl.addEventListener("click", function(){
    if(holdInterval === 0){
        holdInterval = setInterval(function(){
            totalSeconds--;
            startTimeEl.textContent = "Time:" + totalSeconds;
        if(totalSeconds <= 0){
            clearInterval(holdInterval);
            allDone();
            startTimeEl.textContent = "Time's up";
        }
        }, 1000);
    }
    render(optionsIndex);
});