function chicken() {
    return egg();
}

function egg() {
    return chicken();
}

console.log(chicken() + " came first.");

// Returns out of stack 