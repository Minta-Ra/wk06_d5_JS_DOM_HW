document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');

    // For submit/save form
    const formInput = document.querySelector('#new-animal-form');
    formInput.addEventListener('submit', handleFormSubmit);
});

const handleFormSubmit = function(event) {
    event.preventDefault();
    const animalListItem = createAnimalListItem(event.target);
    const animalList = document.querySelector('#animal-list');
    animalList.appendChild(animalListItem);
    // event.target.reset();
}

// Create list of animals
const createAnimalListItem = function(form) {
    const animalListItem = document.createElement('li');
    animalListItem.classList.add('animal-list-item');

    const name = document.createElement('h3');
    name.textContent = form.name.value;
    animalListItem.appendChild(name);

    const species = document.createElement('h3');
    species.textContent = form.species.value;
    animalListItem.appendChild(species);

    const continent = document.createElement('h3');
    continent.textContent = form.continent.value;
    animalListItem.appendChild(continent);

    return animalListItem;
}