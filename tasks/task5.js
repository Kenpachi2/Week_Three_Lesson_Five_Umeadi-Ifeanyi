
let myArray = [10, 20, 30, 40, 50, 60, 70];

let filteredArray = myArray.filter(function(element) {
  return element >= 30;
});


console.log(filteredArray);// returns numbers greater than or equal to 30:  30, 40, 50, 60, 70


