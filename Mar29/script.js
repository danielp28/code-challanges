function geoFindMe() {
  
    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
  
    mapLink.href = '';
    mapLink.textContent = '';
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;


      var APIkey = "b71c0bf33361f7edc8158b8c60607ab5"
    var queryURL = `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIkey}`

    $.ajax({
      url:queryURL,
      method:"GET"
    }).then(function(response){
      console.log(response);
      var newCard = $("<div>")
      newCard.append(`<div id="card-body">
      <h3>${response.name}</h3>
      <p>Weather: ${response.weather[0].description}</p>
      <p>Temperature: ${response.main.temp} °K</p>
      <p> Wind Speed: ${response.wind.speed} mph </p>
      </div>`)
      $("#weather-results").append(newCard)
    })
    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if (!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }

    
  
  }
  
  document.querySelector('#find-me').addEventListener('click', geoFindMe);