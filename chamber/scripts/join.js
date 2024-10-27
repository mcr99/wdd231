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

//lean more button

const openButton1 = document.querySelector(".openButton1");
const openButton2 = document.querySelector(".openButton2");
const openButton3 = document.querySelector(".openButton3");
const openButton4 = document.querySelector(".openButton4");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");
const dialogBoxText = document.querySelector("#dialogBox div");

openButton1.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = "Cost: $5.99. It will be display on the page with some aditional contact information "
});

openButton2.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = "Cost: $10.99. It will display on the website and also it will be display the contact information and support up to 3 free calls per month"
});

openButton3.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = "Cost: $19.99. It will display on the website and also it will be display the contact information and support up to 10 free calls per month"
});

openButton4.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = "Cost: $29.99. It will display on the website and also it will be display the contact information, support 24/7 for free and a personal agent available mon-fri from 8:00am to 4:00pm Central Time"
});

closeButton.addEventListener("click", () => {
    dialogBox.close();
});


const yearSpan = document.querySelector('.year');
const lastUpdateSpan = document.querySelector('.lastUpdate');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;
const lastModified = new Date(document.lastModified);
lastUpdateSpan.textContent = lastModified.toLocaleDateString();
