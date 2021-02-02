const pressArray = [];
const secretCode = 'wesbos';


window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressArray.push(e.key);
    pressArray.splice(-secretCode.length - 1, pressArray.length - secretCode.length);
    if(pressArray.join('').includes(secretCode)){
        console.log('sdsadd');
        cornify_add();
    }
    console.log(pressArray);
});