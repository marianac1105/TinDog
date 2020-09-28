function fibonacciGenerator(n) {
  let output = []
  if (n === 1) {
    output = [0]
  } else if (n === 2) {
    output = [0, 1]
  } else {
    output=[0,1]
    for (var x = 2; x < n; x++) {
      let lastNumber = output[output.length - 1]
      let secondLastNumber = output[output.length - 2]
      output.push(lastNumber + secondLastNumber)


    }
  }
  return output
}
