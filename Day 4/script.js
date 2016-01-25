// Variables
var texts = {
	blue: {
		h1: 'You Picked the Blue Door!',
		p: [
				'I opened the Orange Door which held a BAD THING.',
				'Now if you want to switch you can choose the Green Door',
				'or you can keep your first choice and open the Blue Door.'
			]
	},
	orange: {
		h1: 'You Picked the Orange Door!',
		p: [
				'I opened the Blue Door which held a BAD THING.',
				'Now if you want to switch you can choose the Green Door',
				'or you can keep your first choice and open the Orange Door.'
			]
	},
	green: {
		h1: 'You Picked the Green Door!',
		p: [
				'I opened the Orange Door which held a BAD THING.',
				'Now if you want to switch you can choose the Blue Door',
				'or you can keep your first choice and open the Green Door.'
			]
	},
	winner: {
		h1: 'YOU WIN!',
		p: 'Booyah! Here is your AWESOME THING!'
	},
	loser: {
		h1: 'YOU LOSE!',
		p: [
			'Ouch! Too bad. Here is your BAD THING!',
			'Well that sucks. Here is your BAD THING!'
		]
	}
};
// Functions
// Changes the text of a door view based on $color
function changeDoorText (color, texts) {
	$('h1').text(texts[color].h1);
	for (var i = 0; i <= 2; i++) {
		$('p').eq(i).text(texts[color].p[i]);
	};
}
// Changes the text of winner/losser view based on result
function changeText(result, num){
	$('h1').text(texts[result].h1);
	for (var i = 0; i <= 2; i++) {
		// Change the text
		if (i == 0) {
			if (num == undefined) {
				$('p').eq(i).text(texts[result].p);	
			} else{
				$('p').eq(i).text(texts[result].p[num]);	
			}
		} else{
			// Remove the text
			$('p').eq(i).text("");	
		}
	};
}

// Only function with color == orange || color == blue
function changeDoorImage(color){
	$("img[name='"+color+"']").attr('src', '/images/'+color+'_door_fire.png');
}

// Main script
$(document).ready(function(){
	console.log('Start game');
	// Flag is used to only enter one time in the click function
	var flag = true;
	$('img').click(function(){
		if (flag){
			flag = false;
			var firstDoorColor = $(this).attr('name');
			// The game already started
			console.log('Door 1 choosed -> '+ firstDoorColor);
			// change the images based on the firstDoorColor selected
			switch (firstDoorColor){
				case 'blue':
					$('img[name="orange"]').css('cursor', 'initial');
					changeDoorText('blue', texts);
					changeDoorImage('orange');
					$("img[name='blue']").click(function(){
						$('.image-container').fadeOut(0);
						changeText('loser', 1);
						$('.loser-container1').fadeIn();
					});
					$("img[name='green']").click(function(){
						$('.image-container').fadeOut(0);
						changeText('loser', 1);
						$('.loser-container1').fadeIn();
					});
					break;
				case 'orange':
					$('img[name="blue"]').css('cursor', 'initial');
					changeDoorText('orange', texts);
					changeDoorImage('blue');
					$("img[name='orange']").click(function(){
						$('.image-container').fadeOut(0);
						changeText('loser', 1);
						$('.loser-container2').fadeIn();
					});
					break;
				case 'green':
					$('img[name="orange"]').css('cursor', 'initial');
					changeDoorText('green', texts);
					changeDoorImage('orange');
					$("img[name='green']").click(function(){
						$('.image-container').fadeOut(0);
						changeText('winner');
						$('.winner-container').fadeIn();
					});
					$("img[name='blue']").click(function(){
						$('.image-container').fadeOut(0);
						changeText('winner');
						$('.winner-container').fadeIn();
					});
					break;
				default:
					alert('There has been a problem selecting door 1');
			}
		}	
	});
});