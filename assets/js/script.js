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
var olNewEl = document.createElement("ol");

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
// questions and options function
function render(optionsIndex) {
    olNewEl.innerHTML = "";
    questionsEl.innerHTML = "";
    //for loop
    for (var i = 0; i < options.length; i++) {
        var clickerQuestion = options[optionsIndex].title;
        var clickerChoices = options[optionsIndex].choices;
        questionsEl.textContent = clickerQuestion;
    }

    clickerChoices.forEach(function(newItem){
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsEl.appendChild(olNewEl);
        olNewEl.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
};
// Event to compare correct or incorrect choices
function compare(event) {
    var element = event.target

    if (element.matches("li")){
var newDiv = document.createElement("div");
newDiv.setAttribute("id", "newDiv");
     if(element.textContent == options[optionsIndex].answer) {
         score++;
         newDiv.textContent = "Correct!!";
     }else {
         totalSeconds =totalSeconds - penalty;
         newDiv.textContent = "Wrong..The correct answer is" + " " + options[optionsIndex].answer;

     }
    }
    optionsIndex++;
    if(optionsIndex >= options.length) {
        allDone();
        newDiv.textContent ="End of quiz! You got" + " " + score + "/" + options.length + "correct!";
    }else {
        render(optionsIndex);
    }
    questionsEl.appendChild(newDiv);
};
//last page append
function allDone() {
    questionsEl.innerHTML = "";
    startTimeEl.innerHTML = "";

    var newHead = document.createElement("h1");
    newHead.setAttribute("id", "newHead");
    newHead.textContent ="Finished!"
    
    questionsEl.appendChild(newHead);

    var newP = document.createElement("p");
    newP.setAttribute("id", "newP");

    questionsEl.appendChild(newP);

    // intials
    var newLabel = document.createElement("label");
    newLabel.setAttribute("id", "newLabel");
    newLabel.textContent = "Enter Initials";

    questionsEl.appendChild(newLabel);
    // input for initials
    var newInput = document.createElement("input");
    newInput.setAttribute("type", "text");
    newInput.setAttribute("id", "initials");
    newInput.textContent = "";

    questionsEl.appendChild(newInput);

    //submit button
    var newSubmit = document.createElement("button");
    newSubmit.setAttribute("type", "submit");
    newSubmit.setAttribute("id", "submit");
    newSubmit.textContent ="Submit";

    questionsEl.appendChild(newSubmit);
   
    //go back button
    var backbutton = document.createElement("button")
    backbutton.setAttribute("id", "back");
    backbutton.textContent ="Try Again";

    questionsEl.appendChild(backbutton);
    //backbutton listener to begin page 
    backbutton.addEventListener("click", function(){
        window.location.replace("./index.html");
    });

    newSubmit.addEventListener("click", function() {
        var initials = newInput.value;
        if (initials === null){
            alert("Enter initals!!");
        }else {
            var scoreFinal = {
                initials: initials,
            }
            console.log(scoreFinal);
            var scoreAll = localStorage.getItem("scoreAll");
            if(scoreAll===null){
                scoreAll =[];
            }else{
                scoreAll =JSON.parse(scoreAll);
            }
            scoreAll.push(scoreFinal);
            var restart =JSON.stringify(scoreAll);
            localStorage.setItem("scoreAll", restart);
        }
    })
};