var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('styles',function(){
    return gulp.src('./app/sass/**/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer]))
    .on('error', function(errorInfo){
        console.log(errorInfo.toString());
        this.emit('end');
    })
    .pipe(gulp.dest('./dest/css'))
});