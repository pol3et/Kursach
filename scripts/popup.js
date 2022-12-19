window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        10
    )
});

document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});
document.querySelector("#close2").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});

document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup2").style.display = "none";
});
document.querySelector("#close2").addEventListener("click", function(){
    document.querySelector(".popup2").style.display = "none";
});


