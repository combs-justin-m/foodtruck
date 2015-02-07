'use strict';

require(['jquery', 'bootstrap'], function () {
    $(function () {
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
    });
});

