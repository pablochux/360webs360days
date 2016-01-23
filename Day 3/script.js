// Variables
var randomColor;
// Functions
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// Main
$(document).ready(function(){
	$('button').click(function(){
		randomColor = getRandomColor();
		$('html').css('background-color', randomColor);
		$('#hex-color').text(randomColor);
		$('#color').css('background-color', randomColor);
	});
});