// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(binary){
    let count = 0;
    for(let i = 0; i<binary.length; i++){
        if(binary[i] === '0'){
            count++;
        }
        
    }
    console.log('0’s are there in that string: ',count)
    return count;
}

let strBinary = count_zero('010000100111101');
