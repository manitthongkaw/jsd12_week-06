// --- EXECUTION ---
const Animal = require("./Animal");
const Bird = require("./Bird");
const Mammal = require("./Mammal");
const Zoo = require("./Zoo");

const myZoo = new Zoo("The JS Terminal Zoo");

// Create instances
const leo = new Animal("Leo", "Lion");
const zazu = new Bird("Zazu", "Hornbill", "2 feet");
const baloo = new Mammal("Baloo", "Bear", "brown");

// Add them to the zoo
myZoo.addAnimal(leo);
myZoo.addAnimal(zazu);
myZoo.addAnimal(baloo);

// Run the routine
myZoo.showAllAnimals();
