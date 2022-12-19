
const MyAccount = e => {
    var name = JSON.parse(localStorage.getItem('uname')) || 'Гость';
    var score = JSON.parse(localStorage.getItem('score')) || 0;

    document.getElementById('uname').innerHTML = name;
    document.getElementById('score-count').innerHTML = score;
}
