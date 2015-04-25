module.exports = function(grunt) {
	grunt.initConfig({
		less: {
			debug: {
				files: {
					"dist/css/main.css" : "src/less/main.less"
				}
			},
			dev: {
				options: {
					compress: true
				},
				files: {
					"dist/css/main.min.css" : "src/less/main.less"
				}
			}
		},
		concat: {
			options: {
				separator: ";\n",
			},
			js: {
				files : {
					"dist/js/main.js" : ['./src/js/lib.js','./src/js/app.js'],
				}
			}
		},
		uglify: {
			options: {
				mangle: true
			},
			production: {
				files: {
					'dist/js/main.min.js': ['dist/js/main.js']
				}
			}
		},
		watch: {
			less: {
				files: ['src/less/*'],
				tasks: ['cssdist'],
				options: {
					spawn: false,
				}
			}, 
			js: {
				files: ['src/js/*'],
				tasks: ['jsdist'],
				options: {
					spawn: false,
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('jsdist', ['concat','uglify']);
	grunt.registerTask('cssdist', ['less']);
	grunt.registerTask('dist', ['cssdist','jsdist']);
};
