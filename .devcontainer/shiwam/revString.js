//Direct funtion invoke with return Method 1
function str(name){

    for(i in name){
       return name.split('').reverse().toString();  
    }   
}

console.log(str('shiwam'));

//Direct funtion without invoke with return Method 2

function str1(name){

    for(i in name){
        
    }   
    console.log("orignal string=",name);
    
    Split=name.split('')//converted to Array
    rev=Split.reverse()//reversed in array 
    string=rev.toString()//back to string 
    console.log("Reverse string=",string);
    

}

str1('shiwam');


//Reverse string using without in built function 
function str2(name) {
    for (let index = name.length-1; index>=0; index--) {
            
        console.log(name[index]);
        
    }
    
    
    
}
str2('hello');

 