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
  var config = require('./config');

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
          '<%= config.client %>/scripts/{,*/}*.js',
          '<%= config.server %>/**/*.js'
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
      templates: {
        files: ['<%= config.client %>/scripts/**/*.html'],
        tasks: ['handlebars']
      },
      styles: {
        files: ['<%= config.client %>/styles/{,*/}*.css'],
        tasks: ['newer:copy:styles', 'autoprefixer']
      },
      express: {
        files: ['<%= config.server %>/**/*.js'],
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
          '<%= config.client %>/scripts/{,*/}*.js',
          '<%= config.client %>/{,*/}*.html',
          '<%= config.client %>/images/{,*/}*',
          '.tmp/styles/{,*/}*.css',
        ]
      }
    },

    // Express server
    express: {
      options: {
        port: config.port
      },
      livereload: {
        options: {
          script: '<%= config.server %>/app.js'
        }
      }
    },

    // Open a browser on load
    open: {
      server: {
        url: 'http://localhost:<%= config.port %>'
      }
    },

    // The actual grunt server settings
    // connect: {
    //   options: {
    //     port: 9000,
    //     open: true,
    //     livereload: 35729,
    //     // Change this to '0.0.0.0' to access the server from outside
    //     hostname: 'localhost'
    //   },
    //   livereload: {
    //     options: {
    //       middleware: function(connect) {
    //         return [
    //           connect.static('.tmp'),
    //           connect().use('/bower_components', connect.static('./bower_components')),
    //           connect.static(config.client)
    //         ];
    //       }
    //     }
    //   }
    //   test: {
    //     options: {
    //       open: false,
    //       port: 9001,
    //       middleware: function(connect) {
    //         return [
    //           connect.static('.tmp'),
    //           connect.static('test'),
    //           connect().use('/bower_components', connect.static('./bower_components')),
    //           connect.static(config.client)
    //         ];
    //       }
    //     }
    //   },
    //   dist: {
    //     options: {
    //       base: '<%= config.dist %>',
    //       livereload: false
    //     }
    //   }
    // },

    // Empties folders to start fresh
    clean: {
      // dist: {
      //   files: [{
      //     dot: true,
      //     src: [
      //       '.tmp',
      //       '<%= config.dist %>/*',
      //       '!<%= config.dist %>/.git*'
      //     ]
      //   }]
      // },
      server: '.tmp'
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        ignores: ['<%= config.client %>/**/*.template.js'],
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= config.client %>/scripts/{,*/}*.js',
        '!<%= config.client %>/scripts/vendor/*',
        'test/spec/{,*/}*.js'
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
        rjsConfig: '<%= config.client %>/scripts/require-config.js',
        options: {
          baseUrl: '<$= config.client %>'
        }
      }
    },

    handlebars: {
      options: {
        amd: true
      },
      admin: {
        files: {
          '<%= config.client %>/scripts/templates.js': '<%= config.client %>/scripts/**/*.html'
        }
      }
    },

    // Automatically inject Bower components into the HTML file
    // wiredep: {
    //   app: {
    //     ignorePath: /^\/|\.\.\//,
    //     src: ['<%= config.client %>/index.html'],
    //     exclude: ['bower_components/bootstrap/dist/js/bootstrap.js']
    //   }
    // },

    // Renames files for browser caching purposes
    // rev: {
    //   dist: {
    //     files: {
    //       src: [
    //         '<%= config.dist %>/scripts/{,*/}*.js',
    //         '<%= config.dist %>/styles/{,*/}*.css',
    //         '<%= config.dist %>/images/{,*/}*.*',
    //         '<%= config.dist %>/styles/fonts/{,*/}*.*',
    //         '<%= config.dist %>/*.{ico,png}'
    //       ]
    //     }
    //   }
    // },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    // useminPrepare: {
    //   options: {
    //     dest: '<%= config.dist %>'
    //   },
    //   html: '<%= config.client %>/index.html'
    // },

    // Performs rewrites based on rev and the useminPrepare configuration
    // usemin: {
    //   options: {
    //     assetsDirs: [
    //       '<%= config.dist %>',
    //       '<%= config.dist %>/images',
    //       '<%= config.dist %>/styles'
    //     ]
    //   },
    //   html: ['<%= config.dist %>/{,*/}*.html'],
    //   css: ['<%= config.dist %>/styles/{,*/}*.css']
    // },

    // The following *-min tasks produce minified files in the dist folder
    // imagemin: {
    //   dist: {
    //     files: [{
    //       expand: true,
    //       cwd: '<%= config.client %>/images',
    //       src: '{,*/}*.{gif,jpeg,jpg,png}',
    //       dest: '<%= config.dist %>/images'
    //     }]
    //   }
    // },

    // svgmin: {
    //   dist: {
    //     files: [{
    //       expand: true,
    //       cwd: '<%= config.client %>/images',
    //       src: '{,*/}*.svg',
    //       dest: '<%= config.dist %>/images'
    //     }]
    //   }
    // },

    // htmlmin: {
    //   dist: {
    //     options: {
    //       collapseBooleanAttributes: true,
    //       collapseWhitespace: true,
    //       conservativeCollapse: true,
    //       removeAttributeQuotes: true,
    //       removeCommentsFromCDATA: true,
    //       removeEmptyAttributes: true,
    //       removeOptionalTags: true,
    //       removeRedundantAttributes: true,
    //       useShortDoctype: true
    //     },
    //     files: [{
    //       expand: true,
    //       cwd: '<%= config.dist %>',
    //       src: '{,*/}*.html',
    //       dest: '<%= config.dist %>'
    //     }]
    //   }
    // },

    // By default, your `index.html`'s <!-- Usemin block --> will take care
    // of minification. These next options are pre-configured if you do not
    // wish to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= config.dist %>/styles/main.css': [
    //         '.tmp/styles/{,*/}*.css',
    //         '<%= config.client %>/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    // uglify: {
    //   dist: {
    //     files: {
    //       '<%= config.dist %>/scripts/scripts.js': [
    //         '<%= config.dist %>/scripts/scripts.js'
    //       ]
    //     }
    //   }
    // },
    // concat: {
    //   dist: {}
    // },

    // Copies remaining files to places other tasks can use
    copy: {
      // dist: {
      //   files: [{
      //     expand: true,
      //     dot: true,
      //     cwd: '<%= config.client %>',
      //     dest: '<%= config.dist %>',
      //     src: [
      //       '*.{ico,png,txt}',
      //       'images/{,*/}*.webp',
      //       '{,*/}*.html',
      //       'styles/fonts/{,*/}*.*'
      //     ]
      //   }, {
      //     src: 'node_modules/apache-server-configs/dist/.htaccess',
      //     dest: '<%= config.dist %>/.htaccess'
      //   }, {
      //     expand: true,
      //     dot: true,
      //     cwd: 'bower_components/bootstrap/dist',
      //     src: 'fonts/*',
      //     dest: '<%= config.dist %>'
      //   }]
      // },
      styles: {
        expand: true,
        dot: true,
        cwd: '<%= config.client %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },

    // Run some tasks in parallel to speed up build process
  //   concurrent: {
  //     server: [
  //       'copy:styles'
  //     ]
  //     test: [
  //       'copy:styles'
  //     ],
  //     dist: [
  //       'copy:styles',
  //       'imagemin',
  //       'svgmin'
  //     ]
  //   }
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
    // if (target === 'dist') {
    //   return grunt.task.run(['build', 'connect:dist:keepalive']);
    // }

    grunt.task.run([
      'clean:server',
      'bowerRequirejs',
      'handlebars',
      'copy:styles',
      'autoprefixer',
      'express:livereload',
      'wait',
      'open',
      'watch'
    ]);
  });

  grunt.registerTask('default', ['serve']);

  // grunt.registerTask('server', function (target) {
  //   grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
  //   grunt.task.run([target ? ('serve:' + target) : 'serve']);
  // });

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

  // grunt.registerTask('build', [
  //   'clean:dist',
  //   'wiredep',
  //   'useminPrepare',
  //   'concurrent:dist',
  //   'autoprefixer',
  //   'concat',
  //   'cssmin',
  //   'uglify',
  //   'copy:dist',
  //   'rev',
  //   'usemin',
  //   'htmlmin'
  // ]);

  // grunt.registerTask('default', [
  //   'newer:jshint',
  //   'test',
  //   'build'
  // ]);
};
