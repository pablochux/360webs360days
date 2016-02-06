var levelMessage = [
	"Nice job!",
	"Excellent clickin'!",
	"That was Awesome!",
	"Man are you good!",
	"Boom!",
	"You're a pro!",
	"Unbelievable!",
	"Insanity!",
	"You're on fire!",
	"That was crazy!",
	"You are blowin' my mind!"
];
$(document).ready(function(){
	$('.start-btn').click(function(){
		// Start game
		$('.start').fadeOut(300);
		$('.game').fadeIn(2100);
		// 
		var level = 0;
		$('.game h1').text('Level ' + (level + 1));
		$('.cheat').click(function(){level = 20});
		$('.ball').click(function(){
			$(this).fadeOut();
			console.log(level);
			if (level < 11){
				$('.game h1').text(levelMessage[level]);
				level++;
				// Congrats message
				setTimeout(function(){
					// after congrats message, change it to the next level
					$('.game h1').text('Level ' + (level+1));
					$('.ball').fadeIn(1000);
				}, 2000);
				speedUpAnimation($(this));
			} else {
				win();
			}
		});
	});
});

function speedUpAnimation(elm) {
	var speed = $(elm).css('animation-duration');
	var newSpeed = (speed.split('s'))[0] - 1;
	$(elm).css('animation-duration', newSpeed + 's');
}
function win () {
	$('.game').fadeOut(300);
	$('.winner').fadeIn(2000)
}