// 1. Написать цикл, который создает множество параграфов
// с каждым десятым числом в промежутке от 100 до 50
// (т.е. 100, 90, 80, 70, 60, 50).
// Добавить созданные параграфы в div с классом numbers.

// const numbers = document.querySelector(".numbers"); //получаем элемент
// let numberOf = 100; //начальное число

// while (numberOf >= 50) { //пока число больше либо равно 50
//   const paragrhp = document.createElement("p"); // создаем новый элемет
//   paragrhp.textContent = numberOf;//записываем текущее значение
//   numbers.appendChild(paragrhp);// добовляем в класс наши пораграфы
//   numberOf -= 10; //после каждой интерации цикла уи=меньшаем значение на 10
//  console.log(numbers);
//  //console.log(paragrhp.textContent);
// }
//_____________________________________________________________________

// 2. Написать цикл, который проходится по массиву строк,
//  для каждой строки создает параграф и
//  добавляет его в div с классом strings_container.
//  Строки взять произвольные.

// const arraySrting = [
//   "JavaScript",
//   "HTML",
//   "css",
//   "GitHub",
//   "skills",
//   "learning",
//   "understanding ",
// ]; // создаем масив строк

// const strings_container = document.querySelector(".strings_container"); // получаем элемнт/класс

// for (i = 0; i < arraySrting.length; i++) {
//   //пробегаемся по массиву
//   const paragrhp = document.createElement("p"); //создаем параграфы
//   paragrhp.textContent = arraySrting[i]; //записываем текущее значение в каждый параграф
//   strings_container.appendChild(paragrhp); //добавляем в родительский класс
//   console.log(strings_container); //выводим в консоль
// }
//__________________________________________________________________________

// 3.Написать цикл, который проходится по массиву с объектами
//  - у объектов свойства first_name, last_name и  age (данные взять произвольные)
//  - и создает карточки только для совершеннолетних пользователей.
//   Карточка должна содержать информацию об имени, фамилии и возрасте пользователя.
//    Добавить все карточки в div с классом users_container.

const objFirst = {
  first_name: "Tom",
  last_name: "Norent",
  age: 13,
};

const objSecond = {
  first_name: "Nicole",
  last_name: "Cruse",
  age: 14,
};

const objThird = {
  first_name: "Diana",
  last_name: "Yablonska",
  age: 26,
};

const objForth = {
  first_name: "Peter",
  last_name: "Opalov",
  age: 20,
};

const objFifth = {
  first_name: "Nick",
  last_name: "Nicken",
  age: 24,
};

const users_container = document.querySelector(".users_container")
const arrayObj = [objFirst, objSecond, objThird, objForth, objFifth];

for (i = 0; i < arrayObj.length; i++){
   
    const info = document.createElement("p") //создаем нове элементы
    const users = arrayObj[i];//создаем переменную что бы получить доступ к объкту
    const userAge = users.age; // черезпеременную вытягиваем возраст для использования в if
    info.textContent = `First_Name: ${arrayObj[i].first_name}, Last_Name: ${arrayObj[i].last_name}, age: ${arrayObj[i].age}` // интерполяция для полного отображения объектов
    if (userAge>=18){
        users_container.append(info) 
        console.log(users_container);
    }
    else{
        console.log("все объекты несовершеннолетние");
    }
   
}