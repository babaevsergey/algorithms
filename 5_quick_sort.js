// Quick Sort (Сортировка выборкой)
// O(n^2) - квадратичная сложность
const array = [
  28, 13, 24, 6, 21, 21, 31, 19, 29, 3, 48, 6, 19, 16, 30, 21, -1, 29, 23, 42,
  31, 19, 29, 3, 48, 6, 19, 16, 30, 21, -1, 29, 23, 42, -2, 36,
];

let count = 0;

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  let less = [];
  let greater = [];

  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (i === pivotIndex) {
      continue;
    }

    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort(array));
console.log("Длина массива:", array.length);
console.log("Количество сравнений:", count);
