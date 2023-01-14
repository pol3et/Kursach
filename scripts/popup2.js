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
    setTimeout("showIt()", 60000);
});

function showIt() {
    document.getElementById("popup3").disabled = false;
    document.getElementById("popup3").style.visibility = "visible";
    
  }
 // after 60 seconds

const showStats = e => {
    var cntr = parseInt(localStorage.getItem('eqc'));
    console.log(cntr);
    if(cntr > 0){
        var seqcounter = cntr - 1;
        var mscore = seqcounter*10;
    }
    else{
        var seqcounter = 0;
        var mscore = 0;
    }
    
    var previousScrore = parseInt(localStorage.getItem('score'));
    var currentScore = previousScrore + mscore;
    localStorage.setItem('score', currentScore);
    document.getElementById('s-equation-counter').innerHTML = seqcounter;
    document.getElementById('m-score').innerHTML = mscore; 
    document.getElementById('stat-btn').style.display = 'none';
    document.getElementById('letsgo').style.display = "block";
  }

// var tag = document.getElementById('letsgo');
// var statbtn = document.getElementById('stat-btn');
// statbtn.addEventListener('click', function(){
//     tag.classList.toggle('letsgo');
// });

document.querySelector("#close5").addEventListener("click", function(){
    document.querySelector(".popup5").style.display = "none"; 
    setTimeout("showIt2()", 20000);
});

function showIt2() {
    document.getElementById("popup6").disabled = false;
    document.getElementById("popup6").style.visibility = "visible";

}

const flagpopup = e => {
    document.getElementById("popup5").style.visibility = "visible";
}

// document.getElementById("gamestart").addEventListener("click", function(){
//     document.getElementById("popup5").style.visibility = "visible";
// });



  function showStats2(e) {
    var fscore = localStorage.getItem('fscore');
    console.log(fscore);
    var monc = fscore * 10;
    var previousScrore = parseInt(localStorage.getItem('score'));
    var currentScore = previousScrore + monc;
    localStorage.setItem('score', currentScore);
    document.getElementById("scount").innerHTML = fscore;
    document.getElementById("mounc").innerHTML = monc;
}