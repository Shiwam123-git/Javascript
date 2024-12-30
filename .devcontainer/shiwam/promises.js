
let promise=new Promise(function(resolved , reject){
    setTimeout(()=>{
        console.log('heloo shiwam');
        resolved()
        
    },2000)
}).then(()=>{
    console.log("promise is completed");
    
})

let promises2= new Promise(function(Resolved , Reject){

    setTimeout((a,b) => {
        if(a>b){
             console.log("Promise 2 is in progress");
             resolved()
             
        }else {
            console.log("Promise2 reject");
            reject()
            
        }
        
    }, 2000);
}).then((user)=>{
    user(4,5)
    console.log("passed completd 2");
    

}).catch((nouser)=>{
     console.log("promise failed ");
     
})

