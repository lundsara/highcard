//worked with Aileen to produce solution!
var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var worth = [];
let card = {};
var game = {
  deck: [],
  players: [],
  hands: [],
  counter: 0,


  buildDeck(){
// loop through all values for every suit and attach value to the suit, then loop through all cards and push into the empty deck
// as you are looping through the array, push into the empty deck
    for (let i = 0; i < suits.length; i++) {
    //loop through the values
    for (let j = 0; j < values.length; j++) {
        //assign the suit an index value
        card.suit = suits[i];
        //assign the value an index value
        card.value = values[j];
        //add worth to the card
        card.worth = j + 2;
        //push the card into the deck
        this.deck.push(card);
        //empty the object for a new card
          card = {};
      }
    }
    return this.deck;
  },

  shuffleDeck(){
  //used Durstenfeld shuffle https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  //loop through this.deck, each time decreasing by one
    for (var i = this.deck.length - 1; i > 0; i--) {
        //assign j to a random number with the index i + 1
        var j = Math.floor(Math.random() * (i + 1));
        //assign the deck index i to a temp variable
        var temp = this.deck[i];
        //assign the deck index i to a different array, deck index j
        this.deck[i] = this.deck[j];
        //assign the deck index j to temp variable to generate randomized array
        this.deck[j] = temp;
    }
    //return new array
    return this.deck;
  },

  getMorePlayers(){
  let newPlayerInput = prompt('Enter username or press cancel');
  //counter starts at 0

    //if they input something
    if (newPlayerInput !== null) {
      //set play at index zero to empty object
      this.players[this.counter] = {};
      // attributed a name to object which is equal to new player input
      this.players[this.counter].name = newPlayerInput;
      }

      this.counter++;

      return this.players;
  },

  deal(){
    //loop through all of the players
    for (let i = 0; i < this.players.length; i++) {
    //deal out the first card and assign it to variable card
      let dealCard = game.deck.shift();
    //add to the object card and assign a player
      this.players[i].card = dealCard;
    }
  },

  findHighestCard(){
//Finds the player with the highest card.
//Aces are high. For now, don't worry about ties, nor about one suit being more valuable than another suit.
//compare all of the wins to see who has the highest card (like tic tac toe)

  //if card value of player 1 is higher than the value of player 2 = player 1 wins
  if (this.players[0].card.worth > this.players[1].card.worth){
    alert ('Player 1 wins!');
  //if card value of player 1 is higher than the value of player 2 = player 1 wins
  } else if (this.players[0].card.worth < this.players[1].card.worth){
    alert ('Player 2 wins!');
  //if card value of player 1 is equal to the value of player 2 = tie game
  } else if (this.players[0].card.worth === this.players[1].card.worth){
    alert ('Draw!');
  }

  },
  announceWinners(){

// Alerts the card each player drew, their name, and their ranking. For example, "Alice is number 1 with the 9 of Spades! Bob is number 2 with the 6 of diamonds!" (Dialogs are annoying.
//How could you show all this in one alert box, rather than one for each player?)

 },
  playANewGame(){
  game.buildDeck();
  game.shuffleDeck();
  game.getMorePlayers();
  game.deal();
  game.findHighestCard();
  game.announceWinners();
  }
}


