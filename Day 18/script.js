var animations = ['shake', 'hop', 'spin', 'grow', 'hooray'];
$(document).ready(function(){
	$('img').click(function(){
		var animation = animations[Math.round(Math.random() * 4)];
		$(this).addClass(animation);
		console.log(animation);
		// When animation is complete (2s)
		setTimeout(function(){
			console.log(animation);
			$('img').removeClass(animation);
		}, 2100);
	});
});