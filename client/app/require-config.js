requirejs.config({
    baseUrl: 'app',
    paths: {
        backbone: '../bower_components/backbone/backbone',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
        handlebars: '../bower_components/handlebars/handlebars',
        jquery: '../bower_components/jquery/dist/jquery',
        requirejs: '../bower_components/requirejs/require',
        underscore: '../bower_components/underscore/underscore'
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