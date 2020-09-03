// 1. Program to search for a particular character in a string

let data ="letsupgrade";
let data2 = data.indexOf("d");
console.log(data2);

// 2. Program to convert minutes to seconds

let minutes = 7;
let seconds = minutes * 60;
console.log(seconds);

// 3. Program to search for a element in a array of strings

let computer = ["Monitor" , "Keyboard" , "Mouse" , "CPU" , "Speaker"];
console.log(computer[3]);

// 4. Program to display only elements containing 'a' in them from an array

let months = ["april" , "may" , "june" , "july" , "august"];
var a;
for(let i=0; i<months.length; i++){
   a = months[i].search("a");
   if(a>=0){
   console.log(months[i]);
}
}
// 5. Print an array in reverse order

let mobile = ["Apple" , "Samsung" , "OnePlus" , "Redmi" , "Realme"];
console.log(mobile.reverse());
