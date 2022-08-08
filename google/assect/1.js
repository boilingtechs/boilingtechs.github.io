const fs = require('fs')
const files = fs.readdirSync('./')
console.log('-- files: ', files)
files.forEach((fl) => {
    const newname = fl.replace('.下载', '')
    fs.renameSync(`./${fl}`, `./${newname}`)
})
