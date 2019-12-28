// Your code here
function mapToNegativize(sourceArray) {
  let negativeArray = []
  for (let i = 0; i < sourceArray.length; i++) {
  //sourceArray.forEach(function(item) {
    negativeArray.push(sourceArray[i] * -1)
  }
  //})
  return negativeArray
}

function mapToNoChange(sourceArray) {
  let sameArray = []
  for (let i = 0; i < sourceArray.length; i++) {
  //sourceArray.forEach(function(item) {
    sameArray.push(sourceArray[i])
  }
  //})
  return sameArray
}

function mapToDouble(sourceArray) {
  let doubleArray = []
  for (let i = 0; i < sourceArray.length; i++) {
  //sourceArray.forEach(function(item) {
    doubleArray.push(sourceArray[i] * 2)
  }
  //})
  return doubleArray
}

function mapToSquare(sourceArray) {
  let squareArray = []
  for (let i = 0; i < sourceArray.length; i++) {
  //sourceArray.forEach(function(item) {
    squareArray.push(sourceArray[i] * sourceArray[i])
  }
  //})
  return squareArray
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  let endPoint = startingPoint
  for (let i = 0; i < sourceArray.length; i++) {
    endPoint = endPoint + sourceArray[i]
  }
  return endPoint
}

function reduceToAllTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (!sourceArray[i]) return false
  }
  return true
}

function reduceToAnyTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (!!sourceArray[i]) {
      return true
    }
  }
  return false
}
