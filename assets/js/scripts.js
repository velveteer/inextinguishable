/**
 * Main JS file for Inextinguishable behaviours
 */

/* globals jQuery, document */
(function ($, undefined) {
  "use strict";

  var $document = $(document);

  $document.ready(function () {

    /* ==========================================================================
       Initialize and load Disqus
       ========================================================================== */

    function comments() {
      if (typeof disqus === 'undefined' || !document.getElementById('disqus_thread')) {
        $('.post-comments').css({
          'display' : 'none'
        });
      } else {
        if (window.DISQUS) {
          return DISQUS.reset({
            reload: true,
            config: function () {
              this.page.identifier = location.pathname;
              this.page.url = location.origin + location.pathname;
            }
          });
        }

        $.ajax({
          type: "GET",
          url: "//" + disqus + ".disqus.com/embed.js",
          dataType: "script",
          cache: true
        });
      }
    }
    comments();
  });

})(jQuery);
