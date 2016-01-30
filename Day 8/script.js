$(document).ready(function(){
	var selectedColour, elementClicked;
	$('.colour').click(function(){
		// Controller for 
		if (elementClicked != undefined) {
			$(elementClicked).removeClass('clicked');
			console.log('Element clicked != undefined');
		};
		// Assign the variables
		elementClicked = $(this);
		selectedColour = $(this).css('background-color');
		$(this).addClass('clicked'); // Add the clicked effect
		// When a .clickable element is clicked, it's background color is changed 
		$('section .clickable').click(function(){
			$(this).css('background-color', selectedColour);
		});
	});
});
