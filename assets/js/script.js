// Forex API
var forexUrl = 'https://api.exchangerate.host/latest?base=USD';
var forexRequest = new XMLHttpRequest();
var currencyList = ['USD','EUR','JPY','GBP','AUD','CAD','CHF','NZD','PLN','UAH'];
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

function getCurrencyRate(currency){
  var position = exchangeRatesNamesList.indexOf(currency);
  return exchangeRatesValuesList[position];
}

function convertCurrency(currency){
  return currentDefaultCurrency * getCurrencyRate(currency);
}

function getDefaultRate(){
  return getCurrencyRate(currencyList[0]);
}

function resetDefaultCurrency(){
  currentDefaultCurrency = 0;
}

// Cards API
var deckUrl = 'https://www.deckofcardsapi.com/api/deck/new/?deck_count=6';
var shuffleUrl = 'Error: ShuffleUrl not assigned';
var deckID = '';
var drawUrl = 'Error: drawUrl not assigned';
var cards = '';

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

function playerHand(deckID) {
  fetch('https://www.deckofcardsapi.com/api/deck/' + deckID + '/draw/?count=1')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      deckID = data.deck_id
      cards = data.cards;
      console.log(cards);
    })
}

function dealerHand(deckID) {
  fetch('https://www.deckofcardsapi.com/api/deck/' + deckID + '/draw/?count=1')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      deckID = data.deck_id;
      cards = data.cards;
      console.log(cards);
    })
}
function playerHand2(deckID) {
  fetch('https://www.deckofcardsapi.com/api/deck/' + deckID + '/draw/?count=1')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      deckID = data.deck_id
      cards = data.cards;
      console.log(cards);
    })
}
function dealerHand2(deckID) {
  fetch('https://www.deckofcardsapi.com/api/deck/' + deckID + '/draw/?count=1')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      deckID = data.deck_id
      cards = data.cards;
      console.log(cards);
      cardValues(cards);
    })
}

function cardValues(cards) {
  
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
