/**
 * jQuery stepScroll 1.0
 * Copyright (c) 2011 Marcus Campbell
 *
 * Dual-licensed under the MIT and GPL Version 2 licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function($) {
  $.fn.stepScroll = function(options) {
    var settings = {
      scroll:  1500, /* ms */
      delay:   2000, /* ms */
      opacity: .5    /* 0 - 1 */
    };
    return this.each(function() {
      /**
       * Override default settings
       */
      if (options) { 
        $.extend(settings, options);
      }

      /**
       * Apply styles
       */
      var total_width = 0;
      $("img", this).each(function() {
        total_width += $(this).width();
      });
      total_width = total_width * 2;
      $(this).wrap('<div class="stepScroll" \/>');
      $(this).parent().css({
        overflow: 'hidden',
        width:    '100%'
      });
      $(this).css({
        margin:  0,
        padding: 0,
        width:   total_width +'px'
      });
      $('li', this).css({
        float: 'left',
        listStyle: 'none'
      });

      /**
       * Start scrolling
       */
      var looped = false;
      _scroll(this);

      function _scroll(target) {
        $("li img:not(:first)", target).css({
          opacity: settings.opacity
        });
  
        if (looped) {
          var img_width = $("li:eq(1) img", target).width();
          $("li:eq(1) img", target).animate({
            opacity: 1
          }, 500);
        }
        else {
          var img_width = $("li:first img", target).width(); 
        }
  
        $(target).fadeTo(settings.delay, 1).animate({
          marginLeft: "-="+ img_width +"px"
        }, settings.scroll, null, function() {
          $("li img:first", target).css({
            opacity: settings.opacity
          });
          if (looped) {
            $("li img:eq(1)", target).css({
              opacity: settings.opacity
            });
            $(target).append($("li:first", target));
            $(target).css({
              marginLeft: "-"+ img_width +"px"
            });
          }
          looped = true;
          _scroll(target);
        });
      }
    });
  };
})(jQuery);