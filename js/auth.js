
const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth')
const closeAuth = document.querySelector('.close-auth')
const logInForm = document.querySelector('#logInForm')
// const logInForm = document.getElementById('#logInForm')
const inputLogin = document.getElementById('login')
const inputPassword = document.getElementById('password')
const buttonOut = document.querySelector('.button-out')
const userName = document.querySelector('.user-name')

// console.log(buttonOut);
// console.log(userName);



const login = (user) => {
    buttonAuth.style.display = 'none'

    buttonOut.style.display = 'flex'
    userName.style.display = 'flex'

    userName.textContent = user.login
    modalAuth.style.display = 'none'

    // if (userName === null) alert('Вход отменен. Вы не ввели логин')
    // else (userName === 'muillirt') alert('Добро пожаловать!')
}

const logout = () => {
    buttonAuth.style.display = 'flex'

    buttonOut.style.display = 'none'
    userName.style.display = 'none'
    userName.textContent = ''

    localStorage.removeItem('user')
}


buttonAuth.addEventListener('click', () => {
    console.log('click');
})


buttonAuth.addEventListener('click', () => {
    console.dir(modalAuth);
})

buttonOut.addEventListener('click', () => {
    logout()
})


buttonAuth.addEventListener('click', () => {
    modalAuth.style.display = "flex"
})

closeAuth.addEventListener('click', () => {
    modalAuth.style.display = "none"
})


logInForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const user = {
        login: inputLogin.value,
        password: inputPassword.value
    }

    localStorage.setItem('user', JSON.stringify(user))
    login(user);
})

if (localStorage.getItem('user')) {
    login(JSON.parse(localStorage.getItem('user')));
}

// console.log(modalAuth)

// const counter = (a, b) => { - те аргументы, которые принимает ф-я, называются параметрами, а и b называются параметрами функции. И ф-я возвращает сложение этих двух параметров а и b.
//     return a + b
// }

// console.log(counter(2, 3));
// console.log(counter(5, 5));
// console.log(counter(9, 7));



// function sayMeouw() { - обьявляем ф-ю
//     console.log('Meow'); - тело функции, что будет сделано, когда вызовем функцию
// } 

// function sayMeouw() {
//     console.log('Meow');
// } - такой способ обьявления фунции называется function declaration.


// const sayMeouw function () {  
//     console.log('Meow');
// }  - функция, которая не имеет сообственного имени, называется анонимная функцияб такой способ обьявления фунции называется function expression.


// const sayMeouw = () => {
//     console.log('Meow');
// } - Стрелочная ф-я, этот тип по прежнему называется function expresson

// sayMeouw() - вызываем функцию
// sayMeouw()
// sayMeouw()
// sayMeouw()
// sayMeouw()


// -сам обьект, это обычная переменная, которая имеет значением, обьектный тип данных.Обьект служит для хранения информации в структурированом виде

// const obj = {
//     name: "Ольга",
//     age: 32,
//     // sayHello: function () {
//     //     console.log("Привет, меня зовут Ольга"); - вот такие вот ф-и, которые находяться в значениии какого-то свойства, называются методами. Метод это та же самая ф-я, которая находится и пренадлежит обьекту. Метод и функция - это одно и тоже, но метод пренадлежит обьекту. Ну а свойство - это обычная пременная, которая находиться и пренадлежит обьектую. Свойство хранит значение, а метод хранит функцию.
//     // }
// }

// obj.sayHello()



// const arr = [1, 2, 3, 4, 5] - массив - это упорядоченный список данных. В отличии от обьектф, у которого каждое свойство имеет свое значение, то в массиве присутствуют только значения, но также каждое значение имеет порядковый номер, называемый индекс. индекст каждого елемента мфссива начинается с нуля.

// const arr = [1, 2, 3, 4, 5]
// console.log(arr[2]);


// браузерное событие - в браузере происходит довольно много разных событий, это клики по каким - то элементам, это наведение курсора на элемент, это уведение курсора с элемента и каждое из этих событий мы через js можем перехватывать и реагировать на подобное событие.

// Что бы повесить обработчик событий, нам нужно обратиться к элементу и применить к нему метод addEventListener, этот метод принимает два аргумента
