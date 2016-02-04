$(document).ready(function(){
	var clicks = 0;
	var record = 0;
	$('button.btn').click(function(){
		clicks++;
		$('.clicks').text(clicks);
		if (clicks > record){
			record = clicks;
			$('.record-1').text(clicks);
		}
	});
	$('button.reset').click(function(){
		clicks = 0;
		$('.clicks').text(clicks);
	});
	$('.record-2').text(Math.round(Math.random()*1000));
});
