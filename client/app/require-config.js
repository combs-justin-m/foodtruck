requirejs.config({
    baseUrl: 'app',
    paths: {
        backbone: '../bower_components/backbone/backbone',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
        jquery: '../bower_components/jquery/dist/jquery',
        modernizr: '../bower_components/modernizr/modernizr',
        css: '../bower_components/require-css/css',
        'css-builder': '../bower_components/require-css/css-builder',
        normalize: '../bower_components/require-css/normalize',
        requirejs: '../bower_components/requirejs/require',
        'requirejs-handlebars': '../bower_components/requirejs-handlebars/hb',
        'requirejs-text': '../bower_components/requirejs-text/text',
        underscore: '../bower_components/underscore/underscore',
        handlebars: '../bower_components/handlebars/handlebars'
    },
    packages: [

    ],
    map: {
        '*': {
            html: 'requirejs-handlebars',
            text: 'requirejs-text'
        }
    },
    shim: {
        bootstrap: {
            deps: [
                'jquery'
            ]
        },
        modernizr: {
            exports: 'Modernizr'
        }
    }
});