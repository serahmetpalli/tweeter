$(document).ready(function () {
  // --- our code goes here ---
  // 4 steps of jQuery
  // Step one: Target
  // Step two: Add event listener
  // Step three: Retarget (optional)
  // Step four: effect
  $('#tweet-text').keyup(function () {
    let text = $(this).val();
    let output = $('.counter');
    output.val(140 - text.length);
    // console.log(output.val());

    (output.val() < 0) ? output.css('color', 'red') : output.css('color', 'black');

    //disallow submission if the tweet is empty. 
    if ($('#tweet-text').val().length > 140) {
      alert("Message exceeded character length of 140 characters.");
    } else if ($('#tweet-text').val() === "") {
      alert("Input field cannot be blank.");
    } 
  })

  $('#submit-btn').click(function (){
    if ($('#tweet-text').val() === "") {
      alert("Input field cannot be blank.");
      return;
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


