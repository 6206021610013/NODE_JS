//Blocking
const fs = require('fs')

//Read file input.txt
const data = fs.readFileSync('./myFile/input.txt', 'utf-8')
console.log(data)

//Write file
const outputText = `Hello Node.js\n${data}\nWritten on ${new Date()}`
fs.writeFileSync("./myFile/output.txt", outputText)
console.log("Write Successfully!")