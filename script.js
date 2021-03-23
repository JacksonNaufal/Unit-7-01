document.getElementById('button').addEventListener('click',button)

let randomnumber = 0

let userGuess = 0

function button () {
  userGuess = document.getElementById('input').value
  userGuess = parseInt(userGuess)
  // recieve the number, and convert it to an interger number.
  randomnumber = (Math.random() * 6) + 1
  //choose random number between 0 and 1, but add 6 + 1 so no zeros
  // compare random numbers
  if (userGuess >= randomnumber) {
    document.getElementById('para').innerHTML =
    'Good Job!'

  }
}
