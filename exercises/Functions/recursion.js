const { log:l } = console;

let isEven = num => {
    if(Number.isInteger(num) && num >= 0) {
        if (num === 0) {
            return true;
        } else if (num === 1) {
            return false; 
        } else {
            return isEven(num - 2);
        }
    } else {
        return 'Input a valid positive, whole number.';
    }
}

l(isEven(1001));