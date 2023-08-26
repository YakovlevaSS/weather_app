export function renderWeatherCard(appEl, data) {
    const htmlEl = `        <div class="weather-content">
    <div class="weather-card">
            <h2 class="weather-card__title">${data.location.name}<span>${data.location.country}</span></h2>
        <div class="weather-card__content">
            <div class="weather-card__value">${data.current.temp_c}<sup>°c</sup></div>
            <img class="weather-card__img" src="./static/8 1.svg" alt="Weather">
        </div>
        <div class="weather-card-description">${data.current.condition.text}</div>`
    appEl.innerHTML = htmlEl
}
