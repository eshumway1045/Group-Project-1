var genre = document.querySelector("data-genre-id");
var movieElement = document.querySelector("#movies");
const disney = document.querySelector("#disney");
const netflix = document.querySelector("#netflix");
const hulu = document.querySelector("#hulu");


// fetch movies based on genre and streaming service
var streamingAPI = function (streamingService, genre) {

    // streamingService = whatever streaming service checkbox is checked
    // var streamingService = function () {
    //     if (disney.checked) {
    //         streamingService = disney;
    //     }
    //     else if (netflix.checked) {
    //         streamingService = netflix;
    //     }
    //     else {
    //         streamingService = hulu;
    //     };
    // };

    fetch("https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=" + streamingService + "&type=movie&genre=" + genre + "&page=1&output_language=en&language=en", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
            "x-rapidapi-key": "c2e4a40e25msh764d0c03c3c77b5p1908ccjsnd1ec048c5ef4"
        }
    })
        .then(response => {

            if (response.ok) {
                response.json().then(function (data) {
                    // send data to displaystreaming function to display on page
                    displayStreaming(data);
                    // send movie titles to moviedb api

                })
            }
        })
        .catch(err => {
            console.error(err);
        });
};


var displayStreaming = function (movies) {
    console.log(movies);

    // iterate through movie data
    for (var i = 0; i < 5; i++) {

        //display movie name
        var nameEl = movieElement.querySelector("#movieName-" + i);
        var movieName = movies.results[i].title;
        nameEl.textContent = movieName;
        console.log(movieName);

        // display movie overview
        var overviewEl = movieElement.querySelector("#overview-" + i);
        var movieOverview = movies.results[i].overview;
        overviewEl.textContent = movieOverview;

        // display movie image
        var image = movies.results[i].posterURLs[92];
        var imageEl = movieElement.querySelector("#movieImage-" + i);
        imageEl.setAttribute("src", image);
        imageEl.setAttribute("alt", "Movie poster");
        imageEl.style.width="200px";
        imageEl.style.width="100px";
    }
};
