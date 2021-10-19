//Converting between strings and arrays


// SPLIT FUNCTION 
// .split() , split(separator, limit)
const words = str.split(' '); // ('  ') indicates words
console.log(words[4]);
// expected output: "fox"
const chars = str.split(''); // (' ') indicates letters
console.log(chars[8]);
// expected output: "k"
const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]


// JOIN FUNCTION
// .join() , join(seperator)
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join()); //indicates no change
// expected output: "Fire,Air,Water"
console.log(elements.join('')); // indicates joining of the array elements
// expected output: "FireAirWater"
console.log(elements.join('-')); // indicates joining of symbol '-' between array elements 
// expected output: "Fire-Air-Water"


// toString() --> used to convert to a string
const array1 = [1, 2, 'a', '1a'];
console.log(array1.toString());
// expected output: "1,2,a,1a"


//Adding and removing array items

// push()   --> adds new data at the end of the array
// pop()   --> removes data from the end of the array
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]
const remove = animals.pop(); 
// expected output: Array ["pigs", "goats", "sheep"]
console.log(animals.pop());
// expected output: Array ["pigs", "goats"]

// shitf() is same as pop() except is removes from the beginning of the array
// unshift() is same as push() except is adds at the beginning of the array
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.unshift('cows');
console.log(animals);
// expected output: Array ["cows", "pigs", "goats", "sheep" ]
const remove = animals.shift(); 
// expected output: Array ["pigs","goats", "sheep"]
console.log(animals.shift());
// expected output: Array ["goats", "sheep"]



// FILTER function

var items = [
    {name : "car", price : 300},
    {name : "bike", price:150},
    {name : "tv", price : 85},
    {name : "phone", price:70},
    {name : "dress", price : 30},
    {name : "house", price: 700}
]

var filteredItems = items.filter((items) =>{
    return items.price <= 100;
})
console.log (filteredItems);

// MAP function 

var items = [
    {name : "car", price : 300},
    {name : "bike", price:150},
    {name : "tv", price : 85},
    {name : "phone", price:70},
    {name : "dress", price : 30},
    {name : "house", price: 700}
]
var itemsname = items.map((items) =>{
    return items.name; //price
})
console.log (itemsname);

// Find function

var items = [
    {name : "car", price : 300},
    {name : "bike", price:150},
    {name : "tv", price : 85},
    {name : "phone", price:70},
    {name : "dress", price : 30},
    {name : "house", price: 700}
]
var foundItem = items.find((items) =>{
    return items.name === 'bike'; // .price === '300'
})
console.log (foundItem);

// forEach function //similar to for loop

var items = [
    {name : "car", price : 300},
    {name : "bike", price:150},
    {name : "tv", price : 85},
    {name : "phone", price:70},
    {name : "dress", price : 30},
    {name : "house", price: 700}
]
items.forEach((items) =>{
    console.log(items.name)
})

// some // similar to filter but shows just true or false

var items = [
    {name : "car", price : 300},
    {name : "bike", price:150},
    {name : "tv", price : 85},
    {name : "phone", price:70},
    {name : "dress", price : 30},
    {name : "house", price: 700}
]
var lowPrice = items.some((items) =>{
    return items.price <= 100;
})
    console.log(lowPrice)

// every function // checks every element of the array and return true or false

var items = [
    {name : "car", price : 300},
    {name : "bike", price:150},
    {name : "tv", price : 85},
    {name : "phone", price:70},
    {name : "dress", price : 30},
    {name : "house", price: 700}
]
var lowPrice = items.every((items) =>{
    return items.price <= 1000;
})
    console.log(lowPrice)

// reduce() function // reduce(previous , present)
// it checks each and evry element of the array and does the function it is assigned of

var items = [
    {name : "car", price : 300},
    {name : "bike", price:150},
    {name : "tv", price : 85},
    {name : "phone", price:70},
    {name : "dress", price : 30},
    {name : "house", price: 700}
]
var total = items.some((currentTotal,items) =>{
    return items.price + currentTotal
},0)
    console.log(total)

//includes function 

var items = [1,2,3,4,5]
var include = items.includes(2) // It checks if the value of includes(2) is present in the array   
console.log(include)              // or not and returns true or false 