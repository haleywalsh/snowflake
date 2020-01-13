/* -----------------------------------------------
   Function for retrieving the main weather info
   ----------------------------------------------- */

// Replace the lat/long below with the lat/long for your desired location.
// Get your city lat/long using https://www.latlong.net/
var latlong = '41.823990,-71.412834';

// Your unique API key. Place the long string of characters between the quotes.
var apikey = '5e10b2393c99fb3c8c79e5a008231867';

// Access the DarkSky API for weather data. DO NOT EDIT THIS LINE.
$.getJSON('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/'+apikey+'/' + latlong)

// Display the weather content once it is loaded, not before.
.done(function(forecast) {
	// Your header section covers over the main weather info.
	// When the data is available, you will need to hide/remove this section
	// in order to see the main content. How you do this is up to you.
	
	// The most basic basic approach is to just hide the header (uncomment to use)
		
	// $('.main').hide();
	// $('.days').hide();
	// $('.info').hide();
	
	// Other methods include animating the header away.
	// This can be done by adding a class name containing CSS animation
	// code to the header like this (uncomment to use)

	// $('header').addClass('anim');

	// This assumes you have written a class with the animation code
	// and named it .anim

	// Another way to remove the header is to provide a button and the event
	// to trigger what happens when the button is clicked (uncomment to use)

	$('header p').hide();
	$('header').append('<a class="button" href="#">Click</a>');
	
	$('header .button').click(function(){
	  $('header').hide();
	  $('.main').toggleClass('slide');
});

	// $(' header .button').click(function(){
 //   		$('.main').toggleClass('slide');
	// })

	// The following line calls a function to display
	// the main weather information. DO NOT EDIT THIS LINE.
	displayData(forecast);
})

// Print the data object feturned from DarkSky for all the details
// DO NOT EDIT THIS LINE.
.always(function(forecast) {
	console.log(forecast);
});


$('button').click(function(){
	  $('.information').show();
});

$('.information').click(function(){
	  $('.information').hide();
});

$('header .button').click(function(){
	  $('.main').toggleClass('slide');
});


/* -----------------------------------------------
   Function for displaying the main weather info
   ----------------------------------------------- */

// All of the data comes from the "forecast" object returned
// from the DarkSky API. Inspect this page in the browser
// for a full list of data that can be used using the methods below.

function displayData(forecast){

	// Target an element in your interface and display
	// dynamic weather information inside of it

	// All of the data you need is located in the "Console" tab
	// when you inspect th code in the browser
	// Click the arrow next to the "Object" to drill down into the data
	// You can reference these data points in your code using the following
	// method(s).

	// For example, if I have an element <div class="today"> in my main content area
	// I can add data from the "Daily" array like this

	$('.day01 h1').html(Math.round(forecast.currently.apparentTemperature));



	$('.day02 h3').html(Math.round(forecast.daily.data[1].temperatureHigh));


	$('.one p').html(Math.round(forecast.hourly.data[4].apparentTemperature));
	$('.two p').html(Math.round(forecast.hourly.data[8].apparentTemperature));
	$('.three p').html(Math.round(forecast.hourly.data[12].apparentTemperature));
	$('.four p').html(Math.round(forecast.hourly.data[16].apparentTemperature));
	
	$('.one h5').html(displayIcon(forecast.hourly.data[4].icon));
	$('.two h5').html(displayIcon(forecast.hourly.data[8].icon));
	$('.three h5').html(displayIcon(forecast.hourly.data[12].icon));
	$('.four h5').html(displayIcon(forecast.hourly.data[16].icon));



	$('.day03 h3').html(displayDay(1));
	$('.day04 h3').html(displayDay(2));
	$('.day05 h3').html(displayDay(3));
	$('.day06 h3').html(displayDay(4));
	$('.day07 h3').html(displayDay(5));
	$('.day08 h3').html(displayDay(6));

	$('.day03 p').html(Math.round(forecast.daily.data[1].apparentTemperatureHigh));
	$('.day04 p').html(Math.round(forecast.daily.data[2].apparentTemperatureHigh));
	$('.day05 p').html(Math.round(forecast.daily.data[3].apparentTemperatureHigh));
	$('.day06 p').html(Math.round(forecast.daily.data[4].apparentTemperatureHigh));
	$('.day07 p').html(Math.round(forecast.daily.data[5].apparentTemperatureHigh));
	$('.day08 p').html(Math.round(forecast.daily.data[6].apparentTemperatureHigh));

	
	$('.day03 h5').html(displayIcon(forecast.daily.data[1].icon));
	$('.day04 h5').html(displayIcon(forecast.daily.data[2].icon));
	$('.day05 h5').html(displayIcon(forecast.daily.data[3].icon));
	$('.day06 h5').html(displayIcon(forecast.daily.data[4].icon));
	$('.day07 h5').html(displayIcon(forecast.daily.data[5].icon));
	$('.day08 h5').html(displayIcon(forecast.daily.data[6].icon));

	$('.day03 h4').html(forecast.daily.data[1].summary);
	$('.day04 h4').html(forecast.daily.data[2].summary);
	$('.day05 h4').html(forecast.daily.data[3].summary);
	$('.day06 h4').html(forecast.daily.data[4].summary);
	$('.day07 h4').html(forecast.daily.data[5].summary);
	$('.day08 h4').html(forecast.daily.data[6].summary);


	$('.quotep p').html(displayIcon(forecast.daily.data[0].icon));
	$('.quoteh h1').html(displayQuote(forecast.daily.data[0].icon));
	

	

	// In this example, the high temperature for the first day of the week
	// (referenced by the number 0) is written as HTML inside the <div class="today"> element
	// If I want to round this number up, I would modify the code like this

	// $('.day01 p').html(Math.round(forecast.daily.data[0].temperature));

	// If I want to display the same information for tomorrow, change the 0 to 1

	// $('.day01 p').html(Math.round(forecast.daily.data[1].temperature));

	// If I want to display a summary of the weather
	// (like, "scattered thundershowers...") for today

	// $('.today').html(forecast.daily.data[0].summary);

	// If I want to modify the display of the page element based on the weather
	// I can access the "icon" property. This returns a value that can be used
	// as a CSS class name that you can create with your style details

	// $('.day01 p').html(displayIcon(forecast.daily.data[0].icon));

	// Note – the value of "icon" above needs to be checked in the inspect
	// panel. It may say "rain". If this is the case, you could create a rule
	// inside your CSS called .rain and then add, maybe, a background color
	// or image. The full range of weather values returned by the "icon" property are

	// "clear-day", "clear-night", "rain", "snow", "sleet", "wind", "fog",
	// "cloudy", "partly-cloudy-day", "partly-cloudy-night", "hail",
	// "thunderstorm" and "tornado"

	

}


/* -----------------------------------------------
   Function for creating day of the week
   ----------------------------------------------- */

// based on a system where 0 = today, 1 = tomorrow, etc.
// note: the number system below does not immediately correlate
// for example, 0 for today does not line up with 0 for Sunday below
// how this works – in the return statement, d.getDay() gets today's date
// as a number (if today is Thursday, d.getDay() will be 4)
// adding "n" to this number gives you how many days from today.
// n is passed as an argument to the displayDay() function
// in the main body of the code above.
// if today is Thursday, the 4th day of the week,
// and the number 2 is passed as an argument, 
// the function will return the number 6. 6 maps to Saturday in the 
// weekday array below.

function displayDay(n){

	var d = new Date();
	var weekday = new Array();

	weekday[0] = "sun";
	weekday[1] = "mon";
	weekday[2] = "tues";
	weekday[3] = "wed";
	weekday[4] = "thurs";
	weekday[5] = "fri";
	weekday[6] = "sat";

	var dispDay = d.getDay() + n;

	// adjust number system for numbers over 6
	// subtract 7 from totals higher than 6
	// to keep the day numbers in the array range above
	if(dispDay > 6){
		dispDay = dispDay - 7;
	}

	return weekday[ dispDay ];

}


/* -----------------------------------------------
   Function for converting timestampt to readable text
   Source: https://stackoverflow.com/a/6078873
   ----------------------------------------------- */

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  //var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  var time = hour + ':' + min ;
  return time;
}



function displayIcon(n){
	switch(n) {
		case "clear-day":
    		return '<img src="img/icons/Sun.svg" alt="Clear Day">';
    		break;
    	case "clear-night":
    		return '<img src="img/icons/Moon-Full.svg" alt="Clear Night">';
    		break;
    	case "rain":
    		return '<img src="img/icons/Cloud-Rain.svg" alt="Rain">';
    		break;
    	case "snow":
    		return '<img src="img/icons/Snowflake.svg" alt="Snow">';
    		break;
    	case "sleet":
    		return '<img src="img/icons/Cloud-Hail.svg" alt="Sleet">';
    		break;
    	case "wind":
    		return '<img src="img/icons/Wind.svg" alt="Wind">';
    		break;
    	case "fog":
    		return '<img src="img/icons/Cloud-Fog.svg" alt="Fog">';
    		break;
    	case "cloudy":
    		return '<img src="img/icons/Cloud.svg" alt="Cloudy">';
    		break;
    	case "partly-cloudy-day":
    		return '<img src="img/icons/Cloud-Sun.svg" alt="Partly Cloudy Day">';
    		break;
    	case "partly-cloudy-night":
    		return '<img src="img/icons/Cloud-Moon.svg" alt="Partly Cloudy Night">';
    		break;
    	case "hail":
    		return '<img src="img/icons/Cloud-Hail.svg" alt="Hail">';
    		break;
    	case "thunderstorm":
    		return '<img src="img/icons/Cloud-Lightening.svg" alt="Thunderstorm">';
    		break;
    	case "tornado":
    		return '<img src="img/icons/Tornado.svg" alt="Tornado">';
    		break;
  		default:
    		// code block
	}
}


function displayQuote(n){
	switch(n) {
		case "clear-day":
    		return '<img src="img/quotes/sun.png" alt="Clear Day">';
    		break;
    	case "clear-night":
    		return '<img src="img/quotes/clear-night.png" alt="Clear Night">';
    		break;
    	case "rain":
    		return '<img src="img/quotes/rain.png" alt="Rain">';
    		break;
    	case "snow":
    		return '<img src="img/quotes/snow.png" alt="Snow">';
    		break;
    	case "sleet":
    		return '<img src="img/quotes/sleet-hail-thunderstorm.png" alt="Sleet">';
    		break;
    	case "wind":
    		return '<img src="img/quotes/wind.png" alt="Wind">';
    		break;
    	case "fog":
    		return '<img src="img/quotes/fog.png" alt="Fog">';
    		break;
    	case "cloudy":
    		return '<img src="img/quotes/cloudy.png" alt="Cloudy">';
    		break;
    	case "partly-cloudy-day":
    		return '<img src="img/quotes/cloudy.png" alt="Partly Cloudy Day">';
    		break;
    	case "partly-cloudy-night":
    		return '<img src="img/icons/Cloud-Moon.svg" alt="Partly Cloudy Night">';
    		break;
    	case "hail":
    		return '<img src="img/icons/Cloud-Moon.svg" alt="Hail">';
    		break;
    	case "thunderstorm":
    		return '<img src="img/quotes/sleet-hail-thunderstorm.png" alt="Thunderstorm">';
    		break;
    	case "tornado":
    		return '<img src="img/quotes/rain.png" alt="Tornado">';
    		break;
  		default:
    		// code block
	}
}
