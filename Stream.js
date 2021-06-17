const fs= require('fs');
const readStream=fs.createReadStream('./bigFile.txt',{encoding:'utf8'});
const writeStream= fs.createWriteStream('./write2.txt');

// readStream.on('data',(chunk)=>{
//     console.log('.......New Stream...............')
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// })

//piping, a shorter way to write files
readStream.pipe(writeStream)