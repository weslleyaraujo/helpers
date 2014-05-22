module.exports = function (grunt) {
	'use strict';

	var tasks = [
		'grunt-contrib-jasmine',
		'grunt-contrib-jshint',
		'grunt-contrib-watch',
		'grunt-contrib-yuidoc'
	];

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			all: ['Gruntfile.js', 'lib/*.js']
		},

		jasmine: {
			src: [
				'lib/*.js'
			],
			options: {
				specs: 'spec/*.js'
			}
		},

		watch: {
			scripts: {
				files: ['Gruntfile.js', 'lib/*.js', 'spec/*.js'],
				tasks: ['jshint', 'jasmine'],
				options: {
					spawn: false
				}
			},
		
		},
		yuidoc: {
			compile: {
				name: '<%= pkg.name %>',
				description: '<%= pkg.description %>',
				version: '<%= pkg.version %>',
				url: '<%= pkg.homepage %>',
				options: {
					paths: 'lib',
					outdir: 'docs'
				}
			}	
		}
	});

	tasks.forEach(grunt.loadNpmTasks);
};
