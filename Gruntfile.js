/**
 * Created by IGOR on 10/04/2017.
 */
module.exports = function (grunt) {

    grunt.initConfig({

        copy : {
            project : {
                expand : true,
                cwd: '.',
                src: ['**','!Gruntfile.js','!package.json','!public/bower.json'],
                dest: 'dist'
            }
        },
        clean : {
            dist : {
                src: 'dist'
            }
        },
        usemin : {
            html: 'app/views/**/*.ejs'//adicionar o dist/ antes do app/ para rodar em desenvolvimento.
        },
        useminPrepare: {
            options: {
                root: 'public',//adicionar o dist/ antes do public/ para rodar em desenvolvimento.
                dest: 'public'//adicionar o dist/ antes do public/ para rodar em desenvolvimento.
            },
            html: 'app/views/**/*.ejs'//adicionar o dist/ antes do app/ para rodar em desenvolvimento.
        },
		ngAnnotate: {
			scripts: {
				expand: true,
				src: ['public/js/**/*.js']//adicionar o dist/ antes do public/ para rodar em desenvolvimento.
			}
		}
    });

    //grunt.registerTask('default',['dist','minifica']); //remover o comentario para desenvolvimento
    //grunt.registerTask('dist',['clean','copy']); //remover o comentario para desenvolvimento
    grunt.registerTask('minifica',['useminPrepare','ngAnnotate','concat','uglify','cssmin','usemin'])
    //grunt.loadNpmTasks('grunt-contrib-copy');//remover o comentario para desenvolvimento
    //grunt.loadNpmTasks('grunt-contrib-clean');//remover o comentario para desenvolvimento
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-ng-annotate');
}