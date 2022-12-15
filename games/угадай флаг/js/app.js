// Player class for storing different parameters related directly with player
class player {
    constructor(score,att){
        this.score = score;
        this.attempt = att;
        this.playerMode;
    }
}

let quesArr; // Stores the 4 options to be displayed during a question
let rightAnswer; // Stores the right answer to current question
let p1 = new player(0,0); // New player initialisation

// Data with country name and their image URL
let dataArray = [
{
    name: "Аргентина",
    src: "assets/data/argentina.png" 
},
{
    name: "Армения",
    src: "assets/data/armenia.png" 
},
{
    name: "Австралия",
    src: "assets/data/australia.png" 
},
{
    name: "Австрия",
    src: "assets/data/austria.png"  
},
{
    name: "Беларусь",
    src: "assets/data/belarus.png" 
},
{
    name: "Бельгия",
    src: "assets/data/belgium.png" 
},
{
    name: "Бразилия",
    src: "assets/data/brazil.png" 
},
{
    name: "Япония",
    src: "assets/data/japan.png" 
},
{
    name: "Китай",
    src: "assets/data/peoples_republic_of_china.png" 
},
{
    name: "Польша",
    src: "assets/data/poland.png" 
},
{
    name: "Россия",
    src: "assets/data/russia.png" 
},
{
    name: "Швейцария",
    src: "assets/data/switzerland.png" 
},
{
    name: "Украина",
    src: "assets/data/ukraine.png" 
},
{
    name: "Великобритания",
    src: "assets/data/united_kingdom.png" 
},
{
    name: "США",
    src: "assets/data/united_states.png" 
},
];

// A class that contains all the functions related to UI updation
class UiUpdate {
    constructor() {
    }
    // Function to hide the main menu (game selection page)
    hideMenu() {
        document.querySelector(".menu").style.display = "none";
    }
    // Function to display the game, when a user selects the game mode.
    viewGame() {
        document.querySelector(".game").style.display = "block";
    }
    // Function to hide the game when game is over
    hideGame() {
        document.querySelector(".game").style.display = "none";
    }
    // Function to display the content to be displayed when game is over
    viewEnd() {
        document.querySelector(".end").style.display = "block";
    }
    // Function to increment and update attempts for game mode "Spray and prey"
    updateAttempts() {
        p1.attempt+=1;
        document.querySelector(".attempts").innerText = p1.attempt;
    }
    // Function to update the game mode in game window when player selects a specific game mode
    updateGameMode(arg) {
        document.querySelector(".game-mode").innerText = arg;
    }
    // Function to remove attempts section for One shot One kill game mode
    removeAttempts() {
        document.querySelectorAll(".score-bar span")[3].innerHTML = "";
    }
    // Function to update the flag in game question
    updateFlag(src){
        document.querySelector(".flag").src = src;
    }
    // Function to update 4 available options in question
    updateOptions(quesArr){ 
        let optionArr = document.querySelectorAll(".answer");
        for(let i=0;i<=3;i++){
            optionArr[i].innerText = quesArr[i].name;
        }
    }
    // Function to increment score and update it in HTML.
    updateScore(){
        p1.score+=1;
        document.querySelector(".score").innerText = p1.score;
    }
    // Function to Update score and game mode on end page
    updateEndPage(){
        document.querySelector(".fscore").innerText = p1.score;
        document.querySelector(".fgame-mode").innerText = p1.playerMode;
    }
}
// UI update object
let uiUpdate = new UiUpdate();


// Function which shuffles the array it receives. doesn't return the array
let shuffleArray = function(arr){
    let n = arr.length-1,shuffleIndex,temp;
    while(n>=1){
        shuffleIndex = Math.floor(Math.random() * n);
        temp = arr[n];
        arr[n] = arr[shuffleIndex];
        arr[shuffleIndex] = temp;
        n-=1;
    }
    
} 

// Function which generates a question and their 4 options
let questionArrayGenerator = function(arr,correctIndex){
    let quesArr = [], count = 0, tempIndex;
    while(count<=2){
        tempIndex = Math.floor(Math.random()*arr.length);
        
        if(correctIndex!=tempIndex){
            quesArr.push(arr[tempIndex]);
            count+=1;
        }
    }
    
    quesArr.push(arr[correctIndex]);
    shuffleArray(quesArr);
    return quesArr;
}

// Function that handles what happens when game ends
let endGame = function(){
    uiUpdate.hideGame();
    uiUpdate.viewEnd();
    uiUpdate.updateEndPage();
}

// Function which sets next question 
let questionSetter = function(n){
    for(obj of document.querySelectorAll(".answer")){
        obj.style.border = "none";
    }
    if(n<0){
            removeEventListener();        
        endGame();
    }
    else{
        quesArr = questionArrayGenerator(dataArray,n);
        rightAnswer = dataArray[n];
        uiUpdate.updateFlag(rightAnswer.src);
        uiUpdate.updateOptions(quesArr);
        setEventListener();
    } 
    

}

let questionN = dataArray.length-1;// to keep track of last element, questions start from last element

// function to check the answer selected by user.
let checkAnswer = function(){
    removeEventListener();
    let option = this.innerText;
            if(option === rightAnswer.name){
                this.style.border = "4px solid #29EE3C";
                uiUpdate.updateScore();
                if(p1.playerMode==="Всё и сразу"){
                    setTimeout(function(){
                        questionN -=1;
                        questionSetter(questionN);
                    },1000);
                }
            }
            else if(option!=rightAnswer.name){
                this.style.border = "4px solid #FF2727";
                for(right of document.querySelectorAll(".answer")){
                    if(right.innerText === rightAnswer.name){
                        right.style.border = "4px solid #29EE3C";
                    }
                }
                if(p1.playerMode==="Режим обучения"){
                    uiUpdate.updateAttempts();
                }
                else{
                    setTimeout(function(){
                        endGame();
                    },1000);
                }
                
            }
            
            if(p1.playerMode==="Режим обучения"){
                setTimeout(function(){
                    questionN -=1;
                    questionSetter(questionN);
                },1000);
            }
            
}

// function to set click events on options
let setEventListener = function(){
    for(btn of document.querySelectorAll(".answer")){
        btn.addEventListener("click",checkAnswer); 
    }
}

// function to remove events on options
let removeEventListener = function(){
    for(btn of document.querySelectorAll(".answer")){
        btn.removeEventListener("click",checkAnswer); 
    }
}



// initiate spray and prey game mode
let sprayAndPrey = function(){
    questionSetter(dataArray.length-1);
}

// inititate one shot game mode
let oneShot = function(){
    uiUpdate.removeAttempts();
    questionSetter(dataArray.length-1);

}

// game initialiser and Game mode selector according to users feedback
let gameSelection = function(arg){ 
    let targetText = arg.currentTarget.querySelector("h2").innerText;
    p1.playerMode = targetText;
    uiUpdate.viewGame();
    uiUpdate.updateGameMode(targetText);
    uiUpdate.hideMenu();
    shuffleArray(dataArray);
    if(targetText==="Режим обучения"){
        sprayAndPrey();
    }
    else{
        oneShot();
    }
}





var gameMode =  document.querySelectorAll(".game-select"); // stores the instance of both the game modes to set a click event on both of them.

for(game of gameMode){
    game.addEventListener("click",function(arg){
        gameSelection(arg); // adding an event to initiate the game when mode is selected.
    });
}


