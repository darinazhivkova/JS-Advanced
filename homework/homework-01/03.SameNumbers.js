// Напишете функция, която приема цяло число като вход 
// и проверява дали всички цифри в дадено число са еднакви или не.

// Изведете на конзолата true, ако всички числа са еднакви, и false, ако не са. 
// На следващия ред изведете сбора от всички цифри.

// Входът е цяло число.

// Изходът трябва да бъде изведен на конзолата.

function checkNumber(num) {
  let lastDigit = num % 10;   // взимаме последната цифра
  let sum = 0;
  let allEqual = true;

  while (num > 0) {
    let digit = num % 10;     // взимаме текущата цифра
    sum += digit;

    if (digit !== lastDigit) {
      allEqual = false;
    }

    num = Math.floor(num / 10); // махаме последната цифра
  }

  console.log(allEqual);
  console.log(sum);
}

checkNumber(2222222); // true 14
checkNumber(1234); //false 10