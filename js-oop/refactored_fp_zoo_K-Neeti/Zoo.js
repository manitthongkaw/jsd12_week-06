const { getStatus, eat } = require("./animals/Animal");

// Factory function replaces the Zoo class
function createZoo(zooName) {
  return { zooName, animals: [] };
}

// Pure function — returns a NEW zoo with the animal added, no mutation
function addAnimal(zoo, animal) {
  console.log(`Added ${animal.name} to the ${zoo.zooName}.`);
  return { ...zoo, animals: [...zoo.animals, animal] };
}

// Pure function — returns a NEW zoo with all animals fed after the show
function showAllAnimals(zoo) {
  console.log(`\n--- Welcome to ${zoo.zooName} ---`);

  const updatedAnimals = zoo.animals.map((animal) => {
    console.log(`Animal: ${animal.name} | Status: ${getStatus(animal)}`);
    animal.makeSound();
    const fedAnimal = eat(animal); // eat returns a new object, original is unchanged
    console.log("-------------------");
    return fedAnimal;
  });

  return { ...zoo, animals: updatedAnimals };
}

module.exports = { createZoo, addAnimal, showAllAnimals };
