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
    let faerieFortunes = ['Феї люблять усе яскраве. Якщо вони обрали цей келих для тебе, значить сьогодні ти сяєш.', 'Феї дістали своє найефектніше вино. Очевидно, у них на тебе великі плани.', 'Кажуть, у фей є особливе вино для тих, кому цього вечора необхідні їх крихітні чари.', 'У чарівному світі саме так виглядає офіційне запрошення дозволити собі трохи більше, ніж зазвичай.', 'Бузина і бульбашки — класичний спосіб фей сказати: "Розслабся, далі буде цікавіше".']
    let beltaneFortunes = ['Кажуть, у ніч Белтейну старі сумніви згорають швидше, ніж сухі гілки у багатті.', 'Якщо вогні Белтейну вже запалали, значить настав час відпустити зайве й залишити лише те, що справді приносить радість', 'У ніч Белтейну легко знайти те, що давно шукалося. Іноді — річ. Іноді — правильну компанію.']
    let summerFortunes = ['Феї Літнього Двору посміхаються найдружелюбніше. Саме тому їм так легко довіритися.', 'На смак усе здається надто легким, щоб бути серйозним. І саме в цьому криється магія.', 'Якщо сьогодні все здається занадто простим і приємним, можливо, феї вже непомітно взяли ситуацію під контроль.', 'Феї Літнього Двору посміхаються найдружелюбніше. Саме тому їм так легко довіритися.']
    let lavenderFortunes = ['Всесвіт офіційно дозволяє тобі сьогодні ні про що не перейматися. Принаймні найближчі кілька ковтків.', 'Якщо тобі випав Lavender Moon, значить сьогодні все складеться напрочуд легко. І навіть те, про що ти трохи хвилювалася, виявиться дрібницею.', 'Якщо над тобою зійшов лавандовий місяць, значить настав час розслабитися. Усе хороше вже рухається в твоєму напрямку.', 'Кажуть, під лавандовим місяцем навіть випадкові рішення виявляються правильними.']
    let fairyFortunes = ['Кажуть, якщо опинитися в колі фей, вечір обов’язково запам’ятається. Схоже, це саме твій випадок.', 'Цієї ночі феї залишили своє чарівне коло у цьому лісі, і ти щойно опинилась в самому його центрі. А це завжди веде до чогось дуже цікавого.', 'Якщо навколо раптом стало трохи чарівніше, не дивуйся. Феї вже взяли тебе під свою опіку.', 'Потрапити в коло фей — добра прикмета. Особливо для тих, хто любить приємні несподіванки.']
    let wildFortunes = ['Якщо келих став темнішим, а думки — сміливішими, значить Дике Полювання вже десь поруч.', 'Дике Полювання не обирає випадкових супутників. І цього разу їх вибір упав саме на тебе.', 'Магічна куля радить: якщо ніч кличе в пригоди, не варто робити вигляд, що ти цього не почув.', 'Якщо десь уночі чути тупіт копит, краще не озиратися. Або озирнутися — але вже з келихом у руці.']
    
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