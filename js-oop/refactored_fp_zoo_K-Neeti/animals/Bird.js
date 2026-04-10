const { createAnimal } = require("./Animal");

// Factory function — composes with createAnimal using spread instead of `extends`
function createBird(name, species, wingSpan) {
  return {
    ...createAnimal(name, species),
    wingSpan,
    // Overrides the generic makeSound from createAnimal (polymorphism via composition)
    makeSound: () => console.log(`${name} chirps: Tweet! Tweet!`),
    fly: () => console.log(`${name} spreads wings (${wingSpan}) and flies!`),
  };
}

module.exports = { createBird };
