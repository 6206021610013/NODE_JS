//Non-Blocking
const fs = require('fs')

//Read file input.txt
fs.readFile("./myFile/input.txt",'utf-8',(err,data)=>{
    if(err) return console.log("Failed", err)
    const outputText = `Hello Node.js\n${data}\nWritten on ${new Date()}`
    fs.writeFile("./myFile/output.txt", outputText, err=>{
        if(err) return console.log("Failed", err)
        console.log("Write Successfully!")
    })
})

//console.log("End..")
