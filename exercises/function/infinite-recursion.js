let chicken = () => {
    return egg();
}

let egg = () => {
    return chicken();
}

console.log(chicken() + " came first.");
// Returns maximum call stack size exceeded