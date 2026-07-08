// 1. THE BLUEPRINT (The Class)




class Car {
  color: string; // The permanent spot on the car for paint

  // The constructor is the factory worker who receives the order sheet
  constructor(chosenColor: string) {
    this.color = chosenColor; // Spraying the paint onto the physical car
  }

  // A function to show the car actually works
  drive() {
    console.log(`The ${this.color} car zooms away!`);
  }
}

// 2. CALLING THE CONSTRUCTOR (Building the real objects)
// We use the 'new' keyword to create individual, unique cars.

const car1 = new Car("Red");   // Calls constructor, passes "Red" to chosenColor
const car2 = new Car("Blue");  // Calls constructor, passes "Blue" to chosenColor
const car3 = new Car("Green"); // Calls constructor, passes "Green" to chosenColor

console.log(car3.color); // This will print: Green
car1.drive(); // This is the command that triggers the oven to bake!