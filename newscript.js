let newEle = document.createElement("div");

document.body.appendChild(newEle);

const update = document.querySelector("div");

update.style.width = "200px";
update.style.cssText = "height:200px;background:yellow;";
update.textContent = "Hello , i am div";