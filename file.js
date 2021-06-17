const fs= require('fs')

// fs.readFile('./hello.txt',(err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString())
// })

// console.log('last line')

// fs.writeFile('./hello.txt','Hello there!' , ()=>{
//     console.log('file ahs been written')
// } )

//directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err)=>{
    if(err){
        console.log(err)
    }
    console.log('folder created')
})}else{
    fs.rmdir('./assets',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder deleted')
    })
}