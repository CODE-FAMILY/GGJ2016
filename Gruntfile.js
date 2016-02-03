module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    htmlmin: { //Task
      html: { //Target
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        // Grunt will search for "*.html" under "src/" when the "htmlmin" task
        // runs and build the appropriate src-dest file mappings then, so you
        // don't need to update the Gruntfile when files are added or removed.
        files: [{
          expand: true, // Enable dynamic expansion.
          cwd: 'src/', // Src matches are relative to this path.
          src: ['*.html'], // Actual pattern(s) to match.
          dest: 'build/' // Destination path prefix.
        }]
      },
      svg: { //Target
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        // Grunt will search for "*.html" under "src/" when the "htmlmin" task
        // runs and build the appropriate src-dest file mappings then, so you
        // don't need to update the Gruntfile when files are added or removed.
        files: [{
          expand: true, // Enable dynamic expansion.
          cwd: 'src/images', // Src matches are relative to this path.
          src: ['**/*.svg'], // Actual pattern(s) to match.
          dest: 'build/images' // Destination path prefix.
        }]
      },
    },
    cssmin: {
      css: {
        files: [{
          expand: true, // Enable dynamic expansion.
          cwd: 'src/css', // Src matches are relative to this path.
          src: ['**/*.css'], // Actual pattern(s) to match.
          dest: 'build/css' // Destination path prefix.
        }]
      }
    },
    uglify: { //Task
      js: { //Target
        options: {
          compress: true,
          mangle: true
        },
        // Grunt will search for "**/*.js" under "src/js" when the "uglify" task
        // runs and build the appropriate src-dest file mappings then, so you
        // don't need to update the Gruntfile when files are added or removed.
        files: [{
          expand: true, // Enable dynamic expansion.
          cwd: 'src/js/', // Src matches are relative to this path.
          src: ['**/*.js'], // Actual pattern(s) to match.
          dest: 'build/js/' // Destination path prefix.
        }]
      }
    },
    copy: {
      sound: {
        //Grunt will copy the complete "src/sound/" folder with subdirectories
        //under "build/sound" when the "copy" taks runs
        files: [{
          expand: true, // Enable dynamic expansion.
          cwd: 'src/sound/', // Src matches are relative to this path.
          src: ['**/*'], // Actual pattern(s) to match.
          dest: 'build/sound/' // Destination path prefix.
        }]
      },
      png: {
        expand: true, // Enable dynamic expansion.
        cwd: 'src/', // Src matches are relative to this path.
        src: ['**/*.png'], // Actual pattern(s) to match.
        dest: 'build/' // Destination path prefix.
      },
      jpg: {
        expand: true, // Enable dynamic expansion.
        cwd: 'src/', // Src matches are relative to this path.
        src: ['**/*.jpg'], // Actual pattern(s) to match.
        dest: 'build/' // Destination path prefix.
      },
      gif: {
        expand: true, // Enable dynamic expansion.
        cwd: 'src/', // Src matches are relative to this path.
        src: ['**/*.gif'], // Actual pattern(s) to match.
        dest: 'build/' // Destination path prefix.
      }
    }
  });

  // Load the plugin that provides the "htmlmin" task.
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // Load the plugin that provides the "cssmin" task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load the plugin that provides the "copy" task.
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['htmlmin', 'cssmin', 'uglify', 'copy']);

};
