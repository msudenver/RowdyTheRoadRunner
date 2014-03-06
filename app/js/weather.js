//@requires : jquery.simpleWeather-2.3.min.js

$(document).ready(function() {
    if ($("html").hasClass('ie8')) {
        return;
    } else {
        $.simpleWeather({
            zipcode: '80218',
            // woeid: '2357536',
            location: '',
            unit: 'f',
            success: function(weather) {
                html = '<h2>' + weather.temp + '&deg;' + " " + 'F';
                html += '<img style="float:right;" width="55px" src="' + weather.image + '">' + '</h2>';
                $("#weather").html(html);
            },
            error: function(error) {
                $("#weather").html('<p>' + error + '</p>');
            }
        });
    }
});
