# Calculate Factorial

Вашата задача е да създадете програма, която изчислява факториела на дадено положително цяло число `n`.

Факториел на число `n` (означаван с `n!`) се дефинира като произведението на всички положителни цели числа от 1 до n. Например, факториелът на 5 (обозначаван като `5!`) е `1 * 2 * 3 * 4 * 5 = 120`.

В тази задача можем да използваме рекурсия, за да намерим факториела на числото `n`. Обръщаме внимание на базовия случай, където факториелът на `0` и `1` е `1`, а в останалите случаи използваме рекурсивното изчисление `n * (n - 1)!`.

## Входни данни

* n - число в интервала от 1 до 10.

## Примери

Пример 1

### Вход

    n = 5;

### Изход

    Факториелът на е 120