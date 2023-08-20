// const button = document.querySelector("#button");
// button.textContent = "World";
// console.log(button);

// const newH2 = document.createElement("h2");
// document.body.append(newH2);
// newH2.textContent = "Hello";

// button.addEventListener("click", function () {
//   let newWorld = (button.textContent = "Click");
//   console.log("Hello");

// });

const allItems = document.querySelectorAll('.item');

for (let i = 0; i < allItems.length; i++) {
  allItems[i].addEventListener('click', function(){
    allItems[i].add('active')
  })
  
  
}
console.log(allItems);
// Доработать прошлый скрипт таким образом, 
// чтобы при повторном нажатии класс active удалялся