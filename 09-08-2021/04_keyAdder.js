// this function is run using call, apply or bind therefore,
//  we use whatever has been set as its this as the set of values,
//  we filter down by only numbers and then add them all together
function keyAdder() {
  return Object.values(this)
    .filter((value) => typeof value === "number")
    .reduce((sum, value) => sum + value);
}

console.log(keyAdder.call({ a1: 1, a2: 3, a3: 5 }));
