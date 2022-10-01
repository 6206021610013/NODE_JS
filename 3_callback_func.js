function calculate(a,b,callback){
    console.log("Calculating...")
    setTimeout(()=>{
        const sum = a+b
        callback(sum)
    },3000)
    
}
calculate(100,50,function(result){
    console.log(`Result = ${result}`)
})
