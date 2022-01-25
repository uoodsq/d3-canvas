module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-webpack');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			dist: {
				src: 'dist/<%= pkg.name %>.<%= pkg.version %>.js',
				dest: 'dist/<%= pkg.name %>.<%= pkg.version %>.min.js'
			}
		},

		webpack: {
			build: {
				entry: './entry',
				output: {
					path: __dirname + '/dist',
					filename: '<%= pkg.name %>.<%= pkg.version %>.js'
				}
			}
		}
	});

	grunt.registerTask('default', ['webpack', 'uglify']);
};
