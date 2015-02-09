'use strict';

require([
    'jquery', 
    'app',
    'bootstrap'], 
function ($, App) {
    $(function () {
        App.start();

        // Menu animated scroll
        $('a[href^="#"]').on('click', function(event) {

            var target = $( $(this).attr('href') );

            if( target.length ) {
                event.preventDefault();

                var height = $('.header').height();

                $('html, body').animate({
                    scrollTop: target.offset().top - height
                }, 800);
            }

        });

        // Callendar scroll animation
        $('#calendarbtn').click(function() {
            var $window = $(window);
            var $calendar = $('#calendar');

            var open = $calendar.is('.in');

            $calendar.collapse('toggle'); 

            if (!open) {
                var windowBottom = $window.scrollTop() + $window.height();
                var calendarHeight = $calendar[0].scrollHeight;
                var calendarBottom = $calendar.offset().top + calendarHeight;

                var scrollAmount = calendarBottom - windowBottom;

                if (scrollAmount > 0) {
                    $('html, body').animate({
                        scrollTop: $window.scrollTop() + scrollAmount
                    }, 350);
                }
            }
            
        });
    });





});

