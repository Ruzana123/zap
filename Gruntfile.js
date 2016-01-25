module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
        src: ['less/modules/base.less', 
        'less/modules/head-green.less', 
        'less/modules/home.less', 
        'less/modules/full-slider.less', 
        'less/modules/footer.less', 
        'less/modules/about-us.less', 
        'less/modules/office.less', 
        'less/modules/team.less'],
        dest: 'less/style.less',
      }
    },

    less: {
      development: {
        files: {
          "css/style.css": "less/style.less"
        }
      }
      },

    watch: { 
      scripts: { 
        files: 'less/modules/*.less', 
          tasks: ['concat','less','cssmin'], 
          options: { 
            interrupt: true, 
          }, 
        }, 
      },

    cssmin: {
      target: {
        files: [{
          expand: true,
          src: ['css/*.css', '!*.min.css'],
          ext: '.min.css'
        }]
      }
    }

    });

    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    

    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['watch']);

};