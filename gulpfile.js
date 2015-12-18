var gulp = require('gulp');
var webpack = require('webpack-stream');
var webserver = require('gulp-webserver');
var typescript = require('gulp-tsc');
var clean = require('gulp-clean');

gulp.task('build', ['compile'], function() {
  return gulp.src(['tmp/App.js', "bootstrap-sass!./bootstrap-sass.config.js", "stylesheets/main.scss", "node_modules/jquery/dist/jquery.js", "node_modules/bootstrap-sass/assets/javascripts/bootstrap.js"])
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('dist/'));
});
gulp.task('compile', function(){
  gulp.src(["app/App.tsx", "typings/tsd.d.ts"])
    .pipe(typescript({
      additionalTscParameters: ['--jsx', 'react']
    }))
    .pipe(gulp.dest('tmp/'));
});
gulp.task('clean', ['clean'], function() {
  return gulp.src(['tmp/','dist/'], {read: false})
    .pipe(clean());
});
gulp.task('serve', function() {
  gulp.src('dist')
    .pipe(webserver({
      livereload:true
    }));
});
gulp.task('default', ['build', 'serve']);
