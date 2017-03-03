# Laravel-Elixir-Svg2png
>Converts SVG images to PNG using [Sharp](https://github.com/lovell/sharp) 

## Why?

As PHP GD library doesn't support SVG files, I had the need to convert all SVG files to PNG to use them.
With this plugin you can add the conversion to your build and deploy pipeline.

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

### svg2png(src, dst, [width, height])

`src`

The SVG images

`dst`

The destination path for PNG files

`width`

The width of destination files (defaults to SVG width)

`height`

The height of destination files (defaults to SVG height)


## Example
This is an example of a Gulp file that runs svg2png to convert all my SVG flags :

```javascript
var elixir = require('laravel-elixir');
require('laravel-elixir-svg2png');

elixir(function(mix) {
    mix.svgtopng('public/flags/*.svg', 'public/png-flags');
});
```

