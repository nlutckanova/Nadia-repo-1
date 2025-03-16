//get element by tag name
document.getElementsByTagName("h1")[0];

//get h1 tag by css selector
document.querySelector("#list");

//create DOM element
const paragraph: HTMLParagraphElement = document.createElement("p");

paragraph.textContent = "This is our created paragraph";

const addItemContent: HTMLCollectionOf<Element> =
  document.getElementsByClassName("add-items");
console.log("addItemContent", addItemContent);

addItemContent[0].append(paragraph);

//remove element
const spanEl: HTMLSpanElement = document.getElementsByTagName("span")[0];
spanEl.remove();

//add event listener on keyboard press
document.addEventListener("keypress", (event: KeyboardEvent) => {
  console.log("Key Pressed", event.key);
});
