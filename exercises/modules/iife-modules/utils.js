(() => {
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

  function getFirstItem(arr) {
    return arr[0];
  }

  function getLastItem(arr) {
    return arr[arr.length - 1];
  }

  APP = {
    utils: {
      getFirstItem: getFirstItem,
      once: once
    }
  }
})();