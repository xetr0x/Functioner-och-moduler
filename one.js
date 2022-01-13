'use strict'



const one = document.createElement("h2");
one.textContent = "One";
one.style = "text-align:center;";


const text = document.createElement("h2");
text.textContent = "bilmärken";
text.style="margin-left:10%; margin-top:20px;"

const textbox1 = document.createElement("input");
textbox1.style = "margin-left:10%;";

const info = document.createElement("textarea");
info.style = "float:right; margin-right:65%;"

const knapp = document.createElement("button");
knapp.id = "add"

knapp.style = "margin-left:10%; margin-top:15px;"
knapp.innerHTML = "Add Data";

window.onload = () => {


document.getElementById("one").appendChild(one);
document.getElementById("one").appendChild(text);
document.getElementById("one").appendChild(textbox1);
document.getElementById("one").appendChild(info);
document.getElementById("one").appendChild(knapp);


}




let carArray = [];


knapp.onclick = () => 
{       
        if (textbox1.value === carArray.value){
            return;
        }
        else {
            carArray.push(textbox1.value);
        }
        
    }


   

// function Unik(value, index, self){
//     return self.indexOf(value) === index;