
// commands which will get system time
var currentdate = new Date();
var hour = currentdate.getHours();
var minute = currentdate.getMinutes();
var second = 180;


// converting 24 hours to 12hours
function clock() {
    if (hour > 12) {
        hour = hour - 12;
    }

    hour = 180 + hour * 30 + minute * 0.5;
    minute = 180 + minute * 6;
    
    document.getElementsByClassName("seconds_hand")[0].style.transform = "rotate(" + second + "deg)";
    document.getElementsByClassName("minute_hand")[0].style.transform = "rotate(" + minute + "deg)";
    document.getElementsByClassName("hour_hand")[0].style.transform = "rotate(" + hour + "deg)";
    
    // movements for hands
    setInterval(second_hand, 1000);
    setInterval(minute_hand, 60000);
    setInterval(hour_hand, 150000);
}

function second_hand() {
    second += 6;
    var ref = document.getElementsByClassName("seconds_hand")[0];
    ref.style.transform = "rotate(" + second + "deg)";
    ref.style.transformOrigin = "top left";
}
function minute_hand() {
    minute += 6;
    var ref = document.getElementsByClassName("minute_hand")[0];
    ref.style.transform = "rotate(" + minute + "deg)";
    ref.style.transformOrigin = "top left";
}
function hour_hand() {
    hour += 30;
    var ref = document.getElementsByClassName("hour_hand")[0];
    ref.style.transform = "rotate(" + hour + "deg)";
    ref.style.transitionOrigin = "top left";
}



