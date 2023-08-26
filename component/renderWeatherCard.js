export function renderWeatherCard(appEl) {
    const htmlEl = `        <div class="weather-content">
    <div class="weather-card">
            <h2 class="weather-card__title">London<span>GB</span></h2>
        <div class="weather-card__content">
            <div class="weather-card__value">11<sup>°c</sup></div>
            <img class="weather-card__img" src="./static/8 1.svg" alt="Weather">
        </div>
        <div class="weather-card-description">Облачно</div>
    </div>            
    </div>`
    appEl.innerHTML = htmlEl
}
