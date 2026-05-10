import crystalBallImage from "./assets/img/crystalBall.png";

let ritualDisplay = function() {

    //add a crystal ball which will show a random fortune - add about 14 variants for variety, maybe should be styled ad taro cards?

    let content = document.querySelector("#content");

    let crystalBall = document.createElement("img");
    crystalBall.src = crystalBallImage;
    crystalBall.id = 'ball';

    let contactBlock = document.createElement("div");
    contactBlock.classList.add("contact-text");

    let addLine = function(text) {
        let newLine = document.createElement("div");
        newLine.textContent = text;

        if (text.includes(":") && !text.includes(" ")) {
            newLine.classList.add("contact-title");
        } 

        contactBlock.appendChild(newLine);
    }

    let normalText = function() {
        addLine("Test text to distinguish contacts");
        addLine("This is a second line");
    }

    normalText();
    content.appendChild(crystalBall);
    content.appendChild(contactBlock);

}

export { ritualDisplay };