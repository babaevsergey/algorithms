// Bubble Sort (Пузырьковая сортировка) - самая не эфеективная
// O(n^2) - квадратичная сложность
const array = [
  28, 13, 24, 6, 21, 38, 31, 19, 29, 3, 48, 6, 19, 16, 30, 21, -1, 29, 23, 42,
  -2, 36,
];

let count = 0;

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
      count += 1;
    }
  }
  return array;
}

console.log(bubbleSort(array));
console.log("Длина массива:", array.length);
console.log("Количество сравнений:", count);
