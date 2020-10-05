
// Ввести основание и высоту треугольника. Вычислить и вывести на экран площадь треугольника


// let footing = +prompt("Введите основание",'');
// let height = +prompt("Введите высоту", "");

// let result = (footing * height) / 2;

// alert(result);




// Считая ускорение свободного падения равным 9,8 м/сек, вычислить и вывести на экран расстояние,
// пройденное телом за время свободного падения. Время падения должно быть введено с клавиатуры


// let t = prompt('Введите время падения', '');
// let g = 9.8;

// let cubeT = Math.pow(t,2);

// let result = (g * t)/2;

// alert(result)




// // 3. Ввести натуральное трехзначное число. Вычислить и вывести на экран
// произведение цифр числа и сумму старшей и младшей цифры числа.

// function composition(num){
//      let str = String(num);
//      let sum = Number(str[0] * str[1] * str[2]);

//      return sum;
// }

// console.log(composition(222));


function composition(num){

    let sum = 0;    
     let str = String(num);
     sum = Number(str[0]) + Number(str[2]);

     return sum;
}

console.log(composition(123));



// let str = '321';

// let sum = str[0] * str[1] * str[3];
// let composition = str[0] + str[3];

// alert("Произведение цифр" + Number(sum));
// alert("Cумму старшей и младшей цифры числа" + composition);



// Ввести длину диагонали квадрата. Вычислить и вывести на экран площадь и периметр квадрата.

// Площадь

// let d = prompt('Введите диагональ','');
//     d = Math.pow(d,2);
//     alert("Площадь квадрата = "+ " "+ d/2);

// Периметр

    // a = Math.sqrt((d*d/2)),
    // p = a * 4;

    // alert("Периметр квадрата = " + " " + p);




// Ввести разрешение рисунка (n и m) и количество используемых цветов (N).
// Вычислить и вывести на экран объем графического файла с рисунком в килобайтах    

// let permissionM = prompt('Введите разрешение рисунка (Ширина)',''),
//     permissionN = prompt('Введите разрешение рисунка (Высота)',''),
//     colorN = prompt('Колличество используемых цветов','');

//     let v =((permissionM * permissionN)* Math.log(colorN) / Math.log(2)) / ( 8 * 1024 );
    
//     alert(v + " " + "кб");





// Ввести 3 целых числа. Вычислить и вывести на экран среднее арифметическое нечетных чисел среди введенных.

    // let sum = 0;

    // for(let i = 0; i<3; i++){

    //     let question = prompt('Введите число','');

    //     if(question % 2 !== 0){
    //         sum+=Number(question)/2;
    //     };
    // }

    // console.log(sum);





        let xOne = Number(prompt('Ввести координаты точки x1',''));
        let yOne = Number(prompt('Ввести координаты точки y1',''));

        let xTwo = Number(prompt('Ввести координаты точки x2',''));
        let yTwo = Number(prompt('Ввести координаты точки y2',''));

        if((xOne*xOne + yOne*yOne)>(xTwo*xTwo + yTwo*yTwo)){
            alert('Первая точка ближе')
        }else{
            alert('Вторая точка ближе')
        }



// Ввести 3 натуральных числа. Вычислить произведение тех чисел среди введенных, у которых младшая цифра четная.

// let sum = 0;

// for(let i = 0; i<3; i++){

//     let question = prompt('Если ты натурал, введи натурально число','');

//     if(question[question.length - 1] % 2 === 0){

//         sum+=Number(question);
//     };
// }

// console.log(sum);