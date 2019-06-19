console.log("Up and running!");

var cards = [
{
	name: "queen of hearts",
	rank: "queen",
	suit: "hearts",
	cardImage: "images/images/queen-of-hearts.png"
},
{
	name: "queen of diamonds",
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/images/queen-of-diamonds.png"
},
{
	name: "king of hearts",
	rank: "king",
	suit: "hearts",
	cardImage: "images/images/king-of-hearts.png"
},
{
	name: "king of diamonds",
	rank: "king",
	suit: "diamonds",
	cardImage: "images/images/king-of-diamonds.png"
}
];

var cardsInPlay = [] ; 
function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}


function checkForMatch() {

	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
	} 
	
	else {
	alert("Sorry, try again"); 
	}
}

function flipCard() {
	var cardId = this.getAttribute('data-id');
	alert("User flipped " + cards[cardId].name);
	console.log(cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}

}



createBoard();
