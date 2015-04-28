 module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
	 pkg: grunt.file.readJSON('package.json'),
	 	sass: {                              // Task
	 	    dist: {                            // Target
 	      		options: {   // Target options
	 	        	style: 'compact',
	 	        	lineNumbers: true,
	 	        	compass: true
 	      		}, // end options
	 	      	files: {  // Dictionary of files
		 	        'styles/main.css': 'styles/main.scss'
	 	      	} // end files
 	    	} // end dist
 	  	}, // end sass

        watch: {
 	  	  css: {
 	  	    files: '**/*.scss',
 	  	    tasks: ['sass'],
 	  	    options: {
 	  	      livereload: true,
 	  	    } // end options
 	  	  } // end css
 	  	} // end watch

	}); // end initconfig

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['sass', 'watch']);

 };

 // TO USE:

 // navigate to project folder in terminal
 // npm init
 // npm install grunt --save-dev
 // npm install grunt-contrib-sass --save-dev
 // npm install grunt-contrib-watch --save-dev
 // ensure css paths above match filenames in project folder
 // grunt
