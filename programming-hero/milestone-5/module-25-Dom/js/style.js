const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = "2px solid blue";
    section.style.marginBottom = "5px";
    section.style.borderRadius = "16px";
    section.style.paddingLeft = "30px";
    section.style.backgroundColor = "yellowGreen"
}

//style a specific container

// const placesContainer = document.getElementById("places-container");

// placesContainer.style.backgroundColor = "yellow";

const placesContainer = document.getElementById("places-container");

placesContainer.classList.add('text-center');

placesContainer.classList.remove('large-text','text-center');