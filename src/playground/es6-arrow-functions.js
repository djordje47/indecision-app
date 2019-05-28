function square(x) {
  return x * x;
}
// console.log('Square ES5', square(2));

const squareArrow = x => x * x;

// console.log('Square ES6', squareArrow(2));

const getFirstName = fullName => fullName.split(' ')[0];

// console.log(getFirstName('Djordje Arsenovic'));

// Arguments object - are no longer bound
const add = (a, b) => {
  //   console.log(arguments); -> undefined
  return a + b;
};

// console.log(add(5, 3, 10));

// this keyword is no longer bound
const user = {
  name: 'Djole',
  cities: ['Lazarevac', 'Belgrade', 'Milano', 'Oak Bluffs', 'New York'],

  printPlacesLived() {
    // console.log(this.name);
    // console.log(this.cities);

    const cityMessages = this.cities.map(city => {
      return `${this.name} has lived in ${city}.`;
    });
    return cityMessages;
    // this.cities.forEach(city => {
    //   console.log(`${this.name} lived in ${city}`);
    //   console.log();
    // });
  }
};

// console.log(user.printPlacesLived());

const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,

  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
