// Напишете функция, която изчислява и отпечатва сумата от първия и последния елемент в масив.

// Входът е масив от низови елементи, съдържащи числа.

// Изходът е върнатата стойност на вашата функция.


function sumFirstLast(arr){
    let firstNumber = Number(arr[0]);
    let lastNumber = Number(arr[arr.length - 1]);
    let sum = firstNumber + lastNumber;

    console.log(sum);
}

sumFirstLast(['20', '30', '40']); // 60
sumFirstLast(['5', '10']); // 15