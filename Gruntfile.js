'use strict';

module.exports = function(grunt) {

	var cartridgePath = "./css/";

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Add symlink to git hook directory after project dependency installing
		symlink: {
			options: {
				overwrite: true
			},
			expanded: {
				files: [
					{
						expand: true,
						overwrite: true,
						cwd: './git-hooks',
						src: ['pre-commit', 'commit-msg', 'pre-push'],
						dest: '.git/hooks'
					}
				]
			}
		},

		// file watchers

		sass: {
			options: {
				sourceMap: true,
				outputStyle: 'nested'
			},
			dist: {
				files: {
					'./css/code-guardian.css': cartridgePath + '/css/code-guardian.scss'
				}
			}
		},

		csscomb: {
			options: {
				config: './.csscomb-prod.json'
			},
			dynamic_mappings: {
				expand: true,
				cwd: cartridgePath + 'css/code-guardian.css',
				src: '*.css',
				dest: cartridgePath + 'css/code-guardian.css'
			}
		},

		watch: {
			sassWatch: {
				files: [cartridgePath + 'sass/**/*.scss'],
				tasks: ['sass', 'csscomb']
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-symlink');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-csscomb');

	grunt.registerTask('hooksInstall', ['symlink']);
	grunt.registerTask('default', ['watch']);

};