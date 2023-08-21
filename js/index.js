// Section 1
$('.sideBarIcon').click(function() {
    $(".sideBarContainer").animate({ width:'250px'},500)
    $("body").animate({marginLeft :'250px'},500)
});
$(".closebtn").click(function(){
  $(".sideBarContainer").animate({ width:'0px'},500)
 $("body").animate({marginLeft :'0px'},500)
})
//  Section 2
$(document).ready(function () {
  $('.toggle').click(function () {
    $('.inner').not($(this).next()).slideUp();
    $(this).next().slideToggle();
  });
});
//  Section 3
$(document).ready(function () {
  // Set the target date
  let targetDate = new Date("2023-10-09").getTime();

  // Update the countdown every second
  let interval = setInterval(function () {
    let now = new Date().getTime();
    let distance = targetDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    $(".counterOfDays").html(`${days} D`);
    $(".counterOfHours").html(`${hours} h`);
    $(".counterOfMin").html(`${minutes} m`);
    $('.counterOfSec').html(`${seconds} s`)

  }, 1000);
});
// section 4 
$(document).ready(function () {
  $('textarea').on('input', function () {
    let maxLength = 100;
    let currentLength = $(this).val().length;
    let remainingLength = maxLength - currentLength;
    console.log(remainingLength);
    if (remainingLength <= 0) {
      $("#characters").text("your available character finished");
    }
    else {
      $('#characters').text(remainingLength);
    }
  });
});