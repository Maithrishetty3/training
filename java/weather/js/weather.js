// author:Maithri shetty
// Date:13/08/18

// main body
function body_load() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var today_date = new Date();
            var current_hour = today_date.getHours();

            if (current_hour < 12) {
                document.getElementById('wishing').innerHTML = "GOOD MORNING";
            } else if (current_hour < 16) {
                document.getElementById('wishing').innerHTML = "GOOD AFTERNOON";
            } else if (current_hour < 20) {
                document.getElementById('wishing').innerHTML = "GOOD EVENING";
            } else {
                document.getElementById('wishing').innerHTML = "GOOD NIGHT"; 
            }
            var string_to_object = JSON.parse(this.responseText);
            var weather_info = string_to_object.query.results.channel.item.forecast;

            //weather information of different day 
            for (i = 0; i <= 6; i++) {

                var image = document.getElementById("weather-image" + i);
                image.style.position = "absolute";
                console.log(weather_info[i].text);

                // images for different weather type
                if (weather_info[i].text == "Mostly Cloudy") {
                    image.style.background = "url('images/weather-icons.jpg') 35% 12%";
                    image.style.width = "150px";
                    image.style.height = "110px";
                } else if (weather_info[i].text == "Sunny") {
                    image.style.background = "url('images/weather-icons.jpg') 10% 0";
                    image.style.width = "150px";
                    image.style.height = "110px";
                } else if (weather_info[i].text == "Mostly Sunny") {
                    image.style.background = "url('images/weather-icons.jpg') 94% 5%";
                    image.style.width = "150px";
                    image.style.height = "110px";
                } else if (weather_info[i].text == "Breezy") {
                    image.style.background = "url('images/weather-icons.jpg')  65% 50%";
                    image.style.width = "150px";
                    image.style.height = "110px";
                } else if (weather_info[i].text == "Partly Cloudy") {
                    image.style.background = "url('images/weather-icons.jpg') 5% 50%";
                    image.style.width = "150px";
                    image.style.height = "110px";
                } else if (weather_info[i].text == "Mostly Cloudy") {
                    image.style.background = "url('images/weather-icons.jpg') 40% 7%";
                    image.style.width = "150px";
                    image.style.height = "110px";
                } else if (weather_info[i].text == "Cloudy") {
                    image.style.background = "url('images/weather-icons.jpg')  65% 12%";
                    image.style.width = "150px";
                    image.style.height = "110px";
                } else if (weather_info[i].text == "Rain") {
                    image.style.background = "url('images/weather-icons.jpg')  5% 95%";
                    image.style.width = "150px";
                    image.style.height = "110px";
                } else if (weather_info[i].text == "Scattered Thunderstorms") {
                    image.style.background = "url('images/weather-icons.jpg') 63% 88%";
                    image.style.width = "150px";
                    image.style.height = "110px";
                } else if (weather_info[i].text == "Thunderstorms") {
                    image.style.background = "url('images/weather-icons.jpg') 63% 88%";
                    image.style.width = "150px";
                    image.style.height = "110px";
                }else if (weather_info[i].text == "Scattered Showers") {
                    image.style.background = "url('images/weather-icons.jpg') 95% 95%";
                    image.style.width = "150px";
                    image.style.height = "110px";
                }


                // to display the full day
                if (weather_info[i].day == 'Mon') {
                    days = "MONDAY";
                } else if (weather_info[i].day == 'Tue') {
                    days = "TUESDAY";
                } else if (weather_info[i].day == 'Wed') {
                    days = "WEDNESDAY";
                } else if (weather_info[i].day == 'Thu') {
                    days = "THURSDAY";
                } else if (weather_info[i].day == 'Fri') {
                    days = "FRIDAY";
                } else if (weather_info[i].day == 'Sat') {
                    days = "SATURDAY";
                } else if (weather_info[i].day == 'Sun') {
                    days = "SUNDAY";
                }
                document.getElementById('day' + i).innerHTML = days;


                // to find maximum and minimum teperature 
                var max_tempin_far = weather_info[i].high;
                var max_tempin_deg = (max_tempin_far - 32) / 1.8;
                max_tempin_deg = max_tempin_deg.toFixed(0);

                var min_tempin_far = weather_info[i].low;
                var min_tempin_deg = (min_tempin_far - 32) / 1.8;
                min_tempin_deg = min_tempin_deg.toFixed(0);

                document.getElementById("highest_temp" + i).innerHTML = max_tempin_deg + '&deg';
                document.getElementById("lowest_temp" + i).innerHTML = min_tempin_deg + '&deg';

            }
        }
    };

    // choice for different cities
    var city_choice = document.getElementById("selection").value;
    xhttp.open("GET", "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + city_choice + "%2C%20in%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", true);
    xhttp.send();
}