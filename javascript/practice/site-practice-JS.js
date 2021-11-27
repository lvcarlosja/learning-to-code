//You cannot run this is Node.js command line tool
// This is linked to the site-practice-html file

let timerElement = document.getElementById("timer")
console.log(timerElement.innerText);

timerElement.innerText = 5

function greet()
{
	console.log(timeRemaining)
  if(timeRemaining === 0)
  return "Boom"
}

let timeRemaining = 5

function decrementTime() {
  timeRemaining = timeRemaining - 1
  timerElement.innerText = timeRemaining
  console.log(timeRemaining)
  if(timeRemaining >= 0)
    {
      return timerElement.innerText = timeRemaining
    }
    else
      {
        return timerElement.innerText = "Time is up!"
      }
}
decrementTime()

greet()

setInterval(decrementTime, 1000)
