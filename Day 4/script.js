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

$(document).ready(function(){
	var counter = 0;
	startGame(counter);
});
// Starts the game
function startGame (counter, color) {
	if (counter == 0) {
		// Start the game
		console.log('Start game. counter == 0');
		$('img').click(function(){
			var color = $(this).attr('name');
			console.log(color);
			startGame(++counter, color);
		});
	} else if (counter == 1){
		// The game already started
		console.log('Game started. Door 1 choosed -> '+ color+'. counter == 1');
		// change the images based on the color selected
		switch (color){
			case 'blue':
				$('img[name="orange"]').css('cursor', 'initial');
				changeDoorText('blue', texts);
				changeDoorImage('orange');
				break;
			case 'orange':
				$('img[name="blue"]').css('cursor', 'initial');
				changeDoorText('orange', texts);
				changeDoorImage('blue');
				break;
			case 'green':
				$('img[name="orange"]').css('cursor', 'initial');
				changeDoorText('green', texts);
				changeDoorImage('orange');
				break;
			default:
				alert('There has been a problem selecting door 1');
		}
		startGame(++counter, color);
	} else{
		// Select second door
		console.log('Select second door');
		clickController(color, true);
	}
}

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
		if (i == 0) {
			// problem with num in winner
			if (num == undefined) {
				$('p').eq(i).text(texts[result].p);	
			} else{
				$('p').eq(i).text(texts[result].p[num]);	
			}
		} else{
			$('p').eq(i).text("");	
		}
	};
}

// Only function with color == orange || color == blue
function changeDoorImage(color){
	$("img[name='"+color+"']").attr('src', '/images/'+color+'_door_fire.png');
}

// Second clicking controller
// Problema con segundo click -> colores se cambian
function clickController(color, flag) {
	console.log('Color out: '+color);
	$('img')
	$('img').click(function(){
		if (flag){
			var name = $(this).attr('name');
		}
		console.log('Color: '+ color);
		console.log('Name: '+ name);
		if (fireDoorClicked(color, name)){
			console.log("Click Controller. No door 2 selected");
			console.log('Color before clickController call: '+color);
			clickController(color, false);
		} else{
			var color2 = $(this).attr('name');
			console.log('Second door selected => ' + color2);
			$('.image-container').fadeOut(0);
			switch (color2){
				case 'blue':
					if (color == 'blue'){
						changeText('loser', 1);
						$('.loser-container1').fadeIn();
					} else if (color == 'green') {
						changeText('winner');
						$('.winner-container').fadeIn();
					};
					break;
				case 'orange':
					if (color == 'orange'){
						changeText('loser', 1);
						$('.loser-container2').fadeIn();
					} else if (color == 'green') {
						changeText('winner');
						$('.winner-container').fadeIn();
					};
					break;
				case 'green':
					if (color == 'blue'){
						changeText('loser', 1);
						$('.loser-container1').fadeIn();
					} else if (color == 'green') {
						changeText('winner');
						$('.winner-container').fadeIn();
					};
					break;
				default:
					alert('There has been a problem selecting door 2');
			}
		}
	});
}

function fireDoorClicked(color, name){
	return ((color == 'orange') && (name == 'blue') || (color == 'blue') && (name == 'orange') || (color == 'green') && (name == 'orange'));
}