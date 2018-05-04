  // Show or hide navbar when user scroll down

  var $window = $(window);

  $window.on('scroll', function () {
    var $nav = $('.navbar');
    if ($window.scrollTop() > 40) {
      // $nav.hide();
      $nav.fadeOut();
    } else {
      // $nav.show();
      $nav.fadeIn();
    }
  });