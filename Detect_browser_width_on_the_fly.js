  var $window = $(window);
  var $newsletter = $('.newsletter form');

  function checkWidth() {
    var windowSize = $window.width();
    if (windowSize < 768) {
      $newsletter.removeClass("form-inline").addClass("form");
    } else {
      $newsletter.addClass('form-inline');
    }
  }

  // Execute on load
  checkWidth();
  // Bind event listener
  $(window).resize(checkWidth);