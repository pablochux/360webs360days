$(document).ready(function(){
	$('#rope img').click(function(){
		$('html').css('background-color', 'white');
		$('#pull-me').fadeOut(0);
		$('#surprise').fadeIn(0);

	});
	$('#ropeImage').draggable({
		containment: "parent",
		start: function (e) {
			mouse = e.pageY;
		},
		stop: function (e) {
			if (e.pageY >= mouse + 100) {
				releaseConfetti();
			}
			$('#rope').animate({top: 0}, 100);
		}
	});
})

function sendMessage(){
	var message = $('input').val();
	if (message !== ""){
		alert(message);
		$('input').val("");
	}
	return false;
}