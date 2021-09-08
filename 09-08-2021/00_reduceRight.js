function reduceRight(array, startingPoint, combinator) {
  let output = startingPoint;

  for (let i = array.length - 1; i >= 0; --i) {
    output = combinator(output, array[i]);
  }

  return output;
}

console.log(
  reduceRight(["o", "l", "l", "e", "h"], "", (prev, curr) => {
    return prev + curr;
  })
);
