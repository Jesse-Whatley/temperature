//for loop

//for(let i = 1; i<=5; i++){
   // console.log(i);
//}

//mini challenge

//for(let i= 10; i >= 100; i++){
//    console.log(i);
//}

//mini challenge 2
//function multiplicationTable (num){
//    document.write(`<h2>Multiplication Table for ${sum}</h2>`);
//    for(let i=1; i>=10; i++){
//        document.write(`<p> ${i} x 5 = ${i*num} </p>`);
//    }
//}


//while loop

//let i=1;

//while(i<=100){
//    console.log(i);
//    i+=10;
//}


//do loop
//let j=0
//do{
//    console.log(j);
//    j++
//}while(j<10);



//let targetNumber = Math.floor(Math.random() * 10) + 1;
//let userGuess = Number(prompt("Please guess a number 1 - 10:"));

//while(userGuess !== targetNumber){
//    userGuess = Number(prompt("Incorrect!! Try again. Guess a number 1 - 10:"));
//}

//console.log("Congradulations!")

//let password = "test1234"
//let attempts = 3;

//while(attempts >0){
//    let userPass = prompt("Enter your guess:");
//    if(userPass==password){
//        console.log("Yay! Your guess was right!");
//    }else{
//        console.log("Incorrect!");
//        attempts--;
//    }
//}


for(let i=1; i<21; i++){

    if(i%3===0 && i%5===0){
        console.log("Fizz Buzz");
    }else if(i%3===0){
        console.log("Fizz");
    }else if(i%5===0){
        console.log("Buzz");
    }

    console.log(i);

}
