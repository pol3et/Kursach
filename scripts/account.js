
const MyAccount = e => {
    var uname = localStorage.getItem('uname');
    var score = parseInt(localStorage.getItem('score'));

    document.getElementById('uname').innerHTML = uname;
    document.getElementById('score-count').innerHTML = score;
}
var score = localStorage.getItem('score');
document.getElementById('score-count').innerHTML = uname;

var uname = localStorage.getItem('uname');
document.getElementById('uname').innerHTML = uname;

function updateScore() {
    var score = localStorage.getItem('score');
    document.getElementById('score-count').innerHTML = score;
}

function updateName() {
    var uname = localStorage.getItem('uname');
    document.getElementById('uname').innerHTML = uname;
}


