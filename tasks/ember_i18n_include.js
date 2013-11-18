/*
 * grunt-ember-i18n-include
 * https://github.com/karl-sjogren/grunt-ember-i18n-include
 *
 * Copyright (c) 2013 Karl-Johan Sjögren
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
    
    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks
    
    grunt.registerMultiTask('ember_i18n_include', 'Implements a syntax for implementing external files into a ember-i18n language file.', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            makeItAwesome: false,
            verbose: false
        });
        
        if(options.makeItAwesome){
            grunt.log.writeln("Making it Awesome!");
        }
        
        // Iterate over all specified file groups.
        this.files.forEach(function(f) {
            // Concat specified files.
            var src = f.src.filter(function(filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).map(function(filepath) {
                // Read file source.
                return grunt.file.read(filepath);
            });
            
            var includePath = f.src.toString().substring(0, f.src.toString().lastIndexOf(".")) + '/';
            var result = src.toString().replace(/["']@@(.*?\.js)["']/gi, function(match, p1) {
                var filename =  "";
                if(options.verbose) {
                    grunt.log.writeln("Found " + p1 + " in " + f.src);
                }
                if(!grunt.file.exists(includePath + p1)) {
                    return "\"Could not load file " + includePath + p1 + "\"";
                }
                
                return grunt.file.read(includePath + p1);
            });
            
            // Handle options.
            src += options.punctuation;
            
            // Write the destination file.
            grunt.file.write(f.dest, result);
            
            // Print a success message.
            if(options.verbose) {
                grunt.log.writeln('File "' + f.dest + '" created.');
            }
        });
    });
};