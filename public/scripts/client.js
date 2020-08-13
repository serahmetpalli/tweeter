/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const createTweetElement = function (tweet) {
  const timeNow = new Date();
  
  const today = timeNow.getTime();

  const timeGap = ((today - tweet.created_at)/1000/60).toFixed(0);
  const text = $("<div>").text(tweet.content.text).html();


  let $tweet = $(`<div class = "tweet">
  <div class="tweet-header">
    <img src="${tweet.user.avatars}" class="tweeter-icon"> 
    <p class="tweeter-name"> ${tweet.user.name} </p>
    <p class="handle"> ${tweet.user.handle} </p>
  </div>

  <h2 class = "tweet1">${text}</h2>
  <div class="tweet-footer">
    <p class="days-ago"> ${timeGap} minute(s) ago </p>
    <p class="small-icons"> <i class="fa fa-flag"></i> <i class="fa fa-retweet"></i><i class="fa fa-heart"></i></p>
  </div>

  </div>`);
  return $tweet;
} 

const renderTweets = function (tweets) {
  $('.tweets-container').empty();
  for (tweet of tweets) {// loops through tweets
    const tweetElement = createTweetElement(tweet); // calls createTweetElement for each tweet
    console.log(tweetElement);
    $('.tweets-container').prepend(tweetElement);// takes return value and appends it to the tweets container
  }

}

$(document).ready(function () {
  // renderTweets(data)
  loadTweets();

  $('form').submit(function (event) {
    event.preventDefault(); //prevents the default submit behavior
    $.ajax({
      method: "POST",
      url: "/tweets",
      data: $(this).serialize() //turns form data into query string
    }).then(function () {
      loadTweets(); 
      $('#tweet-text').val('');
      console.log();
    })
  })

});

const loadTweets = function () {
  $.get("/tweets", function (tweets) {
    renderTweets(tweets);
  })
}
