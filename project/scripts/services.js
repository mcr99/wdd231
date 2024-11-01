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

async function fetchMembers() {
    try {
        const response = await fetch('data/services.json');
        if (!response.ok) {
            throw new Error(`Network response was not ok, status: ${response.status}`);
        }
        const data = await response.json();

        const services = data.services;
        const actCont = document.querySelector('.activities');

        if (actCont) {
            actCont.innerHTML = '';

           const selectedActivity = [];
           for (let i = 0; i < 4; i++) {
               const randomIndex = Math.floor(Math.random() * services.length);
                selectedActivity.push(services[randomIndex]);
            }

            selectedActivity.forEach(services => {
                const actCard = document.createElement('div');
                actCard.classList.add('activity-card');
                actCard.innerHTML = `
                    <img src="${services.image}" alt="${services.activity} logo" width="50%" height="50%" loading="lazy"> 
                    <h2>${services.details}</h2>
                `;
                actCont.appendChild(actCard);
            });
        } else {
            console.error('Error: .activities container not found in fetchMembers');
        }
    } catch (error) {
        console.error("Error fetching activities data:", error);
    }
}

fetchMembers();

// footer

const yearSpan = document.querySelector('.year');
const lastUpdateSpan = document.querySelector('.lastUpdate');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;
const lastModified = new Date(document.lastModified);
lastUpdateSpan.textContent = lastModified.toLocaleDateString();
