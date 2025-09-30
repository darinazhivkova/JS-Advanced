// Напишете функция, която изчислява колко време отнема на студент да стигне до университета. Функцията приема три числа:

// · Първото е броят крачки, които студентът прави от дома си до университета
// · Второто число е дължината на отпечатъка на студента в метри
// · Третото число е скоростта на студента в км/ч

// На всеки 500 метра студентът почива и си прави 1 минута почивка.

// Изчислете колко време изминава студентът от дома си до университета и отпечатайте резултата на конзолата във формат: 
// 'часове:минути:секунди'.

// Входните данни са три числа.

// Изходните данни трябва да бъдат отпечатани на конзолата.

function timeToUniversity(steps, footprintLength, speedKmH) {
  // Пресмятаме изминатото разстояние в метри
    let distanceMeters = steps * footprintLength;

    // Скоростта от км/ч в м/с
    let speedMetersPerSec = speedKmH * 1000 / 3600;

    // Основно време за изминаване на разстоянието (в секунди)
    let timeSeconds = distanceMeters / speedMetersPerSec;

    // Добавяме почивките: по 1 минута на всеки 500 метра
    let rests = Math.floor(distanceMeters / 500);
    timeSeconds += rests * 60;

    // Превръщаме секундите в часове:минути:секунди
    let hours = Math.floor(timeSeconds / 3600);
    let minutes = Math.floor((timeSeconds % 3600) / 60);
    let seconds = Math.round(timeSeconds % 60);

    // Форматираме с водещи нули
    let result = `${hours.toString().padStart(2, '0')}:` +
                 `${minutes.toString().padStart(2, '0')}:` +
                 `${seconds.toString().padStart(2, '0')}`;

    console.log(result);
}

timeToUniversity(4000, 0.60, 5); // 00:32:48
timeToUniversity(2564, 0.70, 5.5); // 00:22:35
