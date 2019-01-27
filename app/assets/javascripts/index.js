/* document.addEventListener("turbolinks:load", function() {
  $(window).resize(function() {
    if ($(this).width() <= 1024) {
      $('.durango-img-container').removeClass('display-none');

      $('.social-container, .social-info-container').removeClass('height-225');
      $('.social-container, .social-info-container').addClass('height-150');

      $('.social-title').removeClass('font-27');
      $('.social-title').addClass('font-23');

      $('.social-username').removeClass('font-22');
      $('.social-username').addClass('font-18');

      $('.twitch-logo').removeClass('box-100');
      $('.twitch-logo').addClass('box-50');

      $('.twitch-status').removeClass('box-padd-10 font-20');
      $('.twitch-status').addClass('box-padd-5 font-15');

      $('.youtube-logo').removeClass('height-75');
      $('.youtube-logo').addClass('height-40');

      $('.github-logo').removeClass('height-115');
      $('.github-logo').addClass('height-60');

      $('.gist-logo').removeClass('height-90');
      $('.gist-logo').addClass('height-45');

    } else {
    };
  });
});
*/

document.addEventListener("turbolinks:load", function() {
  if ($(window).width() < 1024) {
    console.log("mobile");
    $('.durango-img-container').removeClass('display-none');

    $('.social-container, .social-info-container').removeClass('height-225');
    $('.social-container, .social-info-container').addClass('height-150');

    $('.social-title').removeClass('font-27');
    $('.social-title').addClass('font-23');

    $('.social-username').removeClass('font-22');
    $('.social-username').addClass('font-18');

    $('.twitch-logo').removeClass('box-100');
    $('.twitch-logo').addClass('box-50');

    $('.twitch-status').removeClass('box-padd-10 font-20');
    $('.twitch-status').addClass('box-padd-5 font-15');

    $('.youtube-logo').removeClass('height-75');
    $('.youtube-logo').addClass('height-40');

    $('.github-logo').removeClass('height-115');
    $('.github-logo').addClass('height-60');

    $('.gist-logo').removeClass('height-90');
    $('.gist-logo').addClass('height-45');
  }
  else {
    console.log("escritorio");
  }
});
