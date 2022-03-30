let whateverUrl =
  "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC ";
$(".search-button").click(function () {
  fetch(whateverUrl)
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      console.log(data.data[0].url
);
    });
});
