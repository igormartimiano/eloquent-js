let addAge = (() => {
    let age = 20;

    return () => age + 1;
})();

console.log(addAge());
console.log(addAge());


let multiplier = (factor) => {
    return number => number * factor;
}

let twice = multiplier(2);
console.log('\n\n',twice(5));