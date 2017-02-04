var gulp = require('gulp');
var Elixir = require('laravel-elixir');
var svg2png = require('gulp-svg2png');

var Task = Elixir.Task;

Elixir.extend('svg2png', function (src, dest, width, height, opts) {

    opts = opts || {
            verbose: true,
            concurrency: 5
        };

    opts.options = {
        width: width,
        height: height
    };

    new Task('svg2png', function () {

        console.log(opts)

        return gulp.src(src)
            .pipe(svg2png(opts.options, opts.verbose, opts.concurrency))
            .pipe(gulp.dest(dest))
    });

});
