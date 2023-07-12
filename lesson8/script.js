// const meName = 'Olga'
// const lastName = 'Yakouchyk'
// const myAge = 39
// const myCat ='Lily'

//  const objAboutMe = {
//      myName: 'Olga',
//      lastName: 'Yakouchyk',
//      myAge: 39,
//      myCat: 'Lily'
//  }

//  const arrAboutMe = ['Olga', 'Yakouchyk', 39, 'Lily']
// console.log(arrAboutMe);
// console.log(objAboutMe);

// const randomArr = [1,33,4,5,78]
// randomArr.push(9)
// console.log(randomArr);
// console.log(`my name is ${arrAboutMe[0]} and my last name ${arrAboutMe[1]}`);
// console.log(objAboutMe.myCat);
// randomArr.pop()
// console.log(randomArr);

//const sameArr = [78, 98, "hi for everyone", 67, "lily", "cat", "family"];
// console.log(sameArr[6], sameArr[4]);

// const emptyArr = []
// const number_1 = prompt ('Enter your first number')
// const number_2 = prompt ('Enter your srcond number')
// const number_3 = prompt ('Enter your third number')
// emptyArr.push(number_1, number_2, number_3)
// console.log(emptyArr);

// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

// for (i = 0; i < sameArr.length; i++) {
//   console.log(sameArr[i]);
// }

//Написать программу, в которой объявлен массив с 5 числовыми элементами.
// Программа должна заполнить новый пустой массив квадратами чисел из первого массива
// const initialArr = [1,2,3,4,5]
// const newArr =[]

// for (let i = 0; i < initialArr.length; i++) {
//    console.log(initialArr[i]);
//    const result = Math.pow(initialArr[i], 2)
//    newArr.push(result)
// }
//     console.log(newArr);

// const infoAboutMe = {
//     myName: 'Olga',
//     meLastName: 'Yakouchyk',
//     myAge: 35,
//     myCat: 'Lily',
//     newArr2: [1,2,3,5,6]
// }
// const shortArr = infoAboutMe.newArr2
// for (let i = 0; i < shortArr.length; i++){
//     console.log(shortArr[i]);
// }

// for (i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
//  const dArr = [2, -5, -6, -1, 0, 9, 5, 78, -86];
//  let counter = 0
//  for (i = 0; i < dArr.length; i++) {
//    if (dArr[i] > 0) {
//      console.log(dArr[i]);
//   }
 //}

//  for (i = 0; i < 10; i++) {
//    if (i % 3 === 0) {
//      console.log(i);

//  }
// }
const dArr = [2, 5, 6,1, 0, 9, 5, 78, 86];
 let counter = 0
 for (i = 0; i < dArr.length; i++) {
   if (dArr[i] > 0) {
     console.log(counter += dArr[i]);
   }
}