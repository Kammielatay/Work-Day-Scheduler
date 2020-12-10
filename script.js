jQuery(document).ready(function(){

// Grabbing elements from HTML
let currentDay = $('#currentDay')
let currentTime = $('#currentTime')


// adding and styling current date and time
currentDay.text(moment().format('[Today is] MMMM Do YYYY.'));
currentTime.text(moment().format('[Current time is ] h:mm A.'));

currentDay.css({fontSize: "30px"})
currentTime.css({fontSize: "25px"})




//setting css elements depending on time 

   








})