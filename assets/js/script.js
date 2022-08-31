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

// function that returns the cards image
function getCardCode(cards) {
  return cards.image;
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

setTimeout(gameLoop, 5000);