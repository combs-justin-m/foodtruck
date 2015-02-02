'use strict';

require(['require-config'], function() {
    require(['jquery', 'bootstrap'], function () {
        $(function () {
            $('a[href^="#"]').on('click', function(event) {

                var target = $( $(this).attr('href') );

                console.log(target.length);

                if( target.length ) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 800);
                }

            });
        });
    });
});

