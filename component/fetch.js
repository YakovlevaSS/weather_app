import { city } from '../main.js'
export function getFetch() {
    const keyAPI = '6b9c5356dda640438ce133953232508'
    const url = `http://api.weatherapi.com/v1/current.json?key=${keyAPI}&q=${city}`

    return fetch(url).then((response) => {
        return response.json()
    })
    //http://api.weatherapi.com/v1/current.xml?key=6b9c5356dda640438ce133953232508&q=London
}
