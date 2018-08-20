function clock()
{
    setInterval(second_hand,1000);
    setInterval(hour_hand,60000);
    setInterval(minute_hand,30000);
}

var i=-180;
var j=-180;
var k=-180;


function second_hand(){
    i+=6;
    var ref=document.getElementsByClassName("seconds_hand")[0];
    ref.style.transform="rotate("+i+"deg)";
    ref.style.transformOrigin="top left";
    

}
function minute_hand(){
    j+=6;
    var ref=document.getElementsByClassName("minute_hand")[0];
    ref.style.transform="rotate("+j+"deg)";
    ref.style.transformOrigin="top left";
    

}

function hour_hand(){
    k+=6;
    var ref=document.getElementsByClassName("hour_hand")[0];
    ref.style.transform="rotate("+k+"deg)";
    ref.style.transitionOrigin="top left";
    

}


    
