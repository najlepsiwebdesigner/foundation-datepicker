module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      css: {
        files: ['scss/**/*.scss'],
        tasks: ['sass', 'autoprefixer']
      },
      js: {
        files: ['js/foundation-datepicker.js'],
        tasks: ['uglify']
      }
    },
    autoprefixer: {
      options: {
        diff: false,
        browsers: ['> 1%', 'last 2 versions', 'ie >= 8']
      },
      my_target:{
        files:{
          'css/foundation-datepicker.css': 'css/foundation-datepicker.css'
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'js/foundation-datepicker.min.js': ['js/foundation-datepicker.js']
        }
      }
    },
    sass: {
      dist: {
        options: {
    			sourceMap: true
    		},
        files: {
          'css/foundation-datepicker.css': 'scss/foundation-datepicker.scss'
        }
      }
    },
    cssmin: {
      options: {
        sourceMap: true,
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/foundation-datepicker.min.css': 'css/foundation-datepicker.css'
        }
      }
    },
    browserSync: {
      default_options: {
        bsFiles: {
          src: [
            "css/foundation-datepicker.css",
            "js/foundation-datepicker.js",
            "example.html"
          ]
        },
        options: {
          watchTask: true,
          server: {
            index: "example.html",
            baseDir: "./"
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('build', ['uglify', 'sass', 'autoprefixer', 'cssmin']);
  grunt.registerTask('default', ['browserSync', 'watch']);
}
