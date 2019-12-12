const myhobbies = [
    {name:"Painting",
    lengthInYearsAtHobby:3},
    {name:"Reading",
    lengthInYearsAtHobby:4},
    {name:"Music",
    lengthInYearsAtHobby:12}
]

function printHobbyInfo(hobby){
    console.log(`${hobby.name} enjoyed for ${hobby.lengthInYearsAtHobby} years`);

}

for (let hobbycount=0;  hobbycount < myhobbies.length; hobbycount++)
{
    printHobbyInfo(myhobbies[hobbycount]);
}
// or this for loop 
for (let hobby of myhobbies){
    printHobbyInfo(hobby);
}


