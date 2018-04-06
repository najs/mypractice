var gulp = require('gulp');
//var concat = require('gulp-concat'); //파일결합하기
//var clean = require('gulp-clean');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer  = require('autoprefixer');
var watch = require('gulp-watch');


var isProd = true;

var scssOptions = {
	outputStyle : isProd ? "compact": 'compressed',  // compressed, expanded, compact, nested
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

gulp.task('base-sass',function(){
	var base_paths = ['src/utils/scss_globalvars/base.scss'];
	return gulp.src(base_paths).
	pipe(sass(scssOptions).on('error', sass.logError)).
	pipe(sourcemaps.init()).
	pipe(postcss(processors)).
	pipe(gulp.dest('src/common/css'));
});



gulp.task('sass',function(){
	var paths = ['src/components/dev/scss/component.scss'];

	return gulp.src(paths).
	pipe(sass(scssOptions).on('error', sass.logError)).
	pipe(sourcemaps.init()).
	pipe(postcss(processors)).
	pipe(gulp.dest('src/components/css/'));
});

gulp.task('sass:watch', function () {
	gulp.watch('src/components/dev/scss', ['sass']);
});

gulp.task('compile', ['sass'], function(){});

gulp.task('default', [
	'sass'
]);
