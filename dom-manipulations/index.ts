document.body;
const bodyEl: HTMLElement = document.body;
bodyEl.style.backgroundColor = "#000";
bodyEl.style.color = "#fff";

bodyEl.style.border = "2px solid red";
console.log("body background", bodyEl.style.backgroundColor);

const divEls: HTMLCollectionOf<HTMLDivElement> =
  document.getElementsByTagName("div");

const btn: HTMLButtonElement = document.getElementsByTagName("button")[0];

btn.style.backgroundColor = "green";
btn.textContent = "Abut me";

const headingsTwo: HTMLCollectionOf<HTMLHeadingElement> =
  document.getElementsByTagName("h2");

const shops: HTMLElement | null = document.getElementById("shops");

const item = document.getElementsByClassName("list-item");

const selectedH2 = document.querySelector("h2") as HTMLHeadingElement;

if (selectedH2) selectedH2.style.color = "blue";

const aboutUsBtn = document.querySelector(
  ". about button"
) as HTMLButtonElement;

console.log("aboutUsBtn", aboutUsBtn);
