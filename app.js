let options = ['Rock','Paper','Scissors'];
let computerChoice = ''
let winnerChoice = ['Tied','Lost','Won']



function mathFunctionForRock(){
    let index = Math.floor(Math.random() * options.length )
        let computerChoice = options[index]
        document.getElementById('rock-function').innerHTML = computerChoice
        if(computerChoice == "Rock"){
            document.getElementById('tie-function-rock').innerHTML = winnerChoice[0]
            console.log(winnerChoice[0])
        }else if(computerChoice == "Paper"){
            document.getElementById('tie-function-rock').innerHTML = winnerChoice[1]
            console.log(winnerChoice[1])
        }else{
            document.getElementById('tie-function-rock').innerHTML = winnerChoice[2]
            console.log(winnerChoice[2])
        }
}

function mathFunctionForPaper(){
    let index = Math.floor(Math.random() * options.length )
        let computerChoice = options[index]
        document.getElementById('paper-function').innerHTML = computerChoice
        if(computerChoice == "Paper"){
            document.getElementById('tie-function-paper').innerHTML = winnerChoice[0]
            console.log(winnerChoice[0])
        }else if(computerChoice == "Rock"){
            document.getElementById('tie-function-paper').innerHTML = winnerChoice[1]
            console.log(winnerChoice[1])
        }else{
            document.getElementById('tie-function-paper').innerHTML = winnerChoice[2]
            console.log(winnerChoice[2])
        }
}

function mathFunctionForScissors(){
    let index = Math.floor(Math.random() * options.length )
        let computerChoice = options[index]
        document.getElementById('scissors-function').innerHTML = computerChoice
        if(computerChoice == "Scissors"){
            document.getElementById('tie-function-scissors').innerHTML = winnerChoice[0]
            console.log(winnerChoice[0])
        }else if(computerChoice == "Rock"){
            document.getElementById('tie-function-scissors').innerHTML = winnerChoice[1]
            console.log(winnerChoice[1])
        }else{
            document.getElementById('tie-function-scissors').innerHTML = winnerChoice[2]
            console.log(winnerChoice[2])
        }
}

function rockComputer(){
    let index = Math.floor(Math.random() * options.length )
    if(index == 0){
        mathFunctionForRock()
    }
    else if(index == 1){
        mathFunctionForRock()
    }
    else if(index == 2){
        mathFunctionForRock()
    }
}

function paperComputer(){
    let index = Math.floor(Math.random() * options.length )
    if(index == 0){
        mathFunctionForPaper()
    }
    else if(index == 1){
        mathFunctionForPaper()
    }
    else if(index == 2){
        mathFunctionForPaper()
    }
}

function scissorsComputer(){
    let index = Math.floor(Math.random() * options.length )
    if(index == 0){
        mathFunctionForScissors()
    }
    else if(index == 1){
        mathFunctionForScissors()
    }
    else if(index == 2){
        mathFunctionForScissors()
    }
}

function removeHidenRock(){
    document.getElementById("card-rock").classList.remove("hidden")
}

function removeHidenPaper(){
    document.getElementById("card-paper").classList.remove("hidden")
}

function removeHidenScissors(){
    document.getElementById("card-scissors").classList.remove("hidden")
}

function playButton(){
    document.getElementById('button-container').classList.remove("hidden")
}