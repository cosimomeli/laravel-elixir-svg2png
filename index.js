var gulp = require('gulp');
var Elixir = require('laravel-elixir');
var svg2png = require('./svg2png');

var Task = Elixir.Task;

Elixir.extend('svg2png', function (src, dest, width, height) {

    new Task('svg2png', function () {

        return gulp.src(src)
            .pipe(svg2png({
                width: width,
                height: height
            }))
            .pipe(gulp.dest(dest))
    });

});
