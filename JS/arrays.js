let hobbies = ['painting', 'reading', 'dancing'];

function printHobbies(myhobbies){
    console.log("I like " + myhobbies.length+  " things: " + "\n" + "I like " + myhobbies.join("\nI like "));
}
printHobbies(hobbies);

function printHobbies1(passedArray) {
    console.log(`I like ${passedArray.length} things`);
    for (let index = 0; index < passedArray.length; index++) {
        let element = passedArray[index];
        console.log('I like ' + element);
    }  
}

let countArray = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let afilter = countArray.filter(function(a,b) {

})

let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));

const arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let mf = 1;
let m = 0;
let item;
for (let i=0; i<arr1.length; i++)
{
        for (let j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
console.log(item+" ( " +mf +" times ) ") ;

