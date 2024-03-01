function userChoice(choice) {
    let computerChoice = Math.floor(Math.random()*3)+1;

    let computerChoiceText;
    switch(computerChoice){
        case 1:
            computerChoiceText = "rock";
            break;
        case 2:
            computerChoiceText = "paper";
            break;
        case 3:
            computerChoiceText = "scissors";
            break;
    }

    let result = determineWinner(choice, computerChoiceText);
    document.getElementById('results').innerHTML = `You chose <span class="user">${choice}</span>. Computer chose <span class="computer">${computerChoiceText}</span>. ${result}`
}


function determineWinner(user,computer){
    if(user == computer){
        return "It is a tie!";
    }else if(
        (user==="rock" && computer=== "scissors") ||
        (user==="rock" && computer=== "scissors") ||
        (user==="rock" && computer=== "scissors")
        ){ 
            return "You win!"
    }else{
        return "You Lose!"
    }

}