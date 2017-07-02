Promise.fromCallback = function(fn, thisArg) {
  return new Promise(function(resolve, reject) {
    fn.call(thisArg, function(error) {
      if (error) {
        reject(error);
      } else {
        if (arguments.length === 0) {
          resolve();
        } else if (arguments.length === 1) {
          resolve(arguments[1]);
        } else {
          resolve(Array.prototype.slice.call(arguments, 1));
        }
      }
    });
  })
};

Promise.prototype.fromCallback = function(fn, thisArg) {
  return this.then(function() {
    const args = Array.prototype.slice.call(arguments);
    args.unshift(undefined);

    fn = fn.bind.apply(fn, args);

    return Promise.fromCallback(fn, thisArg);
  });
};