//1.Написать программу, которая через prompt считывает число и выводит в консоль число равное 10% от введенного числа

 const number = prompt ('Enter your number')
 console.log(number*0.1);

//2.Написать программу, которая получает два числа и выводит наименьшее

 const f = prompt ('Enter your first number')
 const t = prompt ('Enter your second number')
 if (f<t){
     console.log('smallest number is: ' + f);
 }
 else{
     console.log('smallest number is: ' + t);
 }

//3.Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’

 const g = prompt ('Enter your number')

 if (g<100){
     console.log('Число меньше 100');
 }
 else if (g>100){
     console.log('Число больше 100');
 }
 else{
     console.log('Число равно 100');
 }

//4.Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение ‘Hello, <name>’, если пользователь совершеннолетний, или ‘Hi, <name>’, если пользователь несовершеннолетний.

 const name = prompt ('Enter your name')
 const age = prompt ('Enter your age')
 if (age>18){
     console.log('Hello, ' + name);
 }
 else{
     console.log('Hi, ' + name);
 }

//.5 написать переменные, в них заключить свое имя, возраст, домашнее животное, фамилию, город, где вы живете.  И вывести в консоль, используя эти 5 переменных, следующее:
//Меня зовут … …(фамилия), мне … лет, я живу в … городе, у меня есть животное по имени …
 
const myFirstName = 'Olga';
const mySecondName = 'Yakouchyk';
const myAge = 35;
const myCat = 'lily';
const myCity = 'Phladelphia';

console.log('Hi, my name is ' + myFirstName + ' ' + mySecondName + ', I am ' + myAge + ' years old' + ', I live in ' + myCity+ ', I have a cat and her name is ' + myCat + ':)');




