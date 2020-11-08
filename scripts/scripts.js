// grouping all codes when DOM is ready 
$(document).ready(function () {

   // Current day date format
   var todayDate = moment().format('MMMM Do YYYY, h:mm:ss a');
   $("#currentDay").text(todayDate);

   // Setting & getting stored data from local storage 
   var taskObj = JSON.parse(localStorage.getItem("tasks")) || {}

   $(".saveBtn").on("click", function () {
      var task = $(this).prev().val().trim()
      var time = $(this).prev().attr("id")

      taskObj[time] = task
      localStorage.setItem("tasks", JSON.stringify(taskObj))

      console.log(taskObj)
   })
   for (const property in taskObj) {
      console.log(`${property}: ${taskObj[property]}`);
      $(`#${property}`).val(taskObj[property])
   }

   // Color Coding to indicate past, present or future hours
   function changeColor() {
      var currentHour = moment().hours();
      console.log(currentHour);
      $(".hour").each(function () {
         var timeHour = parseInt($(this).attr("id"));
         if (timeHour < currentHour) {
            $(this).addClass("past");
         } else if (timeHour === currentHour) {
            $(this).addClass("present");
            $(this).removeClass("past");
         } else if (timeHour > currentHour) {
            $(this).addClass("future");
            $(this).removeClass("present" & "past");
         }
      });
   }
   changeColor();
});