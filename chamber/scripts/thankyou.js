const hamButton = document.querySelector("#hamb");
const navigation = document.querySelector(".hm");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

const toggleViewButton = document.createElement('button');
toggleViewButton.textContent = "Toggle View";
const toggleContainer = document.querySelector('.toggle');

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

const firstName = show("first-name");
const lastName = show("last-name");
const organizationalTitle = show("organizational-title");
const businessName = show("business-name");
const email = show("email");
const phoneNumber = show("phone-number");
const membershipType = show("description");
const timestamp = show("timestamp");

const showInfo = document.querySelector('#results');
showInfo.innerHTML = `
    <p>Request submitted for: ${firstName} ${lastName}, ${organizationalTitle} from ${businessName}</p>
    <p>Email: ${email}</p>
    <p>Phone Number: ${phoneNumber}</p>
    <p>Membership's Type: ${membershipType}</p>
    <p>Submitted: ${timestamp}</p>
`;


const yearSpan = document.querySelector('.year');
const lastUpdateSpan = document.querySelector('.lastUpdate');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;
const lastModified = new Date(document.lastModified);
lastUpdateSpan.textContent = lastModified.toLocaleDateString();

