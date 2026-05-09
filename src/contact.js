let contactDisplay = function() {

    //add a crystal ball which will show a random fortune - add about 14 variants for variety, maybe should be styled ad taro cards?

    let content = document.querySelector("#content");

    let contactBlock = document.createElement("div");
    contactBlock.classList.add("contact-text");

    let addLine = function(text) {
        let newLine = document.createElement("div");
        newLine.textContent = text;

        if ((text.includes(":") && !text.includes(" ")) || (text.includes(":") && state.vampire === true)) {
            newLine.classList.add("contact-title");
        } else if (text.includes("announce") || text.includes("consent") || text.includes("admitted")) {
            newLine.classList.add("rules");
        } else if (text.includes("+")) {
            newLine.classList.add("phone");
        }

        contactBlock.appendChild(newLine);
    }

    let normalText = function() {
        addLine("Test text to distinguish contacts");
        addLine("This is a second line");

        // content.appendChild(contactBlock); <-still deciding if I want to keep this visual highlight for the alt menu
        // contactBlock.addEventListener("mouseover", function() {
        // if (event.target === contactBlock.firstChild) {
        //     contactBlock.firstChild.style.fontWeight = "bold";
        // } else {
        //     contactBlock.firstChild.style.fontWeight = ""
        // }
    }

    normalText();
    content.appendChild(contactBlock);

}

export { contactDisplay };