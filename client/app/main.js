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
            


            $('#calendarbtn').click(function() {
                $('#calendar').slideToggle(600); {
                        
                $('html, body').animate({
                scrollTop: $('#calendar').offset().top - 400 }, 600);
                }
            });



    });
});

