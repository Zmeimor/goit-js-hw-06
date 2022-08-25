// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const formInput = document.querySelector(".login-form");

formInput.addEventListener('submit', onFormInputSubmit);


function onFormInputSubmit (event) {
    event.preventDefault();
    const isValidForm = [...event.target.elements]
    .filter((elements) => elements.tagName === "INPUT")
    .some((elements)=> elements.value === "");
      if (isValidForm) {
        alert("Усі поля мають бути заповнені.")
        return
      }
        const {
            elements: {email, password},
          } = event.currentTarget;

        const resultForm = {email: email.value, password: password.value};

console.log(resultForm);

formInput.reset();
return;
  }; 


  window.addEventListener("keydown", ev => {

    if (ev.key === 'Escape') {

        formInput.reset();
}
});



const input = document.querySelector