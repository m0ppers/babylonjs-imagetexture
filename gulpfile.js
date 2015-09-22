var gulp = require('gulp');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var download = require('gulp-download');

gulp.task('default', function () {
  return gulp.src('src/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('fetch-babylon-ts', function () {
  download('https://raw.githubusercontent.com/BabylonJS/Babylon.js/master/dist/babylon.2.1.d.ts')
    .pipe(gulp.dest('typings'));
});
