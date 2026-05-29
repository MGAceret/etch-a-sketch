function test() {
for (let i=0; i < 16; i++) {
    for (let i=0; i < 16; i++) {
        let display = document.querySelector(".gridDisplay");
        let gridDiv = document.createElement("div");
        display.appendChild(gridDiv)
        gridDiv.innerText = "lorem"
        console.log("A div has been created")
    }
}
}
