// header
const hamButton = document.querySelector("#hamb");
const navigation = document.querySelector(".hm");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

const toggleViewButton = document.createElement('button');
toggleViewButton.textContent = "Toggle View";
const toggleContainer = document.querySelector('.toggle');


// main  

const weatherImage = document.querySelector('#weatherImage');
const temperature = document.querySelector('#temperature');
const description = document.querySelector('#description');
const high = document.querySelector('#high');
const low = document.querySelector('#low');
const humidity = document.querySelector('#humidity');

const myKey = "1d641bc7e6f2f6459b62973c0af99dbf"
const vnLat = "14.529740681459428"
const vnLong = "-90.59610041385716"


const myURLToday = `//api.openweathermap.org/data/2.5/weather?lat=${vnLat}&lon=${vnLong}&appid=${myKey}&units=metric`
const myURLNext = `//api.openweathermap.org/data/2.5/forecast/daily?lat=${vnLat}&lon=${vnLong}&appid=${myKey}&units=metric`

async function wheater() {
    try {
        const i = await fetch(myURLToday);
        if (i.ok) {
            const data = await i.json();
            results(data);
        } else {
            throw Error(await i.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function results(data) {
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    weatherImage.setAttribute("SRC", iconsrc)
    weatherImage.setAttribute("alt", data.weather[0].description)
    temperature.innerHTML = `${data.main.temp}&degC`
    description.innerHTML = `${data.weather[0].description}`
    high.innerHTML = `${data.main.temp_max}&degC`
    low.innerHTML = `${data.main.temp_min}&degC`
    humidity.innerHTML = `${data.main.humidity}%`
}

wheater();

// footer

const yearSpan = document.querySelector('.year');
const lastUpdateSpan = document.querySelector('.lastUpdate');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;
const lastModified = new Date(document.lastModified);
lastUpdateSpan.textContent = lastModified.toLocaleDateString();
