while (true) {
   let askMaxNum = prompt("What will be the max number in the game?")
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


function doGuess() {
   let guess = Number(document.getElementById("guess").value);

   let message = document.getElementById("message");
   
   if (guess == num) {
      message.innerHTML = "You got it!";
   }
   else if (guess > num) {
      message.innerHTML = "No, try a lower number."
   }
   else {
      message.innerHTML = "No, try a higher number"
   }
}