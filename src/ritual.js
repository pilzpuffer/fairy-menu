import crystalBallImage from "./assets/img/crystalBall.png";

let ritualDisplay = function() {

    let content = document.querySelector("#content");

    let ballHolder = document.createElement("div");
    ballHolder.classList.add("ball-block");

    let crystalBall = document.createElement("img");
    crystalBall.src = crystalBallImage;
    crystalBall.id = 'ball';

    let upperRitualTextBlock = document.createElement("div");
    upperRitualTextBlock.classList.add("ritual-text");
    let bottomRitualTextBlock = document.createElement("div");
    bottomRitualTextBlock.classList.add("ritual-text");

    let places = {
        upper: upperRitualTextBlock,
        ball: ballHolder,
        lower: bottomRitualTextBlock
    }

    let addLine = function(text, place) {
        let newLine = document.createElement("div");
        

        if (place === "ball") {
            newLine.classList.add("ball-text");

            let divideToWord = text.split("");
            for (let i = 0; i < divideToWord.length; i++) {
                let word = document.createElement("span");
                word.textContent = divideToWord[i];
                word.style.animationDelay = `${1+i}s`;
                newLine.appendChild(word);
            }
        } else {
            newLine.textContent = text;
        }
        places[`${place}`].appendChild(newLine);
    }

    addLine("Дозвольте кулі пророцтв зазирнути у вашу долю та обрати смак цієї магічної ночі.", "upper");
    addLine("balling.", "ball");
    content.appendChild(upperRitualTextBlock);
    ballHolder.appendChild(crystalBall);
    content.appendChild(ballHolder);
    content.appendChild(bottomRitualTextBlock);

}

export { ritualDisplay };