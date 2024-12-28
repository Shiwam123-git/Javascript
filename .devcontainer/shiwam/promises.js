
let promise=new Promise(function(resolved , reject){
    setTimeout(()=>{
        console.log('heloo shiwam');
        resolved()
        
    },2000)
}).then(()=>{
    console.log("promise is completed");
    
})

