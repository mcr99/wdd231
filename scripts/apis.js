/*
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = '//api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.63&units=metric&appid=1d641bc7e6f2f6459b62973c0af99dbf';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(wdata) {
    currentTemp.innerHTML = `${wdata.main.temp.toFixed(0)}`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const arr = desc.split("");
    for (var i = 0; i < arr.lenght; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const desc2 = arr.join("");

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc2);
    captionDesc.textContent = desc2;
}

*/


const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const myKey = "1d641bc7e6f2f6459b62973c0af99dbf"
const myLat = "49.752483870173684"
const myLong = "6.63708308547088"

const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`

async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    console.log('hello')
}

apiFetch();