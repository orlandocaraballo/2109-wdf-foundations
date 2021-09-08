function keyAdder() {
  return Object.values(this)
    .filter((value) => typeof value === "number")
    .reduce((sum, value) => sum + value);
}

console.log(keyAdder.call({ a1: 1, a2: 3, a3: 5 }));
