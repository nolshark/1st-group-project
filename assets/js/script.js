// ========[ JavaScript written by: Mateusz Zielinski and Nolan Bish ]========

// ====[Forex API]====
var forexUrl = 'https://api.exchangerate.host/latest?base=USD';
var forexRequest = new XMLHttpRequest();
var currencyList = ['USD', 'EUR', 'JPY', 'GBP', 'AUD', 'CAD', 'CHF', 'NZD', 'PLN', 'UAH'];
var exchangeRatesNamesList = [];
var exchangeRatesValuesList = [];
var currentDefaultCurrency = 500;

forexRequest.open('GET', forexUrl);
forexRequest.responseType = 'json';
forexRequest.send();
forexRequest.onload = function () {
  var forexResponse = forexRequest.response;
  exchangeRatesNamesList = Object.keys(forexResponse.rates);
  exchangeRatesValuesList = Object.values(forexResponse.rates);
}

// function to return a specific currency rate
function getCurrencyRate(currency) {
  var position = exchangeRatesNamesList.indexOf(currency);
  return exchangeRatesValuesList[position];
}

// function that converts the default currency to the conversion currency for display purposes
function convertCurrency(currency) {
  return currentDefaultCurrency * getCurrencyRate(currency);
}

// function that resets the current default currency value to 0
function resetDefaultCurrency() {
  currentDefaultCurrency = 500;
}

// ====[Card API]====
var deckUrl = 'https://www.deckofcardsapi.com/api/deck/new/?deck_count=6';
var shuffleUrl = 'Error: ShuffleUrl not assigned';
var drawUrl = 'Error: drawUrl not assigned';
var deckID = '';
var cards = ['UNASSIGNED-PH1', 'UNASSIGNED-DH1', 'UNASSIGNED-PH2', 'UNASSIGNED-DH2',
  'UNASSIGNED-PH3', 'UNASSIGNED-DH3', 'UNASSIGNED-PH4', 'UNASSIGNED-DH4',
  'UNASSIGNED-PH5', 'UNASSIGNED-DH5', 'UNASSIGNED-PH6', 'UNASSIGNED-DH6',
  'UNASSIGNED-PH7', 'UNASSIGNED-DH7', 'UNASSIGNED-PH8', 'UNASSIGNED-DH8',
  'UNASSIGNED-PH9', 'UNASSIGNED-DH9', 'UNASSIGNED-PH10', 'UNASSIGNED-DH10'];

// handles initial api request
function getApi(request) {
  fetch(deckUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      deckID = data.deck_id;
      shuffleUrl = 'https://www.deckofcardsapi.com/api/deck/' + deckID + '/shuffle/?remaining=true';
      drawUrl = 'https://www.deckofcardsapi.com/api/deck/' + deckID + '/draw/?count=1';
      console.log("Deck ID is:" + deckID);
      shuffleCards(deckID);
    })
}

// shuffles the cards
function shuffleCards(deckID) {
  fetch(shuffleUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //console.log(data);
      populateCards(deckID);
    });
}

// populates the cards array
function populateCards(deckID) {
  for (let i = 0; i < cards.length; i++) {
    fetch(drawUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        deckID = data.deck_id
        //console.log(data);
        cards[i] = data.cards[0];
      })
  }
}
// ====[UI Logic]====
var body = document.body; 
var infoEl1= document.createElement("div"); 
var infoEl2 = document.createElement("div");
var infoEl3 = document.createElement("div");
var infoEl4 = document.createElement("div");
var infoEl5 = document.createElement("div");
var infoEl6 = document.createElement("div");
var infoEl7 = document.createElement("div");
var infoEl8 = document.createElement("div");
var infoEl9 = document.createElement("div");
var infoEl10 = document.createElement("div");
var infoEl11 = document.createElement("div");
var infoEl12 = document.createElement("div");
var infoEl13 = document.createElement("div");
var infoEl14 = document.createElement("div");
var infoEl15 = document.createElement("div");
var infoEl16 = document.createElement("div");
var infoEl17 = document.createElement("div");
var infoEl18 = document.createElement("div");
var infoEl19 = document.createElement("div");
var infoEl20 = document.createElement("div");

var imageEl1 = document.createElement("img"); 
var imageEl2 = document.createElement("img"); 
var imageEl3 = document.createElement("img"); 
var imageEl4 = document.createElement("img"); 
var imageEl5 = document.createElement("img"); 
var imageEl6 = document.createElement("img"); 
var imageEl7 = document.createElement("img"); 
var imageEl8 = document.createElement("img"); 
var imageEl9 = document.createElement("img"); 
var imageEl10 = document.createElement("img"); 
var imageEl11 = document.createElement("img"); 
var imageEl12 = document.createElement("img"); 
var imageEl13 = document.createElement("img"); 
var imageEl14 = document.createElement("img"); 
var imageEl15 = document.createElement("img"); 
var imageEl16 = document.createElement("img"); 
var imageEl17 = document.createElement("img"); 
var imageEl18 = document.createElement("img"); 
var imageEl19 = document.createElement("img"); 
var imageEl20 = document.createElement("img"); 
var gameScreen = document.querySelector(".game-screen"); 

function getCardImage(cards) {
  return cards.image;
}

// function that returns the cards image
function getCardCode(cards) {
  return cards.code;
}

function populateCardImage(code) {
  
gameScreen.appendChild(infoEl1);
gameScreen.appendChild(infoEl2);
gameScreen.appendChild(infoEl3);
gameScreen.appendChild(infoEl4);
gameScreen.appendChild(infoEl5);
gameScreen.appendChild(infoEl6);
gameScreen.appendChild(infoEl7);
gameScreen.appendChild(infoEl8);
gameScreen.appendChild(infoEl9);
gameScreen.appendChild(infoEl10);
gameScreen.appendChild(infoEl11);
gameScreen.appendChild(infoEl12);
gameScreen.appendChild(infoEl13);
gameScreen.appendChild(infoEl14);
gameScreen.appendChild(infoEl15);
gameScreen.appendChild(infoEl16);
gameScreen.appendChild(infoEl17);
gameScreen.appendChild(infoEl18);
gameScreen.appendChild(infoEl19);
gameScreen.appendChild(infoEl20);

infoEl1.appendChild(imageEl1);
infoEl2.appendChild(imageEl2);
infoEl3.appendChild(imageEl3);
infoEl4.appendChild(imageEl4);
infoEl5.appendChild(imageEl5);
infoEl6.appendChild(imageEl6);
infoEl7.appendChild(imageEl7);
infoEl8.appendChild(imageEl8);
infoEl9.appendChild(imageEl9);
infoEl10.appendChild(imageEl10);
infoEl11.appendChild(imageEl11);
infoEl12.appendChild(imageEl12);
infoEl13.appendChild(imageEl13);
infoEl14.appendChild(imageEl14);
infoEl15.appendChild(imageEl15);
infoEl16.appendChild(imageEl16);
infoEl17.appendChild(imageEl17);
infoEl18.appendChild(imageEl18);
infoEl19.appendChild(imageEl19);
infoEl20.appendChild(imageEl20);

infoEl1.className = "grid row-start-3 col-start-2"
infoEl2.className = "grid row-start-1 col-start-2"
infoEl3.className = "grid row-start-3 col-start-3"
infoEl4.className = "grid row-start-1 col-start-3"
infoEl5.className = "grid row-start-3 col-start-4"
infoEl6.className = "grid row-start-1 col-start-4"
infoEl7.className = "grid row-start-3 col-start-5"
infoEl8.className = "grid row-start-1 col-start-5"
infoEl9.className = "grid row-start-3 col-start-6"
infoEl10.className = "grid row-start-1 col-start-6"
infoEl11.className = "grid row-start-3 col-start-7"
infoEl12.className = "grid row-start-1 col-start-7"
infoEl13.className = "grid row-start-3 col-start-8"
infoEl14.className = "grid row-start-1 col-start-8"
infoEl15.className = "grid row-start-3 col-start-9"
infoEl16.className = "grid row-start-1 col-start-9"
infoEl17.className = "grid row-start-3 col-start-10"
infoEl18.className = "grid row-start-1 col-start-10"
infoEl19.className = "grid row-start-3 col-start-11"
infoEl20.className = "grid row-start-1 col-start-11"

//infoEl.setAttribute("style", "width: 50%; height: 50%; text-align: center;"); 

imageEl1.setAttribute("src","https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[0]) + ".png")
//imageEl1.setAttribute("style", "width: 15%; height: 5%;"); 
imageEl2.setAttribute("src","https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[1]) + ".png")
imageEl3.setAttribute("src","https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[2]) + ".png")
imageEl4.setAttribute("src","https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[3]) + ".png")
imageEl5.setAttribute("src","https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[4]) + ".png")
imageEl6.setAttribute("src","https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[5]) + ".png")
imageEl7.setAttribute("src","https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[6]) + ".png")
imageEl8.setAttribute("src","https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[7])+ ".png")
imageEl9.setAttribute("src","https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[8]) + ".png")
imageEl10.setAttribute("src","https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[9]) + ".png")
imageEl11.setAttribute("src","https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[10]) + ".png")
imageEl12.setAttribute("src","https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[11]) + ".png")
imageEl13.setAttribute("src","https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[12]) + ".png")
imageEl14.setAttribute("src","https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[13]) + ".png")
imageEl15.setAttribute("src","https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[14]) + ".png")
imageEl16.setAttribute("src","https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[15]) + ".png")
imageEl17.setAttribute("src","https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[16]) + ".png")
imageEl18.setAttribute("src","https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[17]) + ".png")
imageEl19.setAttribute("src","https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[18]) + ".png")
imageEl20.setAttribute("src","https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[19]) + ".png")
}

// ====[Game Logic]====
var maxRounds = 18;
var currentRound = 0;
var wins = 0;
var losses = 0;
var ties = 0;
var betAmount = 0;

// removes bet amount from total and adds to bet variable
function makeBet(money) {
  currentDefaultCurrency -= money;
  betAmount += money;
}

// function that tallies the wins, losses, and ties
function tallyResult(result) {
  if (result === 1) {
    wins++;
  } else if (result === 2) {
    losses++;
  } else if (result === 3) {
    ties++;
  } else {
    console.log('error in tallyResult');
  }
}

// function that returns the cards value
function getCardValue(cards) {
  return cards.value;
}

// function for converting card values to integers
function convertValue(value, player) {
  if (value === 'JACK' || value === 'QUEEN' || value === 'KING') {
    return 10;
  }
  if (value === 'ACE') {
    return aceLogic(player);
  }
  return parseInt(value);
}

// function for determining whether an ace should equal an 11 or a 1
function aceLogic(player) {
  var determinator = 0;
  if (player === true) {

  } else {

  }
  /*if (player === true) {
    if (getCardValue(cards[0]) === 'ACE') {
      var determinator = 11 + parseInt(getCardValue(cards[2]));
    } else if (getCardValue(cards[2]) === 'ACE') {
      var determinator = 11 + parseInt(getCardValue(cards[0]));
    } else (
      console.log('ERROR IN ACELOGIC: player')
    )
  } else {
    if (getCardValue(cards[1]) === 'ACE') {
      var determinator = 11 + parseInt(getCardValue(cards[3]));
    } else if (getCardValue(cards[3]) === 'ACE') {
      var determinator = 11 + parseInt(getCardValue(cards[1]));
    } else (
      console.log('ERROR IN ACELOGIC: dealer')
    )
  } 
  console.log('ACE determinator value: ' + determinator); */
  if (determinator <= 21) {
    return 11;
  } else {
    return 1;
  }
}

function displayCardImage(){
  getCardCode(cards);
  var img = $("<img>").attr("src","https://www.deckofcardsapi.com/static/img/" + cards.code[0] + ".png")
}

// function for handling each round
function playRound() {
  var playerHand = [];
  var dealerHand = [];
  var playerTotal = 0;
  var dealerTotal = 0;

  for (let i = 0; i < cards.length; i += 2) {
    playerHand.push(convertValue(getCardValue(cards[i]), true))
  }
  for (let i = 1; i < cards.length; i += 2) {
    dealerHand.push(convertValue(getCardValue(cards[i]), false))
  }

  console.log(playerHand);
  console.log(dealerHand);
  playerTotal = playerHand[0] + playerHand[1];
  dealerTotal = dealerHand[0] + dealerHand[1];

  return determineResult(playerTotal, dealerTotal);
}

// determines the result for each round as well as handling cash results
function determineResult(playerTotal, dealerTotal) {
  if (playerTotal > 21) {
    betAmount = 0;
    return 2;
  } else if (dealerTotal > 21) {
    betAmount *= 2;
    currentDefaultCurrency += betAmount;
    betAmount = 0;
    return 1;
  } else if (playerTotal === 21) {
    betAmount *= 2;
    currentDefaultCurrency += betAmount;
    betAmount = 0;
    return 1;
  } else if (playerTotal === dealerTotal) {
    currentDefaultCurrency += betAmount;
    betAmount = 0;
    return 3;
  } else if (playerTotal > dealerTotal) {
    betAmount *= 2;
    currentDefaultCurrency += betAmount;
    betAmount = 0;
    return 1;
  } else {
    betAmount = 0;
    return 2;
  }
}

// function for handling the overall game-loop
function gameLoop() {
  var nextRound = false;
  if (currentRound < maxRounds) {
    currentRound++;
    //shuffleCards(deckID);
    tallyResult(playRound());
    if (currentRound === maxRounds) {
      console.log('The casino has kicked you out!');
    }
    gameLoop();
  }
}

function stopGame() {

}

function startGame() {

}

getApi();

setTimeout(populateCardImage, 5000);