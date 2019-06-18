console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"] ; 
var cardsInPlay = [] ; 

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
	} 
	
	else {
	console.log("Sorry, try again"); 
	}
}

function flipCard(cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
}

flipCard(0);
flipCard(2);

console.log(cardsInPlay) ; 
