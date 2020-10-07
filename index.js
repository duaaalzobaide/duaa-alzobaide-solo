
///create vars to hold the time


var seconds = 0;
var minutes = 0;
var hours = 0;


$('#st').click(function start() {

	seconds++

	////when to increment next val

	if(seconds/60 ===1){

		seconds=0;
		minutes++

		if(minutes/60===1)

			minutes = 0;
	

		    hours++;


document.getElementById('#display').innerHTML = hours + ':' + minutes + ':' + seconds



		}
	})
      
      
      window.setInterval(stopwatch, 1000)






