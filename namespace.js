/********************************
Filename: namespace.js
Author: @Luis Souza
Description: namespacing exercise
Date: 2018-10-25
*********************************/

var LUISHMSOUZA = {

        init: function () {

            let newDiv = document.createElement("div");
            newDiv.className = "box";
            newDiv.textContent = "mora0199";

            let divs = document.getElementById("boxes");
            divs.appendChild(newDiv);

            newDiv.addEventListener("click", function () {
                newDiv.style.borderColor = "#989898";
                newDiv.style.backgroundColor = "#dba200";
            });
            newDiv.addEventListener("mouseover", function () {
                newDiv.classList.toggle("highlight");
            });
            newDiv.addEventListener("mouseout", function () {
                newDiv.classList.toggle("highlight");
                newDiv.removeAttribute("style");
            });
        };
