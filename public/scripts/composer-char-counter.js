$(document).ready(function () {
  // --- our code goes here ---
  // 4 steps of jQuery
  // Step one: Target
  // Step two: Add event listener
  // Step three: Retarget (optional)
  // Step four: effect
  const renderError = function (message) {
    $('#error').remove();
    //create the new element 
    let error = $(`<div id="error"> ${message} </div>`);
    //append to new tweet 
    $('.new-tweet').prepend(error);
    $('error').slidedown("slow");//animations;
  } 


  $('#tweet-text').keyup(function () {
    let text = $(this).val();
    console.log(text)
    let output = $('.counter');
    output.val(140 - text.length);
    // console.log(output.val());
  
   if (output.val() < 0) {
    output.css('color', 'red')
    renderError(  "Message exceeded character length of 140 characters.") ;
    console.log($('#submit-btn'));
    $('#submit-btn').prop('disabled', true);//disable it 
    } else {
    output.css('color', 'black');
    $('#error').remove();
    $('#submit-btn').prop('disabled', false);//enable it so it can submit
   } 

  })
  
  $('#submit-btn').click(function (){
    $('.counter').val(140);
    if ($('#tweet-text').val() === "") {
      renderError("Input field cannot be blank.");
      // alert("Input field cannot be blank.");
      
    } else if ($('#tweet-text').val().length > 140) {
      renderError(  "Message exceeded character length of 140 characters.") 
      // alert("Message exceeded character length of 140 characters.");
    } 
  })

  $('.tweet').mouseenter(function () {
    $('.handle').css('color', 'gray');
    $('.tweeter-icon').css('opacity', 1);

  })

  $('.tweet').mouseleave(function () {

    $('.handle').css('color', '#f4f1ec');
    $('.tweeter-icon').css('opacity', .75);

  })

  // $('.name').mouseleave(function () {
  //   $('.avatar').css('padding','0px');
  //   $('h2').text("BYE");
  // })
});


