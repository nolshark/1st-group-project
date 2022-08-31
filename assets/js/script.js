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
var infoEl = document.createElement("div"); 
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
var imageEl20= document.createElement("img"); 

function getCardImage(cards) {
  return cards.image;
}

// function that returns the cards image
function getCardCode(cards) {
  return cards.code;
}

function populateCardImage(code) {
  
body.appendChild(infoEl); 
infoEl.appendChild(imageEl1);
infoEl.appendChild(imageEl2);
infoEl.appendChild(imageEl3);
infoEl.appendChild(imageEl4);
infoEl.appendChild(imageEl5);
infoEl.appendChild(imageEl6);
infoEl.appendChild(imageEl7);
infoEl.appendChild(imageEl8);
infoEl.appendChild(imageEl9);
infoEl.appendChild(imageEl10);
infoEl.appendChild(imageEl11);
infoEl.appendChild(imageEl12);
infoEl.appendChild(imageEl13);
infoEl.appendChild(imageEl14);
infoEl.appendChild(imageEl15);
infoEl.appendChild(imageEl16);
infoEl.appendChild(imageEl17);
infoEl.appendChild(imageEl18);
infoEl.appendChild(imageEl19);
infoEl.appendChild(imageEl20);

imageEl1.setAttribute("src","https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[0]) + ".png")
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

setTimeout(gameLoop, 5000);