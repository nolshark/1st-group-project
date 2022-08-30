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
var drawUrl = 'Error: drawUrl not assigned';
var deckID = '';
var cards = ['UNASSIGNED-PH1', 'UNASSIGNED-DH1', 'UNASSIGNED-PH2', 'UNASSIGNED-DH2',
  'UNASSIGNED-PH3', 'UNASSIGNED-DH3', 'UNASSIGNED-PH4', 'UNASSIGNED-DH4',
  'UNASSIGNED-PH5', 'UNASSIGNED-DH5', 'UNASSIGNED-PH6', 'UNASSIGNED-DH6',
  'UNASSIGNED-PH7', 'UNASSIGNED-DH7', 'UNASSIGNED-PH8', 'UNASSIGNED-DH8',
  'UNASSIGNED-PH9', 'UNASSIGNED-DH9', 'UNASSIGNED-PH10', 'UNASSIGNED-DH10'];

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
        console.log(cards[i]);
      })
  }
}

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
    console.log('error in tallyResult');
  }
}

function getCardValue(card) {
  return card.value;
}

function getCardImage(card) {
  return card.image;
}

function convertValue(value, player) {
  if (value === 'JACK' || value === 'QUEEN' || value === 'KING') {
    return 10;
  }
  if (value === 'ACE') {
    return aceLogic(player);
  }
  return parseInt(value);
}

function aceLogic(player) {
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
  console.log('ACE determinator value: ' + determinator);*/
  var determinator = 15;
  if (determinator <= 21) {
    return 11;
  } else {
    return 1;
  }
}

/*
here we will create local variables that store the suit and 
value of each hand for each hand in the card array, then the program 
will come to a conclusion as to whether the user won, lost, or drew
*/
function playRound() {
  console.log(cards);
  var playerValue = convertValue(getCardValue(cards[0]), true);
  var dealerValue = convertValue(getCardValue(cards[1]), false);
  var playerValue2 = convertValue(getCardValue(cards[2]), true);
  var dealerValue2 = convertValue(getCardValue(cards[3]), false);
  var playerValue3 = convertValue(getCardValue(cards[4]), true);
  var dealerValue3 = convertValue(getCardValue(cards[5]), false);
  var playerValue4 = convertValue(getCardValue(cards[6]), true);
  var dealerValue4 = convertValue(getCardValue(cards[7]), false);
  var playerValue5 = convertValue(getCardValue(cards[8]), true);
  var dealerValue5 = convertValue(getCardValue(cards[9]), false);
  var playerValue6 = convertValue(getCardValue(cards[10]), true);
  var dealerValue6 = convertValue(getCardValue(cards[11]), false);
  var playerValue7 = convertValue(getCardValue(cards[12]), true);
  var dealerValue7 = convertValue(getCardValue(cards[13]), false);
  var playerValue8 = convertValue(getCardValue(cards[14]), true);
  var dealerValue8 = convertValue(getCardValue(cards[15]), false);
  var playerValue9 = convertValue(getCardValue(cards[16]), true);
  var dealerValue9 = convertValue(getCardValue(cards[17]), false);
  var playerValue10 = convertValue(getCardValue(cards[18]), true);
  var dealerValue10 = convertValue(getCardValue(cards[19]), false);
  console.log('playervalue: ' + playerValue);
  console.log('dealervalue: ' + dealerValue);
  console.log('playervalue2: ' + playerValue2);
  console.log('dealervalue2: ' + dealerValue2);
  console.log('playervalue3: ' + playerValue3);
  console.log('dealervalue3: ' + dealerValue3);
  console.log('playervalue4: ' + playerValue4);
  console.log('dealervalue4: ' + dealerValue4);
  console.log('playervalue5: ' + playerValue5);
  console.log('dealervalue5: ' + dealerValue5);
  console.log('playervalue6: ' + playerValue6);
  console.log('dealervalue6: ' + dealerValue6);
  console.log('playervalue7: ' + playerValue7);
  console.log('dealervalue7: ' + dealerValue7);
  console.log('playervalue8: ' + playerValue8);
  console.log('dealervalue8: ' + dealerValue8);
  console.log('playervalue9: ' + playerValue9);
  console.log('dealervalue9: ' + dealerValue9);
  console.log('playervalue10: ' + playerValue10);
  console.log('dealervalue10: ' + dealerValue10);
  var playerTotal = playerValue + playerValue2;
  var dealerTotal = dealerValue + dealerValue2;

  return 1;
}

function gameLogic() {
  while (stop === false) {
    tallyResult(playRound());
  }
}

function stopGame() {
  stop = true;
}

function startGame() {
  stop = false;
}

getApi();

setTimeout(playRound, 5000);