import {getDebugArea} from './debugArea';


const bytesInARow = 16;


export function readELFFile(file:any){
	var view = new Uint8Array(file);
    
    let debugDiv = getDebugArea();

    let byteCount = 0;


    let row = document.createElement('div')

    for(let byte of view){

        let hex = byte.toString(16)
        const paddedHex = ('00' + hex).slice(-2);

        if(byteCount % 16 == 0){
            debugDiv.appendChild(row)
            row = document.createElement('div')

        }
        let span = document.createElement('span')
        span.classList.add('byte')
        span.innerHTML = paddedHex
        row.appendChild(span)
        byteCount++; 
	}	

}
