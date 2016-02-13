$(document).ready(function(){
	var weapons = ['rock', 'paper', 'scissors'];
	// Counter object for the score
	var score = {
		'computer': 0, 
		'user': 0,
		'restart': function(){
			this.computer = 0;
			this.user = 0;
			return this;
		},
		'show': function(){
			return (this.computer + ' - ' + this.user);
		}
	};
	// Start Game
	$('.weapon-selector button').click(function(){
		var weapon = $(this).text();
		var randomWeapon = weapons[Math.floor(Math.random() * 3)];
		$('img').addClass('shake');	
		// Before the animation
		setTimeout(function(){
			// Remove the animation
			$('img').removeClass('shake');	
			// Show the images of the choices
			$('.user-left img').attr('src', 'images/' + randomWeapon + '.png');
			$('.user-right img').attr('src', 'images/' + weapon + '.png');
			// Show the result (and update the score) during 2s
			$('.result').css('visibility', 'visible');	
			$('.result h1').text(result(weapon, randomWeapon, score));
			setTimeout(function(){
				$('.result h1').text(score.show());	
				// Reset the weapons images to the hands
				resetWeapons();
			}, 2000);
		}, 2000);
		// Reset the score
		$('.result button').click(function(){
			$('.result h1').text(score.restart().show());	
		})
	});
});
// Return a the string result of the game
function result(user, computer, score) {
	var result = "";
	// Si son iguales -> empate
	if (user == computer) {
		result = 'DRAW!'; 
	} else if(user == 'rock'){
		result = (computer != 'paper') && (computer == 'scissors') ? 'YOU WIN!' : 'YOU LOSE!'; 
	} else if(user == 'paper'){
		result = (computer != 'scissors') && (computer == 'rock') ? 'YOU WIN!' : 'YOU LOSE!';
	} else{
		// User = scissors
		result = (computer != 'rock') && (computer == 'paper')  ? 'YOU WIN!' : 'YOU LOSE!';
	}
	// Update the score
	switch (result) {
		case 'YOU WIN!':
			score.user++;
			break;
		case 'YOU LOSE!':
			score.computer++;
			break;
	}
	return result;
}
// Reset image weapons to the originals (hands)
function resetWeapons() {
	$('.user-left img').attr('src', 'images/left-hand.png');
	$('.user-right img').attr('src', 'images/right-hand.png');
}