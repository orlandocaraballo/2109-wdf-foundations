function alternate(callback) {
  let count = 0;

  // returns a closure to run every other time
  //  that keeps track of how many times count has run
  return function () {
    // we only run the function if we run it a multiple of 2 times
    if (count % 2 === 0) {
      callback();
    }

    count++;
  };
}

function twice(callback) {
  let count = 0;

  // returns a closure to run only twice
  //  that keeps track of how many times count has run
  return function () {
    count++;

    // if the count is less than or equal to 2 then we run the callback
    if (count <= 2) {
      return callback();
    } else {
      // otherwise return 0
      return 0;
    }
  };
}
