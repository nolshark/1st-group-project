// ====[ JavaScript written by: Mateusz Zielinski and Nolan Bish ]====

// Forex API
var forexUrl = 'https://api.exchangerate.host/latest?base=USD';
var forexRequest = new XMLHttpRequest();
var currencyList = ['USD', 'EUR', 'JPY', 'GBP', 'AUD', 'CAD', 'CHF', 'NZD', 'PLN', 'UAH'];
var exchangeRatesNamesList = [];
var exchangeRatesValuesList = [];
var currentDefaultCurrency = 0;

forexRequest.open('GET', forexUrl);
forexRequest.responseType = 'json';
forexRequest.send();
forexRequest.onload = function () {
  var forexResponse = forexRequest.response;
  exchangeRatesNamesList = Object.keys(forexResponse.rates);
  exchangeRatesValuesList = Object.values(forexResponse.rates);
}

function getCurrencyRate(currency) {
  var position = exchangeRatesNamesList.indexOf(currency);
  return exchangeRatesValuesList[position];
}

function convertCurrency(currency) {
  return currentDefaultCurrency * getCurrencyRate(currency);
}

function getDefaultRate() {
  return getCurrencyRate(currencyList[0]);
}

function resetDefaultCurrency() {
  currentDefaultCurrency = 0;
}

// Cards API
var deckUrl = 'https://www.deckofcardsapi.com/api/deck/new/?deck_count=6';
var shuffleUrl = 'Error: ShuffleUrl not assigned';
var deckID = '';
var drawUrl = 'Error: drawUrl not assigned';
var cards = ['UNASSIGNED-PH1', 'UNASSIGNED-DH1', 'UNASSIGNED-PH2', 'UNASSIGNED-DH2'];

function getApi(request) {
  fetch(deckUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      deckID = data.deck_id;
      console.log("Deck ID is:" + deckID);
      shuffleCards(deckID);
    })
}

function shuffleCards(deckID) {
  fetch('https://www.deckofcardsapi.com/api/deck/' + deckID + '/shuffle/?remaining=true')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      playerHand(deckID);
      playerHand2(deckID);
      dealerHand(deckID);
      dealerHand2(deckID);
    });
}

function playerHand(deckID) {
  fetch('https://www.deckofcardsapi.com/api/deck/' + deckID + '/draw/?count=1')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      deckID = data.deck_id
      cards[0] = data.cards;
      console.log(cards[0]);
    })
}

function dealerHand(deckID) {
  fetch('https://www.deckofcardsapi.com/api/deck/' + deckID + '/draw/?count=1')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      deckID = data.deck_id;
      cards[1] = data.cards;
      console.log(cards[1]);
    })
}

function playerHand2(deckID) {
  fetch('https://www.deckofcardsapi.com/api/deck/' + deckID + '/draw/?count=1')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      deckID = data.deck_id
      cards[2] = data.cards;
      console.log(cards[2]);
    })
}

function dealerHand2(deckID) {
  fetch('https://www.deckofcardsapi.com/api/deck/' + deckID + '/draw/?count=1')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      deckID = data.deck_id
      cards[3] = data.cards;
      console.log(cards[3]);
      cardValues(cards[3]);
    })
}

function cardValues(cards) {

}

function drawCards(request) {
  fetch(drawUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

getApi(deckUrl);

// Game Logic
var stop = false;
var wins = 0;
var losses = 0;
var ties = 0;
function tallyResult(result) {
  if (result === 1) {
    wins++;
  } else if (result === 2) {
    losses++;
  } else if (result === 3) {
    ties++;
  } else {
    console.log('error');
  }
}

/*
here we will create local variables that store the suit and 
value of each hand for each hand in the card array, then the program 
will come to a conclusion as to whether the user won, lost, or drew
*/
function playRound() {

}

function gameLogic() {
  while (stop === false) {
    playRound();
  }
}

function stopGame() {
  stop = true;
}