function long_sequence(binary){
    let count = 0;
    for(let i = 0; i<binary.length; i++){
        if(binary[i] === '1'){
            count++;
        }
       
    }
    console.log('1’s are there in that string: ',count);
    
    
}

let strBinary = long_sequence('1100011110000111')