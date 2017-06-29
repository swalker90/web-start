$(document).ready(function() {
  var cal_events = [];


  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek'
    },
    defaultDate: moment().format(),
    defaultView: 'month',
    editable: false,
    handleWindowResize: true,
    windowResizeDelay: 100,
    events: function(start, end, timezone, callback) {
      $.getJSON('http://localhost/api/events', function(data) {
          cal_events = data;
          $.each(cal_events, function(i) { 
            d = cal_events[i]; 
            d.start = moment(d.start_time).format(); 
            d.end = moment(d.end_time).format();
            d.title = d.name;
          });
          callback(cal_events);
        });
    },
    eventClick: function(calEvent, jsEvent, view) {
      $("#event-detail").html("<h4>" + calEvent.title + "</h4><p>" + calEvent.description + "</p><p>Start:" + calEvent.start_time + "</p><p>End:" + calEvent.end_time + "</p>");
      $("#event-detail").dialog({
          modal: true,
          buttons: {
            Ok: function() {
              $( this ).dialog( "close" );
            }
          }
      });
    }
      
  });

});
