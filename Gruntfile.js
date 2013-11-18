/*
 * grunt-ember-i18n-include
 * https://github.com/karl-sjogren/grunt-ember-i18n-include
 *
 * Copyright (c) 2013 Karl-Johan Sjögren
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    ember_i18n_include: {
      default_options: {
        options: {
          makeItAwesome: true,
          verbose: false
        },
        files: {
          'tmp/en.js': 'test/fixtures/en.js'
        },
      },
      custom_options: {
        options: {
          makeItAwesome: false
        },
        files: {
          'tmp/sv.js': 'test/fixtures/sv.js'
        },
      },
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'ember_i18n_include', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
