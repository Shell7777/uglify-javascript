const fs = require('fs');
const UglifyJS = require('uglify-js');
const uglify = (url)=> {
    try {
        let code = fs.readFileSync(url,'utf-8')
        const result = UglifyJS.minify(code);
        const x =  fs.writeFileSync(url, result.code);
        console.log(`✔️  ${url}`);
    } catch (error) {
        console.log(`❌ ${url}`);   
    }

}
uglify('./index.js')