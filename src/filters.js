function filterByTerm (inputArr, searchTerm) {
  const regex = new RegExp(searchTerm, 'i')

  return inputArr.filter(function (arrayElement) {
    return arrayElement.url.match(regex)
  })
}

function filterByName (inputArr, name) {
  return inputArr.filter(element => element.name === name)
}

function filterByLastname (inputArr, lastname) {
  return inputArr.filter(element => element.lastame === lastname)
}

function filterByA (inputArr, a) {
  return inputArr.filter(element => element.a === a)
}

function filterByB (inputArr, b) {
  return inputArr.filter(element => element.b === b)
}

function filterByD (inputArr, c) {
  return inputArr.filter(element => element.c === c)
}

module.exports = {
  filterByTerm,
  filterByName,
  filterByLastname,
  filterByA,
  filterByB,
  filterByD
}
