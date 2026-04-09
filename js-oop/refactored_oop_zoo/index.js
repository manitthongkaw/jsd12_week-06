const Zoo = require("./Animals/Zoo.js");
const Animal = require("./Animals/Animal.js");
const Bird = require("./Animals/Bird.js");
const Mammal = require("./Animals/Mammal.js");
//import Zoo from "./Zoo";

const myZoo = new Zoo("The JS Terminal Zoo");

// create instances of class Animal, Mammal and/or Bird
const leo = new Animal("Leo", "Lion");
const zazu = new Bird("Zazu", "Hornbill", "2 feet");
const baloo = new Mammal("Baloo", "Bear", "Brown");

// Add them to the zoo
myZoo.addAnimal(leo);
myZoo.addAnimal(zazu);
myZoo.addAnimal(baloo);

myZoo.showAllAnimals();