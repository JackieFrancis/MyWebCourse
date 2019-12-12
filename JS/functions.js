function displayName(name){
    console.log("Hello, my name is " + name);
}

displayName("Kousalya");

function convertToCentigrade(faren){
    return (faren -32) / 1.8;
}

function convertToFaren(centi){
    return (centi * 1.8) + 32;
}

let tempInFaren = convertToCentigrade(212);
console.log("Temp in Centigrade " + tempInFaren);

let tempInCenti = convertToFaren(60);
console.log("Temp in Farenheit " + tempInCenti);