$("#submit").on("click",function(e){
    e.preventDefault();

    var userSearch = $("#user-search").val()

    var APIkey = "b71c0bf33361f7edc8158b8c60607ab5"
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q="+userSearch+"&appid="+APIkey
    console.log(queryURL)

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        for(var i =0; i<response.list.length; i++){
            if(response.list[i].dt_txt.indexOf("00:00:00")!== 1){
                var card = $("<div>");
                card.addClass("card");
                var cardBody = $("<div>");
                cardBody.addClass("card-body");
                $("<p>").text("Temp: "+response.list[i].main.temp).appendTo(cardBody);
                $("<p>").text("Humidity: "+ response.list[i].main.humidity).appendTo(cardBody);
                $("<p>").text("Weather: "+ response.list[i].weather[0].description).appendTo(cardBody);
                $("<p>").text("Wind speed: "+ response.list[i].wind.speed).appendTo(cardBody);

                card.append(cardBody);

                $("#info-here").append(card)
                
            }
        }

      });






})