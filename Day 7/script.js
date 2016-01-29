 $(document).ready(function(){
 	var numbers = ['show-front', 'show-back', 'show-right', 'show-left', 'show-top', 'show-bottom'];
 	$('.appear').click(function(){
 		$(this).addClass('roll');
 		$('.container').fadeIn();
 		$(this).text('Roll');
 		$(this).removeClass('appear');
	 	if ($('button').text() == 'Roll'){
		 	$('button').click(function(){
		 		$('#cube').prop('class', "");
		 		var number = Math.floor(Math.random() * 6);
		 		$('#cube').addClass(numbers[number]);
		 	});
	 	}
 	});
});