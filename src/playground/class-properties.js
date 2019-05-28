class OldSyntax {
  constructor() {
    this.name = 'Mike';
    this.getGreeting = this.getGreeting.bind(this);
  }

  getGreeting() {
    return `Hi my name is ${this.name}`;
  }

  getGreeting2 = () => {
    return `Hi my name is ${this.name}`;
  };
}

const oldsyntax = new OldSyntax();
const getGreeting = oldsyntax.getGreeting;
console.log(getGreeting());

//----------------------------------------- New syntax

class NewSyntax {
  name = 'Jen';

  getGreeting = () => {
    return `Hi my name is ${this.name}`;
  };
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());
