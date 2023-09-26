
$(document).ready(function() {
// Get the current month and day using Day.js
const currentMonth = dayjs().format('MMMM');
const currentDay = dayjs().format('D');

// Update the #currentDay element with the current month and day
const currentDayElement = document.getElementById('currentDay');
currentDayElement.textContent = `Today is ${currentMonth} ${currentDay}`;

  // Loop through each time block
  $(".time-block").each(function() {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);


    // Add the appropriate class based on the current hour
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }

    // Load saved events from local storage
    var savedEvent = localStorage.getItem($(this).attr("id"));
    if (savedEvent) {
      $(this).find("textarea").val(savedEvent);
    }
  });

  // Save button click event
  $(".saveBtn").on("click", function() {
    console.log("Save button clicked");
    var timeBlockId = $(this).parent().attr("id");
    var eventText = $(this).siblings(".description").val();

    // Save the event to local storage
    localStorage.setItem(timeBlockId, eventText);
  });
});
