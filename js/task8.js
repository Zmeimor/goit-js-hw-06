// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const formInput = document.querySelector(".login-form");
// const email = document.querySelector(".login-form");
const inputLogin = formInput.querySelector("[name='email']");
const inputPassword = formInput.querySelector("[name='password']");

formInput.addEventListener('submit', onFormInputSubmit);
// const resultValues = {
//     email: null,
//     password: null,
//   };

function onFormInputSubmit (event) {
    event.preventDefault();
    // console.log(onFormInputSubmit);
            if (inputLogin.value === "" || inputPassword.value === "") {
            return alert("Усі поля мають бути заповнені.")
        } 
        // resultValues = event.target.elements;
        const {
            elements: {email, password}
          } = event.currentTarget;
//  resultValues.email = inputLogin.value;
// resultValues.password = inputPassword.value;
        console.log(email.value, password.value);      
// console.log({email,password})
formInput.reset();
return;
  }  


  window.addEventListener("keydown", ev => {

    if (ev.key === 'Escape') {

        formInput.reset();
}
});