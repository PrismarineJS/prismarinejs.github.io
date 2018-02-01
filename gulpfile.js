'use strict';

var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');

gulp.task('html', function () {
  return gulp.src(['./views/**/*.pug', '!./views/**/_*.pug'])
    .pipe(pug())
    .pipe(gulp.dest(function (file) {
      return file.base.split('views\\')[0] + 'dist\\' + file.base.split('views\\')[1];
    }))
});

gulp.task('sass', function () {
  return gulp.src('./css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function(){
  gulp.watch('./css/**/*.scss', ['sass']);
  gulp.watch('./views/**/*.pug', ['html']); 
})

gulp.task('default', ['html', 'sass']);
