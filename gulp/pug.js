var gulp = require('gulp');
var pug = require('gulp-pug');
var notify = require('gulp-notify');
var del = require('del');

gulp.task('compilePug',function(){
    return gulp.src('./app/pug/*.pug')
    .pipe(pug({pretty: true}))
    .on('error', notify.onError(function (error) {
        return '你的PUG編錯啦~~~~~~!\n看一下console有哪裡錯了：\n' + error;
    }))
    .pipe(gulp.dest('./dest'))
});

gulp.task('syncPug',['removeHtml'],function(){
    return gulp.src('./app/pug/*.pug')
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest('./dest'))
});

gulp.task('removeHtml',function(){
    return del('./dest/*.html')
});



gulp.task('pug', ['compilePug']);