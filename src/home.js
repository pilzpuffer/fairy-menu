let homeDisplay = function() {
    let content = document.querySelector("#content");

    let homeBlock = document.createElement("div");
    homeBlock.classList.add("home-text");

    let addLine = function(text) {
        let newLine = document.createElement("div");
        newLine.textContent = text;

        homeBlock.appendChild(newLine);
    }

    addLine("This is a home page.");
    addLine("second line of home page?");
    addLine("go check out the menu!");

    homeBlock.addEventListener("mouseover", function(event) {
        if (event.target === homeBlock.lastChild) {
            homeBlock.lastChild.style.fontWeight = "bold";
        } else {
            homeBlock.lastChild.style.fontWeight = ""
        }
    })

    homeBlock.lastChild.addEventListener("click", function() {
        document.getElementById('menu').click();
    })

    content.appendChild(homeBlock);  
}

export { homeDisplay };