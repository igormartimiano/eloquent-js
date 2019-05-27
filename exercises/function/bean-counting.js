const { log:l } = console;

let countChar = (str, char) => {
    let result = 0;

    for (let i = 0; str.length > i; i++) {
        if (str[i] === char) {
            result++;
        }
    }

    return result;
}

l(countChar('zzzzBeeBeeeBiiB', 'e'));