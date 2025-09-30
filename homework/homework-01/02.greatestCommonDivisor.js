// Напишете функция, която приема две положителни числа като вход 
// и изчислява най-големия общ делител.

// Входът е под формата на две положителни цели числа.

// Изходът трябва да бъде отпечатан на конзолата.

function solve(first, second){
    first = Number(first);
    second = Number(second);

    let lower = Math.min(first, second);
    let bigger = Math.max(first, second);
    let output = 0;

    for(let i = lower; i >= 0; i--){
        if(bigger % i == 0 && lower % i == 0 ){
            output = i;
            break;
        }
    }
    console.log(output);
    
}

solve(15, 5); // 5
solve(2154, 458); // 2