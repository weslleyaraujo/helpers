module.exports = function (grunt) {
	'use strict';

	var tasks = [
		'grunt-contrib-jasmine',
		'grunt-contrib-jshint',
		'grunt-contrib-watch'
	];

	grunt.initConfig({
		jshint: {
			all: ['Gruntfile.js', 'lib/*.js']
		},

		jasmine: {
			src: [
				'lib/*.js'
			],
			options: {
				vendor: [
					'bower_components/jquery/dist/jquery.js'
				],
				specs: 'spec/*.js'
			}
		},

		watch: {
			scripts: {
				files: ['Gruntfile.js', 'lib/*.js'],
				tasks: ['jshint', 'jasmine'],
				options: {
					spawn: false
				}
			}
		}
	});

	tasks.forEach(grunt.loadNpmTasks);
};
