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

  const showStats2 = e => {
    var fscore = localStorage.getItem('fscore');
    console.log(fscore);
    var monc = fscore * 10;
    var previousScrore = localStorage.getItem('score');
    var currentScore = previousScrore + monc+70;
    localStorage.setItem('score', currentScore);
    document.getElementById("scount").innerHTML = fscore;
    document.getElementById("mounc").innerHTML = monc; 
  }