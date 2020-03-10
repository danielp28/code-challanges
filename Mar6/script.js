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
        intervalId = setInterval(count, 10);
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
    var hours = Math.floor(t/60)
    var minutes = t - (hours*60)
    var mili = t -(minutes*60);
    
    
    if (mili < 10){
        mili = "0" + mili
    }
    if (minutes < 10){
        minutes = "0" + minutes
    }
    if (hours === 0){
        hours = "00"
    } else if (hours < 10) {
        hours ="0" + hours
    }

    return hours +":" + minutes + ":" + mili
}