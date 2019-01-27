document.addEventListener("turbolinks:load", function() {
	$('document').ready(function() {
		$('.notice').hide().slideDown('fast').delay(3000).slideUp('fast');
	});

	$(document).on('click', '.close-notice', function(event) {
		$(".notice").fadeOut('fast');
	});

	//----------------------------------------------------------------------------------------------------------------------------------------

	$('document').ready(function() {
	   	$('.alert').hide().slideDown('fast').delay(3500).slideUp('fast');
	});

	$(document).on('click', '.close-alert', function(event) {
		$(".alert").fadeOut('fast');
	});
});

/* document.addEventListener("turbolinks:load", function() {
  if ($(window).width() < 1024) {
    console.log("mobile");

    $('header nav').addClass('row center center-xs');
    $('header nav div p').removeClass('margin-left-20');
    //$('header nav ul').hide();

    $(".navbar-ul").addClass('display-none dark-blue box-shadow');
    $(".user-ul").removeClass('absolute');
    $(".user-ul").addClass('fixed');

    $(document).on('click', '.show-navbar-ul', function(event){
      $(".show-navbar-ul li a").toggleClass('white-font');
      $(".navbar-ul").toggleClass("display-none");
    });

    $(document).on('click', '.show-user-ul', function(event){
      $(".show-user-ul li a").toggleClass('white-font');
      $(".user-ul").toggleClass("display-none");
    });
  }
  else {
    console.log("escritorio");
  }
});
*/

/*
document.addEventListener("turbolinks:load", function() {
  var width = screen.width;
  $(document).ready(function() {
    if (width <= 1024){

      $('header nav').addClass('row center center-xs');
      $('header nav div p').removeClass('margin-left-20');
      //$('header nav ul').hide();


      $(".navbar-ul").addClass('display-none dark-blue box-shadow');
      $(".user-ul").removeClass('absolute');
      $(".user-ul").addClass('fixed');

      $(document).on('click', '.show-navbar-ul', function(event){
        $(".show-navbar-ul li a").toggleClass('white-font');
        $(".navbar-ul").toggleClass("display-none");
      });

      $('.show-user-ul').on('click', function(event){
        $(".show-user-ul li a").toggleClass('white-font');
        $(".user-ul").toggleClass("display-none");
      });
    } else {
    };
  });
});
*/
