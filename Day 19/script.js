$(document).ready(function(){
	$('.btn').click(function(){
		$(this).fadeOut(100);
		var button = '.btn-' + Math.round((Math.random() * 4));
		console.log(button);
		var top = getRandomPosition() + 'px';
		var left = getRandomPosition() + 'px';
		console.log(top);
		console.log(left);
		$(button).css('top', top);
		$(button).css('left', left);
		$(button).css('display', 'block');
	});
});
function getRandomPosition() {
	return Math.round(Math.random() * 200);
}