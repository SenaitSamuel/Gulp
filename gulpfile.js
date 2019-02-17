var gulp = require("gulp");
var less = require("gulp-less");
var imagemin = require("gulp-imagemin");




// Less file
gulp.task("less", function(){
     gulp.src("src/less/*.less")
         .pipe(less())
        .pipe(gulp.dest("dist/css"))
});


//minify images
gulp.task("imagemin",function(){
     gulp.src("src/images/*")
         .pipe(imagemin())
        .pipe(gulp.dest("dist/resized-images"))
});


//Watch task

gulp.task("default",["less", "imagemin"]);
gulp.task("watch",function(){
    gulp.watch("src/images/*" , ["imagemin"])
    gulp.watch("src/less/*.less", ["less"])
})