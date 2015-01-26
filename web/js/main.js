$(document).ready(function() {

var startSection = "home";
  
function formatTime(date) {
  console.log(date.toTimeString());
  console.log(date.toJSON());
  return date;
};
  
$(".nav-link").click(function(){
  var current = $(this).attr("data-target");
  var $current = $("#" + current);
  
  $(".nav-link.active").removeClass("active");
  
  $(".nav-link" + "." + current).addClass("active");
  $(".content.active").removeClass("active").addClass("visuallyhidden");
  $current.addClass("active").removeClass("visuallyhidden");
  if (current === "events") {
    $('#events').fullCalendar({
      events: {
        url: 'https://www.google.com/calendar/feeds/0ur6oeamutbi8otlb67221smr8%40group.calendar.google.com/public/basic',
        className: 'gcal-event',
        currentTimezone: 'America/Los_Angeles'
      },
      eventClick: function(event) {
				// opens events in a popup window
				window.open(event.url, 'gcalevent', 'width=700,height=600');
				return false;
			},
			
			loading: function(bool) {
				if (bool) {
					$('#loading').show();
				}else{
					$('#loading').hide();
				}
			},
      eventRender: function(event,element){
        var startTime = formatTime(event.start);
        var endTime = formatTime(event.end);
        console.log(event);
        element.qtip({
          content: {
            text: "<div class='tip'>" +
                    "<h1 class='tip-header'>" + event.title + "</h1>" + 
                    "<div class='tip-details'>" +
                      "<p><span class='tip-category'>Start: </span>" + startTime + "</p>" +
                      "<p><span class='tip-category'>End: </span>" + endTime + "</p>" +
                      "<p><span class='tip-category'>Location: </span>" + event.location + "</p>" +
                      "<p><span class='tip-category'>Description: </span>" + event.description + "</p>" +
                    "</div>" +
                  "</div>"
          },
          position: {
            corner: {
              target: 'topMiddle',
              tooltip: 'bottomMiddle'
            }
          },
          style: { 
            width: 300,
            background: "none",
            border: "none"
          }
        });
      },
    });
  } else {
    $('#events').fullCalendar( 'destroy' )
  }
});  

$(".nav-link" + "." + startSection).click();

});