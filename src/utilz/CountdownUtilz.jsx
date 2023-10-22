export var countdownDate = new Date('Dec 25, 2023 00:00:00').getTime();

var x = setInterval(function() {
    var currentTime = new Date().getTime();
    var range = countdownDate - currentTime;

    var days = Math.floor(range / (1000 * 60 * 60 * 24));
    var hours = Math.floor((range % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((range % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((range % (1000 * 60)) / 1000)

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}, 1000)

