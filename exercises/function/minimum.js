const { log:l } = console;

let minimumValue = (num1, num2) => {
    if (Number.isInteger(num1 && num2)) {
        let result = Math.min(num1, num2);

        if (num1 !== num2) {
            return result;
        }

        return `Both numbers (${result}) are equal.`;
    }

    return 'Input a valid number.';
}

l(minimumValue(50, 'foo'));