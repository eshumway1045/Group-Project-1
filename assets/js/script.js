var movieElement = document.querySelector("#movies");

// fetch movies based on genre and streaming service
var streamingAPI = function(streamingService,genre) {
    fetch("https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=80&page=1&output_language=en&language=en", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "streaming-availability.p.rapidapi.com",
		"x-rapidapi-key": "454448608emsh73079d61e5d57cep1bb207jsn7a7395c1a6e0"
	}
})
.then(response => {
	
    if (response.ok) {
        response.json().then(function(data){
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
    for (var i = 0; i < 3; i++){
        
        //display movie name
        var nameEl = movieElement.querySelector("#movieName-"+ i);
        var movieName = movies.results[i].title;
        nameEl.textContent = movieName;
        console.log(movieName);

        // display movie image
        
    }
}
streamingAPI();