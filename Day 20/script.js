$(document).ready(function(){
	// Dice controller
	var flag = true;
	// Numbers of the dice (real value is position+1)
	var numbers = ['show-front', 'show-back', 'show-right', 'show-left', 'show-top', 'show-bottom'];
 	$('button').click(function(){
 		// Shake it -> Shake it again, on first click
 		if(flag){
			$(this).text($(this).text() + ' again!');
			flag = false;
		}
		// The cube is toggle by classes, so the class of the actual number has to be remove in order to move it to the next number. 
 		$('.cube').prop('class', "cube");
 		// Generate two random numbers between 0 and 5 (real value of the dice = number + 1)
 		var number = Math.floor(Math.random() * 6);
 		var number2 = Math.floor(Math.random() * 6);
 		// Based on the random numbers, move the dice
 		$('#cube1').addClass(numbers[number]);
		$('#cube2').addClass(numbers[number2]);
		// Change text while rotating the dice
		$('h1').text('CHAN CHAN CHAN!').addClass('buzz');	
		// Set the dice result when rotating finished
		setTimeout(function(){
			$('h1').text('The result is: '+ (number+number2+2)).removeClass('buzz');	
		}, 1500);
 	});
 });
