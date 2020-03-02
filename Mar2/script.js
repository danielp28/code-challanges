var movies = ["The Terminator", "Predator", "The Matrix"]


function displayMovie() {
    var movie = $(this).attr("data-name");

    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

    $.ajax({
        url:queryURL,
        method: "GET"
    }).then(function(response) {
        var movieDiv = $("<div class = 'movie'>");

        var rating = response.Rated;

        var pone = $("<p>").text("Rating: " + rating);

        movieDiv.append(pone);

        var released = response.Released;

        var ptwo = $("<p>").text("Released: " + released);

        movieDiv.append(ptwo);

        var plot  = response.Plot;


        var pthree = $("<p>").text("Plot: "+ plot);

        movieDiv.append(pthree);


        var imgURL = response.Poster;


        var image = $("<img>").attr("src", imgURL);


        movieDiv.append(image);

        $("#movies-view").prepend(movieDiv)

    })

}


function renderButtons(){

    $("#buttons-view").empty();


    for (var i =0; i<movies.length; i++){

        var a =$("<button>")


        a.addClass("movie-btn");

        a.attr("data-name", movies[i]);


        a.text(movies[i]);

        $("#buttons-view").append(a);
    }
}


$("#add-movie").on("click", function(event){
    event.preventDefault();

    var movie = $("#movie-input").val().trim();

    movies.push(movie);

    renderButtons();


});


$(document).on("click", ".movie-btn", displayMovie);

renderButtons();