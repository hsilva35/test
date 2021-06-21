function sortByNumber (inputArr, order) {
  if (order === 'asc') { return inputArr.sort((a, b) => b - a) } else { return inputArr.sort((a, b) => a - b) }
}

module.exports = sortByNumber
