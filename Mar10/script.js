

$("#go").on("click", function (e){
    e.preventDefault();
    var inputs = document.getElementsByTagName("input");
    console.log("inputs: " + inputs);
  console.log("Number of inputs: " + inputs.length);
  var input = []
    for (var i=0; i <inputs.length; i++){
        console.log("i: " + i);
    console.log("value: " + inputs[i].value);
        input.push(inputs[i].value)
    }
    console.log(input)
    $(".info").append("<h2>Meal: "+input[0] + "</h2><br><h2>Calories: "+input[1]+"</h2><br><h2>Date: "+input[2]+"</h2><br><h2> Ingredients: "+input[3]+"</h2>")
})



