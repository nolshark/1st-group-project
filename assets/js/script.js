// Forex API
var forexURL = 'https://api.exchangerate.host/latest?base=USD';
var forexRequest = new XMLHttpRequest();
var currencyList = ['USD','EUR','JPY','GBP','AUD','CAD','CHF','NZD','PLN','UAH'];
var exchangeRatesNamesList = [];
var exchangeRatesValuesList = [];

forexRequest.open('GET', forexURL);
forexRequest.responseType = 'json';
forexRequest.send();
forexRequest.onload = function () {
  var forexResponse = forexRequest.response;
  exchangeRatesNamesList = Object.keys(forexResponse.rates);
  exchangeRatesValuesList = Object.values(forexResponse.rates);
  console.log(forexResponse);
  console.log(exchangeRatesNamesList);
  console.log(exchangeRatesValuesList);
}

function getCurrencyRate(currency){
  var position = exchangeRatesNamesList.indexOf(currency);
  return exchangeRatesValuesList[position];
}

function getDefaultRate(){
  return getCurrencyRate(currencyList[0]);
}

// Cards API
var deckUrl = 'https://www.deckofcardsapi.com/api/deck/new/?deck_count=6';
var shuffleUrl = 'Error: ShuffleUrl not assigned';
var deckID = '';

function getApi(request) {
  fetch(deckUrl, {
    //mode: "no-cors"
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      deckID = data.deck_id;
      shuffleUrl = 'https://www.deckofcardsapi.com/api/deck/' + deckID + '/shuffle/?remaining=true';
      console.log("Deck ID is:" + deckID);
      console.log("Shuffle URL is: " + shuffleUrl);
    });
}

function shuffleCards(request) {
  fetch(shuffleUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

getApi(deckUrl); 