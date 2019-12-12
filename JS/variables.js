let x,y, z;
x=10;
y='10';
z=30;

console.log(`x  ${typeof x}` );

console.log("y is of type - " + typeof(y) );

console.log(`z  ${typeof z}` );

var newX = x++;

console.log(newX);

console.log ('The comparison of x==y is - ', x==y);

let timeInMs = Date.now();

console.log('Time is - ', timeInMs);

let todayDate = new Date();

console.log('Month - ', todayDate.getMonth());