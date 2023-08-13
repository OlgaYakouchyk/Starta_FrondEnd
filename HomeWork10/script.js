// 1. Создать кнопку "Создать картинку" и пустой div.
//  При клике на кнопку в div создается изображение (img).
//  Изображение произвольное.

// const button = document.querySelector(".button");
// button.textContent = "Create picture";
// const main = document.querySelector(".main");

// function addImg() {
//   const img = document.createElement("img");
//   img.src = './img/catt.jpg'

//   main.append(img)
// }

// main.addEventListener("click", addImg);
//_________________________________________________________________________
// 2. Создать кнопку и пустой div.
// При клике на кнопку создавать внутри div параграф с произвольным текстом.

// const butt = document.querySelector('.butt');
// butt.textContent = 'Click'

// const conteiner = document.querySelector('.conteiner')

// function createParagraph () {
//     const paragraph = document.createElement('p')
//     paragraph.textContent = 'Never look back'

//     conteiner.append(paragraph)
// }

// conteiner.addEventListener('click', createParagraph)

// _____________Extra__________________________________

// 1. Повесить обработчик на нажатие клавиш клавиатуры и при вводе букв их в параграф.
// const outputParagraph = document.querySelector('.output_paragraph')

// document.addEventListener('keydown', (event) => { //keydown является событием на уровне документа. Это позволит нам ловить нажатия клавиш в любом месте страницы.
//     if(event.key.match(/^[a-zA-z]$/)){ // .match(/^[a-zA-Z]$/) это проверка, что нажата буквенная клавиша (пропускаем остальные клавиши).
//         outputParagraph.textContent += event.key //мы добавляем нажатую букву в содержимое параграфа. (event.key представляет символ клавиши, которая была нажата.)
//     }
// })

// _______________________________________________________________________________________________________________
// 2. Написать программу, которая формирует на основе массива строк множество параграфов и выводит их в интерфейс.
// При клике на параграф текст должен меняться на звездочки.

// const arryParagrsph = [
//   "JavaScript",
//   "HTML",
//   "css",
//   "GitHub",
//   "skills",
//   "learning",
//   "understanding ",
// ];

// const main2 = document.querySelector('.main2')

// for (let i = 0; i < arryParagrsph.length; i++) {
//     const paragraph = document.createElement('p')
//     paragraph.textContent = arryParagrsph[i]
//     main2.append(paragraph)

//     paragraph.addEventListener('click', function(){
//         paragraph.textContent = '*'
//     })

//     console.log(main2);
// }

// ______________________________________________________________________________________

// В js объявлен массив с ссылками на картинки.
// На основе этого массива формируется множество маленьких картинок
//  в верхней части интерфейса.
//  При нажатии на одну из картинок забирается ссылка на эту картинку
//   и в нижней части интерфейса отображается в большем размере.
// Так, пользователь нажимая на маленькие картинки видит их отображение в большем размере.

const arrayLinkPicture = [
  "./img/imgCat.jpg",
  "./img/imgCat2.jpg",
  "./img/imgCat3.jpg",
  "./img/imgCat4.jpg",
  "./img/imgCat5.jpg",
  "./img/imgCat6.jpg",
];

const imgConteiner = document.querySelector('.imgConteiner')
const newLargeImg = document.querySelector('#newLargeImg')//  создавали тег img в  в HTML чтобы в дальнейшем перебрасывать туда ссылки для больших картинок


for (let i = 0; i < arrayLinkPicture.length; i++) {//cсоздание маленьких картинок и помещение в imgConteiner
  const img = document.createElement("img");
  img.src = arrayLinkPicture[i];
  imgConteiner.appendChild(img)

  img.addEventListener('click', function(){// добавляем слушатель событий на маленькие картинки 
    newLargeImg.src = img.src//забираем ссылки с моленьких катринок и ложем в newLargeImg где будут храниться большие картики
    newLargeImg.style.display = 'block'; // отображаем большую картинку
  })

  
}
  
newLargeImg.addEventListener('click', function() {// =обработчик событий чтобы большая картинка пряталась
    newLargeImg.style.display = 'none';
});