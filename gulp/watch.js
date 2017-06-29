var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');

gulp.task('watch',function(){

    browserSync.init({
        notify:false,
        //where the website live
        server:{
            baseDir: "dest" //folderName
        }
    })

    //設定監看對象

    //html
    watch('./app/pug/**/*.pug', function(){
        //監看對象變動執行
        gulp.start('pugRefresh');
    });

    //css
    watch('./app/sass/**/*.scss', function(){
        gulp.start('cssInject');
    });

    //js
    watch('./app/js/**/*.js', function(){
      //執行scripts這個task
      gulp.start('scriptsRefresh');
    });


});

          //taskName  //dependency 先執行指定task才執行目前這個task  //callback
gulp.task('cssInject',['styles'],function(){
    return gulp.src('./dest/css/main.css')
    .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh',['scripts'] ,function(){
    browserSync.reload();
});

gulp.task('pugRefresh',['pug'],function(){
     browserSync.reload();
});