$(document).ready(function(){
   var answers = ['Maybe.', 'Certainly not.', 'I hope so.', 'Not in your wildest dreams.', 'There is a good chance.', 'Quite likely.', 'I think so.', 'I hope not.', 'I hope so.', 'Never!', 'Fuhgeddaboudit.', 'Ahaha! Really?!?', 'Pfft.', 'Sorry, bucko.', 'Yes. Isn\'t it obvious?', 'No. Just No.', 'The future is bleak.', 'The future is uncertain.', 'I would rather not say.', 'Who cares?', 'Possibly.', 'Never, ever, ever.', 'There is a small chance.', 'Yes!'];
   var placeholders =['Enter a question, please', 'Enter a fucking question', 'Enter a fucking question, please', 'Are you fucking kidding me?', 'DAMN IT!', 'PLEEEEEEASE only a question']
	// Click -> muestra respuesta aleatoria
	var placeholderCounter = 0;
	$('button').click(function(){
		// Test if Input is not empty
		if ($('.question-input').val() != "") {
			$('h3').fadeIn();
			$('h3').text(answers[Math.round(Math.random() * answers.length)]);
		} else{
			// hide the previous answer
			$('h3').fadeOut();
			// resets the counter to 0
			placeholderCounter = (placeholderCounter == placeholders.length) ? 0 : placeholderCounter;
			// Sets a new placeholder
			$('.question-input').attr('placeholder', placeholders[placeholderCounter++]);
		}
	});
});