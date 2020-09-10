let superheroes = [
    {
        Name: "Iron Man",
        Age: 50,
        Country: "USA",
        Hobbies: "Technology, Cooking"
    },
    {
        Name: "Shaktimaan",
        Age: 55,
        Country: "India",
        Hobbies: "Meditation, Reading"
    },
    {
        Name: "Krrish",
        Age: 29,
        Country: "India",
        Hobbies: "Jadoo, Farming"
    },
    {
        Name: "Spiderman",
        Age: 27,
        Country: "USA",
        Hobbies: "Photography, Spiders"
    },
];

// DISPLAY ALL OBJECTS //

console.log("Display All Objects:")
for(i=0; i < superheroes.length; i++){
    console.log(superheroes[i])
}

// THE OBJECTS WITH AGE LESS THAN 30 //

console.log("The Objects with Age less than 30:")
for(let i = 0; i < superheroes.length; i++){
    if(superheroes[i].Age < 30){
        console.log(superheroes[i])
    }
}

// OBJECTS WITH COUNTRY INDIA //

console.log("Objects with Country INDIA are:");
for(let i = 0; i < superheroes.length; i++){
    if(superheroes[i].Country == "India"){
        console.log(superheroes[i])
    }
}

