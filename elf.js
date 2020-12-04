"use strict";
exports.__esModule = true;
exports.readELFFile = void 0;
var debugArea_1 = require("./debugArea");
var bytesInARow = 16;
function readELFFile(file) {
    var view = new Uint8Array(file);
    var debugDiv = debugArea_1.getDebugArea();
    var byteCount = 0;
    var row = document.createElement('div');
    for (var _i = 0, view_1 = view; _i < view_1.length; _i++) {
        var byte = view_1[_i];
        var hex = byte.toString(16);
        var paddedHex = ('00' + hex).slice(-2);
        if (byteCount % 16 == 0) {
            debugDiv.appendChild(row);
            row = document.createElement('div');
        }
        var span = document.createElement('span');
        span.classList.add('byte');
        span.innerHTML = paddedHex;
        row.appendChild(span);
        byteCount++;
    }
}
exports.readELFFile = readELFFile;
