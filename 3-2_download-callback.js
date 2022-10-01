const url1 = "W3SCHOOL/song1.mp3"
const url2 = "W3SCHOOL/song2.mp3"
const url3 = "W3SCHOOL/song3.mp3"
const url4 = "W3SCHOOL/song4.mp3"
const url5 = "W3SCHOOL/song5.mp3"
function downloading(url,callback){
    console.log(`Downloading from ${url}`)
    setTimeout(()=>{
        callback(url)
    },3000)
}

downloading(url1,function(result){
    console.log(`Download ${result} success!`)
    downloading(url2,function(result){
        console.log(`Download ${result} success!`)
        downloading(url3,function(result){
            console.log(`Download ${result} success!`)
            downloading(url4,function(result){
                console.log(`Download ${result} success!`)
            })
        })
    })
})