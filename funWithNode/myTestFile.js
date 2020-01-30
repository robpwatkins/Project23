const formatPhone = (arr) => {
  const str = arr.join('')
  return `+${str.substring(0, 1)}${str.substring(1, 4)}${str.substring(4, 7)}${str.substring(7)}`
}

formatPhone([1, 9, 7, 7, 5, 6, 3, 1, 2, 1, 2])