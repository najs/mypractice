var gulp = require('gulp');
//var concat = require('gulp-concat'); //파일결합하기
//var clean = require('gulp-clean');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer  = require('autoprefixer');

gulp.task('sass',function(){
	var scssOptions = {
		outputStyle : "compact",  // compressed, expanded, compact, nested
		indentType : "tab"
	};

	var processors = [
		autoprefixer({
			browsers: [
			'last 2 versions', "Edge > 0", "ie >= 8", "safari >=5", "iOS >=5",
			"Firefox >=3.0","Opera >=10.0", "Android > 0","iOS > 0","FirefoxAndroid > 0"],
			cascade: false
		})
	];

	var paths = ['src/scss/global/reset.scss','src/scss/sample.scss'];

	return gulp.src(paths).
	pipe(sass(scssOptions).on('error', sass.logError)).
	pipe(sourcemaps.init()).
	pipe(postcss(processors)).
	pipe(gulp.dest('src/css'));
});

gulp.task('sass:watch', function () {
	gulp.watch('src/scss', ['sass']);
});

gulp.task('compile', ['sass'], function(){});

gulp.task('default', [
	'sass'
]);
