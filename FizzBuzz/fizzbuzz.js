for(var i = 1; i <= 100; i++){
    var isDivisibleBy3 = i % 3 == 0;
    var isDivisibleBy5 = i % 5 == 0;
    var notDivisibleBy3 = i % 3 != 0;
    var notDivisibleBy5 = i % 5 != 0;
    if(isDivisibleBy3 && isDivisibleBy5){
        console.log("fizzbuzz");      
    }
    else if(isDivisibleBy3){
        console.log("fizz");
    }
    else if(isDivisibleBy5){
        console.log("buzz");
    }
    else{
        console.log(i);
    }
    

}