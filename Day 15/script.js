$(document).ready(function(){
	var boxShadow = {
		image: 0,
		text: 0
	};
	$('img').click(function(){
		boxShadow.image++; 
		$(this).css('box-shadow', '0 0 ' + Math.round(boxShadow.image * 5) +'px ' + Math.round(boxShadow.image * 10) + 'px  rgba(0,0,0, 0.5)');
		console.log('Img Test');
		console.log(boxShadow.image);
	});
	$('.text-container').click(function(){
		boxShadow.text++; 
		$(this).css('text-shadow', ' 0 ' + Math.round(boxShadow.text) +'px ' + Math.round(boxShadow.text) + 'px  rgba(0,0,0, 0.5)');
		console.log('Text Test');
		console.log(boxShadow.text);
	})
});