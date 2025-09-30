// Напишете програма, която получава число и списък от пет операции. Изпълнете операциите последователно, като започнете с входното число и използвате резултата от всяка операция като отправна точка за следващата. Изведете резултата от всяка операция по ред. Операциите могат да бъдат едни от следните:

// · chop - разделяне на числото на две
// · dice - корен квадратен от число
// · spice - добавяне на 1 към число
// · bake - умножаване на числото по 3
// · fillet - изваждане на 20% от числото

// Входът се предоставя като 6 низови аргумента. Първият елемент е отправната точка и трябва да бъде разбит на число. Останалите 5 елемента са имената на операциите, които ще бъдат извършени.

// Изходът трябва да бъде отпечатан на конзолата.

function cookingByNumbers(num, op1, op2, op3, op4, op5) {
    let number = Number(num);
    let operations = [op1, op2, op3, op4, op5];

    for (let op of operations) {
        switch (op) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number += 1;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number *= 0.8;
                break;
        }
        console.log(number);
    }
}

// Пример:
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// => 16, 8, 4, 2, 1

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
// => 3, 4, 2, 6, 4.8