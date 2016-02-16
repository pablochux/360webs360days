$(document).ready(function() {
	$('button[name="submit"]').click(function(){
		$('h2').fadeOut(0);
		$('h2').text($('input').val());
		$('h2').fadeIn(500);
	});
});