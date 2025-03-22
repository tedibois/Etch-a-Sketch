const div1 = document.createElement("div");
const div2 = document.createElement("div");
div2.textContent = "hello";
div2.style.backgroundColor = "white"
const div3 = document.createElement("div");
const div4 = document.createElement("div"); // Fixed duplicate declaration
const div5 = document.createElement("div");
const div6 = document.createElement("div");
const div7 = document.createElement("div");
const div8 = document.createElement("div");
const div9 = document.createElement("div");
const div10 = document.createElement("div");
const div11 = document.createElement("div");
const div12 = document.createElement("div");
const div13 = document.createElement("div");
const div14 = document.createElement("div");
const div15 = document.createElement("div");
const div16 = document.createElement("div");

const divContent = document.createElement("div");
divContent.classList.add("content");

// Append all created divs to divContent
[
    div1, div2, div3, div4, div5, div6, div7, div8,
    div9, div10, div11, div12, div13, div14, div15, div16
].forEach(div => divContent.appendChild(div));

// Append divContent to the body (or another container)
document.body.appendChild(divContent);
