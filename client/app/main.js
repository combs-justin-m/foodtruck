'use strict';

require(['jquery', 'underscore', 'menu/menu', 'bootstrap'], 
function ($, _, Menu) {

    var views = [];

    var menuView = Menu.createView({el: '#menu-container'});
    views.push(menuView);

    $(function () {

        // Render Backbone views
        _.invoke(views, 'render');

        // Menu animated scroll
        $('a[href^="#"]').on('click', function(event) {

            var target = $( $(this).attr('href') );

            console.log(target.length);

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

