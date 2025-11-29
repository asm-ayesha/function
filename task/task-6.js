// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(number){
  if(number % 2 === 0){
    return 'Even';
    
  }
  return 'Odd';
}

let number = 35;
let value = odd_even(number);
console.log(value)