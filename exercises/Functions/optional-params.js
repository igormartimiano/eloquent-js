const minus = (a, b) => {
    if (b === undefined) return -a; // If a param wasn't given it returns an undefined, I can mess with it
    else return a - b;
}
console.log(minus(10));

const eat = (food, amount = 5) => { // 5 Replaces the param if its not given when calling the function
    if (amount > 1) food += "s";
    return "You just ate " + amount + " " + food;
}
console.log(eat('banana'));