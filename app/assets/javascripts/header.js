document.addEventListener("turbolinks:load", function() {
  if ($(window).width() < 1024) {
    console.log("mobile");

    $('header nav').addClass('row center center-xs');
    $('header nav div p').removeClass('margin-left-20');
    /* $('header nav ul').hide(); */

    $(".navbar-ul").addClass('display-none dark-blue box-shadow');
    $(".user-ul").removeClass('absolute');
    $(".user-ul").addClass('fixed');

    $('.show-navbar-ul').on('click', function(event){
      $(".show-navbar-ul li a").toggleClass('white-font');
      $(".navbar-ul").toggleClass("block");
    });

    $('.show-user-ul').on('click', function(event){
      $(".show-user-ul li a").toggleClass('white-font');
      $(".user-ul").toggleClass("block");
    });
  }
  else {
    console.log("escritorio");

    $("header nav ul li a").mouseover(function(){
      $(this).addClass('white-font');
    });
    $("header nav ul li a").mouseout(function(){
      $(this).removeClass('white-font');
    });

    $(".show-user-ul, .user-ul").mouseover(function(){
      $(".show-user-ul li a").addClass('white-font');
      $(".user-ul").addClass('block');
    });
    $(".show-user-ul, .user-ul").mouseout(function(){
      $(".show-user-ul li a").removeClass('white-font');
      $(".user-ul").removeClass('block');
    });
  }
});
