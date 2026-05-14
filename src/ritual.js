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
            let wordOne = document.createElement("div");
            let wordTwo = document.createElement("div");
            let divideToLetter = text.split("");
            let letter;
            for (let i = 0; i < divideToLetter.length; i++) {
                if (divideToLetter[i] !== " ") {
                    letter = document.createElement("span");
                    letter.textContent = divideToLetter[i];
                    letter.style.animationDelay = `${0+(0.2*i)}s`;

                    if (divideToLetter.indexOf(" ") > i) {
                        wordOne.appendChild(letter);
                    } else {
                        wordTwo.appendChild(letter);
                    }

                    newLine.appendChild(wordOne);
                    newLine.appendChild(wordTwo);
                }
            }
        } else {
            newLine.textContent = text;
        }
        places[`${place}`].appendChild(newLine);
    }

    let allCocktailNames = ["Faerie Wine", "Beltane Spark", "Summer Court", "Lavender Moon", "Fairy Ring", "Wild Hunt"];

    crystalBall.addEventListener("click", function() {
        let ballText = document.querySelector(".ball-text");

        let getDrink = function() {
            return allCocktailNames[Math.floor(Math.random() * allCocktailNames.length)];
        }

        if (ballText === null) {
            addLine(getDrink(), "ball");
        } else {
            ballHolder.replaceChildren(crystalBall);
            addLine(getDrink(), "ball");
        }
    })

    addLine("Дозвольте кулі пророцтв зазирнути у вашу долю та обрати смак цієї магічної ночі.", "upper");
    content.appendChild(upperRitualTextBlock);
    ballHolder.appendChild(crystalBall);
    content.appendChild(ballHolder);
    content.appendChild(bottomRitualTextBlock);

}

export { ritualDisplay };