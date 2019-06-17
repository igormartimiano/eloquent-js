const {log:l} = console;

function greaterThan(num) {
  return value => {
    return value > num;
  }
}

// greaterThan(10) will return the encapsulated anonymous function inside it
l(greaterThan(10))
// then we have to execute it with the next paranthesis so we get its return value "value > num"
l(greaterThan(10)(5))

// we could store that in a variable as a default param and use that as follows
let greaterThan10 = greaterThan(10);
l(greaterThan10(11));
// true