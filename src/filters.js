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

module.exports = { filterByTerm, filterByName, filterByLastname }
