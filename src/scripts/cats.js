class Cat {
    constructor(name, breed, food, sex, comment) {
        this.name = name;
        this.breed = breed;
        this.food = food;
        this.sex = sex;
        this.comment = comment;
    }
}

function createCat () {
    let catName = document.querySelector('#name').value;
    let catBreed = document.querySelector('#breed').value;
    let catFood = document.querySelector('input[name="food"]:checked').value;
    let catSex = document.querySelector('input[name="sex"]:checked').value;
    let catComment = document.querySelector('#comments').value;

    let cat = new Cat(catName, catBreed, catFood, catSex, catComment);
    console.log(cat);
}

const btn = document.querySelector('#button');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    createCat();
    let form = document.querySelector(".form");

    fetch("https://httpbin.org/post", 
                {
                    method: 'POST',
                    body: new FormData(form)
                })
    .then(response => response.json())
    .then(user => {
      console.log(user);
    })
    .catch((error) => console.log(error));
})