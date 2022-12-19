const signUp = e => {
  let name = document.getElementById('name').value,
      login = document.getElementById('login').value,
      password = document.getElementById('password').value;
  let score = 0;

  let formData = JSON.parse(localStorage.getItem('formData')) || [];

  let exist = formData.length && 
      JSON.parse(localStorage.getItem('formData')).some(data => 
          data.name.toLowerCase() == name.toLowerCase() && 
          data.login.toLowerCase() == login.toLowerCase()
      );

  if(!exist){
      formData.push({ name, login, password });
      localStorage.setItem('formData', JSON.stringify(formData));
      localStorage.setItem('score', score);
      localStorage.setItem('uname', name);
      document.querySelector('form').reset();
      document.getElementById('name').focus();
      alert("Ура, твой аккаунт зарегистрирован!\n\nВернись на форму авторизации и войди в свой аккаунт.");
  }
  else{
      alert("Ууууууупс.....\nКажется, такой аккаунт уже существует!\n\nПопробуй войти в свой аккаунт или зарегистрируй новый.");
  }
  e.preventDefault();
}

function signIn(e) {
    let login = document.getElementById('login').value, password = document.getElementById('password').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.login.toLowerCase() == login && data.password.toLowerCase() == password);
    if(!exist){
        alert("Барсик не знает такого человека :(\n\nПопробуй еще раз или зарегистрируй новый аккаунт.");
    }
    else{
        location.href = "tim_message1.html";
    }
    e.preventDefault();
  }