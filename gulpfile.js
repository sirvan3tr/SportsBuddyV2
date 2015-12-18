var gulp = require('gulp');
var webpack = require('webpack-stream');
var webserver = require('gulp-webserver');

gulp.task('build', function() {
  return gulp.src(['app/app.tsx', "bootstrap-sass!./bootstrap-sass.config.js", "stylesheets/main.scss", "node_modules/jquery/dist/jquery.js", "node_modules/bootstrap-sass/assets/javascripts/bootstrap.js"])
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('dist/'));
});
gulp.task('serve', function() {
  gulp.src('dist')
    .pipe(webserver({
      livereload:true
    }));
});
gulp.task('default', ['build', 'serve']);

