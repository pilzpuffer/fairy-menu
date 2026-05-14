import flowerImage from "./assets/img/flower.svg";
import leafImage from "./assets/img/leaf.svg";

function debounce(func, wait, immediate) {
	let timeout;
	return function() {
		let context = this, args = arguments;
		let later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		let callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

let replant = debounce(function() {
    let allFlowers = document.querySelectorAll(".plant");
    
    allFlowers.forEach((plant) => {
        plant.remove()
    })
    flowerStorm();
}, 150);

let flowerStorm = function () {
    let plantVariety =[
                        ["mirror"], 
                        ["shuffleL", "shuffleR", "slideL", "slideR"], 
                        ["jump", "fly", "dig", "tunnel"], 
                        ["tipsy", "boozy", "drunk", "confused", "disoriented", "lost"], 
                        ["wisp", "ghost", "ghoul"], 
                        ["fairy", "dwarf", "giant", "goliath"]
                    ];

    for (let n = 0; n < 30; n++) {
        let body = document.querySelector("body");

        let plant = document.createElement("img");
        plant.src = Math.random() > 0.49 ? flowerImage : leafImage;
        plant.classList.add("plant");

        function planting() {
            let maxX = innerWidth;
            let maxY = body.scrollHeight * 0.91;
            let x = Math.random() * maxX;
            let y = Math.random() * maxY;

            let ball = document.querySelector("#ball")

            if (ball !== null) {
                let ballSpace = ball.getBoundingClientRect();

                while (x >= ballSpace.left && x <= ballSpace.right) {
                    x = Math.random() * maxX;
                }

                while (y >= ballSpace.top && y <= ballSpace.bottom) {
                    y = Math.random() * maxY;
                }
            }

            plant.style = `left: ${x}px; top: ${y}px;`;
            body.appendChild(plant)
        }

        let categorySelect;
        let chance = Math.random();
        let selectVariant = function() {
            categorySelect = plantVariety[Math.floor(Math.random() * plantVariety.length)];
            return categorySelect[Math.floor(Math.random() * categorySelect.length)];
        }

        let currentPick = selectVariant();

        let duplicatePrevent = function() {
            let currTrait = [];
            let newTrait = [];

            while (newTrait.length < 2 && currTrait.length < 2 ) {

                for ( let i = 0; i < plantVariety.length; i++ ) {
                    for ( let j = 0; j < plantVariety[i].length; j++ ) {
                        if ( plantVariety[i][j] === plant.classList[1] ) {
                            currTrait = [i, j];
                        }

                        if ( plantVariety[i][j] === `${currentPick}` ) {
                            newTrait = [i, j];
                        }
                    }
            }

                if ( newTrait.length === 2 && currTrait.length === 2 ) {
                    
                    if ( newTrait.toString() === currTrait.toString() || newTrait[0] === currTrait[0] ) {
                        currTrait.length = 0;
                        newTrait.length = 0;
                        currentPick = selectVariant();
                        duplicatePrevent();
                    } else {
                        plant.classList.add(`${currentPick}`);
                    }
                }
            }
        }   
        
        if ( chance > 0.4) {
            plant.classList.add(currentPick);
        }

        if ( chance > 0.7) {
            duplicatePrevent();
        } 

        planting();
    } 
}

export { flowerStorm, replant };