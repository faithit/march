//creating a h1 element
let newh1= document.createElement("h1")
//set the text of the  h1

newh1.textContent="THis is a new h1 heading"
//append   the to the body of the document
document.body.appendChild(newh1)
//creating a paraghaph
const newp=document.createElement("p")
//set the text content of the paragragh
newp.textContent="This is a paragraph that I created dynamically using JavaScript."
//modifying the style of the paragraph
newp.style.color= "blue";
//add the paragraph to the body of the document
document.body.appendChild(newp)
//Create a new list item element
let li=document.createElement('li')
li.textContent="About us"
//get the  ul  element by its id
let ul=document.getElementById("menu")
//append the new list item to the ul
ul.appendChild(li)
//removeChild
//get the parent container
let container=document.getElementById('container')
//get the paraghagh element to be removed
let myp=document.getElementById("myp")
//remove the paragragh from the parentcontainer
container.removeChild(myp)
//create a div element
let mydiv=document.createElement("div");
document.body.appendChild(mydiv);
//create a h2 element 
let xy=document.createElement('h2')
//add the innerText of the h2
xy.innerText='this is a heading 2 within a div'
//adding the h2 to the div
mydiv.appendChild(xy)
