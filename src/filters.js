function filterByTerm (inputArr, searchTerm) {
  const regex = new RegExp(searchTerm, 'i')

  return inputArr.filter(function (arrayElement) {
    return arrayElement.url.match(regex)
  })
}

function filterByName (inputArr, name) {
  return inputArr.filter(element => element === name)
}

module.exports = { filterByTerm, filterByName }
