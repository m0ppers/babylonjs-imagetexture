var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var download = require('gulp-download');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');

gulp.task('default', function () {
  browserify('src/ImageTexture.js')
  .transform('babelify', {presets: ['es2015']})
  .bundle()
  .pipe(source('ImageTexture.js'))
  .pipe(buffer())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('dist'));
});

gulp.task('fetch-babylon-ts', function () {
  download('https://raw.githubusercontent.com/BabylonJS/Babylon.js/master/dist/babylon.2.1.d.ts')
    .pipe(gulp.dest('typings'));
});
