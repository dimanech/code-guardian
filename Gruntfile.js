'use strict';

module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		csslint: {
			options: {
				csslintrc: 'csslintrc.json'
			},
			strict: {
				options: {
					import: 2
				},
				src: ['css/**/*.css']
			}
		},

		githooks: {
			all: {
				'pre-commit': 'csslint'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-githooks');

	grunt.registerTask('default', ['githooks', 'csslint']);

};