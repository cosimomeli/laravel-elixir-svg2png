# Laravel-Elixir-Svg2png
>This is a simple wrapper around Laravel Elixir for [gulp-svg2png](https://github.com/akoenig/gulp-svg2png). 

## Why?

As PHP GD library doesn't support SVG files, I had the need to convert all SVG files to PNG to use them.
With gulp-svg2png you can add the conversion to your build and deploy pipeline, so this is just its plugin for Laravel Elixir

## Getting Started
Install the module with [npm](https://npmjs.org):

```bash
$ npm install --save laravel-elixir-svg2png
```


And add it to your Elixir-enhanced Gulpfile, like so:

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-svg2png');

elixir(function(mix) {
   mix.svg2png('path/to/files/*.svg', 'destination-path');
});
```

## Arguments

### svg2png(src, dst, [width, height, opts])

`src`

The SVG images

`dst`

The destination path for PNG files

`width`

The width of destination files (defaults to SVG width)

`height`

The height of destination files (defaults to SVG height)

`opts`

```javascript
{
    verbose: true, //Logs progress information
    concurrency: 5 //Limit the amount of concurrent tasks processed at one time
}
```



## Example
This is an example of a Gulp file that runs svg2png to convert all my SVG flags :

```javascript
var elixir = require('laravel-elixir');
require('laravel-elixir-svg2png');

elixir(function(mix) {
    mix.svgtopng('public/flags/*.svg', 'public/png-flags');
});
```

Adjust the concurrency number accordingly to your system resources!
