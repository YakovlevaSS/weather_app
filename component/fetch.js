export function getFetch(city) {
    const keyAPI = '6b9c5356dda640438ce133953232508'
    const url = `http://api.weatherapi.com/v1/current.json?key=${keyAPI}&q=${city}`

    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data.location.name)
            console.log(data.location.country)
            console.log(data.current.temp_c)
            console.log(data.current.condition.text)
        })
    //http://api.weatherapi.com/v1/current.xml?key=6b9c5356dda640438ce133953232508&q=London
}
