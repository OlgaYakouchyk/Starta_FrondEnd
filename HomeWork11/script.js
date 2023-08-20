// 1. Создать кнопку и красный квадрат с размерами 200х200px.
// При клике на кнопку менять у квадрата цвет заднего
// фона на зеленый и уменьшать его до размеров 100х100px.

// const button = document.querySelector('.button')
// const redSquere = document.querySelector('.redSquere')

// function chengeToGreen() {
//     redSquere.style.transform = 'scale(0.5)';
//     redSquere.style.backgroundColor = 'green';

// }
// button.addEventListener('click', chengeToGreen)
//________________________________________________________

// 2.Создать кнопку и розовый квадрат с размерами 200х200px.
// При клике на кнопку менять цвет на синий
// и выводить в консоль обновленный цвет квадрата.

// const pinkSquere = document.querySelector(".pinkSquere");
// const button = document.querySelector(".button");

// function changeToBlue() {
//   pinkSquere.style.backgroundColor = "blue";
// }
// button.addEventListener("click", changeToBlue);
// console.log(button);
//_______________________________________________________________

// 3.Создать кнопку и квадрат с размерами 150х150px.
// При клике на кнопку увеличивать высоту и ширину квадрата на 20px.

// const simpleSquere =document.querySelector('.simpleSquere')
// const button  = document.querySelector('.button')

// function changeSize() {
//     simpleSquere.style.width = '170px';
//     simpleSquere.style.height ='170px';

// }

// button.addEventListener('click', changeSize)
//_______________________________________________________

// 4.Создать кнопку и div с классом root.
// При клике на кнопку в div создается параграф синего цвета.
// Текст параграфа произвольный.

// const root = document.querySelector('.root')
// const button = document.querySelector('.button')

// function createParagraph() {
//     const paragraph = document.createElement('p')
//     paragraph.style.backgroundColor = 'blue';
//     paragraph.textContent = 'Never give up'
//     root.append(paragraph)
// }

// button.addEventListener('click', createParagraph)
//_________________________________________________________

// 5.Создать кнопку и div с классом root.
// При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов.
// Первый цвет синий.

// const root = document.querySelector(".root");
// const button = document.querySelector(".button");
// let nextParagraph = paragraphGreen;

// function paragraphBlue() {
//   const blueParagraph = document.createElement("p");
//   blueParagraph.style.backgroundColor = "blue";
//   blueParagraph.textContent = 'blue';
//   root.append(blueParagraph);
// }
// function paragraphGreen() {
//   const greenParagraph = document.createElement("p");
//   greenParagraph.style.backgroundColor = "green";
//   greenParagraph.textContent = 'green';
//   root.append(greenParagraph);
// }

// function buttonClick() {
//   if (nextParagraph === paragraphBlue) {// проверяем если стекущий парвграф равен голубому, то следующий будет зеленный
//     paragraphGreen();
//     nextParagraph = paragraphGreen;
//   } else {
//     paragraphBlue();
//     nextParagraph = paragraphBlue;
//   }
// }

// button.addEventListener("click", buttonClick);

//______________________________EXTRA_____________________________________________________

// Задание 1: Функции и DOM:
// Создайте кнопку на веб-странице.
// При клике на неё, измените текст этой кнопки на "Clicked!" с помощью JavaScript,
//  используя работу с DOM (изменение содержимого элемента).
// let button = document.querySelector(".button");

// button.addEventListener("click", function () {
//   button.textContent = "Clicked!";
// });

//_______________________________________________________________
// Задание 2: Работа с массивами:
// Создайте массив строк с разными названиями фруктов.
//  Напишите функцию, которая принимает массив и выводит в консоль все фрукты,
//   начинающиеся на определенную букву.

//  const main = document.querySelector('.main')
// const arrayFruts = [
//   "apple",
//   "banana",
//   "kiwi",
//   "apricot",
//   "grape",
//   "avocado",
//   "peach",
//   "passion fruit",
//   "dragon fruit",
//   "mandarin",
// ];
//  const searchLetter = 'a';
//  let newArrayFruits = [];

// for(let i = 0; i <arrayFruts.length; i++){
//   if (arrayFruts[i].startsWith(searchLetter)){
//     newArrayFruits.push(arrayFruts[i])

//   }
//   //console.log(newArrayFruits);
// }
// const newFruits = newArrayFruits
// main.append(newFruits)

//_______________________________________________________________________________
// Задание 3: Работа с объектами:
// Создайте объект, представляющий пользователя с полями "имя", "возраст", "email".
// Напишите функцию, которая принимает этот объект и возвращает строку приветствия вида
// "Привет, {имя}! Тебе {возраст} лет."

// const infoAboutYou = {
//   youName: 'Ivan',
//   youAge: 35,
//   youEmail: 'uerbkjfkn@gmil.com'
// }

// console.log(`Hello, ${infoAboutYou.youName}! you ${infoAboutYou.youAge} years old and your email is ${infoAboutYou.youEmail}`);

//___________________________________________________________________________________
// Задание 4: Функции и условия:
// Напишите функцию, которая принимает число и проверяет, является ли оно четным. Верните соответствующее сообщение.

// const yourNumber = prompt("Enter your number: ");

// if (yourNumber % 2 === 0) {
//   console.log("Your number is even");
// } else {
//   console.log("Your number is odd");
// }

//___________________________________________________________________________________
// Задание 5: Работа с DOM classList:
// Создайте список элементов (например, неупорядоченный список ul). 
// При клике на элемент списка, добавьте ему класс "highlighted", 
// а при повторном клике - уберите этот класс.


// const listItems = document.querySelectorAll('.listItem');
// let isHighlighted = false;

// for (let i = 0; i< listItems.length; i++){
//   listItems[i].addEventListener('click', function(){

//     if(isHighlighted){
//       listItems[i].classList.remove('highlighted')
//     }else{
//       listItems[i].classList.add('highlighted')
//     }
//     isHighlighted = !isHighlighted;
    
//   })
// }
//__________________________________________________________________________________

// Задание 6: Работа с массивами:
// Создайте массив чисел. Напишите функцию, которая 
// находит сумму всех элементов в массиве и возвращает её.

// const arrayNimbers = [1,4,10,6,7,24];

// function newArr(array){
//   let count = 0;
//   for (let i=0; i<arrayNimbers.length; i++){
//     count += arrayNimbers[i];
//   }
//   return count;

// }

// console.log(newArr(arrayNimbers));

//___________________________________________________________________________
// Задание 7: Работа с объектами:
// Создайте объекты, представляющие различные товары с полями 
// "название", "цена", "скидка в процентах". Напишите функцию, 
// которая принимает массив таких объектов и возвращает общую 
// сумму стоимости товаров с учетом скидок.

const arrayItems = [
  {
    itemsName: 'laptop',
    itemsPrice: 500,
    discount: 20
  },
  {
    itemsName: 'phone',
    itemsPrice: 800,
    discount: 10
  },
  {
    itemsName: 'TV stand',
    itemsPrice: 60,
    discount: 15
  },
  {
    itemsName: 'playstation',
    itemsPrice: 400,
    discount: 20
  },
  {
    itemsName: 'monitor',
    itemsPrice: 100,
    discount: 10
  },
]

function getOfItems (array){
  let sumItems = 0;
  let sumDiscoutn = 0;
  for(let i = 0; i<arrayItems.length; i++){
    sumItems +=arrayItems[i].itemsPrice;
    sumDiscoutn += (arrayItems[i].itemsPrice * arrayItems[i].discount)/ 100; //получаем сумму скидок на каждый товар и /100 чтобы получить сумму скидок в %

  }

  return sumItems - sumDiscoutn;

}

console.log(getOfItems(arrayItems));

//_______________________________________________________________________________________-

// Задание 8: Функции и замыкания:
// Напишите функцию, которая создает счетчик и возвращает другую функцию. 
// Вызов этой функции должен увеличивать счетчик на 1 и возвращать новое значение.

// function countNumber(){
//   let sameNubmer = prompt ('enter your number');
//   sameNubmer ++;
//   return sameNubmer
// }
//  console.log(countNumber());

 //________________________________________________________________________

//  Задание 9: Работа с DOM и событиями:
// Создайте несколько кнопок на странице с разными названиями. 
// При наведении курсора на кнопку, измените её текст на "Наведение!" 
// и при уходе курсора - верните исходный текст.

const button =document.querySelectorAll('.button')


button.forEach((button) =>{
  const originalText = button.textContent;

  button.addEventListener('mouseenter', function(){
    button.textContent = 'Follow'
  
});

button.addEventListener('mouseleave', function(){
  button.textContent = originalText;
})

})

 //_____________________________________________________________________________________
  
// Задание 10: Работа с объектами и массивами:
// Создайте массив объектов, представляющих студентов со свойствами "имя", "возраст", "курс". 
// Напишите функцию, которая принимает массив студентов и возвращает массив их имен.

const arrayStudents = [
  {
    studNeme: 'Ivan',
    srudAge: 20,
    studCurse: 'economy'
  },
  {
    studNeme: 'Lilia',
    srudAge: 17,
    studCurse: 'philosophy'
  },
  {
    studNeme: 'Max',
    srudAge: 21,
    studCurse: 'texnology'
  },
  {
    studNeme: 'Ira',
    srudAge: 19,
    studCurse: 'engenery'
  },
  {
    studNeme: 'Luba',
    srudAge: 18,
    studCurse: 'histoty'
  },

]

for (let i = 0; i<arrayStudents.length; i++){
  console.log(arrayStudents[i].studNeme);
}

  

