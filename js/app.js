const title = document.getElementById("title");
const welcomeMessage = document.getElementById("welcomeMessage");
const clickButton = document.getElementById("clickButton");
const box = document.querySelector(".box");

title.textContent = "Hello JavaScript";
welcomeMessage.textContent = "Welcome to JavaScript Programming Language!";

clickButton.addEventListener("click", function() {
    alert("Hope you're having a great day!");
});

box.innerHTML = "<h2>Favourite Programming Languages</h2><p>This is a list of my favourite programming languages.</p><ul><li>JavaScript</li><li>Python</li><li>Java</li></ul>";

title.style.color = "blue";
title.style.fontSize = "36px";
welcomeMessage.style.color = "green";
welcomeMessage.style.fontSize = "24px";

box.style.border = "2px solid black";
box.style.padding = "10px";
box.style.marginTop = "20px";

box.addEventListener("mouseover", function() {
    box.style.backgroundColor = "lightgray";
});

box.addEventListener("mouseout", function() {
    box.style.backgroundColor = "white";
}); 

box.classList.add("box-style");