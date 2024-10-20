// Header
const hamButton = document.querySelector("#hamb");
const navigation = document.querySelector(".hm");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

const toggleViewButton = document.createElement('button');
toggleViewButton.textContent = "Toggle View";
const toggleContainer = document.querySelector('.toggle');

// Main

const weatherImage = document.querySelector('#weatherImage');
const temperature = document.querySelector('#temperature');
const description = document.querySelector('#description');
const high = document.querySelector('#high');
const low = document.querySelector('#low');
const humidity = document.querySelector('#humidity');
const tomorrow = document.querySelector('#tomorrow');


const myKey = "1d641bc7e6f2f6459b62973c0af99dbf"
const myLat = "14.631188482034776"
const myLong = "-90.50561298503085"

const myURLToday = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`
const myURLNext = `//api.openweathermap.org/data/2.5/forecast/daily?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`

async function apiFetchT() {
    try {
        const response = await fetch(myURLToday);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
/*
async function apiFetchN() {
    try {
        const response = await fetch(myURLNext);
        if (response.ok) {
            const data = await response.json();
            displayNextDaysWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
    */

function displayResults(data) {
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    weatherImage.setAttribute("SRC", iconsrc)
    weatherImage.setAttribute("alt", data.weather[0].description)
    temperature.innerHTML = `${data.main.temp}&degC`
    description.innerHTML = `${data.weather[0].description}`
    high.innerHTML = `${data.main.temp_max}&degC`
    low.innerHTML = `${data.main.temp_min}&degC`
    humidity.innerHTML = `${data.main.humidity}%`
}

/*
function displayNextDaysWeather(data) {
    const dailyForecasts = [];

    for (let i = 0; i < data.list.length; i += 8) {
        const forecast = data.list[i];
        dailyForecasts.push({
            temp: forecast.main.temp,
            description: forecast.weather[0].description,
            icon: forecast.weather[0].icon,
            date: new Date(forecast.dt * 1000).toLocaleDateString(),
        });
    }
        
}
    */

async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) {
            throw new Error(`Network response was not ok, status: ${response.status}`);
        }
        const data = await response.json();

        const members = data.members;
        const companiesContainer = document.querySelector('.companies');

        if (companiesContainer) {
            companiesContainer.innerHTML = '';

            const selectedCompanies = [];
            for (let i = 0; i < 2; i++) {
                const randomIndex = Math.floor(Math.random() * members.length);
                selectedCompanies.push(members[randomIndex]);
            }

            selectedCompanies.forEach(member => {
                const memberCard = document.createElement('div');
                memberCard.classList.add('member-card');
                memberCard.innerHTML = `
                    <img src="${member.image}" alt="${member.name} logo" width="20%" height="20%" loading="lazy"> 
                    <h2>${member.name}</h2>
                    <p>${member.address}</p>
                    <p>${member.phonenumber}</p>
                    <a href="${member.url}" target="_blank">Visit Website</a>
                    <p> Membership Level: ${member.membershiplevel}</p>
                    <p>Established: ${member.otherinformation}</p>
                `;
                companiesContainer.appendChild(memberCard);
            });
        } else {
            console.error('Error: .companies container not found in fetchMembers');
        }
    } catch (error) {
        console.error("Error fetching member data:", error);
    }
}

apiFetchT();
// apiFetchN();
fetchMembers();












// Footer

const yearSpan = document.querySelector('.year');
const lastUpdateSpan = document.querySelector('.lastUpdate');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;
const lastModified = new Date(document.lastModified);
lastUpdateSpan.textContent = lastModified.toLocaleDateString();
