//longest word using sort method

function str(name){

    let str1=name.split(" ")
    //console.log(str1);
    
    return str1.sort((a,b)=>b.length - a.length)[0]


}

console.log(str("this is sort way to aaceess the longest word "));

////longest word using for loop

function str1(name) {
    let output="";
    split=name.split(" ")
    for(i of split){
        
        if(i.length>output.length){
            output=i;

        }
        
    }
    return output;
    
    
    
}
console.log(str1("This the second to find long word"));

//using reduce 

function str3(name){

    split=name.split(" ")

    return split.reduce((a,b)=>a.length>b.length ? a:b)



}

console.log(str3("this is third way to find longesttt word "));
 
 
 
 