const hamButton = document.querySelector("#hamb");
const navigation = document.querySelector(".hm");

hamButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
        hamButton.classList.toggle("open");
    });


async function fetchname() {
    try {
        const response = await fetch('members.json');
        const data = await response.json();
        const members = data.members;

        const companiesContainer = document.querySelector('.companies');
        companiesContainer.innerHTML = '';

        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');
            memberCardinnerHTML = `
            <img src="${member.image}" alt="${member.name} logo" loading="lazy">
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