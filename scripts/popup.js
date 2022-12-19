window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        10
    )
});

window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup4").style.display = "block";
        },
        10
    )
});

document.querySelector("#close4").addEventListener("click", function(){
    document.querySelector(".popup4").style.display = "none"; 
    setTimeout("showIt()", 20000);
});
document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});
document.querySelector("#close2").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});

function showIt() {
    document.getElementById("popup3").style.visibility = "visible";
  }
 // after 60 seconds

document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup2").style.display = "none";
});
document.querySelector("#close2").addEventListener("click", function(){
    document.querySelector(".popup2").style.display = "none";
});

const showStats = e => {
    var cntr = localStorage.getItem('eqc');
    console.log(cntr);
    var seqcounter = cntr - 1;
    var mscore = seqcounter*10;
    var previousScrore = localStorage.getItem('score');
    var currentScore = previousScrore + mscore;
    localStorage.setItem('score', currentScore);
    document.getElementById('s-equation-counter').innerHTML = seqcounter;
    document.getElementById('m-score').innerHTML = mscore; 
  }
var cntr = localStorage.getItem('eqc');
console.log(cntr);
var seqcounter = cntr - 1;
var mscore = seqcounter*10;
var previousScrore = localStorage.getItem('score');
var currentScore = previousScrore + mscore;
localStorage.setItem('score', currentScore);
document.getElementById('s-equation-counter').innerHTML = seqcounter;
document.getElementById('m-score').innerHTML = mscore;

