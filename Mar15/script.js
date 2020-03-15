var listThing = document.querySelector("#list-thing");
var formThing = document.querySelector("#form-thing");


var  data = {
    "dates": [
        "3/13/20",
        "3/14/20",
        "3/15/20"
    ],
    "boos": [
        true,
        true,
        false
    ]
}

console.log(data.dates.length)
renderListItems();

function renderListItems(){
    listThing.innerHTML = "";
    
    for (var i =0; i< data.dates.length; i++){
      
        var li = document.createElement("li");
        li.textContent = data.dates[i];
        li.append("  " + data.boos[i]);
        listThing.append(li)
    }
}

$("submit").on("click", function (e){
    e.preventDefault()
    data.push(formThing)
})
console.log(data)
