
const MyAccount = e => {
    var uname = localStorage.getItem('uname');
    var score = localStorage.getItem('score');

    document.getElementById('uname').innerHTML = uname;
    document.getElementById('score-count').innerHTML = score;
}
var score = localStorage.getItem('score');
document.getElementById('score-count').innerHTML = uname;

var uname = localStorage.getItem('uname');
document.getElementById('uname').innerHTML = uname;


