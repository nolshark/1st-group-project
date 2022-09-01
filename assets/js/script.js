// ================================[Forex API]================================
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
  return parseInt(currentDefaultCurrency * getCurrencyRate(currency));
}

// function that resets the current default currency value to 0
function resetDefaultCurrency() {
  currentDefaultCurrency = 500;
}

// ================================[Card API]================================
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
// ================================[UI Logic]================================
var startButton = document.querySelector(".start-button");
var rulesButton = document.querySelector(".rules-button");
var scoresButton = document.querySelector(".scores-button");
var optsReturn = document.querySelector(".options-return");
var curReturn = document.querySelector(".currency-return");
var quitButton = document.querySelector(".quit-button");
var nextRound = document.querySelector(".nextround-button");
var infoScreens = document.querySelector(".info-screens");
var rules = document.querySelector(".rules");
var highScores = document.querySelector(".high-scores");
var curSel = document.querySelector(".currency-select");
var tranSel = document.querySelector(".translate-select");
var curChoice = document.querySelector(".currency-choice");
var tranChoice = document.querySelector(".translate-choice");
var hitButton = document.querySelector(".hit-button");
var holdButton = document.querySelector(".hold-button");

var body = document.body;
var infoEl1 = document.createElement("div");
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

var pUSD = document.createElement("p");
var pEUR = document.createElement("p");
var pJPY = document.createElement("p");
var pGBP = document.createElement("p");
var pAUD = document.createElement("p");
var pCAD = document.createElement("p");
var pCHF = document.createElement("p");
var pNZD = document.createElement("p");
var pPLN = document.createElement("p");
var pUAH = document.createElement("p");

var infoEl21 = document.createElement("div");
var infoEl22 = document.createElement("div");
var infoEl23 = document.createElement("div");
var infoEl24 = document.createElement("div");
var infoEl25 = document.createElement("div");
var infoEl26 = document.createElement("div");
var infoEl27 = document.createElement("div");
var infoEl28 = document.createElement("div");
var infoEl29 = document.createElement("div");
var infoEl30 = document.createElement("div");

var currencyOptions = document.querySelector(".currency-options");

function populateCurrencyScreen() {
  currencyOptions.appendChild(infoEl21);
  currencyOptions.appendChild(infoEl22);
  currencyOptions.appendChild(infoEl23);
  currencyOptions.appendChild(infoEl24);
  currencyOptions.appendChild(infoEl25);
  currencyOptions.appendChild(infoEl26);
  currencyOptions.appendChild(infoEl27);
  currencyOptions.appendChild(infoEl28);
  currencyOptions.appendChild(infoEl29);
  currencyOptions.appendChild(infoEl30);
  infoEl21.appendChild(pUSD);
  infoEl22.appendChild(pEUR);
  infoEl23.appendChild(pJPY);
  infoEl24.appendChild(pGBP);
  infoEl25.appendChild(pAUD);
  infoEl26.appendChild(pCAD);
  infoEl27.appendChild(pCHF);
  infoEl28.appendChild(pNZD);
  infoEl29.appendChild(pPLN);
  infoEl30.appendChild(pUAH);
  pUSD.textContent = currencyList[0] + " " + currentDefaultCurrency;
  pEUR.textContent = currencyList[1] + " " + convertCurrency(currencyList[1]);
  pJPY.textContent = currencyList[2] + " " + convertCurrency(currencyList[2]);
  pGBP.textContent = currencyList[3] + " " + convertCurrency(currencyList[3]);
  pAUD.textContent = currencyList[4] + " " + convertCurrency(currencyList[4]);
  pCAD.textContent = currencyList[5] + " " + convertCurrency(currencyList[5]);
  pCHF.textContent = currencyList[6] + " " + convertCurrency(currencyList[6]);
  pNZD.textContent = currencyList[7] + " " + convertCurrency(currencyList[7]);
  pPLN.textContent = currencyList[8] + " " + convertCurrency(currencyList[8]);
  pUAH.textContent = currencyList[9] + " " + convertCurrency(currencyList[9]);
  infoEl21.className = "hidden grid row-start-1";
  infoEl22.className = "hidden grid row-start-2 col-start-1";
  infoEl23.className = "hidden grid row-start-2 col-start-2";
  infoEl24.className = "hidden grid row-start-2 col-start-3";
  infoEl25.className = "hidden grid row-start-3 col-start-1";
  infoEl26.className = "hidden grid row-start-3 col-start-2";
  infoEl27.className = "hidden grid row-start-3 col-start-3";
  infoEl28.className = "hidden grid row-start-4 col-start-1";
  infoEl29.className = "hidden grid row-start-4 col-start-2";
  infoEl30.className = "hidden grid row-start-4 col-start-3";
}

// Start Game
function startGame() {
  startGameLogic();
  startButton.style.display = "none";

  quitButton.style.display = "grid";
  nextRound.style.display = "grid";
  hitButton.style.display = "grid";
  holdButton.style.display = "grid";
  infoEl1.className = "grid row-start-3 col-start-2"
  infoEl2.className = "grid row-start-1 col-start-2"
  infoEl3.className = "grid row-start-3 col-start-3"
  infoEl4.className = "grid row-start-1 col-start-3"
  infoEl21.className = "grid row-start-1";
  infoEl22.className = "grid row-start-2 col-start-1";
  infoEl23.className = "grid row-start-2 col-start-2";
  infoEl24.className = "grid row-start-2 col-start-3";
  infoEl25.className = "grid row-start-3 col-start-1";
  infoEl26.className = "grid row-start-3 col-start-2";
  infoEl27.className = "grid row-start-3 col-start-3";
  infoEl28.className = "grid row-start-4 col-start-1";
  infoEl29.className = "grid row-start-4 col-start-2";
  infoEl30.className = "grid row-start-4 col-start-3";
}

startButton.addEventListener("click", startGame);

// Get rules 
rulesButton.addEventListener("click", () => {
  rulesButton.style.display = "none";
  scoresButton.style.display = "none";

  optsReturn.style.display = "grid";
  rules.style.display = "grid";

});

// Get high scores
scoresButton.addEventListener("click", () => {
  rulesButton.style.display = "none";
  scoresButton.style.display = "none";

  optsReturn.style.display = "grid";
  highScores.style.display = "grid";
});

// Return to options screen
optsReturn.addEventListener("click", () => {
  rulesButton.style.display = "grid";
  scoresButton.style.display = "grid";

  optsReturn.style.display = "none";
  rules.style.display = "none";
  highScores.style.display = "none";

});

// Quit Game
quitButton.addEventListener("click", () => {
  startButton.style.display = "grid";

  quitButton.style.display = "none";
  hitButton.style.display = "none";
  holdButton.style.display = "none";

  infoEl1.className = "hidden"
  infoEl2.className = "hidden"
  infoEl3.className = "hidden"
  infoEl4.className = "hidden"
  infoEl5.className = "hidden"
  infoEl6.className = "hidden"
  infoEl7.className = "hidden"
  infoEl8.className = "hidden"
  infoEl9.className = "hidden"
  infoEl10.className = "hidden"
  infoEl11.className = "hidden"
  infoEl12.className = "hidden"
  infoEl13.className = "hidden"
  infoEl14.className = "hidden"
  infoEl15.className = "hidden"
  infoEl16.className = "hidden"
  infoEl17.className = "hidden"
  infoEl18.className = "hidden"
  infoEl19.className = "hidden"
  infoEl20.className = "hidden"
});

//next round button
nextRound.addEventListener("click", () => {
  infoEl1.className = "hidden"
  infoEl2.className = "hidden"
  infoEl3.className = "hidden"
  infoEl4.className = "hidden"
  infoEl5.className = "hidden"
  infoEl6.className = "hidden"
  infoEl7.className = "hidden"
  infoEl8.className = "hidden"
  infoEl9.className = "hidden"
  infoEl10.className = "hidden"
  infoEl11.className = "hidden"
  infoEl12.className = "hidden"
  infoEl13.className = "hidden"
  infoEl14.className = "hidden"
  infoEl15.className = "hidden"
  infoEl16.className = "hidden"
  infoEl17.className = "hidden"
  infoEl18.className = "hidden"
  infoEl19.className = "hidden"
  infoEl20.className = "hidden"
});

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

  infoEl1.className = "hidden grid row-start-3 col-start-2"
  infoEl2.className = "hidden grid row-start-1 col-start-2"
  infoEl3.className = "hidden grid row-start-3 col-start-3"
  infoEl4.className = "hidden grid row-start-1 col-start-3"
  infoEl5.className = "hidden grid row-start-3 col-start-4"
  infoEl6.className = "hidden grid row-start-1 col-start-4"
  infoEl7.className = "hidden grid row-start-3 col-start-5"
  infoEl8.className = "hidden grid row-start-1 col-start-5"
  infoEl9.className = "hidden grid row-start-3 col-start-6"
  infoEl10.className = "hidden grid row-start-1 col-start-6"
  infoEl11.className = "hidden grid row-start-3 col-start-7"
  infoEl12.className = "hidden grid row-start-1 col-start-7"
  infoEl13.className = "hidden grid row-start-3 col-start-8"
  infoEl14.className = "hidden grid row-start-1 col-start-8"
  infoEl15.className = "hidden grid row-start-3 col-start-9"
  infoEl16.className = "hidden grid row-start-1 col-start-9"
  infoEl17.className = "hidden grid row-start-3 col-start-10"
  infoEl18.className = "hidden grid row-start-1 col-start-10"
  infoEl19.className = "hidden grid row-start-3 col-start-11"
  infoEl20.className = "hidden grid row-start-1 col-start-11"

  imageEl1.setAttribute("src", "https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[0]) + ".png");
  imageEl2.setAttribute("src", "https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[1]) + ".png");
  imageEl3.setAttribute("src", "https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[2]) + ".png");
  //imageEl4.setAttribute("src", "https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[3]) + ".png")
  //("src","https://www.deckofcardsapi.com/static/img/back.png")
  imageEl4.setAttribute("src", "https://www.deckofcardsapi.com/static/img/back.png");
  imageEl5.setAttribute("src", "https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[4]) + ".png");
  imageEl6.setAttribute("src", "https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[5]) + ".png");
  imageEl7.setAttribute("src", "https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[6]) + ".png");
  imageEl8.setAttribute("src", "https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[7]) + ".png");
  imageEl9.setAttribute("src", "https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[8]) + ".png");
  imageEl10.setAttribute("src", "https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[9]) + ".png");
  imageEl11.setAttribute("src", "https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[10]) + ".png");
  imageEl12.setAttribute("src", "https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[11]) + ".png");
  imageEl13.setAttribute("src", "https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[12]) + ".png");
  imageEl14.setAttribute("src", "https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[13]) + ".png");
  imageEl15.setAttribute("src", "https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[14]) + ".png");
  imageEl16.setAttribute("src", "https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[15]) + ".png");
  imageEl17.setAttribute("src", "https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[16]) + ".png");
  imageEl18.setAttribute("src", "https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[17]) + ".png");
  imageEl19.setAttribute("src", "https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[18]) + ".png");
  imageEl20.setAttribute("src", "https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[19]) + ".png");
}

// ================================[Game Logic]================================
var maxRounds = 18;
var currentRound = 0;
var wins = 0;
var losses = 0;
var ties = 0;
var betAmount = 0;
var playerHand = [];
var dealerHand = [];
var playerTotal = 0;
var dealerTotal = 0;
var playerInc = 5;
var dealerInc = 6;
var timerCount = 3;

// logic for dealer hand
function dealerLogic() {
  var i = 2;
  while (dealerTotal <= 17) {
    dealerTotal += dealerHand[i];
    i++;
    if (dealerInc === 6) {
      infoEl6.className = "grid row-start-1 col-start-4"
    } else if (dealerInc === 8) {
      infoEl8.className = "grid row-start-1 col-start-5"
    } else if (dealerInc === 10) {
      infoEl10.className = "grid row-start-1 col-start-6"
    } else if (dealerInc === 12) {
      infoEl12.className = "grid row-start-1 col-start-7"
    } else if (dealerInc === 14) {
      infoEl14.className = "grid row-start-1 col-start-8"
    } else if (dealerInc === 16) {
      infoEl16.className = "grid row-start-1 col-start-9"
    } else if (dealerInc === 18) {
      infoEl18.className = "grid row-start-1 col-start-10"
    } else if (dealerInc === 20) {
      infoEl20.className = "grid row-start-1 col-start-11"
    }
    dealerInc += 2;
  }
}

// displays next card and adds to deck total on hit
hitButton.addEventListener("click", () => {
  if (playerInc === 5) {
    playerTotal += playerHand[2];
    infoEl5.className = "grid row-start-3 col-start-4"
  } else if (playerInc === 7) {
    playerTotal += playerHand[3];
    infoEl7.className = "grid row-start-3 col-start-5"
  } else if (playerInc === 9) {
    playerTotal += playerHand[4];
    infoEl9.className = "grid row-start-3 col-start-6"
  } else if (playerInc === 11) {
    playerTotal += playerHand[5];
    infoEl11.className = "grid row-start-3 col-start-7"
  } else if (playerInc === 13) {
    playerTotal += playerHand[6];
    infoEl13.className = "grid row-start-3 col-start-8"
  } else if (playerInc === 15) {
    playerTotal += playerHand[7];
    infoEl15.className = "grid row-start-3 col-start-9"
  } else if (playerInc === 17) {
    playerTotal += playerHand[8];
    infoEl17.className = "grid row-start-3 col-start-10"
  } else if (playerInc === 19) {
    playerTotal += playerHand[9];
    infoEl19.className = "grid row-start-3 col-start-11"
  }
  playerInc += 2;
});

// ends the round, begins calculations
holdButton.addEventListener("click", () => {
  dealerLogic();
  tallyResult(determineResult());
  imageEl4.setAttribute("src", "https://www.deckofcardsapi.com/static/img/" + getCardCode(cards[3]) + ".png");
  console.log('player: ' + playerTotal);
  console.log('dealer: ' + dealerTotal);
  console.log('Wins: ' + wins);
  console.log('Losses: ' + losses);
  console.log('Ties: ' + ties);
});

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

function displayCardImage() {
  getCardCode(cards);
  var img = $("<img>").attr("src", "https://www.deckofcardsapi.com/static/img/" + cards.code[0] + ".png")
}

// function for handling each round (make function that resets )
function populateCalculationArrays() {
  for (let i = 0; i < cards.length; i += 2) {
    playerHand.push(convertValue(getCardValue(cards[i]), true))
  }
  for (let i = 1; i < cards.length; i += 2) {
    dealerHand.push(convertValue(getCardValue(cards[i]), false))
  }
}

function playRound() {

  return determineResult(playerTotal, dealerTotal);
}

// determines the result for each round as well as handling cash results
function determineResult() {
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

function startGameLogic() {
  populateCalculationArrays();
  playerTotal = playerHand[0] + playerHand[1];
  dealerTotal = dealerHand[0] + dealerHand[1];
}

function intialize() {
  startButton.style.display = "none";
}

function loadLogic() {
  populateCardImage();
  populateCurrencyScreen();
  startButton.style.display = "grid";
}

getApi();

intialize();
startBtnTimer();
setTimeout(loadLogic, 3000);

function startBtnTimer() {
  console.log(timerCount);
  timer = setInterval(function () {
    timerCount--;
    //timerElement.textContent = timerCount;
    if (timerCount > 0) {
      console.log(timerCount);
    }
    if (timerCount < 0) {
      clearInterval(timer);
    }
  }, 1000);
}