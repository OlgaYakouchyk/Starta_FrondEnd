const wrapper = document.querySelector(".wrapper");
const button = document.querySelector(".button");
// console.log(wrapper, button);

// function createElement (){
//     const newElement = document.createElement('div')
//     wrapper.append(newElement)
//     const newH2 = document.createElement('h2')
//     newH2.textContent ='This is title'
//     newElement.append(newH2)

// }

// button.addEventListener('click', createElement)

const arrayObj = [
  {
    title: "title1",
    description: "deck1",
  },
  {
    title: "title1",
    description: "deck1",
  },
  {
    title: "title1",
    description: "deck1",
  },
];
const item = document.createElement("div");
item.classList.add("item");
wrapper.append(item);

button.addEventListener("click", function () {
 
  for (let i = 0; i < arrayObj.length; i++) {
    const h2 = document.createElement("h2");
    item.append(h2);
    const par = document.createElement("p");
    wrapper.append(par);
    const getTitle = arrayObj[i].title;
    const getDescr = arrayObj[i].description;
    h2.append(getTitle);
    par.append(getDescr);
  }
});


