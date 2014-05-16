module.exports = function (grunt) {
	'use strict';

	var tasks = [
		'grunt-contrib-jasmine',
		'grunt-contrib-jshint'
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
		}
	});

	tasks.forEach(grunt.loadNpmTasks);
};
