window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        10
    )
});

<<<<<<< HEAD
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
document.getElementById('#close').onclick = function() {
    document.getElementById('.popup').hidden = true;
  }
document.getElementById('#close2').onclick = function() {
    document.getElementById('.popup').hidden = true;
  }
=======
document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});
document.querySelector("#close2").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});
>>>>>>> 46a9df23419a046ac338b8f7c9e605196d879994

document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup2").style.display = "none";
});
document.querySelector("#close2").addEventListener("click", function(){
    document.querySelector(".popup2").style.display = "none";
});


