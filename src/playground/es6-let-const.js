var nameVar = 'Djole';
nameVar = 'Djordje';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Jennifer';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
// nameConst = 'Mike';
console.log('nameConst', nameConst);

let fullName = 'Djordje Arsenovic';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
}
console.log(firstName);
