const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}
// Regular
console.log('hello');

// Interpolated
console.log('Hello, I am from %s', '🥸');

// Styled
console.log('%c I am bigger text', 'font-size: 20px; color: blue;');

// warning!
console.warn('It is warging message');

// Error :|
console.error('It is error message');

// Info
console.info('This is Information message');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('btn'), 'This is Testing message');

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog =>{
    console.group(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} name is ${dog.age} years old`);
    console.log(`${dog.name} name is ${dog.age * 10} years old`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.count('hugo');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
});

console.table(dogs);
