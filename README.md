# Countdown
JavaScript countdown to a user-defined date and time

![](https://i.imgur.com/cN6xF0T.png)

## Getting Started

Set the date we're counting down to:
```
var countDownDate = new Date("Dec 25, 2020 00:00:01").getTime();
```

Output days, hour, minutes, seconds to the element id 'countdown':
```
document.getElementById("countdown").innerHTML = days + " days " + hours + " hours " + minutes + " min ";
```

HTML:
```
<p id="countdown"></p>
```

Set a message that will display once the countdown is over:
```
document.getElementById("countdown").innerHTML = "Christmas is here!!!";
```


