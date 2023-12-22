// 1. For welcome page WhatsApp

document.addEventListener("DOMContentLoaded", function() {

let container = document.querySelector(".main-loader-container");
let parentContainer = document.querySelector(".parent_container");
setTimeout(() => {
    container.style.display = "none";
    parentContainer.style.display = "flex";

}, 16000);

});