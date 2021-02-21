$(function() {
  $("#navbar").load("navbar.html");
});

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth'
  });
  calendar.render();
});

var calendar = new FullCalendar.Calendar(calendarEl, {
  // no plugin config required!
});

/*
let calendar = new Calendar(calendarEl, {
  plugins: [ googleCalendarPlugin ],
  googleCalendarApiKey: 'AIzaSyBemkF42lYGOymDhUcJl9HOThR-BMEi8WU',
  events: {
    googleCalendarId: 'autigerdev@gmail.com'
  }
});*/