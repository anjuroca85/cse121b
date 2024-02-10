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


getTemples();

/* Event Listener */
