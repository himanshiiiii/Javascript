var p = prompt("enter principal");
var r = prompt("enter rate");
var t = prompt("enter time");

if ((p && r && t)!=null) {
    document.getElementById("demo").innerHTML =(p*r*t)/100;
} 
