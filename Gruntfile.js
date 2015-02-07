// Generated on 2015-01-31 using
// generator-webapp 0.5.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// If you want to recursively match all subfolders, use:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Configurable paths
  var config = require('./server/config');

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    config: config,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['bowerRequirejs']
      },
      jshint: {
        files: [
          'client/app/**/*.js',
          'server/**/*.js'
        ],
        tasks: ['jshint'],
      },
      // jstest: {
      //   files: ['test/spec/{,*/}*.js'],
      //   tasks: ['test:watch']
      // },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      handlebars: {
        files: ['client/app/**/*.html'],
        tasks: ['handlebars']
      },
      styles: {
        files: ['client/styles/**/*.css'],
        tasks: ['newer:copy:styles', 'autoprefixer']
      },
      express: {
        files: ['server/**/*.js'],
        tasks: ['express:livereload', 'wait'],
        options: {
          spawn: false
        }
      },
      livereload: {
        options: {
          livereload: true
        },
        files: [
          'client/app/**/*.js',
          'client/*.html',
          'client/images/**/*',
          '.tmp/styles/**/*.css',
        ]
      }
    },

    // Express server
    express: {
      livereload: {
        options: {
          script: 'server/app.js'
        }
      }
    },

    // Open a browser on load
    open: {
      server: {
        url: 'http://localhost:<%= config.port %>'
      }
    },

    // Empties folders to start fresh
    clean: {
      server: '.tmp'
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        ignores: ['client/app/templates.js'],
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        'client/app/**/*.js',
        'test/spec/**/*.js'
      ]
    },

    // Mocha testing framework configuration options
    // mocha: {
    //   all: {
    //     options: {
    //       run: true,
    //       urls: ['http://<%= connect.test.options.hostname %>:<%= connect.test.options.port %>/index.html']
    //     }
    //   }
    // },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Automatically add bower moduels to require.js config
    bowerRequirejs: {
      all: {
        rjsConfig: 'client/app/require-config.js'
      }
    },

    handlebars: {
      options: {
        amd: true
      },
      admin: {
        files: {
          'client/app/templates.js': 'client/app/**/*.html'
        }
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      styles: {
        expand: true,
        dot: true,
        cwd: 'client/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },

    shell: {
      mongo: {
        command: 'mongod',
        options: {
          async: true,
          stderr: true,
          failOnError: false
        }
      }
    }
  });

  // Used for delaying livereload until after server has restarted
  grunt.registerTask('wait', function () {
    grunt.log.ok('Waiting for server reload...');

    var done = this.async();

    setTimeout(function () {
      grunt.log.writeln('Done waiting!');
      done();
    }, 1500);
  });

  grunt.registerTask('serve', 'start the server and preview your app, --allow-remote for remote access', function () {
    if (grunt.option('allow-remote')) {
      grunt.config.set('connect.options.hostname', '0.0.0.0');
    }

    grunt.task.run([
      'clean:server',
      'bowerRequirejs',
      'handlebars',
      'copy:styles',
      'autoprefixer',
      'shell:mongo',
      'express:livereload',
      'wait',
      'open',
      'watch'
    ]);
  });

  grunt.registerTask('default', ['serve']);

  // grunt.registerTask('test', function (target) {
  //   if (target !== 'watch') {
  //     grunt.task.run([
  //       'clean:server',
  //       'concurrent:test',
  //       'autoprefixer'
  //     ]);
  //   }

  //   grunt.task.run([
  //     'connect:test',
  //     'mocha'
  //   ]);
  // });
};
