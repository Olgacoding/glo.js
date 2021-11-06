// const array = [11, 55, 78, 99] - элементы массива, теперь нам необходимо перебрать весь этот массив и получить каждый отдельный елемент и вывести в консоль. Для этого будет использовать цикл. Разбираем цикл for

const renderItems = (data) => {
    console.log(data);
}

// const array = [11, 55, 78, 99]
// fetch('./db/partners.json').then((response) => console.log(response))
fetch('https://test-bed06-default-rtdb.firebaseio.com/db/food-band.json')
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);
        renderItems(data)
    })
    // .then(console.log(1))
    // .then(console.log(2))
    // .then(console.log(3))
    // .then(console.log(4))
    // .then(console.log(5))
    .catch((error) => {
        console.log(error);
    })
    // .finally(console.log('finally')) - редко используется



// array.forEach(function (elem, index, array) {
//     console.log(elem);
//     console.log(index);
//     console.log(array);
// })

// array.forEach((elem) => {
//     console.log(elem);
// })

// array.forEach((elem, index) => {
//     console.log(elem);
//     if (index === 3) {
//         console.log(elem);
//         console.log(index);
//     }
// })

// array.forEach((elem, index) => {
//     console.log(elem);
//     if (index < 2) {
//         console.log(elem);
//         console.log(index);
//     }
// })

// array.forEach((elem, index) => {
//     console.log(elem);
//     if (index < 2) {
//         console.log(elem);
//     }
//     // else {
//     //     console.log('не подходит')
//     // }
//     else if (index === 3) {
//         console.log(elem);
//     }
// })



// for (let i = 0; i < array.length; i++) { 
//     console.log(array[i]);
// } {} - тело массива, как и тело функции. () - условия массива

