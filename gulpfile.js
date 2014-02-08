var gulp = require('gulp'),
	gutil = require('gulp-util'),
	csslint = require('gulp-csslint'),
	map = require('map-stream');

var customReporter = function(file) {
	gutil.log(gutil.colors.red(file.csslint.errorCount + ' errors in '+ file.relative));

	file.csslint.results.forEach(function(result) {
		gutil.log(gutil.colors.yellow(result.error.line + ': ') + result.error.message);
	});

};

gulp.task('csslinting', function() {
	gulp.src('css/*.css')
		.pipe(csslint('csslintrc.json'))
		.pipe(csslint.reporter(customReporter))
		.pipe(map(function (file, cb) {
			// Notify the callback "true" if it failed on the file
			cb(!file.csslint.success, file);
		}));

});

