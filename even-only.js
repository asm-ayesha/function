function evenNumberOnly(numbers){
    let evens = [];
    for(let number of numbers){
        if(number % 2 === 0){
            console.log(number)
            evens.push(number);

        }
    }

    return evens;
}

let num =  [3,2,6,7,45,43,58];
let evens = evenNumberOnly(num);
console.log(evens)