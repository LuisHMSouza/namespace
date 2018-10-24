/********************************
Filename: namespace.js
Author: @Luis Souza
Description: namespacing exercise
Date: 2018-10-24
*********************************/

var MORA0199 = {

    init: function () {

        let newDiv = document.createElement("div");
        newDiv.className = "box";
        newDiv.textContent = "mora0199";

        let divs = document.getElementById("boxes");
        divs.appendChild(newDiv);

        newDiv.addEventListener("click", mouseClick);
        newDiv.addEventListener("mouseover", mouseOver);
        newDiv.addEventListener("mouseout", mouseOut);
    }
}

function mouseClick() {
    this.style.borderColor = "#989898";
    this.style.backgroundColor = "#dba200";
}

function mouseOver() {
    this.classList.toggle("highlight");
}

function mouseOut() {
    this.classList.toggle("highlight");
    this.removeAttribute("style");
}
