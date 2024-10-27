const hamButton = document.querySelector("#hamb");
const navigation = document.querySelector(".hm");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

const toggleViewButton = document.createElement('button');
toggleViewButton.textContent = "Toggle View";
const toggleContainer = document.querySelector('.toggle');

//main
const membershiplevel = [
    { membership: "Non Profit Organization" },
    { membership: "Bronze Membership" },
    { membership: "Silver Membership" },
    { membership: "Gold Membership" }
];

const member = document.getElementById("Membership");

membershiplevel.forEach(membership => {
    const option = document.createElement("option");
    option.textContent = membership.membership;
    member.appendChild(option);
});

document.getElementById("timestamp").value = new Date().toISOString();




const yearSpan = document.querySelector('.year');
const lastUpdateSpan = document.querySelector('.lastUpdate');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;
const lastModified = new Date(document.lastModified);
lastUpdateSpan.textContent = lastModified.toLocaleDateString();
