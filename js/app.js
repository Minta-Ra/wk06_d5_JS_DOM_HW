document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');

    // For seed data
    seedData.forEach((animal) => {
        const li = createAnimalListItem(animal);
        addListItem(li);
    });

    // For submit/save form
    const formInput = document.querySelector('#new-animal-form');
    formInput.addEventListener('submit', handleFormSubmit);

    const deleteAllButton = document.querySelector('#delete');
    deleteAllButton.addEventListener('click', handleDeleteList);
});


// Seed data
const seedData = [
    {name: {value: 'Gorilla'}, species: {value: 'Gorilla Beringei'}, continent: {value: 'Africa'}},
    {name: {value: 'Giant Panda'}, species: {value: 'Ailuropoda Melanoleuca'}, continent: {value: 'Asia'}},
    {name: {value: 'Blue Whale'}, species: {value: 'Balaenoptera Musculus'}, continent: {value: 'Antartica'}}
];

// Adds item to the list
const addListItem = function(listItem) {
    const listContainer = document.querySelector('#animal-list');
    listContainer.appendChild(listItem);
};

const handleFormSubmit = function(event) {
    event.preventDefault();
    const animalListItem = createAnimalListItem(event.target);
    addListItem(animalListItem);
    event.target.reset();
};

// Create list of animals
const createAnimalListItem = function(form) {
    const animalListItem = document.createElement('li');
    animalListItem.classList.add('animal-list-item');

    const name = document.createElement('h2');
    name.textContent = form.name.value;
    animalListItem.appendChild(name);

    const species = document.createElement('h3');
    species.textContent = form.species.value;
    animalListItem.appendChild(species);

    const continent = document.createElement('h3');
    continent.textContent = form.continent.value;
    animalListItem.appendChild(continent);

    return animalListItem;
};

// Delete all the list
const handleDeleteList = function(event) {
    const deleteList = document.querySelector('#animal-list');
    deleteList.innerHTML = '';
};