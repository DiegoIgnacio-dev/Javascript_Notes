//Fizz Buzz

//multiplos de 3 = fizz
//multiplos de 5 = buzz

//multiplos ded 3 y 5 FIZZBUZZ
let i= 0
for(i=1; i<100; i++){
    console.log(i);
    if(i % 3 === 0 && i%5=== 0){
        console.log(`${i} bizzbuzz`)
    }
    if(i % 3 === 0){
        console.log(`${i} Fizz`)
    }
    if(i % 5 === 0){
        console.log(`${i} Buzz`)
    }
    
}
