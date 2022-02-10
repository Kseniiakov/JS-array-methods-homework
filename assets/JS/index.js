// 1. Массив чисел от 5 до 10 добавить в конец другого массива

// const oldArray = [1,2,3,4];

// const newArray = [5,6,7,8,9,10];

// oldArray.push(newArray);

// console.log(oldArray);

// var 2

// const oldArray = [1,2,3,4];

// const newArray = [5,6,7,8,9,10];

// const resultArray = oldArray.concat(newArray);

// console.log(resultArray);

// 2. Дан массив чисел [4, 9, 16, 25, 36, 49]. 
// На его основе создать массив с квадратными корнями чисел (Math.sqrt)

// const arr = [4, 9, 16, 25, 36, 49];

// const arrSqrt = arr.map(Math.sqrt);

// console.log(arrSqrt);

// 3. Дан массив чисел 1...20. Вычислить сумму нечетных чисел массива

// const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// const filtered = arr.filter((num) => {
//     return num % 2 !== 0;
//  });

// const result = filtered.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);

// console.log(result);

// 4. * Дан массив чисел 1 до 10. Удалить у него каждое нечетное значение

// const arr = [1,2,3,4,5,6,7,8,9,10];

// arr.forEach((value,index,array) => {
//     if(value % 2 !== 0) {
//         array.splice(index, 1);
//     }
// });

// console.log(arr);

// 5. * Обычным циклом создать массив строк от "user1" до "user15".
// Удалить все ячейки содержащие на конце строки символы 2, 3, 4.
// Пример (подчёркнутые должны быть удалены)
// [ "user1", _"user2"_, _"user3"_, _"user4"_, "user5", ..., _"user12"_ ]

const users = [];

for (i = 1; i <= 15; i++) {
    let user = `user${i}`;
    users.push(user);
}

// console.log(users);

/////////////////////////////////////////////////
//var 2

// users.forEach((value, index, array) => {

//     let valueArr = Array.from(value);

//     if (valueArr.includes('2')) {
//         array.splice(index, 1);
//     }

//     if (valueArr.includes('4')) {
//         array.splice(index, 1);
//     }
// });

// users.forEach((value, index, array) => {

//     let valueArr = Array.from(value);

//     if (valueArr.includes('3')) {
//         array.splice(index, 1);
//     }
// });

console.log(users);