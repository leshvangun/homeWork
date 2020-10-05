
// Линейные алгоритмы. Задания практика 1


//1. Ввести основание и высоту треугольника. Вычислить и вывести на экран площадь треугольникa


let footing = +prompt("Введите основание",'');
let height = +prompt("Введите высоту", "");

let resultat = (footing * height) / 2;

alert('Площадь треугольникa = ' + resultat );




//2. Считая ускорение свободного падения равным 9,8 м/сек, вычислить и вывести на экран расстояние,
// пройденное телом за время свободного падения. Время падения должно быть введено с клавиатуры


let t = prompt('Введите время падения', '');
let g = 9.8;

let cubeT = Math.pow(t,2);

let result = (g * cubeT)/2;

alert('Расстояние,пройденное телом за время свободного падения = ' + result)




// 3. Ввести натуральное трехзначное число. Вычислить и вывести на экран
// произведение цифр числа и сумму старшей и младшей цифры числа.

let question = +prompt('Ввести натуральное трехзначное число','');

function digitsMultiplication(question){

     let str = String(question);
     let numberMultiplication = Number(str[0] * str[1] * str[2]);

     return numberMultiplication;
}

function digitsSum(question){

    let sumTwo = 0;    
     let str = String(question);
     numberSum = Number(str[0]) + Number(str[2]);

     return numberSum;
}

alert('Произведение цифр твоего числа = ' + digitsMultiplication(question));
alert('Cумму старшей и младшей цифры числа = ' + compositionTwo(question));



