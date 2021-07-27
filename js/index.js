// Getting references
let $dc = document.getElementById('dynamic-content');

// Get all buttons in a NODE LIST of buttons (array like structure)
let nodeList = document.querySelectorAll("button");

// Load your images on page-load
function preloader() {
    const imagesPaths = [
        "../img/solar.jpg",
        "../img/wind.jpg",
        "../img/geothermal.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesPaths.length; i++) {
        images[i] = new Image();
        images[i].src = imagesPaths[i];
    }

    // Images ready to be used:
        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};    
window.addEventListener("load", preloader);


/* 
Complete your resource-object that will store the dynamic content.
Resource object should 3 sub-objects. Give your sub-objects
meaningful names. Every sub-object should have the following
properties headingContent, bodyText, imgUrl and imgAlt. */
// resource 
const data = {
    solar: {
        heading: 'Solar Energy',
        imageURL: '../img/solar.jpg',
        imageAlt: 'Solar Panel',
        bodyText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis asperiores eius, porro voluptatum nihil neque voluptatem iste dicta commodi quisquam debitis eum fuga aspernatur! Odio consequuntur voluptatibus fugiat quae?'  
    },
    wind: {
        heading: 'Wind Energy',
        imageURL: '../img/wind.jpg',
        imageAlt: 'Wind Turbine',
        bodyText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis asperiores eius, porro voluptatum nihil neque voluptatem iste dicta commodi quisquam debitis eum fuga aspernatur! Odio consequuntur voluptatibus fugiat quae?'  
    },
    geothermal: {
        heading: 'Geothermal Energy',
        imageURL: '../img/geothermal.jpg',
        imageAlt: 'Geothermal Energy',
        bodyText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis asperiores eius, porro voluptatum nihil neque voluptatem iste dicta commodi quisquam debitis eum fuga aspernatur! Odio consequuntur voluptatibus fugiat quae?'  
    },
};

console.log(data.solar);
console.log(data.wind);
console.log(data.geothermal);

// create the initial page markup:
let markup = {
    solar: `<h2>${data.solar.heading}</h2>
    <img src="${data.solar.imageURL}" alt="${data.solar.imageAlt}" />
    <p>${data.solar.bodyText}</p>`,
    wind: `<h2>${data.wind.heading}</h2>
    <img src="${data.wind.imageURL}" alt="${data.wind.imageAlt}" />
    <p>${data.wind.bodyText}</p>`,
    geothermal: `<h2>${data.geothermal.heading}</h2>
    <img src="${data.geothermal.imageURL}" alt="${data.geothermal.imageAlt}" />
    <p>${data.geothermal.bodyText}</p>`,
}

$dc.innerHTML = markup;


  /* 
    Use conditional and event-object to check which button is clicked
    and based on that, create HTML with the data inside the backticks:
    `<h1>${headingContent}</h1>
        <img src="${imgUrl}" alt="${imgAlt}">
        <p>${bodyText}</p>`
    Assign this content to to your HTML-container that will 
    be dynamically loaded (you already got the reference to 
    this container before you started the function handleSelection) */ 


function handleClick (ev) { 
    // move the id-attribute to the currently click button
    let currentItem = ev.target;
    console.log(currentItem);

    // loop through the list of all nav-items
    for (let i = 0; i < nodeList.length; i++) {
        // if nav-item contains attribute type of id 
        if (nodeList[i].hasAttribute('id') && nodeList[i].id === 'active') {

        // remove the attribute type of 'id'
        nodeList[i].removeAttribute ('id');
        }
    }
    
    // add attribute to the currently clicked element
    currentItem.setAttribute('id', 'active');

    if (nodeList[0].hasAttribute("id")) {$dc.innerHTML = markup.solar;} 
    if (nodeList[1].hasAttribute("id")) {$dc.innerHTML = markup.wind;} 
    if (nodeList[2].hasAttribute("id")) {$dc.innerHTML = markup.geothermal;}
}

// Registering list items for click event:
nodeList[0].addEventListener('click', handleClick);
nodeList[1].addEventListener('click', handleClick);
nodeList[2].addEventListener('click', handleClick);



 
   





    
    /* 
    Remove the id active-button from the element that
    contains it prior to the click-event. 

    This will require the loop throught the NODE LIST of buttons. 
    Inside the loop, use conditional and the element object method
    hasAttribute() to check if the current button in the loop containes the id.
    If it does, use element-object property removeAttribute()
    to remove the id. */

    /*
    Use the element-object method setAttribute() to set the id active-button 
    to the currently clicked button. */

  

/* 
Close your handleSelection function here. */  

