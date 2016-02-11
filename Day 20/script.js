$(document).ready(function(){
	// Dice controller
		var flag = true;
	var numbers = ['show-front', 'show-back', 'show-right', 'show-left', 'show-top', 'show-bottom'];
 	$('button').click(function(){
 		// Shake it controller
 		if(flag){
			$(this).text($(this).text() + ' again!');
			flag = false;
		}
 		$('.cube').prop('class', "cube"); // Clean classes
 		var number = Math.floor(Math.random() * 6);
 		var number2 = Math.floor(Math.random() * 6);
 		$('#cube1').addClass(numbers[number]);
		$('#cube2').addClass(numbers[number2]);
		$('h1').text('CHAN CHAN CHAN!').addClass('buzz');	
		setTimeout(function(){
			$('h1').text('The result is: '+ (number+number2+2)).removeClass('buzz');	
		}, 1500);
 	});
 });
