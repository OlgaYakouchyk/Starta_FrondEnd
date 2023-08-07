// const main = document.querySelector('.main')
// const button = document.querySelector('#button')
// console.log(main,button);
// const newSection = document.createElement('section')
// const h2 = document.createElement('h2')
// h2.innerText = 'Hello world'

// const array = [1,2,3,'hi']

// button.addEventListener('click', function(){
//     if(array[1]===3){
//         main.append(newSection)
//     newSection.append(h2)
//     }
//     else{
//         for(i=0; i<array.length;i++){
//             document.write(array[i])
//         }
//     }
// })

// Переделать кнопку таким образом,
// чтобы при нажатии на нее в параграфе в
// интерфейсе значение увеличивалось на 1.
// В начале рассмотрите процесс,
//  при котором мы каждый раз считываем число
//  из параграфа, меняем и записываем обратно,
//  а потом переделайте процесс так,
//  чтобы значение хранилось в переменной,
//  изменялось при клике и записывалось в параграф.

// const paragraph = document.querySelector(".paragraph"); //вытягиваем параграф
// const button = document.querySelector("#button"); //вытягиваем кнопку
// console.log(paragraph, button); //проверяем

// let currentValue = 0;
// button.addEventListener("click", function () {
//   //let currentValue = paragraph.textContent;// let перезаписывается переменная

//   currentValue++; //увеличили переменную на 1
//   paragraph.textContent = currentValue; //сделали счетчик котрый увеличиваем и перезаписывает в параграф обратно
//   console.log(currentValue);
// });

// Написать программу,
// которая создает две кнопки и вешает на них событие нажатия.
//  При нажатии на первую выводится в консоль “минус”,
//  а при нажатии на вторую ‘плюс’.

// Доработать процесс таким образом,
// чтобы при нажатии на плюс в консоль выводилось число,
// увеличившись на 1, а при нажатии на минус уменьшившись на 1.

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const paragraph = document.querySelector(".paragraph");
let currentValue = 0;

button1.addEventListener("click", function () {
  currentValue--;
  paragraph.textContent = currentValue;
});

button2.addEventListener("click", function () {
    currentValue++;
    paragraph.textContent = currentValue;
});
