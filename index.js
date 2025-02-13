var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  var kitten = kittens.concat(name)
  return kitten
}

function prependKitten(name){
  var kitten = [name,...kittens]
  return kitten 
}

function removeLastKitten(){
  var kitten = kittens.slice(0, 2)
  return kitten
}

function removeFirstKitten(){
  var kitten = kittens.slice(1)
  return kitten
}