// Solution using for of
let every = (arr, testFn) => {
  for (item of arr) {
    if (!testFn(item)) {
      return false;
    }
  }

  return true;
}

console.log(every([1, 3, 5], n => n < 10));

// Solution using filter
let every = (arr, testFn) => {
  const testedArr = arr.filter(item => {
    if (!testFn(item)) {
      return item;
    }
  })

  if (testedArr.length > 0) {
    return false;
  }

  return true;
}

console.log(every([2, 4, 16], n => n < 20));

// Solution using some
let every = (arr, testFn) => {
  return !arr.some(item => !testFn(item));
};

console.log(every([9, 4, 2], n => n < 10));