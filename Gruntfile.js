module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			dist: {
				src: [
					'canvas/line.js',
					'canvas/line-radial.js',
					'canvas/area.js',
					'canvas/arc.js'
				],
				dest: '<%= pkg.name %>.js'
			}
		},
		uglify: {
			dist: {
				src: '<%= pkg.name %>.js',
				dest: '<%= pkg.name %>.min.js'
			}
		},
		karma: {
			unit: {
				configFile: 'karma.conf.js',
				background: true
			}
		},
		watch: {
			dist: {
				files: 'canvas/**/*.js',
				tasks: ['default']
			},
			test: {
				files: ['d3.canvas.js', 'test/unit/**/*.js'],
				tasks: ['karma:unit:run']
			}
		}
	});

	grunt.registerTask('default', ['concat', 'uglify']);
	grunt.registerTask('test', ['concat', 'uglify', 'karma']);

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-karma');
};
