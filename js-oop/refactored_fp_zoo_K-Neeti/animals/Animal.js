// Factory function replaces the Animal class
function createAnimal(name, species) {
  return {
    name,
    species,
    hunger: 50,
    // makeSound is stored as a function in the object, using closure over `name`
    makeSound: () => console.log(`${name} makes a generic animal sound.`),
  };
}

// Pure function — reads animal data, returns a string, no side effects
function getStatus(animal) {
  if (animal.hunger <= 0) return "Full";
  if (animal.hunger <= 20) return "Satisfied";
  return "Hungry";
}

// Pure function — returns a NEW animal object instead of mutating the original
function eat(animal) {
  if (animal.hunger <= 0) {
    console.log(`${animal.name} is already full!`);
    return animal;
  }
  const newHunger = animal.hunger - 10;
  console.log(`${animal.name} ate. Hunger is now ${newHunger}.`);
  return { ...animal, hunger: newHunger };
}

module.exports = { createAnimal, getStatus, eat };
