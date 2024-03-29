console.log("Up and running!");

var cards = [
{
	name: "queen-of-hearts",
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	name: "queen-of-diamonds",
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	name: "king-of-hearts",
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	name: "king-of-diamonds",
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [] ; 

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
	} 
	
	else {
	alert("Sorry, try again"); 
	}
}

function flipCard(cardId) {
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].name);
	checkForMatch();
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit); 
}

flipCard(0);

flipCard(2);
