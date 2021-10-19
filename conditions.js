//if else condition
let work = false;
let paid;

if (work === true) {
  paid = 10;
} else {
  paid = 5;
}
console.log(paid);

//else if condition 
let week = {
    mon: "sunny",
    tue: "rainy",
    wed: "cloudy",
    thu: "warmy",
    fri: "pleasent"
    };
    if(week.mon === "sunny"){
    console.log("mon is sunny");
    }else if(week.tue === "sunny"){
    console.log("tue is sunny");
    }else if(week.tue === "cloudy"){
    console.log("wed is cloudy");
    }else if(week.tue === "cloudy"){
    console.log("tue is cloudy");
    }

//nested if else
    if ( day === 'sunny') {
        if (temp < 86) {
          para.textContent = 'It is ' + temp + ' degrees outside'; 
        } else if (temperature >= 86) {
          para.textContent = 'It is ' + temp + ' degrees outside';
        }
      }

// we can use logical operators for conditions
// [  "||", "&&", "==="]