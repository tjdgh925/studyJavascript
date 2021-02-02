// // start with strings, numbers and booleans
// let age = 100;
// let age2 = age;
// console.log(age, age2);
// age = 200;
// console.log(age, age2);

// let name = 'Jang';
// let name2 = name;
// console.log(name, name2);
// name = 'Wesley';
// console.log(name, name2);
//원래 변수의 값을 바꾸더라도, 바꾼 변수의 값에는 변화가 없다. 

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;
console.log(players, team);

// You might think we can just do something like this:
team[3] = 'Lux';
console.log(players, team);
//값이 아닌 reference를 받은것이기 때문에 복사한 값을 바꾸면 원래의 값도 바뀌게 된다.
// however what happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();
console.log(team2);
team2[3] = 'Jang'
// one way

// or create a new array and concat the old one in
const team3 = [].concat(players);
team3[3] = 'Sung'

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = 'Sungho'
// now when we update it, the original one isn't changed
console.log(players, team, team2, team3, team4);

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};

// and think we make a copy:
const captain = person;
console.log(person, captain);
captain.age = 90;
console.log(person, captain);
// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99, age: 12});
console.log(cap2);

// We will hopefully soon see the object ...spread
const cap3 = {...person};
console.log(cap3);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const jang = {
    name: 'Jang',
    age: 25,
    social:{
        instagram: '@hello',
        facebook: 'dev'
    }
};

console.log(jang);

const jang2 = Object.assign({}, jang);// 얕게만 복사한다.
const jang3 = JSON.parse(JSON.stringify(jang)); //맞는 것