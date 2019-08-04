function noisy(fn) {
  // ... as param receives all arguments passed by noisy()(anyAmount) in an array
  return (...args) => {
    console.log(`Calling with ${args}`);
    let result = fn(...args);
    console.log(`Called ${args} and got ${result} as a result!`);
  }
};

// Execute the anonymous function inside noisy passing 3,2,1 as arguments
noisy(Math.min)(3,2,1);

function printCountOnStr(fn) {
  return (str, char) => console.log(
    `${fn(str, char)} "${char}" characters were found on string "${str}"`
  );
}

function countOccurencesOnStr(str, char) {
  const strLength = str.length;
  const strWithoutChar = str.replace(new RegExp(char, 'g'), '');

  return strLength - strWithoutChar.length;
}

printCountOnStr(countOccurencesOnStr)('see you space cowboy', 'e');