// 1. Ввести 3 целых числа. Вычислить и вывести на экран среднее арифметическое нечетных чисел среди введенных.

    let sum = 0;

    for(let i = 0; i<3; i++){
        let question = prompt('Введите число','');

        if(question % 2 !== 0){
            sum+=Number(question)/2;
        };

    }

    alert('Cреднее арифметическое нечетных чисел = ' + sum);


// 2. Ввести координаты 2-х точек x1y1 и x2y2. Определить,
// какая из точек находится ближе к началу координат. В ответе вывести номер точки.


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

    let sum = 0;

        for(let i = 0; i<3; i++){

            let question = prompt('Если ты натурал, введи натурально число','');

            if(question[question.length - 1] % 2 === 0){

                sum+=Number(question);
            };
        }

    alert('Произведение тех чисел среди введенных, у которых младшая цифра четная = ' + sum);