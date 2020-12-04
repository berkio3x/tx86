import {getDebugArea} from './debugArea';


const bytesInARow = 16;



function getHex(Int){

    let hex = Int.toString(16)
    const paddedHex = ('00' + hex).slice(-2);
    return paddedHex

}
export function readELFFile(file:any){
	var view = new Uint8Array(file);
    var dv = new DataView(file);   
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

    // check magic elf header
    console.assert(
         ["7f", "45" , "4c", "46"].toString() ===  [0x00, 0x01, 0x02, 0x03].map(byte => dv.getUint8(byte)).map(int=>getHex(int)).toString() ,
         "Invalid ELF header"
    
    )
    console.log([0x00, 0x01, 0x02, 0x03].map(byte => dv.getUint8(byte)).map(int=>getHex(int))) 
  


}
