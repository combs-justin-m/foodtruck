"use strict"

requirejs.config({
    paths: {
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
        jquery: '../bower_components/jquery/dist/jquery',
        requirejs: '../bower_components/requirejs/require'
    },
    packages: [

    ],
    shim: {
        bootstrap: {
            deps: [
                'jquery'
            ]
        }
    }
});

requirejs(['jquery', 'bootstrap'],
function () {

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