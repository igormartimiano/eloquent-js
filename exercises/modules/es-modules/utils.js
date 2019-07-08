function once(fn, args) {
  let result;

  return () => {
    if (fn) {
      result = fn.apply(args || this, arguments);
      fn = null;
    }

    return result;
  }
}

export function getFirstItem(arr) {
  return arr[0];
}

export function getLastItem(arr) {
  return arr[arr.length - 1];
}