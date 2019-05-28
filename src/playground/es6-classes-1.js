class Person {
  constructor(name = 'John Doe', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi I am ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greet = super.getGreeting();
    if (this.homeLocation) {
      greet += ` I'm visiting from ${this.homeLocation}!`;
    }
    return greet;
  }
}

// const meAsStudent = new Student('Djordje Arsenovic', 27, 'Computer Science');
// const meAsStudent1 = new Student('Djordje', 12);

const traveler1 = new Traveler('Djole', 26, 'asd');

console.log(traveler1);
console.log(traveler1.getGreeting());
