let addAge = (() => {
  let age = 20; // private variable, only acessible by the functions inside it
  return () => age + 1;
})();

console.log(addAge());
console.log(addAge());

// This is a trick one
const multiplier = factor => number => number * factor;
// or, in a more intuitive way:
// function multiplier(factor) {
//   return function(number) {
//     return number * factor;
//   }
// }

// 2 = factor, this is binded in let twice
const twice = multiplier(2);

// twice returns the function inside multiplier, so now I just passed the number param for it
// multiplier(2)(5) would return the exact same result as twice(5)
console.log('\n\n', twice(5));