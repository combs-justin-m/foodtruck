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
function   ($, bootstrap) {


});