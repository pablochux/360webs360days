$(document).ready(function(){
	console.log('Start');
	// Se selecciona un color
		// Se guarda en selectedColour
	var selectedColour;
	console.log(selectedColour);
	$('.colour').click(function(){
		console.log('test');
		selectedColour = $(this).css('background-color');
		$(this).addClass('clicked');
		console.log(selectedColour);
		$('section').click(function(){
			$(this).css('background-color', selectedColour);
		});
	});



	// Cuando se clicka en algo del canvas, se pinta con el color que sea selectedColour
});
// function selectColour() {
// 	// body...
// }
// function changeBackground (event) {
	
// }
// function changeBackground(e){
//     console.log($(e).attr('class'));
    
// };

// $('.priority').click(function(event){changeBackground(event.currentTarget)});