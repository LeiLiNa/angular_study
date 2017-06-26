var gulp = require("gulp");
//实例化  使用$.less()等的时候要将gulp-load-plugins实例化
var $ = require("gulp-load-plugins")();
var open = require("open");


//全局变量、源代码/开发环境/生产环境
var app = {
    srcPath: "src/",
    devPath: "build/",
    ProPath: "dist/"
};


gulp.task("lib", function () {
    gulp.src("bower_components/**/*.js")
        .pipe(gulp.dest(app.devPath + "vender"))
        .pipe(gulp.dest(app.ProPath + "vender"))
        .pipe($.connect.reload())//实时刷新
});
//将原文件下所有的html文件copy到build/dist
gulp.task("html", function () {
    gulp.src(app.srcPath + "**/*.html")
        .pipe(gulp.dest(app.devPath))
        .pipe(gulp.dest(app.ProPath))
        .pipe($.connect.reload())//实时刷新
});
//将原文件下所有的json文件copy到build/dist
gulp.task("json", function () {
    gulp.src(app.srcPath + "data/**/*.json")
        .pipe(gulp.dest(app.devPath + "data"))
        .pipe(gulp.dest(app.ProPath + "data"))
        .pipe($.connect.reload())//实时刷新
});

//css文件处理,用的less预编译器先要将less文件转换成css文件，生产环境要将css文件压缩

gulp.task("less", function () {
    gulp.src(app.srcPath + "style/index.less")
        .pipe($.less())
        .pipe(gulp.dest(app.devPath + "css"))
        .pipe($.cssmin())
        .pipe(gulp.dest(app.ProPath + "css"))
        .pipe($.connect.reload())//实时刷新
});
//js文件处理
gulp.task("js", function () {
    gulp.src(app.srcPath + "script/**/*.js")
        .pipe($.concat("index.js"))
        .pipe(gulp.dest(app.devPath + "js"))
        .pipe($.uglify())
        .pipe(gulp.dest(app.ProPath + "js"))
        .pipe($.connect.reload())//实时刷新
});
//image
gulp.task("image", function () {
    gulp.src(app.srcPath + "image/**/*")
        .pipe(gulp.dest(app.devPath + "image"))
        .pipe($.imagemin())
        .pipe(gulp.dest(app.ProPath + "image"))
        .pipe($.connect.reload())//实时刷新
});
//总的任务
gulp.task("build",["image","js","less","json","html","lib"]);
//清除文件 src可以为数组形式
gulp.task("clean",function(){
    gulp.src([app.ProPath,app.devPath])
        .pipe($.clean())
});
//自启动
gulp.task("serve",["build"],function(){
    $.connect.server({
        root:[app.devPath],
        livereload:true,
        port:3000
    })
    open("http://localhost:3000")
});
//监测文件发生改变 自动构建
gulp.watch("bower_components/**/*.js",["lib"]);
gulp.watch(app.srcPath + "**/*.html",["html"]);
gulp.watch(app.srcPath + "style/index.less",["less"]);
gulp.watch(app.srcPath + "script/**/*.js",["js"]);
gulp.watch(app.srcPath + "image/**/*",["image"]);
gulp.watch(app.srcPath + "data/**/*.json",["json"]);

//偷懒方法
gulp.task("default",["serve"]);