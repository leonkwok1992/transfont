let gulp = require("gulp");
let woff = require("gulp-ttf2woff"),
    eot = require("gulp-ttf2eot"),
    svg = require("gulp-ttf-svg");

gulp.task("ttf2all",["woff","eot","svg"]);

gulp.task("woff",function(){
    gulp.src("./src/*.ttf")
        .pipe(woff())
        .pipe(gulp.dest("./font/"));
});

gulp.task("eot",function(){
    gulp.src("./src/*.ttf")
        .pipe(eot())
        .pipe(gulp.dest("./font/"));
});

gulp.task("svg",function(){
    gulp.src("./src/*.ttf")
        .pipe(svg())
        .pipe(gulp.dest("./font/"));
});
