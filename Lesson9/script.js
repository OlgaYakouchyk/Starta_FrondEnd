// function greetings () {
//     console.log('Hello my friend');
// }
// greetings()

// function sumNumbers(a, b) {
//     console.log(a+b);
// }

// sumNumbers(4,8)

// function fn() {
//     const result = prompt ('Enter your number')
//     console.log(Math.pow(result,2));
// }
// fn()

// Объявить функцию, которая считывает значение через prompt
// и выводит “ДА” если число четное и “НЕТ” в ином случае.

// function fn() {
//     const result = prompt('Enter your number')
//     if (result % 2 === 0) {
//             console.log('Yes', result);
//     }
//     else {
//         console.log('No', result);
//     }
// }
// fn()

// Объявить функцию, что принимает ПАРАМЕТРОМ 2
// аргумента и выводит в консоль их сумму

// function sameSum(a, f) {
//   console.log(a + f);
// }
// sameSum(4, 5);

// function infoAbutMyCat(nameOfIt, age, paws, color, ears, tail) {
//     console.log(`Hello, i gonna tell you about my cst ${nameOfIt}, it is ${age} yesr old, she has ${color}, and ${paws}, she has mast buatiful  ${tail} `);

// }

// infoAbutMyCat('Lily', 4, 4, 'white', 'blue', 'orange')

// function powr(x, y) {
//   console.log(Math.pow(x,y));
// }
// powr(3, 3);

// Создать функцию, которая в качестве аргументов
//  получает два числа и выводит в консоль наибольшее.

//  function getMax(a, b) {
//   if (a > b) {
//      console.log("Max is: " + a);
//    } else {
//      console.log("Max is: " + b);
//    }
//  }
//  getMax(56, 87);

// // Необходимо объявить функцию, которая принимает аргументом массив и обрабатывает через цикл данный массив
// //  по условию: если 4 элемент массива = 5, то вывести все элементы массива в консоль, если нет, то написать «ошибка»

// const sameArr  = [23,67,76,87,5, 'hi', 'my', 'name', 'lastName'];

// function getArr(arr) {
//     if(arr[4]===5){

//     for(i=0; i<arr.length; i++){
//         console.log(arr[i]);

//     }

// }else{
//     console.log('ошибка');
// }
// }
// getArr(sameArr);

// Написать функцию, что принимает аргументом массив из 5 чисел,
// необходимо вывести в консоль сумму все чисел массива.

// const newArr = [2,6,7,4,8];

// function getSumArr(arr) {
//     let counter = 0
//     for (i = 0; i <arr.length; i++){
//             counter += arr[i];
//     }
//         //return counter;
//         console.log('sum is ' + counter);
//     }

// //console.log(getSumArr(newArr));
// getSumArr(newArr)

function reternPowr(x, y) {
  const result = Math.pow(x, y);
  return result;
}
console.log(reternPowr(6, 3));
