const name = document.getElementById("user_name");
const surname = document.getElementById("fio");
const email = document.getElementById("email");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const btn = document.querySelector("button");
let user;
let errors = [];


function checkValidity(input) {
    let validity = input.validity;
    if (validity.valueMissing) {
        errors.push('Поле ' + input.placeholder + ' не заполнено');
    }
    if (validity.tooShort) {
        errors.push('Пароль слишком короткий');
    }

    if (validity.patternMismatch) {
        errors.push('Неверный формат заполнения поля ' + input.placeholder);
    }
}


document.querySelector(".button").addEventListener("click", function (e) {
    e.preventDefault();
    errors = [];
    let inputs = document.querySelectorAll("input");
    for (let input of inputs) {
        checkValidity(input);
    }
    let errorDiv = document.querySelector('#errorsInfo');
    errorDiv.innerHTML = errors.join('. <br>');
    
user = {
    id: name.value,
    surname: surname.value,
    email: email.value,
    password1: password1.value,
    password2: password2.value,
  };
  fetch(" https://httpbin.org/post", 
{
  method: "POST",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  body: JSON.stringify(user),
})
  .then((response) => response.json())
  .then((user) => {
    console.log(user);
  })
  .catch((error) => console.log(error));
});

