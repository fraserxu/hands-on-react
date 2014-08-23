'use strict';

var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('scripts', function() {
  return gulp.src('./src/app.js', {read: false})
    .pipe(browserify({
      insertGlobals : false,
      transform: ['reactify'],
      extensions: ['.jsx']
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.*', ['default']);
});

gulp.task('default', ['scripts']);
