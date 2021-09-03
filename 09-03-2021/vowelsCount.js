function vowelsCount(string) {
  const initialObject = { a: 0, e: 0, i: 0, o: 0, u: 0, total: 0 };

  const callback = (outputObject, currentCharacter) => {
    if ("aeiou".includes(currentCharacter)) {
      outputObject[currentCharacter]++;
      outputObject.total++;
    }

    return outputObject;
  };

  // two ways of representing a callback function
  // const sumCallback = (sum, currentValue) => sum + currentValue;
  // const sumCallbackLonger = (sum, currentValue) => {
  //   return sum + currentValue
  // };

  // alternative way of writing a reducer function
  // const sumCallbackEvenLonger = function(sum, currentValue) {
  //   return sum + currentValue
  // };

  return string
    .toLowerCase() // orlando caraballo
    .split("") // ['o', 'r', 'l', 'a'...]
    .reduce(callback, initialObject);
}

console.log(vowelsCount("Orlando Caraballo"));
