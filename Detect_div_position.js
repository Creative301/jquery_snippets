    // Detect div position
    $window.on('scroll', function () {
      let appscreen = $('.app-screen').offset().top;
      console.log(appscreen);

      if (appscreen = 1714) {
        $('.app-screen').addClass('fadeInUp');
      } else {
        $('.app-screen').removeClass('fadeInUp');
      }
    });