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

const root = document.querySelector(".root");
const button = document.querySelector(".button");
let nextParagraph = paragraphGreen;

function paragraphBlue() {
  const blueParagraph = document.createElement("p");
  blueParagraph.style.backgroundColor = "blue";
  blueParagraph.textContent = 'blue';
  root.append(blueParagraph);
}
function paragraphGreen() {
  const greenParagraph = document.createElement("p");
  greenParagraph.style.backgroundColor = "green";
  greenParagraph.textContent = 'green';
  root.append(greenParagraph);
}


function buttonClick() {
  if (nextParagraph === paragraphBlue) {// проверяем если стекущий парвграф равен голубому, то следующий будет зеленный
    paragraphGreen();
    nextParagraph = paragraphGreen;
  } else {
    paragraphBlue();
    nextParagraph = paragraphBlue;
  }
}

button.addEventListener("click", buttonClick);
