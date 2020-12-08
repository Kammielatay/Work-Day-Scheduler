jQuery(document).ready(function(){

// Grabbing elements from HTML
let currentDay = $('#currentDay')
let currentTime = $('#currentTime')
let container = $('.container');
let timeBlock = $('.time-block');


console.log(timeBlock)



// adding and styling current date and time
currentDay.text(moment().format('[Today is] MMMM Do YYYY.'));
currentTime.text(moment().format('[Current time is ] h:mm a.'));

currentDay.css({fontSize: "30px"})
currentTime.css({fontSize: "25px"})


//adding textareas for standard business days 





})