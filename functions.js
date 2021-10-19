//Conditional Statement
function ConidtionalStatements(Param) {
  let anim = "Animal";
  let hum = "Human";

  if (Param === hum) {
    console.log("if statement " + Param);
  }

  if (Param === anim) {
    console.log("if-else Statement " + Param);
  } else {
    console.log("if-else Statement " + Param);
  }

  if (Param === anim) {
    console.log("nested-if statement " + Param);
  } else if (Param === hum) {
    console.log("nested-if statement " + Param);
  } else {
    console.log("Param not equal any other");
  }

  switch (Param) {
    case anim:
      console.log("switch statement " + Param);
      break;
    case hum:
      console.log("switch statement " + Param);
      break;
    default:
      console.log("switch statement not match any case");
      break;
  }
}

ConidtionalStatements("Human");

//Looping Statement
function LoopingStatement(Param) {
  let loop = 1;
  for (loop = 1; loop <= Param; loop++) {
    console.log("for looping statement " + loop * 2);
  }

  while (loop <= param) {
    console.log("while looping statement " + loop);
  }
  loop++;

  do {
    console.log("do while looping statement " + loop);
  } while (loop <= param);
}

LoopingStatement(10);

//Functions

//regular function
function isEven(num) {
  return num % 2 === 0;
}
isEven(24);

//arrow function
const isEven2 = (num) => {
  return num + 10;
};
isEven2(23);

//immediate invoking function
(function messageFunction(Param) {
  return Param;
})("Hello");

//function expression
const count = function (array) {
  return array;
};
count([5, 7, 8]);


var count = 0;
function countVowels(name) {
  for (var i = 0; i < name.length; i++) {
    if (
      name[i] == "a" ||
      name[i] == "e" ||
      name[i] == "i" ||
      name[i] == "o" ||
      name[i] == "u"
    )
      count = count + 1;
  }
  document.write("hai" + name + " your name had " + count + " vowels.");
}
var name = prompt("please enter your name");
countVowels(name);