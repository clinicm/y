$(document).ready(function() {

  //scroll to sections
  $('.js--scroll-to-contact').click(function() {
    $('html, body').animate({
      scrollTop: $('.js--section-contact').offset().top
    }, 1500);
  });

  $('.js--scroll-to-services').click(function() {
    $('html, body').animate({
      scrollTop: $('.js--section-services').offset().top
    }, 1500);
  });

  $('.js--scroll-to-clinic').click(function() {
    $('html, body').animate({
      scrollTop: $('.js--section-clinic').offset().top
    }, 1500);
  });

  $('.js--scroll-to-album').click(function() {
    $('html, body').animate({
      scrollTop: $('.js--section-album').offset().top
    }, 1500);
  });



  //animated sections
  $('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated fadeInLeft');
  }, {
    offset: '80%'
  });

  $('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animated bounceInUp');
  }, {
    offset: '50%'
  });

  $('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animated fadeIn');
  }, {
    offset: '50%'
  });

  $('.js--wp-4').waypoint(function(direction) {
    $('.js--wp-4').addClass('animated pulse');
  }, {
    offset: '50%'
  });

  //display and dismiss sticky bar
  $('.js--sticky').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
      var nav = $('.js--main-nav');
      nav.hide(500);

    }
  }, {
    offset: '50px'
  });

  //toggle button
  $('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    nav.slideToggle(500);
  });
  //dismiss toggle

  $('.js--nav-close').click(function() {
    var nav = $('.js--main-nav');
    nav.hide(500);

  });


});
