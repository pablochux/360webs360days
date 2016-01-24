$(document).ready(function(){
	var counter = 0;
	startGame(counter);
});

function startGame (counter, color) {
	console.log('Start Game');
	if (counter == 0) {
		// Start the game
		console.log('counter == 0');
		$('img').click(function(){
			var color = $(this).attr('name');
			console.log(color);
			startGame(++counter, color);
		});
	} else if (counter == 1){
		// The game already started
		console.log('counter == 1');
		// change the images based on the color selected
		switch (color){
			case 'blue':
				$('img[name="orange"]').css('cursor', none);
				blueDoorText();
				changeOrangeDoor();
				console.log('bluedoor');
				break;
			case 'orange':
				$('img[name="blue"]').css('cursor', none);
				orangeDoorText();
				changeBlueDoor();
				console.log('orangedoor');
				break;
			case 'green':
				$('img[name="orange"]').css('cursor', none);
				greenDoorText();
				changeOrangeDoor();
				console.log('greendoor');
				break;
			default:
				alert('There has been a problem');
		}
		startGame(++counter, color);
	} else{
		// Select second door
		$('img').click(function(){
			var color2 = $(this).attr('name');
			console.log(color2);
		});
		// Second door selected
		hideSelectorContainers();
		switch (color2){
			case 'blue':
				if (color == 'blue'){
					$('.loser-container1').fadeIn();
				} else if (color == 'green') {
					$('.winner-container').fadeIn();
				};
			case 'orange':
				if (color == 'orange'){
					$('.loser-container2').fadeIn();
				} else if (color == 'green') {
					$('.winner-container').fadeIn();
				};
			case 'green':
				if (color == 'blue'){
					$('.loser-container1').fadeIn();
				} else if (color == 'green') {
					$('.winner-container').fadeIn();
				};
			default:
				alert('There has been a problem');
		}
	}
}
function blueDoorText () {
	$('h1').text('You Picked the Blue Door!');
	$('p').eq(0).text('I opened the Orange Door which held a BAD THING.');
	$('p').eq(1).text('Now if you want to switch you can choose the Green Door');
	$('p').eq(2).text('or you can keep your first choice and open the Blue Door.');
}
function orangeDoorText () {
	$('h1').text('You Picked the Blue Door!');
	$('p').eq(0).text('I opened the Blue Door which held a BAD THING.');
	$('p').eq(1).text('Now if you want to switch you can choose the Green Door');
	$('p').eq(2).text('or you can keep your first choice and open the Orange Door.');
}
function greenDoorText () {
	$('h1').text('You Picked the Green Door!');
	$('p').eq(0).text('I opened the Orange Door which held a BAD THING.');
	$('p').eq(1).text('Now if you want to switch you can choose the Blue Door');
	$('p').eq(2).text('or you can keep your first choice and open the Green Door.');
}
function changeOrangeDoor(){
	$("img[name='orange']").attr('src', '/images/orange_door_fire.png');
}
function changeBlueDoor () {
	$("img[name='blue']").attr('src', '/images/blue_door_fire.png');
}
function hideSelectorContainers(){
	$('.text-container').fadeOut(0);
	$('.image-container').fadeOut(0);
}