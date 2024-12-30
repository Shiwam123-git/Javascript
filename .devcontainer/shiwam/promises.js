
let promise=new Promise(function(resolved , reject){
    setTimeout(()=>{
        console.log('heloo shiwam');
        resolved()
        
    },2000)
}).then(()=>{
    console.log("promise is completed");
    
})

let promises2= new Promise(function(Resolved , Reject){
   
    setTimeout(() => {
        let a=9
        let b=10
        if(a>b){
             console.log("Promise 2 is in progress");
             Resolved({name:'shiwam',age:'24'})
             
        }else {
            console.log("Promise2 reject");
            Reject()
            
        }
        
    }, 2000);


 })
 //.then((user)=>{
    
//     console.log("passed completd 2",user);
    

// }).catch((nouser)=>{
//      console.log("promise failed ");
     
// })

async function response1(params) {
    try {
        let waitforresponse=await promises2

        console.log(waitforresponse);
        
    } catch (error) {
        console.log(error);
        
        
    }

   
    
    
}
response1()