const hamButton = document.querySelector("#hamb");
const navigation = document.querySelector(".hm");

hamButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
        hamButton.classList.toggle("open");
    });

    /*
    const toggleViewButton = document.createElement('button');
    toggleViewButton.textContent = "Toggle View";
    document.body.appendChild(toggleViewButton);
    
    toggleViewButton.addEventListener('click', ()=>{
        const companiesContainer = document.querySelector('.companies');
        companiesContainer.classList.toggle('grid-view');
        companiesContainer.classList.toggle('list-view');
    });

    */


const companiesContainer = document.querySelector('.companies');
const toggleViewButton = document.createElement('button');
toggleViewButton.textContent = "Toggle View";

if (companiesContainer) {
companiesContainer.insertBefore(toggleViewButton, companiesContainer.firstChild);

toggleViewButton.addEventListener('click', () => {
    companiesContainer.classList.toggle('grid-view');
    companiesContainer.classList.toggle('list-view');
});
} else {
    console.error('Error: .companies container not found');
}


async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) {
            throw new Error(`Network response was not ok, status: ${response.status}`);
        }
        const data = await response.json();
        const members = data.members;

        const companiesContainer = document.querySelector('.companies');
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