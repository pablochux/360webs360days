 $(document).ready(function(){
 	// Buttons
 	$('.result').click(function(){
 		$('#card').addClass('flipped');
 	});

 	$('.return').click(function(){
 		$('#card').removeClass('flipped'); 	
 	})
 	// Show 
 	$('.show').click(function(){
 		if($('.border').hasClass('blue')){
 			$('.border').removeClass('blue')
 			$('.click').hide();;
 			$('.show').text('Show borders');
 		} else{
 			$('.border').addClass('blue');
 			$('.click').show();
 			$('.show').text('Hide borders');
 		}
 	});
 	// Animations 3D
 	// FRONT
 	$('.front .border-left').click(function(){
		$('#card').addClass('preview-front-left');
 	});
 	$('.front .border-left').mouseleave(function(){
 		$('#card').removeClass('preview-front-left');
 	});
 	 $('.front .border-right').click(function(){
		$('#card').addClass('preview-front-right');
 	});
 	$('.front .border-right').mouseleave(function(){
 		$('#card').removeClass('preview-front-right');
 	});
 	// BACK
 	 $('.back .border-left').click(function(){
 		$('#card').addClass('preview-back-left');
 	});
 	$('.back .border-left').mouseleave(function(){
 		$('#card').removeClass('preview-back-left');
 	});
 	$('.back .border-right').click(function(){
 		$('#card').addClass('preview-back-right');
 	});
 	$('.back .border-right').mouseleave(function(){
 		$('#card').removeClass('preview-back-right');
 	});
})