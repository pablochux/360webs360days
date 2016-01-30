$(document).ready(function(){
	var element = {};
	$('.colour').click(function(){
		// Controller for clicked available colors
		if (element.data != undefined) {
			$(element.data).removeClass('clicked');
		};
		// Assign the variables
		element.data = $(this);
		element.backgroundColour = $(this).css('background-color');
		$(this).addClass('clicked'); // Add the clicked effect
		// When a .clickable element is clicked, it's background color is changed 
		$('section .clickable').click(function(){
			$(this).css('background-color', element.backgroundColour);
		});
	});
});
