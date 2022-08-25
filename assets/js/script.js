// Forex API
var forexURL = 'https://api.exchangerate.host/latest';
var forexRequest = new XMLHttpRequest();
forexRequest.open('GET', forexURL);
forexRequest.responseType = 'json';
forexRequest.send();

forexRequest.onload = function () {
  var forexResponse = forexRequest.response;
  console.log(forexResponse);
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