document.body;
var bodyEl = document.body;
bodyEl.style.backgroundColor = "#000";
bodyEl.style.color = "#fff";
bodyEl.style.border = "2px solid red";
console.log("body background", bodyEl.style.backgroundColor);
var divEls = document.getElementsByTagName("div");
var btn = document.getElementsByTagName("button")[0];
btn.style.backgroundColor = "green";
btn.textContent = "Abut me";
var headingsTwo = document.getElementsByTagName("h2");
var shops = document.getElementById("shops");
var item = document.getElementsByClassName("list-item");
var selectedH2 = document.querySelector("h2");
if (selectedH2)
    selectedH2.style.color = "blue";
var aboutUsBtn = document.querySelector(". about button");
console.log("aboutUsBtn", aboutUsBtn);
