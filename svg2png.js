'use strict';
var through = require('through2');
var gutil = require('gulp-util');
var sharp = require('sharp');

var PLUGIN_NAME = 'svg2png';

function svg2png(options) {

    return through.obj(function (file, encoding, callback) {


        if (file.isNull()) {
            this.push(file)
            return callback();
        }

        if (file.isStream()) {
            this.emit('error', new gutil.PluginError(PLUGIN_NAME, "Received a stream... Streams are not supported. Sorry."));
            return callback();
        }

        if (file.isBuffer()) {
            var image = sharp(file.contents).resize(options.width, options.height).png();

            var newFile = new gutil.File({
                cwd: file.cwd,
                base: file.base,
                path: file.path,
                contents: image
            });

            newFile.extname = '.png';

            callback(null, newFile);
        }
    });

}

module.exports = svg2png;
