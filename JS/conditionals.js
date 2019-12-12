let numOne = 1;
let stringOne = '1';

console.log('double ==', numOne == stringOne);  //true
console.log('triple ===', numOne === stringOne); // false

const day = new Date().getDay();

if (day == 1){
    console.log("Back to Work!");
}
else if(day == 3){
    console.log("Over the hump!");
}
else if (day == 0 || day == 6){
    console.log("It is the weekend!");
}
else {
    console.log("It is a weekday!");
}
