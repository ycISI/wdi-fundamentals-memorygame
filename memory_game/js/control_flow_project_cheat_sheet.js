

//This code completes the Memory Game project after the "Control Flow" section

console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"] ; 
var cardsInPlay = [] ; 

var cardOne = cards[0] ; 
cardsInPlay.push(cardOne)
console.log("User flipped queen") ;

var cardTwo = cards[1] ; 
cardsInPlay.push(cardTwo) ; 
console.log("User flipped queen") ; 

console.log(cardsInPlay) ; 

if (cardsInPlay[0] === cardsInPlay[1]) {
	alert ("You found a match!") ;
	} 
	
else {
	alert ("Sorry, try again") ; 
}