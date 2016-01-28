 $(document).ready(function(){
 	var numbers = ['show-front', 'show-back', 'show-right', 'show-left', 'show-top', 'show-bottom'];
 	$('.appear').click(function(){
 		$('.container').fadeIn();
 		$(this).fadeOut(200);
 		setTimeout(function(){
 			$('.roll').fadeIn();
 		}, 1000);
 	})
 	$('.roll').click(function(){
 		$('#cube').prop('class', "");
 		var number = Math.floor(Math.random() * 6);
 		console.log(numbers[number]);
 		$('#cube').addClass(numbers[number]);
 	});
});