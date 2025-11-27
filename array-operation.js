function strOfEven(str){
    let length = str.length;
    if(length % 2 === 0){
        return true;
    }

    return false;
}

let str = strOfEven('dhaka')
console.log(str)







function sumOfNumbers(numbers){
    let sum = 0;
    for(let number of numbers){
        sum += number;
    }
    return sum;
}

let num = [3,5,1,7,2,4,3]
let sum = sumOfNumbers(num);
console.log(sum)