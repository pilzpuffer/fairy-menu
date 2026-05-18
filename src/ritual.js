import crystalBallImage from "./assets/img/crystalBall.svg";

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
    bottomRitualTextBlock.id = 'fortune';

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
    let faerieFortunes = ['faerie test', 'faerie test2']
    let beltaneFortunes = ['beltane test', 'beltane test2']
    let summerFortunes = ['summer test', 'summer test2']
    let lavenderFortunes = ['lavender test', 'lavender test2']
    let fairyFortunes = ['Кажуть, якщо опинитися в колі фей, вечір обов’язково запам’ятається. Схоже, це саме твій випадок.', 'Якщо цієї ночі феї й залишили десь своє чарівне коло, то ти щойно опинлась в самому його центрі. А це завжди до чогось дуже приємного.', 'Якщо навколо раптом стало трохи чарівніше, не дивуйся. Феї вже взяли тебе під свою опіку.', 'Потрапити в коло фей — добра прикмета. Особливо для тих, хто любить приємні несподіванки.']
    let wildFortunes = ['wild test', 'wild test2']
    
    let cocktailFortune = {
        faerie: faerieFortunes,
        beltane: beltaneFortunes,
        summer: summerFortunes,
        lavender: lavenderFortunes,
        fairy: fairyFortunes,
        wild: wildFortunes
    }
    crystalBall.addEventListener("click", function() {
        let ballText = document.querySelector(".ball-text");

        let getDrink = function() {
            return allCocktailNames[Math.floor(Math.random() * allCocktailNames.length)];
        }

        let currentDrink = getDrink();

        if (ballText === null) {
            addLine(currentDrink, "ball");
        } else {
            ballHolder.replaceChildren(crystalBall);
            addLine(currentDrink, "ball");
        }
        
        let drinkID = currentDrink.toLowerCase().split(" ")[0];
        let fortuneVariety = cocktailFortune[drinkID].length;
        

        let fortuneCheck = document.querySelector("#fortune");
        bottomRitualTextBlock.textContent = cocktailFortune[drinkID][Math.floor(Math.random() * fortuneVariety)]; 

        if (fortuneCheck === null) {
            content.appendChild(bottomRitualTextBlock);
        }
    })

    addLine("Дозвольте кулі пророцтв зазирнути у вашу долю та обрати смак цієї магічної ночі.", "upper");
    content.appendChild(upperRitualTextBlock);
    ballHolder.appendChild(crystalBall);
    content.appendChild(ballHolder);
}

export { ritualDisplay };