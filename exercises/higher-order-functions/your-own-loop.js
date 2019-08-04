const loop = (value, testFn, updateFn, bodyFn) => {
  if (!testFn(value)) {
    return false;
  }

  bodyFn(value);
  value = updateFn(value);

  return loop(value, testFn, updateFn, bodyFn);
}

loop(10, n => n > 0, n => n - 1, console.log);