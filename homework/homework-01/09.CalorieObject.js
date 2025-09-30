// Напишете функция, която съставя обект по зададени свойства. 
// Входът е масив от низове. Всеки четен индекс на масива представлява името на храната. Всеки нечетен индекс е число, 
// равно на калориите в 100 грама от дадения продукт. 
// Присвоете всяка стойност на съответното ѝ свойство и я отпечатайте на конзолата.

// Входът е масив от низови елементи.

// Изходът трябва да бъде отпечатан на конзолата.

function calorieObject(input) {
    let result = {};

    for (let i = 0; i < input.length; i += 2) {
        let food = input[i];
        let calories = Number(input[i + 1]);
        result[food] = calories;
    }

    console.log(result);
}

// Пример:
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
// { Yoghurt: 48, Rise: 138, Apple: 52 }

calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
// { Potato: 93, Skyr: 63, Cucumber: 18, Milk: 42 }
