const connect = true
const url1 = "MusicOnline/song1.mp3"
const url2 = "MusicOnline/song2.mp3"
const url3 = "MusicOnline/song3.mp3"
const url4 = "MusicOnline/song4.mp3"
const url5 = "MusicOnline/song5.mp3"

function downloading(url){
    return new Promise(function(resolve,reject){
        console.log(`Downloading from ${url}`)
        setTimeout(()=>{
            if(connect){
                resolve(`Downloaded ${url} success`)
            }else{
                reject("Failed")
            }
        },1500)
    })
}

// Async & Await
async function start(){
    console.log(await downloading(url1)) 
    console.log(await downloading(url2))
    console.log(await downloading(url3))
}

start()