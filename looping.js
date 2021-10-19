//for loop for(initalizer,condition,expression)
const cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
let info = 'My cats are called ';
for (let i = 0; i < cats.length; i++) {
  info += cats[i] + ', ';
}
console.log(info);
//for with if else
for (let i = 0; i < cats.length; i++) {
    if (i === cats.length - 1) {
      info += 'and ' + cats[i] + '.';
    } else {
      info += cats[i] + ', ';
    }
  }
  console.log(info);
  //while
  let i = 0;
while (i < cats.length) {
  if (i === cats.length - 1) {
    info += 'and ' + cats[i] + '.';
  } else {
    info += cats[i] + ', ';
  }
  i++;
}
//do while
do {
    if (i === cats.length - 1) {
      info += 'and ' + cats[i] + '.';
    } else {
      info += cats[i] + ', ';
    }
    i++;
  } while (i < cats.length);