const { log:l } = console;
let empty = {
  optional: 'bruh'
};

// Every obj inherits toString() method from Object.prototype
l(
  empty.toString,
  empty.test.toString()
);

// Every obj has its Object.prototype, we can't get the prototype of Object.prototype, as it is the most higher level prototype in the tree chain
l(
  Object.getPrototypeOf({}) === Object.prototype, // true
  Object.getPrototypeOf(Object.prototype) // null
);