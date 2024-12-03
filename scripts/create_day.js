const date = new Date().getDate().toString()

const fs = require('fs')
const path = require('path')
const session = process.env.SESSION_TOKEN


if(fs.existsSync(path.join(__dirname, "/../src/day", date, "code.js"))){
    console.log("Day already exists")
    process.exit(1)
}

fs.mkdirSync(path.join(__dirname, "/../days", date))
fs.cpSync(path.join(__dirname, "/template.js"), path.join(__dirname, "/../days", date, "code.js"))
// grab input.txt
console.log("Grabbing input.txt")
;(async () => {
 const input = await  fetch(`https://adventofcode.com/2024/day/${date}/input`, {
        headers: {
            'Cookie': `session=${session}`
        }, 
    }).then(d=>d.text())
    fs.writeFileSync(path.join(__dirname, "/../days", date, "input.txt"), input)
    console.log("Done")
    process.exit(0)
})()