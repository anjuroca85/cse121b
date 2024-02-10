/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("div");
var templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    reset(); // Clear existing content

    temples.forEach((temple) => {
        const articleElement = document.createElement("article");
    
        const h3Element = document.createElement("h3");
        h3Element.textContent = temple.templeName;
    
        const imgElement = document.createElement("img");
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;
    
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);
    
        templesElement.appendChild(articleElement);
      });
}


/* async getTemples Function using fetch()*/
const getTemples = async() => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        templeList = await response.json();
        displayTemples(templeList);
        //console.log(templeList);
    }
}


/* reset Function */
function reset(){
    templesElement.innerHTML = "";
}

/* filterTemples Function */
function filterTemples(temples) {
    reset()
    let filter = document.getElementById("filtered").value;

    switch(filter) {
        case "utah":
            let utahTemples = temples.filter(temple => temple.location.toLowerCase().includes("utah"));
            displayTemples(utahTemples);
            break
    }

    switch(filter) {
        case "notutah":
            let nonUtahTemples = temples.filter(temple => !(temple.location.toLowerCase().includes("utah")));
            displayTemples(nonUtahTemples);
            break
    }

    switch(filter) {
        case "older":
            let olderTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1950);
            displayTemples(olderTemples);
            break
    }

    switch(filter) {
        case "all":
            let allTemples = temples.filter(temple => temple.templeName);
            displayTemples(allTemples);
            break
    }

    switch(filter){
        case "sort":
            let sortedTemples = [...temples].sort((a, b) => a.templeName.localeCompare(b.templeName));
            displayTemples(sortedTemples);
            break;
    }
    
}


getTemples();

/* Event Listener */

document.querySelector("#filtered").addEventListener("change", () => {filterTemples(templeList)});