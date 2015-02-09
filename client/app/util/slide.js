'use strict';

define(['jquery', 'underscore', 'velocity'],
function($, _) {

    // higher is a faster slide
    var speed = 2;

    var $window = $(window);
    var $body = $('body');

    /**
     * Slides the HTML body to the side.
     *
     * The 'to' paraemter specifies how far in pixels to slide. Defaults to window width.
     * the 'callback' parameter is invoked once the slide finishes.
     */
    function slide(options) {
        var slideTo, callback;

        if (_.isNumber(options)) {
            slideTo = options;
            callback = _.noop;
        } else {
            options = options || {};
            slideTo = 'to' in options ? options.to : $window.width() + 1;
            callback = options.callback || _.noop;
        }

        var startingPosition = $body.position().left;

        // don't bother sliding if we are already there
        if (startingPosition === slideTo) {
            callback();
            return false;
        }

        $body.css('overflow', 'hidden');

        function finish () {
            if ($body.position().left === 0) {
                $body.css('overflow', 'auto');
            }
            callback();
        }

        var duration = Math.abs(startingPosition - slideTo) / speed;

        $body.velocity(
            { 
                left: slideTo
            }, 
            { 
                duration: duration, 
                easing: 'linear', 
                complete: finish
            }
        );

        return true;
    }

    return slide;
});