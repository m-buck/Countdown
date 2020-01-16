// Set the date we're counting down to
var countDownDate = new Date("Dec 25, 2020 00:00:01").getTime();

//Set update interval to 1 second
  var x = setInterval(function() {

  //Set todays date and time
  var now = new Date().getTime();

  //Determine amount of time between now and the date we defined above
  var distance = countDownDate - now;

  //Calculate remaining days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));   				  
  //Output the result in an element with id="countdown"
  document.getElementById("countdown").innerHTML = days + " days " + hours + " hours " + minutes + " min ";

  //If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Christmas is here!!!";
  }
}, 1000);
