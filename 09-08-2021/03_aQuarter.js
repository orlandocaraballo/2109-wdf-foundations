function aQuarter(func) {
  let count = 0;

  return function (...args) {
    count++;

    // if count if multiple of 4
    if (count % 4 === 0) {
      // run the function
      return func(...args);
    } else {
      // return this string
      return "something went wrong :/";
    }
  };
}

const functionReturned = aQuarter((a, b) => a + b);

console.log(functionReturned(13, 2));
console.log(functionReturned(13, 2));
console.log(functionReturned(13, 2));
console.log(functionReturned(13, 2));

console.log(functionReturned(13, 2));
console.log(functionReturned(13, 2));
console.log(functionReturned(13, 2));
console.log(functionReturned(13, 2));
