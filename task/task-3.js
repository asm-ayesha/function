// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;

    }
    let length = numbers.length;
    let avg = sum / length;
    return avg;

}

let num = [1, 2, 3, 4];
let avg = make_avg(num);
console.log(num, 'the average of those values', avg)


