var animal = 'dog'

function myAnimal() {
  return animal
}

var yourAnimalIs = "cat"

function yourAnimal() {
  var animal = "cat"
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return yourAnimalIs
}

function add2(n) {
  const two = 2
  return n + two
}

var funkyFunction = function() {
  return "FUNKY!"
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
<<<<<<< HEAD
var theFunk = funkyFunction()
theFunk = theFunk()
=======
var theFunk = funkyFunction

>>>>>>> 252dfcf73008eee4eba7868794bf912b0e1e7554
