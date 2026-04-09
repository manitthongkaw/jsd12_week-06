// Building a project using Object-Oriented Programming (OOP) is like building with LEGO:
// you define the "molds" (Classes) and then snap together the "bricks" (Objects).

// We’ll build a Virtual Zoo starting from a simple object and evolving into
// a full implementation using Encapsulation, Inheritance, and Polymorphism.

const lion = {
  name: "Simba",
  species: "Lion",
  makeSound: function(){
    console.log(`${this.name} says: ROAR!!`);
  }
};
//lion.makeSound();

// The Class Temlaate (Encapsulation)
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this._hunger = 50; // Internal state (protected by _)
  }
  makeSound() {
    console.log(`${this.name} makes a sound...`);
  }
  eat() {
    this._hunger -= 10, // this._hunger - 10,
    console.log(`${this.name} the ${this.species} ate. Hunger is now ${this._hunger}.`);
  }
};
const milo = new Animal("Milo", "Cat");
//console.log(milo._hunger);
//milo.eat();
//console.log(milo.makeSound());

// Specialized Classes (Inheritance)
class Mammal extends Animal {
  constructor(name, species, furColor){
    super(name, species); // calls the parent constructor
    this.furColor = furColor;
  };
  groom() {
    console.log(`${this.name} is brushing their ${this.furColor} fur.`);
  };
};
const fox = new Mammal("Fox","Orange Fox", "Test Fox");
//fox.groom();
//console.log(fox);
class Bird extends Animal {
  constructor(name, species, wingspan){
    super(name, species); // calls the parent constructor
    this.wingspan = wingspan;
  };
  // This is an exmple of polymorphism; override the parent's method
  makeSound() {
    console.log(`${this.name} chirps: Tweet! Tweet!`);
  };
};
const duck = new Bird("Duck", "Kub kub", "Baby Duck");
//duck.makeSound();
//console.log(duck);