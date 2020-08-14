$(document).ready(function() {

    const renderError = function(message) {
        $('#error').remove();
        //create the new element 
        let error = $(`<div id="error"> ${message} </div>`);
        //append to new tweet 
        $('.new-tweet').prepend(error);
        $('#error').slideDown("slow"); //animations;
    }


    $('#tweet-text').keyup(function() {
        let text = $(this).val();
        console.log(text)
        let output = $('.counter');
        output.val(140 - text.length);
        // console.log(output.val());

        if (output.val() < 0) {
            output.css('color', 'red')
            renderError("Message exceeded character length of 140 characters.");
            console.log($('#submit-btn')[0]);
            $('#submit-btn').prop('disabled', true); //disable it 
        } else {
            output.css('color', 'black');
            $('#error').remove();
            $('#submit-btn').prop('disabled', false); //enable it so it can submit
        }

    })

    $('#submit-btn').click(function() {
        $('.counter').val(140);
        if ($('#tweet-text').val() === "") {
            renderError("Input field cannot be blank.");

        } else if ($('#tweet-text').val().length > 140) {
            renderError("Message exceeded character length of 140 characters.")

        }
    })

    //example jquery
    // $('#tweet-text').mouseenter(function () {
    //   $('.handle').css('color', 'gray');
});