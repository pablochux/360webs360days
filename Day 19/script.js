$(document).ready(function(){
	$('.btn').click(function(){
		$(this).hide(0);
		var button = '.btn-' + Math.floor((Math.random() * 4) + 1);
		console.log(button);
		var top = getRandomPosition() + 'px';
		var left = getRandomPosition() + 'px';
		console.log(top);
		console.log(left);
		$(button).css('top', top);
		$(button).css('left', left);
		setTimeout(function(){
			$(button).show(1500);
		}, 500);
	});
});
function getRandomPosition() {
	return Math.round(Math.random() * 300);
}