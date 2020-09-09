// grouping all codes when DOM is ready 
$(document).ready(function () {

   var todayDate = moment().format('MMMM Do YYYY, h:mm:ss a');
   $("#currentDay").text(todayDate);


})