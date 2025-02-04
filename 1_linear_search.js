const array = [1, 4, 5, 8, 2, 1, 7, 11, 2, 9];
let count = 0;

const linerSearch = (array, item) => {
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (array[i] === item) {
      return i;
    }
  }

  return null;
};

console.log(linerSearch(array, 9));
console.log("count = ", count);
