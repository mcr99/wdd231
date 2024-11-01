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

const activities = [
    { activity: "Grooming" },
    { activity: "Park Activities" },
];

const act = document.getElementById("activity");

activities.forEach(activity => {
    const option = document.createElement("option");
    option.textContent = activity.activity;
    act.appendChild(option);
});

const openButton1 = document.querySelector(".openButton1");
const openButton2 = document.querySelector(".openButton2");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");
const dialogBoxText = document.querySelector("#dialogBox div");


openButton1.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = "The Grooming option will include haircut, nails and a shower. For just $20.00"
});

openButton2.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = "Park activities are available just for $5.00 per dog"
});

closeButton.addEventListener("click", () => {
    dialogBox.close();
});

// footer

const yearSpan = document.querySelector('.year');
const lastUpdateSpan = document.querySelector('.lastUpdate');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;
const lastModified = new Date(document.lastModified);
lastUpdateSpan.textContent = lastModified.toLocaleDateString();
