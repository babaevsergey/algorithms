// Selection Sort (Сортировка выборкой)
// O(n^2) - квадратичная сложность
const array = [
  28, 13, 24, 6, 21, 38, 31, 19, 29, 3, 48, 6, 19, 16, 30, 21, -1, 29, 23, 42,
  -2, 36,
];

let count = 0;

function selectionSort(array) {
  // Проходим по массиву
  for (let i = 0; i < array.length; i++) {
    // Предполагаем, что текущий элемент — минимальный
    let indexMin = i;

    // Ищем минимум в оставшейся части массива
    for (let j = i + 1; j < array.length; j++) {
      // Если нашли элемент меньше текущего минимума, обновляем индекс
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
      count += 1;
    }

    // Если нашли новый минимум, меняем элементы местами
    [array[i], array[indexMin]] = [array[indexMin], array[i]];
  }
  return array;
}

console.log(selectionSort(array));
console.log("Длина массива:", array.length);
console.log("Количество сравнений:", count);
