
const MyAccount = e => {
    var uname = localStorage.getItem('uname');
    var score = localStorage.getItem('score');

    document.getElementById('uname').innerHTML = uname;
    document.getElementById('score-count').innerHTML = score;
}
