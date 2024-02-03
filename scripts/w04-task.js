/* LESSON 4 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Andres Rojas",
    photo: "images/SW.jpg",
    favoriteFoods: [
        "Lasagna", 
        "Pizza", 
        "Salmon",
        "Soup"
    ],
    hobbies: [
        "Jiu-Jitsu",
        "Riding my Bicycle",
        "Soccer"
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Asker, Norway",
        length: "One month"
    },
    {
        place: "Sioux Falls, South Dakota, USA",
        length: "Two years"
    },
    {
        place: "Ocaña, Colombia",
        length: "Three years"
    }
); 

/* DOM Manipulation - Output */

/* Name */
document.getElementById("name").textContent = myProfile.name;
//document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.getElementById("photo").src = myProfile.photo;
document.getElementById("photo").alt = myProfile.name;
//const imageElement = document.getElementById("photo");
//imageElement.setAttribute ("src", myProfile.photo);
//imageElement.setAttribute ("alt", myProfile.name);

/* Favorite Foods List*/
// Accessing the HTML <ul> element with ID 'favorite-foods'
const favoriteFoodsList = document.getElementById("favorite-foods");

// Iterating over the 'favoriteFoods' array using forEach as requested
myProfile.favoriteFoods.forEach((food) => {
    // Creating a new HTML <li> element
    let listItem = document.createElement('li');

    // Setting the textContent of the <li> element to the value of the 'food' array element
    listItem.textContent = food;

    // Append the <li> element as a child of the HTML <ul> element
    favoriteFoodsList.appendChild(listItem);
});

/* Hobbies List */
// Accessing the HTML <ul> element with ID 'hobbies'
const hobbiesList = document.getElementById("hobbies");

// Iterating over the 'hobbies' array using forEach as requested
myProfile.hobbies.forEach((hobby) => {
    // Creating a new HTML <li> element
    let listItem = document.createElement('li');

    // Setting the textContent of the <li> element to the value of the 'hobby' array element
    listItem.textContent = hobby;

    // Append the <li> element as a child of the HTML <ul> element
    hobbiesList.appendChild(listItem);
});

/* Places Lived DataList */
// Access the HTML <dl> element with ID 'places-lived'
const placesLivedList = document.getElementById('places-lived');

// Iterate over the 'placesLived' array using forEach
myProfile.placesLived.forEach((place) => {
    // Create a new HTML <dt> element
    const dtElement = document.createElement('dt');
    
    // Set the textContent of the <dt> element to the value of the 'place' property
    dtElement.textContent = place.place;

    // Create a new HTML <dd> element
    const ddElement = document.createElement('dd');
    
    // Set the textContent of the <dd> element to the value of the 'length' property
    ddElement.textContent = place.length;

    // Create a new HTML <dl> element to hold the pair of <dt> and <dd>
    const dlElement = document.createElement('dl');

    // Append the <dt> and <dd> elements as children of the new <dl> element
    dlElement.appendChild(dtElement);
    dlElement.appendChild(ddElement);

    // Append the new <dl> element as a child of the HTML <dl> element
    placesLivedList.appendChild(dlElement);
});

