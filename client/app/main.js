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
            $('#calendar').slideToggle(600); {
                    
            $('html, body').animate({
            scrollTop: $('#calendar').offset().top - 400 }, 600);
            }
        });
    });





});

