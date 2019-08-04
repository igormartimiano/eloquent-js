let arrays = [[1, 2, 3], [4, 5], [6]];

let flattenedArr = arrays.reduce((lastArr, currArr) => lastArr.concat(currArr))

console.log(flattenedArr)