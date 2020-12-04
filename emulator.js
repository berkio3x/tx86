"use strict";
exports.__esModule = true;
var elf_1 = require("./elf");
function readDisassembledFile() {
    document.getElementById('file').onchange = function (e) {
        var reader = new FileReader();
        var input = e.target;
        var file = input.files[0];
        reader.onload = function (progressEvent) {
            //console.log(this.result);
            elf_1.readELFFile(this.result);
        };
        reader.readAsArrayBuffer(file);
        //DEBUG
        //document.getElementById("disassembled__file").innerHTML = reader.result
    };
}
readDisassembledFile();
