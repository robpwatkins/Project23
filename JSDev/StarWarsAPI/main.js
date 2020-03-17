const starWarsCharacter = () => {
  fetch('https://swapi.co/api/planets/')
  .then(response => {
    return response.json()
  })
  .then(myJson => {
    data = JSON.stringify(myJson)
    console.log(data)
  })
}

starWarsCharacter();