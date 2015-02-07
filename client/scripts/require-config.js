requirejs.config({
    baseUrl: 'scripts',
    paths: {
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
        jquery: '../bower_components/jquery/dist/jquery',
        requirejs: '../bower_components/requirejs/require',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        handlebars: '../bower_components/handlebars/handlebars',
        modernizr: '../bower_components/modernizr/modernizr'
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