$(document).ready(function(){
	$('.horizontal-line').mouseover(function(){
		console.log('Mouseover')
		$(this).css('background-color', getRandomColor());
	});
	$('button').click(function(){
		$('.horizontal-line').each(function(){
			$(this).css('background-color', getRandomColor());
		});
	});
	// for (var i = 0; i <= 70; i++) {
	// 	console.log('Inside Test');
	// 	setTimeout(function(){
	// 		$('.horizontal-line').eq(i).css('background-color', getRandomColor());
	// 	}, 100);
	// };
});

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}