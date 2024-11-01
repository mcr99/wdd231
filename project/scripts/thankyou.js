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

const currentUrl = window.location.href;
console.log(currentUrl);
const everything = currentUrl.split('?');
console.log(everything);

let formData = everything[1].split('&');
console.log(formData);

function show(i) {
    let result = "";
    formData.forEach((element) => {
        if (element.startsWith(i)) {
            result = element.split('=')[1].replace("%40", "@").replace("T", " at ").replace("%3A", ":").replace("%3A", ":").replace("Z", " UTC"); // Decode %40 for @ symbol
        }
    });
    return result;
}

const firstName = show("fname");
const lastName = show("lname");
const phoneNumber = show("phone");
const email = show("email");
const date = show("date");
const activity = show("Activity");
const comments = show("comments");

const showInfo = document.querySelector('#results');
showInfo.innerHTML = `
    <p>Request submitted for: ${firstName} ${lastName}</p>
    <p>Your Email: ${email}</p>
    <p>Your phone number: ${phoneNumber} </p>
    <p>You selected the date: ${date}</p>
    <p>Activity requested: ${activity}</p>
    <p>Additional information: ${comments}</p>
    <p> Thank you for choosing us</p>

`;



// footer

const yearSpan = document.querySelector('.year');
const lastUpdateSpan = document.querySelector('.lastUpdate');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;
const lastModified = new Date(document.lastModified);
lastUpdateSpan.textContent = lastModified.toLocaleDateString();
