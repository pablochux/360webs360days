$(document).ready(function(){
	 $('.horizontal-line').mouseover(function(){
	 	console.log('Mouseover')
	 	$(this).css('background-color', getRandomColor());
	 })
});

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}