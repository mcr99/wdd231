const hamButton = document.querySelector("#hamb");
const navigation = document.querySelector(".hm");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

const toggleViewButton = document.createElement('button');
toggleViewButton.textContent = "Toggle View";
const toggleContainer = document.querySelector('.toggle');

let companiesContainer;

if (toggleContainer) {
    toggleContainer.insertBefore(toggleViewButton, toggleContainer.firstChild);

    toggleViewButton.addEventListener('click', () => {
        if (companiesContainer) {
            companiesContainer.classList.toggle('grid-view');
            companiesContainer.classList.toggle('list-view');
        } else {
            console.error('Error: .companies container not found in toggle view');
        }
    });
} else {
    console.error('Error: .toggle container not found');
}

async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) {
            throw new Error(`Network response was not ok, status: ${response.status}`);
        }
        const data = await response.json();
        const members = data.members;

        companiesContainer = document.querySelector('.companies');

        if (companiesContainer) {
            companiesContainer.innerHTML = '';

            members.forEach(member => {
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

const yearSpan = document.querySelector('.year');
const lastUpdateSpan = document.querySelector('.lastUpdate');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;
const lastModified = new Date(document.lastModified);
lastUpdateSpan.textContent = lastModified.toLocaleDateString();

fetchMembers();
