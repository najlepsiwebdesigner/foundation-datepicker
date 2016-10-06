module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('build', ['uglify', 'sass', 'cssmin']);


  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'js/foundation-datepicker.min.js': ['js/foundation-datepicker.js']
        }
      }
    },
    sass: {
      dist: {
        files: {
          'css/foundation-datepicker.css': 'scss/foundation-datepicker.scss'
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/foundation-datepicker.min.css': ['css/foundation-datepicker.css']
        }
      }
    }
  });
}
