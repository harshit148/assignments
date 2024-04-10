
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}

animal = new Animal(legCount=4, name="Lio");
console.log(animal.describe());
console.log(animal.legCount);
