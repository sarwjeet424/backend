function trim(){
    let str= ' functionUp  ';
    str= str.trim()
    return("string -",str)
   
}

function changetoLowerCase(){
   let str="HELLO EVERYONE";
   str=str.toLowerCase()
   return("lower case string -", str)
   

}

function changeToUpperCase(){

    let str="HELLO EVERYONE";
    str=str.toUpperCase()
    return ("upper case string -", str)
    
}

module.exports.tr=trim
module.exports.lower=changetoLowerCase
module.exports.upper=changeToUpperCase