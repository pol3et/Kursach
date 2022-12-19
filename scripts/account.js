const MyAccount = e => {
    var formData = JSON.parse(localStorage.getItem('formData')) || [];
    var name = formData[0].value;
    var score = formData[3].value;
    console.log(score);

    document.getElementById('username').innerHTML = name;
    document.getElementById('score-count').innerHTML = score;
}
