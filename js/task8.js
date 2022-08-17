// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const formInput = document.querySelector(".login-form");
// const email = document.querySelector(".login-form");


formInput.addEventListener('submit', onFormInputSubmit);


function onFormInputSubmit (event) {
    event.preventDefault();
    console.log(onFormInputSubmit);
    const {email,password} = event.target.elements;
        if (email.value === "" || password.value === "") {
            return alert("Усі поля мають бути заповнені.")
        } 
console.log(`Email: ${email.value}, Password: ${password.value}`)
formInput.reset();
return;
  }  


  window.addEventListener("keydown", ev => {

    if (ev.key === 'Escape') {

        formInput.reset();
}
});