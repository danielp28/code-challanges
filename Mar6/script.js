window.onload = function(){
    $("#lap").on("click", recordLap);
    $("#stop").on("click", stop);
    $("#reset").on("click", reset);
    $("#start").on("click", start);
};



var intervalId;


var clockRunning = false;
var time = 0;
var lap = 1;

function reset(){
    time = 0;
    lap = 1;

    $("#time").text("00:00:00");

    $("#laps").text("")
}

function start(){
    if (!clockRunning){
        intervalId = setInterval(count, 1);
        clockRunning = true;
    }
}

function stop(){
    clearInterval(intervalId);
    clockRunning = false;
}

function recordLap(){
    var converted = timeConveter(time);
    $("#laps").append("<p>LAP "+ lap + " : "+converted+ "</p>")
 lap++;
}

function count(){
    time++;

    var converted = timeConveter(time);
    console.log(converted);

    $("#time").text(converted);
}

function timeConveter(t){
    var hours = Math.floor(t/3600)
    var minutes = Math.floor(t/60)
    var seconds = t -(minutes*60);
    
    
    if (hours === 0){
        hours = "00"
    }
    else if(hours < 10){
        hours = "0" + hours
    }

    if (seconds <10){
        seconds = "0" + seconds;
    }

    if (minutes === 0 ){
        minutes = "00";
    }
    else if(minutes<10){
        minutes = "0" + minutes
    } 
    return hours +":" + minutes + ":" + seconds
}