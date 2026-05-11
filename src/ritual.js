import crystalBallImage from "./assets/img/crystalBall.png";

let ritualDisplay = function() {

    let content = document.querySelector("#content");

    let crystalBall = document.createElement("img");
    crystalBall.src = crystalBallImage;
    crystalBall.id = 'ball';

    let upperRitualTextBlock = document.createElement("div");
    upperRitualTextBlock.classList.add("ritual-text");
    let bottomRitualTextBlock = document.createElement("div");
    bottomRitualTextBlock.classList.add("ritual-text");

    let addLine = function(text) {
        let newLine = document.createElement("div");
        newLine.textContent = text;
        upperRitualTextBlock.appendChild(newLine);
    }

    addLine("Дозвольте кулі пророцтв зазирнути у вашу долю та обрати смак цієї магічної ночі.");
    content.appendChild(upperRitualTextBlock);
    content.appendChild(crystalBall);
    content.appendChild(bottomRitualTextBlock);

}

export { ritualDisplay };