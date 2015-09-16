module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({

        postcss: {
            syntax: {
                options: {
                    syntax: require('postcss-scss'),
                    processors: [
                        require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
                    ]
                },
                src: 'src/styles.css',
                dest: 'css/styles.css'
            },
        },
        watch: {
          css: {
            files: 'src/*.css',
            tasks: ['postcss ']
          },
        },
        connect: {
            server: {
              options: {
                port: 8000,
                base: '',
                onCreateServer: function(server, connect, options) {
                    grunt.log.writeln('---------------------------');
                    grunt.log.writeln(server);
                    grunt.log.writeln(connect);
                    grunt.log.writeln(options);
                    grunt.log.writeln('---------------------------');
                }
              }
            }
          }

    });

    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['postcss']);
    grunt.registerTask('dev', ['postcss', 'connect', 'watch']);

};
