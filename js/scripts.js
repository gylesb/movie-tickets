// Business Logic

// constructor
function Movie(name, rating, newRelease, price, id) {
    this.movieName = name;
    this.movieRating = rating;
    this.movieNewRelease = newRelease;
    this.moviePrice = price;
    this.id = id;
}

// prototype
Movie.prototype.ticket = function(age) {
  if (age < 17 && this.movieRating == "R") {
    alert("You aren't old enough to watch this movie");
  } else if (age > 65) {
    return this.moviePrice - 5;
  } else
  return this.moviePrice;
}

// User Logic
$(document).ready(function() {
  // creating an object using constructor
  var kingsman = new Movie("Kingsman\: The Golden Circle", "PG-13", "yes", 15.00, 1);
  var it = new Movie("IT (2017)", "R", "yes", 15.00, 2);
  var hitch = new Movie("Hitch", "PG-13", "no", 10.00, 3);
  var transform = new Movie("Transformers: The Last Knight", "PG-13", "no", 10.00, 4);
  var mother = new Movie("Mother", "R", "yes", 15.00, 5);
  var american = new Movie("American Assassin", "R", "yes", 15.00, 6);
  var moana = new Movie("Moana", "PG", "no", 10.00, 7);
  var samurai = new Movie("The Last Samurai", "PG-13", "no", 10, 8);

  var movieArray = [kingsman, it, hitch, transform, mother, american, moana, samurai];

  movieArray.forEach(function(movie) {
    $("select#movie").append("<option value="+movie.id+">"+movie.movieName+"</option>");
  });


  // form submit function
  $("#formOne").submit(function(event) {

      $("#resultBox h2, h4").empty();
    var movieSelect = parseInt($("#movie").val());
    var movieDate = $("input#date").val();
    var movieTime = $("#time").val();
    var age = parseInt($("input#age").val());
    var price = 0;
    movieArray.forEach(function(movie) {
      if (movie.id === movieSelect) {
        console.log(movie.movieRating);
        console.log("YOUR MOVIE IS: " + movie.movieName);
        price = movie.ticket();
        $("#resultBox").show();
        $("#price h4").append(movie.movieName);
        $("#price h2").append("$"+price+".00");
      }
    })
    // alert(movieSelect);
    // myMovie = window[movieSelect];


    console.log(price);


    // alert(this.moviePrice);
    event.preventDefault();
});

});
