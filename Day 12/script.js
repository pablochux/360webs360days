$(document).ready(function(){
	var deadLineDate = 'December 31 ' + nextYear + ' 23:59:59';
	var nextDate = new Date();
	var nextYear = nextDate.getFullYear();
	initializeClock(deadLineDate);
});

function getTimeRemaining(deadLineDate) {
	// Future date - actual date = remaining date 
	var t = Date.parse(deadLineDate) - Date.now();
	// var seconds = Math.floor((t / 1000) % 60);
	// var minutes = Math.floor((t / 1000 / 60) % 60);
	// var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	// var days = Math.floor(t / (1000 * 60 * 60 * 24));
	// returns an array with the data
	return {
		'total': t,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
}

function initializeClock(endTime) {
	// Refresh all the data
	// t is an array with all the data
	var t = getTimeRemaining(endTime);
	function updateClock(t) {
		$('.days').text(t.days);
		$('.hours').text(('0' + t.hours).slice(-2));
		$('.minutes').text(('0' + t.minutes).slice(-2));
		$('.seconds').text(('0' + t.seconds).slice(-2));
	}
	updateClock(t);
	// cuando se ha llegado al fin del tiempo (00000000)
	if (t.total <= 0) {
		clearInterval(timeinterval);
	}
	var timeinterval = setInterval(updateClock, 1000);
}
