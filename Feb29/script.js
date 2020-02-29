var animals = ["Huey", "Arthur", "Zoey" ,"Black Chicken", "White Chicken"]





function randomAnimal() {
    var number = animals.length
    console.log(number)
    var random = Math.floor(Math.random() * number);
    console.log(random)
    $("#names").html("The name is "+ animals[random])
}


$("#button").on("click", randomAnimal);




    


