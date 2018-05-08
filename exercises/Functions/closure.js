let addAge = (() => {
    let age = 20; // private variable, only acessible inside addAge() and the functions inside it
    return () => age + 1;
})();

console.log(addAge());
console.log(addAge());


// This is a trick one
let multiplier = factor => {
    return number => number * factor;
}

let twice = multiplier(2); // 2 = factor, this is binded in let twice
console.log('\n\n',twice(5)); // twice returns the function inside multiplier, so now I just passed the number param for it
