const url1 = "W3SCHOOL"
function downloading(url,callback){
    console.log(`Downloading from ${url}`)
    setTimeout(()=>{
        callback()
    },3000)
}
function complete(){
    console.log("Download success!")
}
downloading(url1,complete)