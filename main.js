import './style/style.css'
import { renderError, renderWeatherCard } from './component/renderWeatherCard'
import { getFetch } from './component/fetch.js'

const formSearch = document.querySelector('.search')
const inputSearch = document.querySelector('.search__input')
const appEl = document.querySelector('.appEl')
export let city = ''

formSearch.onsubmit = function (e) {
    e.preventDefault()
    city = inputSearch.value.trim()

    function getWeather() {
        return getFetch().then((data) => {
            if (data.error) {
                return renderError(appEl, data)
            } else {
                return renderWeatherCard(appEl, data)
            }
        })
    }
    getWeather()
}
