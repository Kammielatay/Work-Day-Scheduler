jQuery(document).ready(function(){

// adding and styling current date and time
$('#currentDay').text(moment().format('[Today is ] LL')).css({fontSize: "25px"});
$('#currentTime').text(moment().format('LT')).css({fontSize: "25px"});


let realTime = moment().format('HH:mm'); // current time 

let startHour = moment().startOf('hour').format("HH:mm") // start of current hour

let endTime = moment("23:59", "HH:mm").format('HH:mm')

// clearing local storage at the end of the day
if(realTime === endTime){
    localStorage.clear()
}

// setting classes for textarea based on real time 
$('.hour').each(function(){
    let convertingTime = $(this).text() //setting values to variable
    let convertedTime = moment(convertingTime, 'HA').format('HH:mm') // coverting time to military
    
    // adding class depending on past, present, future 
    if (convertedTime < startHour) {
        $(this).siblings('textarea').addClass('past')
    } else if (convertedTime === startHour){
        $(this).siblings('textarea').addClass('present')
    } else if (convertedTime > realTime){
        $(this).siblings('textarea').addClass('future')
    } 
    
})


//setting input from textarea and saving it to local storage

$('.saveBtn').on('click', setLocalStorage);

function setLocalStorage(){
    $('textarea').each(function () {
        var id = $(this).attr('id');
        var value = $(this).val();
        localStorage.setItem(id, value);
    }); 
}

// getting input from local storage

$('#hourNine').text(window.localStorage.getItem('hourNine'));
$('#hourTen').text(window.localStorage.getItem('hourTen'));
$('#hourEleven').text(window.localStorage.getItem('hourEleven'))
$('#hourTwelve').text(window.localStorage.getItem('hourTwelve'))
$('#hourOne').text(window.localStorage.getItem('hourOne'))
$('#hourTwo').text(window.localStorage.getItem('hourTwo'))
$('#hourThree').text(window.localStorage.getItem('hourThree'))
$('#hourFour').text(window.localStorage.getItem('hourFour'))
$('#hourFive').text(window.localStorage.getItem('hourFive'))


})

