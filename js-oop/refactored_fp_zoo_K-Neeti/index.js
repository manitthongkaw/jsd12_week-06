const { createZoo, addAnimal, showAllAnimals } = require("./Zoo");
const { createAnimal } = require("./animals/Animal");
const { createBird } = require("./animals/Bird");
const { createMammal } = require("./animals/Mammal");

// Create the zoo using a factory function (no `new`)
let myZoo = createZoo("The JS Terminal Zoo");

// Create animals using factory functions (no `new`)
const leo = createAnimal("Leo", "Lion");
const zazu = createBird("Zazu", "Hornbill", "2 feet");
const baloo = createMammal("Baloo", "Bear", "brown");

// addAnimal returns a NEW zoo — we reassign instead of mutating
myZoo = addAnimal(myZoo, leo);
myZoo = addAnimal(myZoo, zazu);
myZoo = addAnimal(myZoo, baloo);

// showAllAnimals returns a NEW zoo with updated (fed) animals
myZoo = showAllAnimals(myZoo);
