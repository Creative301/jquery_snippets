$(document).ready(function() {
  $('.mobile-menu a').on('click', function() {
    $('nav.site-nav').toggle('slow');
  });

  var breakpoint = 768;
  $(window).resize(function() {
    if($(document).width() >= 768) {
      $('nav.site-nav').show();
    } else {
      $('nav.site-nav').hide();
    }
  });
});