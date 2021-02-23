// Refer to FullCalendar docs for more customization
// API key: AIzaSyA3uX2Qdh5m67ho8ELTdTtdwLENIZ_0SIM
// Address: autigerdev@gmail.com
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      aspectRatio: 2.5,
      googleCalendarApiKey: 'AIzaSyA3uX2Qdh5m67ho8ELTdTtdwLENIZ_0SIM',
      eventSources: [
        {
          googleCalendarId: 'autigerdev@gmail.com'
        }, {
          googleCalendarId: 'en.usa#holiday@group.v.calendar.google.com'
        }
      ]
    });
  
    calendar.render();
  });