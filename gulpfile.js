var gulp = require('gulp'),
	gutil = require('gulp-util'),
	csslint = require('gulp-csslint');

gulp.task('csslinting', function() {
	gulp.src('css/*.css')
		.pipe(csslint('csslintrc.json'))
		.pipe(csslint.reporter());
});

