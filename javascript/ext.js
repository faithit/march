//accessing element by id 
const abc=document.getElementById("one");
abc.style.color="red";//changing the color of text  to red
//accessing elements within a class name "hello"
let xyz=document.getElementsByClassName("hello")
//xyz[0].style.color="yellow"
//loop through each element 
 for(let x=0;x<xyz.length;x++){
    xyz[x].style.color="purple";
 }
 //accessing elements by tagname
 let st=document.getElementsByTagName("h1");
 st[0].style.backgroundColor="blue"
//querySelector  selects the first element that matches a CSS selector
let md=document.querySelector(".two")
md.style.color="green"
//querySelectorALL Selects ALL the elements that matches a CSS selector
let mn=document.querySelectorAll(".example")
//lopp throgh each element
for(let y=0;y<mn.length;y++){
    mn[y].style.color="maroon"
}


