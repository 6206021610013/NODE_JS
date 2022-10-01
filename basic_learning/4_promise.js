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
                resolve(`Download ${url} success`)
            }else{
                reject("Failed")
            }
        },2000)
    })
}
// Promise Then
downloading(url1)
.then(function(result){
    console.log(result)
    return downloading(url2)
}).then(function(result){
    console.log(result)
    return downloading(url3)
}).then(function(result){
    console.log(result)
})
//  Promise Hell  //
// downloading(url1).then(function(result){
//     console.log(result)
//     downloading(url2).then(function(result){
//         console.log(result)
//         downloading(url3).then(function(result){
//             console.log(result)
//         })
//     })
// })

// downloading(url1).then(result=>{
//     console.log(result)
// }).catch(err=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("End..")
// })