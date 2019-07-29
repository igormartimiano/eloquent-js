function repeat(times, fn) {
  for (let i = 0; i <= times; i++) {
    fn(i);
  }
}

function unless(test, fn) {
  if (!test) fn();
}

repeat(10, n => {
  unless(n % 2 === 0, () => {
    console.log(`${n} is odd`);
  })
})