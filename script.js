//selecting popupbox popup overlay button
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})


//select cancel button
var cancelpopup = document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
//select container add-rem  remainder-title-input  rem-type-input  remainder-description-input
var container = document.querySelector(".container")
var addrem = document.getElementById("add-rem")
var remaindertitleinput = document.getElementById("remainder-title-input")
var remtypeinput = document.getElementById("rem-type-input")
var remainderdescriptioninput = document.getElementById("remainder-description-input")

addrem.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${remaindertitleinput.value}</h2>
    <h5>${remtypeinput.value}</h5>
    <p>${remainderdescriptioninput.value}</p>
    <button onclick="del(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function del(event)
{
    event.target.parentElement.remove()
}