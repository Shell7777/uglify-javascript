const fs = require('fs');
const jsOBFUSCATORS = require('javascript-obfuscator')
fs.readFile('./index.js','utf-8',(err,data)=>{
    if (err) {
        throw err;
    }
    
    let obfuscator = jsOBFUSCATORS.obfuscate(data);
    fs.writeFile('./build/build.js',obfuscator.getObfuscatedCode(),(err)=>{
        if (err) {
            console.error(err)
        }
    console.log('OBFUSCATORS Successfully');
    })
  
})