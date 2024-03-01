function practice(){
    let yourName = "Jesse"

    if(confirm("Are you " + yourName + "?")){
        console.log("Hello " + yourName);
    }else{
        console.log("Then what is your name?");
    }

    let number = 99
    if(number == 99){
        console.log("The number is correct!");
    }else{
        console.log("The number is not correct!");
    }

    let num1 = 1
    let num2 = 2
    if(num1 < num2){
        console.log("Num1 is less then num2");
    }else if(num1 > num2){
        console.log("Num1 is greater then num2");
    }else{
        console.log("The numbers are equal");
    }
}

function getYourLicence(){
    let age = prompt("Enter your age: ");
    if(age >= 18){
        document.write(alert("congradaulations"));
    }else {
        document.write(alert("Sorry you are to young"));
    }
}

function guessNumber(){
    let randomNum = Math.floor(Math.random() * 10) + 1;
    let numGuessed = Number(prompt("Please guess a number 1 - 10:"));

    //Now check if the guess is correct
    if(randomNum == numGuessed){
        document.getElementById('results').innerHTML = "Congradulations, you figured out the number!";
    }else{
        document.getElementById('results').innerHTML = "Sorry, that was wrong. the number was " + randomNum;
    }
}

function login() {
    let usernameInput = prompt("Enter your username:");
    let passwordInput = prompt("Enter you password:");

    if(usernameInput == username && passwordInput == password){
        document.getElementById('msg').innerHTML = "Welcome to the system!"
    }else{
        document.getElementById('msg').innerHTML = "Invalid credentials!"
    }
}