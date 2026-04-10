const { createAnimal } = require("./Animal");

// Factory function — composes with createAnimal using spread instead of `extends`
// function createMammal(name, species, furColor) {
//   return {
//     ...createAnimal(name, species),
//     furColor,
//     groom: () => console.log(`${name} is brushing their ${furColor} fur.`),
//   };
// }

function createMammal(name, species, furColor) {
  const animal = createAnimal(name, species);
  return {
    name: animal.name,
    species: animal.species,
    hunger: animal.hunger,
    makeSound: animal.makeSound,
    // ...every single property/method from animal, one by one
    furColor,
    groom: () => console.log(`${name} is brushing their ${furColor} fur.`),
  };
}

module.exports = { createMammal };
