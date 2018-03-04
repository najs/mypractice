var gulp = require('gulp');
//var concat = require('gulp-concat'); //파일결합하기
var clean = require('gulp-clean');
var sass = require('gulp-sass');


var scssOptions = {
	 outputStyle : "compact",
	 indentType : "tab",
	 indentWidth : 1
};


gulp.task('sass',function(){
	return gulp.src('src/scss/*.scss').
	pipe(sass(scssOptions).on('error', sass.logError)).
	//pipe(sass.sync().on('error', sass.logError)).
	pipe(gulp.dest('src/css'));
});

gulp.task('sass:watch', function () {
	gulp.watch('src/scss', ['sass']);
});

gulp.task('compile', ['sass'], function(){});

gulp.task('default', [
	'sass'
]);
