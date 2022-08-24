var deckUrl = 'https://www.deckofcardsapi.com/api/deck/new/?deck_count=6';

function getApi(request) {
  fetch(deckUrl)
    .then(function (data) {
     console.log(data);
    });
}
getApi(deckUrl);

var deckID 