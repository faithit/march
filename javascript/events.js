function btnclick(){
    alert("you have clicked a button")
}
function printhello(){
    alert("helo the page has loaded")
}
//function to change color on mouseover
function changecolor(){
    //getting the element
document.getElementById("btn").style.backgroundColor="yellow";
}
//function   to change color on mouseout
function resetcolor(){
    document.getElementById("btn").style.backgroundColor="purple"
}
//eventlistiners
/*are functions that wait for a specific event to occur
then execute a block of code in response to that event

element.addeventlistiner(event,functionname)*/
//select the element
let x=document.getElementById("one")
//add an event listener
x.addEventListener("click",myfuction)
function myfuction() {
    alert("button clicked")

}
//another eventlisterner
x.addEventListener("mouseover",mysecondfunction)
function mysecondfunction() {
    x.style.backgroundColor = "red"
}
