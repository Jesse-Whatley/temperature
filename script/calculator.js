let num1= Number(prompt("Enter first number:"));
let num2= Number(prompt("Enter second number:"));
let operator= (prompt(`Choose an operation: 
1)Addition 
2)Subtraction 
3)Multiply 
4)Divide`));

if(operator==1){
    document.write(`Your answer is : ${num1 +  num2}`);
}if(operator==2){
    document.write(`Your answer is: ${num1 - num2}`);
}if(operator==3){
    document.write(`Your answer is: ${num1 * num2}`);
}if(operator==4){
    document.write(`Your answer is: ${num1 / num2}`);
}else{
    console.log("Error: Try again please!")
};