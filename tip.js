let bill = document.getElementById('bill');
let tip = document.getElementById('tip');
let pay = document.getElementById("pay");
let show = document.getElementById('show');

pay.addEventListener('click', () => {
    dollar = bill.value;
    calTip = function (dollar) {
        return dollar >= 50 && dollar <= 300 ? dollar * 0.15 : dollar * 0.20;
    }
    show.innerHTML =  calTip(dollar) ;
   

});
























// console.log(typeof(dollar));


    


// var playerChoice = "";

// const choices = ["rock", "paper", "scissors"];
// var computerChoice = choices[(Math.floor(Math.random() * choices.length))];
// let Game = function (playerChoice,computerChoice) {
//     if (playerChoice === "rock"&& computerChoice === "scissors") {
//     console.log("I win")
// } else if (playerChoice==="rock"&&computerChoice==="paper") {
//     console.log("Computer Wins")
// }else if(playerChoice==="rock"&&computerChoice==="rock")
// console.log('tie')}





// shoot.addEventListener('click', function () {
//     Game(playerChoice,computerChoice)
// });


// console.log(computerChoice);





/*let choices = ["rock", "paper", "scissors"];
let computer = choices[(Math.floor(Math.random() * choices.length))];
function move1(stone, computer,choices) {
    if (stone < computer) {
        console.log("I win");
    } else if (stone > computer) {
        console.log("computer wins")
    } else if (stone === computer) {
        console.log("tie!")
    }
    
}
function move2(wood, computer) {
    if (wood < computer )  {
        console.log("I win");
    }
    else if (wood < computer) {
        console.log("computer wins")
    } else if (wood === computer) {
        console.log("tie!")
    }
    
}
shoot1.addEventListener('click',function(){
    move1(stone, computer);
   
});
shoot2.addEventListener('click',function(){
    move2(wood, computer);
   
});

console.log(computer);*/

















/*keys.forEach(key=>{
    key.addEventListener("click", calculate);
});

function calculate() {
    let buttonText = this.innerText;
    if (buttonText === "AC") {
        display.innerText = "";
        show.innerText = "";
        return;
    }
    if (buttonText === "=") {
       return show.innerText = eval(display.innerText)
    }
    else {
        display.textContent += buttonText;
        return;
    }
}*/
