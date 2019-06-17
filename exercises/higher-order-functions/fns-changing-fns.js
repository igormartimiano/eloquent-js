function noisy(fn) {
  // ... as param receives all arguments passed by noisy()(anyAmount)
  return (...args) => {
    console.log(`Calling with ${args}`)
    let result = fn(...args)
    console.log(`Called ${args} and got ${result} as a result!`)
  }
};

// Execute the anonymous function inside noisy passing 3,2,1 as arguments
noisy(Math.min)(3,2,1);

function countOccurencesOnStr(fn) {
  return (str, char) => console.log(`${fn(str, char)} '${char}' characters were found on string '${str}'`);
}

countOccurencesOnStr((str, char) => {
  let strLength = str.length;
  let strWithoutChar = str.replace(new RegExp(char, 'g'), '');

  return strLength - strWithoutChar.length;
})('see you space cowboy', 'e');