function gridCreation() {
    for (let i=0; i < 16; i++) {
        for (let i=0; i < 16; i++) {
            let display = document.querySelector(".gridDisplay");
            let gridDiv = document.createElement("div");
            display.appendChild(gridDiv)
            console.log("A div has been created")
            // For sketching once a grid was mouse hovered
            gridDiv.addEventListener("mouseover", function (){
                gridDiv.style.backgroundColor = 'white';
            });
        }
    }
}
