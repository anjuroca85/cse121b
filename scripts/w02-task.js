/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Andres Rojas";
let currentYear = new Date().getFullYear(); //2024
const profilePicture = "images/SW.jpg";


/* Step 3 - Element Variables */
 const nameElement = document.getElementById("name");
 const foodElement = document.getElementById("food");
 const yearElement = document.querySelector("#year");
 const imageElement = document.querySelector("img");


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute ("src", profilePicture);
imageElement.setAttribute ("alt", `Profile image of ${fullName}`);


/* Step 5 - Array */
let favFood = ["Pizza", "Soup", "Lasagna", "Salmon"];
foodElement.innerHTML = favFood;

let otherFavFood = ["Fruit"];//adds a new element to the array
favFood.push(otherFavFood);
foodElement.innerHTML += `<br> ${favFood}`;

favFood.shift(otherFavFood);//removes first element of the array
foodElement.innerHTML += `<br> ${favFood}`

favFood.pop(otherFavFood);//removes last element of the array
foodElement.innerHTML += `<br> ${favFood}`
