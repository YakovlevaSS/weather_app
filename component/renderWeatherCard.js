import { conditions } from './condition.js'

export function renderWeatherCard(appEl, data) {
    console.log(data.current.condition.code)

    const info = conditions.find(
        (obj) => obj.code === data.current.condition.code,
    )
    console.log(info)
    console.log(info.languages[23]['day_text'])

    const htmlEl = `
    <div class="weather-content">
    <div class="weather-card">
            <h2 class="weather-card__title">${data.location.name}<span>${data.location.country}</span></h2>
        <div class="weather-card__content">
            <div class="weather-card__value">${data.current.temp_c}<sup>°c</sup></div>
            <img class="weather-card__img" src="./static/8 1.svg" alt="Weather">
        </div>
        <div class="weather-card-description">${info.languages[23]['day_text']}</div>`
    appEl.innerHTML = htmlEl
}
export function renderError(appEl, data) {
    console.log(data.error.message)
    const htmlEl = `
    <div class="weather-content">
    <div class="weather-card">
    <p class="error">Данный город не найден</p>
    </div>
    </div>`
    appEl.innerHTML = htmlEl
}
