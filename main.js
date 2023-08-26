import './style/style.css'
import { getFetch } from './component/fetch.js'
import { renderWeatherCard } from './component/renderWeatherCard'

const formSearch = document.querySelector('.search')
const inputSearch = document.querySelector('.search__input')
const appEl = document.querySelector('.appEl')
let city = ''

formSearch.onsubmit = function (e) {
    e.preventDefault()
    city = inputSearch.value.trim()
    console.log(city)

    getFetch(city)
    renderWeatherCard(appEl)
}
