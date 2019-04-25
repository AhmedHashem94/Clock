$(document).ready(function() {
    var hour = $("#divHour");
    var minute = $("#divMinute");
    var second = $("#divSecond");
    var watch = $("#divTime");





    setInterval(function() {
        var now = new Date(Date.now());
        var seconds = now.getSeconds();
        var minutes = now.getMinutes();
        var hours = now.getHours();
        watch.html("" + hours + ":" + minutes + ":" + seconds);
        hour.css("transform", "rotate(" + (hours * 360 / 12) % 360 + "deg)");
        minute.css("transform", "rotate(" + (minutes * 360 / 60) % 360 + "deg)");
        second.css("transform", "rotate(" + (seconds * 360 / 60) % 360 + "deg)");
    }, 1000);

});