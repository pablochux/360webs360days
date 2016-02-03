$(document).ready(function(){
	var nextDate = new Date();
	var deadLineDate = 'December 31 ' + nextDate.getFullYear() + ' 23:59:59';	
	initializeClock(deadLineDate);
});

function initializeClock(deadLineDate) {
	function updateClock(deadLineDate) {
		// Get the remaining time and update all the date
		var time = getTimeRemaining(deadLineDate);
		$('.days').text(time.days);
		$('.hours').text(('0' + time.hours).slice(-2));
		$('.minutes').text(('0' + time.minutes).slice(-2));
		$('.seconds').text(('0' + time.seconds).slice(-2));
		// If there isn't time -> Stop
		if(time.total <= 0){
			clearInternval(timeInterval);
		}
	}
	updateClock(deadLineDate);
	var timeinterval = setInterval(function(){updateClock(deadLineDate)}, 1000);
}

function getTimeRemaining(deadLineDate) {
	// Future date - actual date = remaining date 
	var time = Date.parse(deadLineDate) - Date.now();
	var seconds = Math.floor((time / 1000) % 60);
	var minutes = Math.floor((time / 1000 / 60) % 60);
	var hours = Math.floor((time / (1000 * 60 * 60)) % 24);
	var days = Math.floor(time / (1000 * 60 * 60 * 24));
	// returns an array with the data
	return {
		'total': time,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
}