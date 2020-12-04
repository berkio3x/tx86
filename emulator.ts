import {readELFFile} from './elf';

function readDisassembledFile() {
	
	document.getElementById('file').onchange = function (e ){
	    var reader = new FileReader();
		var input  = <HTMLInputElement> e.target;
		var file = input.files[0]

		reader.onload = function(progressEvent){
		    //console.log(this.result);
	        readELFFile(this.result)
		};
		reader.readAsArrayBuffer(file);
		//DEBUG
		//document.getElementById("disassembled__file").innerHTML = reader.result
	}
	
}
 readDisassembledFile();
