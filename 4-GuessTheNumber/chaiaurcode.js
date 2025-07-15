let number=parseInt(Math.random()*100+1)

const submit=document.querySelector("#subt");
const userinput=document.querySelector(".guessField");
const guessSlot=document.querySelector(".guesses")
const remain=document.querySelector(".lastResult")
const lowOrHi=document.querySelector(".lowOrHi")
const startover=document.querySelector(".resultParas")

const p=document.createElement('p')

let prevGuess=[]
let numGuess=1;

let playgame=true;

if(playgame)
{
    submit.addEventListener('click',function(e)
{
  e.preventDefault();
  const guess=parseInt(userinput.value)
  validateguess(guess);
  

})
}

function validateguess( guess)
{
   if(isNaN(guess)||guess<1||guess>100) 
    { alert("PLEASE GIVE A VALID INPUT");}
   else 
    { 
        prevGuess.push(guess);
        if(numGuess>10)
        {
        ClearGuess(guess)
        displayMessage(`Game Over,random number was ${number};`)
        endGame()
        }
      else{
      ClearGuess(guess);
      checkguess(guess);
       }
    }
}


function checkguess(guess){
  if(guess===number){displayMessage("hurrah!you guessed it right")
    endGame();
  }
  else if(guess>number){
    displayMessage(`Number is too long!`)
  }
  else{
    displayMessage(`Number is too small`)
  }
}

function ClearGuess(guess){
userinput.value=' '
guessSlot.innerHTML+=`${guess}, `
numGuess++;
remain.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
  lowOrHi.innerHTML=`<h2>${message}</h2>`
}


function endGame(){
 userinput.value='';
 userinput.setAttribute('disabled','')

 p.classList.add('button')
 p.innerHTML='<button id="newgame"> New Game</button>'
 startover.appendChild(p)
playgame=false;
 newGame();
}

function newGame(){
 const newGamebutton=document.querySelector('#newgame')
 newGamebutton.addEventListener('click',function(e){
number=parseInt(Math.random()*100+1);
prevGuess=[]
numGuess=1
guessSlot.innerHTML=''
remain.innerHTML=`${11-numGuess}`
userinput.removeAttribute('disabled')
startover.removeChild(p)
playgame=true;
 })
}


