module.exports = function(grunt) {

	grunt.file.readJSON("package.json");

	grunt.initConfig({

		// image task
		imagemin: {
			dist: {
				options: {
					optimizationLevel: 4,
					progressive: true
				},
				files: [{
					expand: true,
					cwd: "images/",
					src: ["**/*.{png,jpg,gif}"],
					dest: "dist/"
				}]
			}
		}

	});

	// load tasks
	grunt.loadNpmTasks("grunt-contrib-imagemin");

	// register tasks
	grunt.registerTask("image", ["imagemin"]);

}