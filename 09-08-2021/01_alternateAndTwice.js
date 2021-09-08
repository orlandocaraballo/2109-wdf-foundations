function alternate(funcToRun) {
  let count = 0;

  return function () {
    if (count % 2 === 0) {
      funcToRun();
    }

    count++;
  };
}

function twice(funcToRun) {
  let count = 0;

  return function () {
    count++;

    if (count <= 2) {
      return funcToRun();
    } else {
      return 0;
    }
  };
}
