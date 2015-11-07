function createCookie(name, value){
    document.cookie = name + "=" + value;
    
}
function deleteCookie(name , value){
    
    document.cookie = name + "=" + value;
    
}

function getCookie(name){
    var cname = name + '=';
    console.log(cname);
    
    var ca = document.cookie.split(";"); 
    console.log("Array" + ca);
    
    for(var i = 0; i<ca.length; i++){
        console.log("ca.length: " + ca.length);
        console.log("i: "+i);
        var c = ca[i];
        console.log("c: " + c);
        while (c.charAt(0)==' ') c = c.substring(1); 
        console.log("c.charAt(0): "+c.charAt(0));
        console.log("c.substring(1): "+c.substring(1));
        
        if (c.indexOf(cname) == 0) return c.substring(cname.length,c.length);
        console.log("c.indexOf(cname): " + c.indexOf(cname));
        console.log("c.substring(cname.length,c.length): "+ c.substring(cname.length,c.length));
        console.log("Cname length: " + cname.length);
        console.log("C length: " + c.length);
        
        
        
        
    }
    
    return ""; 
   
}
function testing(name){
    
    return "";
}
function editCookie(name, value){
    console.log("EDITED COOKIE! NOM NOM NOM");
    document.cookie = name + "=" + value;

}
