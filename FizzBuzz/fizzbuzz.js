for(var i = 1; i <= 100; i++){
    var isDivisibleBy3 = i % 3 == 0;
    var isDivisibleBy5 = i % 5 == 0;
    var notDivisibleBy3 = i % 3 != 0;
    var notDivisibleBy5 = i % 5 != 0;
    if(isDivisibleBy3 && isDivisibleBy5){
        console.log("fizzbuzz");      
    }
    if(isDivisibleBy3){
        if(notDivisibleBy5){
        console.log("fizz");
        }
    }
    if(isDivisibleBy5){
        if(notDivisibleBy3){
        console.log("buzz");
        }
    }
    if(notDivisibleBy3 && notDivisibleBy5){
        console.log(i);
    }
    

}