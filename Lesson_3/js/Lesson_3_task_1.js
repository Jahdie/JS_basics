/*С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль, с помощью console.log) от 0 до 10
включительно, чтобы результат выглядел так:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
10 – четное число*/

/**
 * Функция проверки на четность числа.
 * @param num число
 * @returns {string} возвращает строку в зависимости от результата: "это ноль", "это четное чсило", "это нечетное число"
 */
function checkEvenNumberOrNot(num) {
    if (num === 0) {
        return "это ноль"
    }
    if (num % 2 === 0) {
        return "это четное число"
    }
    else {
        return "это нечетное число"
    }
}

for (let counter = 0; counter <= 10; counter++){
    console.log(`${counter} - ${checkEvenNumberOrNot(counter)}`)
}