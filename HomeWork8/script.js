// 1. Напишите цикл for,
// который выводит консоль каждое второе
// число от 0 до 10

 for (i = 0; i <= 10; i++) {
   if (i % 2 === 0) console.log(i);
 }
//______________________________________________
// 2. Напишите цикл for, который выводит в консоль  все числа от 55 до 20
// Дан массив numbers. Вывести в консоль все числа из массива

// const numbers = [3, 5, 11, 2, 8, 1, 6];

// Сформировать новый массив numbers_squared и передать в него все элементы из массива numbers, возведенные в квадрат

const numbers = [3, 5, 11, 2, 8, 1, 6];
numbers_squared = [];
for(i=0; i<numbers.length; i++){
    console.log(numbers[i]);
    const result = Math.pow(numbers[i],2)
    numbers_squared.push(result) 
}
 console.log(numbers_squared);
  for(i = numbers_squared.length -1; i >=0 ; i--){
   // console.log(numbers_squared[i]);
    let number = numbers_squared[i];
    if(number<=55 && number>=20)
    console.log(number);
  }

//  _______________________________

// 3. Создать переменную last_elem и передать 
// в нее последний элемент из сформированного массива 
// numbers_squared (обратиться к элементу массива по индексу)

const last_elem = numbers_squared[numbers_squared.length-1];
console.log(last_elem);

//_____________________________________
// 4.Дан объект user. Используя данные из объекта, 
// сформировать строку в формате: ‘User’s name is <FIRST_NAME> <LAST_NAME>. 
//     He is <AGE> years old’

// const user = {
// first_name: 'Ivan', 
// last_name: 'Ivanov', 
// age: 20, 
// salary: 500
// }

const user = {
     first_name: 'Ivan', 
     last_name: 'Ivanov', 
     age: 20, 
     salary: 500
     }

     console.log("User's name is " + user.first_name+ ' ' +user.last_name+ '. ' + 'He is ' + user.age + ' yers old');





