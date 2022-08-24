// Forex API
var forexURL = 'https://api.exchangerate.host/latest';
var forexRequest = new XMLHttpRequest();
forexRequest.open('GET',forexURL);
forexRequest.responseType = 'json';
forexRequest.send();

forexRequest.onload = function() {
  var forexResponse = forexRequest.response;
  console.log(forexResponse);
}


// Cards API
var deckUrl = 'https://www.deckofcardsapi.com/api/deck/new/?deck_count=6';

function getApi(request) {
  fetch(deckUrl)
    .then(function (data) {
     console.log(data);
    });
}
getApi(deckUrl);

var deckID 