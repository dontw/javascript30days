var gulp = require('gulp');
var webpack = require('webpack');

gulp.task('scripts', function(callback){
  webpack(require('../webpack.config.js'), function(err,stats){
    if(err){
      console.log(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
});

gulp.task('movejs', function(){
  return gulp.src('./app/js/*.js')
  .pipe(gulp.dest('./dest/js'))
});