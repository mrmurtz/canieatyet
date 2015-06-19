

// Time API


// var appTime =	  $.getJSON('http://muslimsalat.com/london/daily.json?key=API_KEY&jsoncallback=?', function (times){
// 	 	 	console.log(times.items[0].maghrib);

// 			$('.prayerTimesExample')
// 		 .append(' '+times.items[0].maghrib);
// 		 // .append(' by MuslimSalat.com');
// 	  });

// console.log(appTime);


// These are the fake times just to check

// var fakeTimes = '13:15';


// These are the real times coming from PrayTime.js
prayTimes.setMethod('Jafari'); 

var times = prayTimes.getTimes(new Date(), [49.5, -0.1]);
console.log(times.maghrib)

$('.prayerTimesExample').append(' ' +times.maghrib);

var timeNow = moment().format('HH:mm');


if (timeNow < times){
	$('body').css('background-color', '#aa2c43')
	$('h1').append('NO');
}	
	else {
	$('body').css('background-color', '#6f9283');
	$('h1').append('YES');
	$('button').remove();
}



// Refresh page buttons
$('#refresh').click(function() {
 location.reload();
 });