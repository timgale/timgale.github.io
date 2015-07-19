// require plugins
var gulp = require('gulp'),
	styles = require('gulp-sass'),
	concat = require('gulp-concat'),
	minifyCSS = require('gulp-minify-css'),
	rename = require('gulp-rename');

// styles task
gulp.task('styles', function () {
    gulp.src('./static/scss/*.scss')
        .pipe(styles())
        .pipe(gulp.dest('./static/css'))
        .pipe(minifyCSS())
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('./static/css'));
});