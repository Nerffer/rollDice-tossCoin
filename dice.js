const rollButton = document.getElementById("roll-dice");

function randomDiceRoll(){
    
    var randomNum1 = Math.floor(Math.random() * 6) + 1;
    var randomNum2 = Math.floor(Math.random() * 6) + 1;

    var randomDice1 = "images/dice" + randomNum1 + ".png";
    var randomDice2 = "images/dice" + randomNum2 + ".png";
    
    document.getElementById("dice1").setAttribute("src", randomDice1);
    document.getElementById("dice2").setAttribute("src", randomDice2);

    if (randomNum1 > randomNum2){
        document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
    }
    else if (randomNum2 > randomNum1){
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    }
    else{
        document.querySelector("h1").innerHTML = "Draw!";
    }
}

function shakeDice() {
    const diceImages = document.querySelectorAll(".dice-img");
    diceImages.forEach(dice => dice.classList.add("shake"));
    setTimeout(() => {
      diceImages.forEach(dice => dice.classList.remove("shake"));
    }, 500);
}
  

rollButton.addEventListener("click", () => {
    randomDiceRoll();
    shakeDice();
})