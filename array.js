let fruits = ['Apple', 'Orange', 'Banana', 'Grapes', 'watermelon']
let numbers = [2, 3, 5, 7, 11, 13]

console.log(fruits)
console.log(numbers)

// ARRAY.length
//var maxValue = new Array(4294967296); // only till 4294967295 works // error
//var noNegative = new Array(-100) // no negative number are going to work // error
// console.log(fruits.length)
// console.log(numbers.length)

// fruits.length  = 7;
// console.log(fruits.length)
// console.log(fruits)

//@@iterator
//syntax [Symbol.iterator]()
// let iterator = fruits[Symbol.iterator]();
// console.log(iterator.next().value) ;
// function logIterable(data) {
//     if (!(Symbol.iterator in Object.getPrototypeOf(data))) {
//       console.log(data, ' is not an iterable object...');
//       return;
//     }
//     var iterator = data[Symbol.iterator]();
//      for (let letter of iterator) {
//          console.log(letter);
//      }
//    }
//    console.log(logIterable('abcde fghi'))
//    console.log(logIterable(['a','b','c','d','e']))
// console.log(iterator.next(),.value) ;
// console.log(iterator.next().value) ;
// console.log(iterator.next().value) ;

//ARRAY.concat
//it adds two arrays 
// console.log(fruits.concat(numbers))
//concating nested array
// const num1 = [[1]];
// const num2 = [2, [3]];
// const num = num1.concat(num2);
// console.log(num);
// num1[0].push(4);
// console.log(num);

//ARRAY.copyWithin
//syntax copyWithin(target, start, end)
console.log(fruits.copyWithin(0, 1));
console.log(fruits.copyWithin(1, 2,3));
console.log(fruits.push('Apples'))
console.log(fruits)

//ARRAY.entries()
//provides output as object with key and values
// for( let [index,value] of fruits.entries()){ console.log(index,value) }
// for( let fruit of fruits.entries()){ console.log(fruit) }

//ARRAY.every()
//syntax every((element, index, array) => { ... } )
//checks if all the element in the array passes the test given by a function and provides output as a boolean type
// const check = value =>  value < 20 
// console.log(numbers.every(check))

// function isBigEnough(element,index,array){
//     return array < 10
// } console.log(numbers.every(isBigEnough))
// numbers.every(x => x >= 10); 
// let arr = [1, 2, 3, 4];
// console.log(arr)
// arr.every( (elem, index, arr) => {
//   arr[index+1] -= 1
//   console.log(`[${arr}][${index}] -> ${elem}`)
//   return elem < 2
// })

//ARRAY.fill
//changes the element in the array as static value wrt start and stop index
//fill(value, start, end)
// console.log(numbers.fill(4))
// console.log(numbers.fill(4,-2, -1))
// const arr = new Array(3);
// for (let i=0; i<arr.length; i++) {
//   arr[i] = new Array(4).fill(1); // Creating an array of size 4 and filled of 1
// }
// arr[0][0] = 10;
// console.log(arr[0][0]); // 10
// console.log(arr[1][0]); // 1
// console.log(arr[2][0]); // 1

//ARRAY.filter
//creates an new array with all the elements that pass through
//syntax filter((element, index, array) => { ... } )
// console.log(fruits.filter(word => word.length>=6))
// const filterItems = (arr, query) => {      
//     return arr.filter(letters => letters.toLowerCase().indexOf(query.toLowerCase()) !== -1) //filtering by letters in an array
//   }
//   console.log(filterItems(fruits, 'ap'))  // ['apple', 'grapes']
//   console.log(filterItems(fruits, 'an'))  // ['banana', 'mango', 'orange']
// const modifiedWords = fruits.filter( (word, index, arr) => { //modify
//     arr[index+1] +=' extra'
//     return word.length < 6
//   })
//   console.log(modifiedWords)
// const appendedWords = fruits.filter( (word, index, arr) => { //append
//   arr.push('new')
//   return word.length > 3
// });console.log(appendedWords)


// ARRAY.find
//It returns the value of the first element present in the array wrt the test
//syntax find((element, index, array) => { ... } )
// const result = fruits.find( ( name ) => name === 'Grapes' );
// console.log(result)

// ARRAY.findIndex
//It returns the index of the first element present in the array wrt the test
// const index = fruits.findIndex(fruit => fruit === "Grapes");
// console.log(index); 
// console.log(fruits[index]); 


//ARRAY.flat
//This method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//
// const arr1 = [0, 1, 2, [3, 4]];
// console.log(arr1.flat());
// const arr2 = [0, 1, 2, [[[3, 4]]]];
// console.log(arr2.flat(3));
// const arr = [1, 2, [3, 4, [5, 6]]];
// function flatDeep(arr, d = 1) {
//    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
//                 : arr.slice();
// };
// console.log(flatDeep(arr, Infinity));
// const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// console.log(arr4.flat(Infinity));


//ARRAY.flatMap
// var arr = [1, 2, 3, 4];
// console.log(arr.flatMap(x => [x, x * 2]))
// // is equivalent to
// arr.reduce((acc, x) => acc.concat([x, x * 2]), []);


//repeating function for user
// let string = "Naveeen"
// const temp = string.split('')
// const temp1 = temp.every((data,index,arr) =>{
//     console.log(data)
//     if(arr[index] === arr[index+1]){
//         return false 
//     }else{ index += 1; return true}
// })
// var regex = new RegExp(/(\b(?:([A-Za-z0-9])(?!\2{2}))+\b)/)
// var tests = ['A1D3E', 'AAA', 'AABAA', 'abccddeeff', 'abbbc', '1234']
// for(test in tests) {
//    console.log(tests[test] + ' - ' + Boolean(tests[test].match(regex)))
// }