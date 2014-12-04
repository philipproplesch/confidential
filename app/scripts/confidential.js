(function($) {

  var $video = $('iframe'),
      $window = $(window);

  var adjustVideoSize = function() {
    $video.css({
      width: $window.innerWidth(),
      height: $window.innerHeight()
    });
  };

  $window.resize(adjustVideoSize);

  // Trigger once!
  adjustVideoSize();

})(jQuery);
