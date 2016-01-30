$(document).ready(function(){
	$('.lorem').click(function(){
		$(this).fadeOut(600);
		$('div').fadeIn(1800).addClass('display');
	});
	$('.back').click(function(){
		// Remove .display when fadeout is complete
		$('div').fadeOut(600, function(){
			$(this).removeClass('display')	
		});
		$('.lorem').fadeIn(1000);
	});
});