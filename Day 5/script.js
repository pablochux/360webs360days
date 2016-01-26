// Not jQuery needed
var phrases = [
	"SUNDAY FUNDAY",
	"MESSED UP MONDAY",
	"THOUGHTFUL TUESDAY",
	"WASTED WEDNESDAY",
	"THIRSTY THURSDAY",
	"FRIDAY! PARTY!",
	"SUPER SATURDAY"
];
var date = new Date();
var day = date.getDay();
document.write("<div><h1><span>" + phrases[day] + "!<span></h1></div>");