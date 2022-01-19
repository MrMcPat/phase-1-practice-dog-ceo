// console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

function fetchDogImg () {
    return fetch(imgUrl)
    .then((resp) => resp.json())
    .then((data) => {
        const dogContainer = document.getElementById("dog-image-container");
        data.message.forEach(dog => {
            const dogImg = document.createElement("img");
            dogImg.src = dog;
            dogContainer.appendChild(dogImg);
        })
    })
}

function fetchDogBreed () {
    return fetch(breedUrl)
    .then((resp) => resp.json())
    .then((data) => {
        const dogUl = document.getElementById("dog-breeds");
        for (const dog in data.message) {
            const dogBreed = document.createElement("li");
            const dogSubSection = document.createElement("ul");

            dogBreed.textContent = dog;
            dogBreed.classList.add(dog[0]);
            dogUl.appendChild(dogBreed);
            dogBreed.appendChild(dogSubSection);
            
            data.message[dog].forEach( dog => {
                const dogSubBreed = document.createElement("li");
                dogSubBreed.textContent = dog;
                dogSubSection.appendChild(dogSubBreed);
            })
        }
        dogUl.addEventListener("click", event => event.target.style.color = "pink");
    })
}

function filterDogBreeds () {
    const dogDropDown = document.getElementById("breed-dropdown");
    dogDropDown.addEventListener("change", event => {
    const dogList = document.querySelectorAll("li");
    const dogFilteredList = document.querySelectorAll(`li.${event.target.value}`);
    
        switch(event.target.value) {
            case "a":
                dogList.forEach(dog => dog.hidden = true);
                dogFilteredList.forEach(dog => dog.hidden = false);
                break;
            case "b":
                dogList.forEach(dog => dog.hidden = true);
                dogFilteredList.forEach(dog => dog.hidden = false);
                break;
            case "c":
                dogList.forEach(dog => dog.hidden = true);
                dogFilteredList.forEach(dog => dog.hidden = false);
                break;
            case "d":
                dogList.forEach(dog => dog.hidden = true);
                dogFilteredList.forEach(dog => dog.hidden = false);
                break;
            case "reset":
                dogList.forEach(dog => dog.hidden = false);
                break;
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    fetchDogImg();
    fetchDogBreed();
    filterDogBreeds();
  });
  