let askMaxNum;

while (true) {
   askMaxNum = prompt("What will be the max number in the game?")
   if (askMaxNum < 1 || isNaN(askMaxNum)) {
      alert("Invalid Entry!")
      continue;
   }
   if (askMaxNum % 1 != 0) {
      askMaxNum = Math.round(askMaxNum)
   }

   let maxNum = document.getElementById("maxNum")
   maxNum.innerHTML = "Guess a number between 1 and " + askMaxNum;
   break;
}


let num = Math.floor(Math.random() * askMaxNum) + 1;
console.log(num)

let guessArray = [];



function doGuess() {
   let guess = Number(document.getElementById("guess").value);
   let message = document.getElementById("message");

   if (isNaN(guess)) {
      message.innerHTML = "That is not a number!"
      return;
   }
   if (guess < 1 || guess > askMaxNum) {
      message.innerHTML = "That number is not in range, try again."
      return;
   }

   guessArray.push(guess)


   if (guess == num) {
      message.innerHTML = "You got it congrats! It took you " + guessArray.length + " and your guesses were " + guessArray.join(", ") + ".";
   }
   else if (guess > num) {
      message.innerHTML = "No, try a lower number."
   }
   else {
      message.innerHTML = "No, try a higher number"
   }
}