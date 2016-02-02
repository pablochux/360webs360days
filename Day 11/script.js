$(document).ready(function(){
	var i = 1;
	var date = new Date();
	var phrases = [
		"Sunday Funday!",
	    "Back to the grind!",
	    "Oh. It's Tuesday.",
	    "Boom! Wednesday!",
	    "Thirsty Thursday, yo!",
	    "It's Friday! We should be kickin' it!",
	    "Paaarrrtttyyy!"
	 ];
	// Select the day
	$('#'+date.getDay()).addClass('today');
	// Add the phrase
	$('.phrase h1').text(phrases[date.getDay()]);
	// Displays another phrase (NW)
	$('.btn').click(function(){
		if (date.getDay() + i < 7) { 
			// Changes phrase
			$('.phrase h1').text(phrases[date.getDay() + i++]);
		} else{
			// Diplay Week is Over message
			$(this).text('Sorry. Week is Over.').removeClass('btn-effect').addClass('disabled');
		}
	});
});