window.onload = function() {

    var seconds = 00;
    var tens = 00;
    var minutes = 00;

    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var appendMinutes = document.getElementById('minutes')
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval;
    var laps = document.getElementById('laps');
    var lapsList = [];
    var resetLaps = document.getElementById('reset-laps');




    laps.onclick = function() {
        var text = "";

        var currentTimer = document.getElementById('minutes').innerHTML + ':' + document.getElementById("seconds").innerHTML + ':' + document.getElementById("tens").innerHTML

        if (lapsList.indexOf(currentTimer) !== -1) {
            return;

        }

        lapsList.unshift(currentTimer);



        clearInterval(Interval);
        text += "<ul>";
        for (i = 0; i < lapsList.length; i++)  {
            text += "<li>" + lapsList[i] + "</li>";
        }
        text += "</ul>";
        document.getElementById("lapsList").innerHTML = text;
    }



    buttonStart.onclick = function() {

        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function() {
        clearInterval(Interval);
    }


    buttonReset.onclick = function() {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        minutes = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
    }


    resetLaps.onclick = function() {
        lapsList = [];
        document.getElementById("lapsList").innerHTML = "";
    }



    function startTimer() {
        tens++;

        if (tens < 9) {
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appendTens.innerHTML = tens;

        }

        if (tens > 99) {
            
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;

        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }

        if(seconds>59){
          minutes++;
          tens = 0;
          appendTens.innerHTML = "0" + 0;
          seconds = 0
          appendSeconds.innerHTML = "0" + 0;
          appendMinutes.innerHTML = minutes;

        }

    }


}