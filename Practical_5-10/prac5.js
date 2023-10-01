class Vehicle 
{
    constructor(make, model, year) 
    {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    displayDetails() 
    {
      console.log(`Make: ${this.make}, \nModel: ${this.model}, \nYear: ${this.year}`);
    }
    calculateMileage() 
    {
      console.log("Mileage calculation logic goes here.");
    }
}

class Car extends Vehicle 
{
    constructor(make, model, year) 
    {
      super(make,model,year);
      this.totalDistanceTraveled = 0;
      this.totalFuelConsumed = 0;
    }
    displayDetails() 
    {
      super.displayDetails();
    }
    calculateMileage(distance,fuelConsumed) 
    {
      this.totalDistanceTraveled += distance;
      this.totalFuelConsumed += fuelConsumed;
      const mileage = this.totalDistanceTraveled / this.totalFuelConsumed;
      console.log(`Car Mileage: ${mileage.toFixed(2)} miles per gallon`);
    }
}
  
class Motorcycle extends Vehicle 
{
    constructor(make,model,year) 
    {
      super(make, model, year);
      this.totalDistanceTraveled = 0;
      this.totalFuelConsumed = 0;
    }
    displayDetails() 
    {
      super.displayDetails();
    }
    calculateMileage(distance,fuelConsumed) 
    {
      this.totalDistanceTraveled += distance;
      this.totalFuelConsumed += fuelConsumed;
      const mileage = this.totalDistanceTraveled / this.totalFuelConsumed;
      console.log(`Motorcycle Mileage: ${mileage.toFixed(2)} miles per gallon`);
    }
}
  
console.log("\nCar Details is as follows : ");
const myCar = new Car("Toyota","Defender",2022);
myCar.displayDetails();
myCar.calculateMileage(120,5);
  
console.log("\nBike Details is as follows : ");
const myMotorcycle = new Motorcycle("Harley-Davidson","Sportster",2021);
myMotorcycle.displayDetails();
myMotorcycle.calculateMileage(80,3);
  