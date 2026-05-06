import batImage from "./assets/img/bat.svg";

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

let batRenew = debounce(function() {
    let allBats = document.querySelectorAll(".bat");
    
    allBats.forEach((bat) => {
        bat.remove()
    })
    batCloud();
}, 150);

let batCloud = function () {
    let batVariety =[
                        ["mirror"], 
                        ["shuffleL", "shuffleR", "slideL", "slideR"], 
                        ["jump", "fly", "dig", "tunnel"], 
                        ["tipsy", "boozy", "drunk", "confused", "disoriented", "lost"], 
                        ["wisp", "ghost", "ghoul"], 
                        ["fairy", "dwarf", "giant", "goliath"]
                    ];

    for (let n = 0; n < 42; n++) {
        let body = document.querySelector("body");

        let bat = document.createElement("img");
        bat.src = batImage;
        bat.classList.add("bat");

        function placeBat() {
            let maxX = innerWidth;
            let maxY = body.scrollHeight * 0.94;
            let x = Math.random() * maxX;
            let y = Math.random() * maxY;

            bat.style = `left: ${x}px; top: ${y}px;`;
            body.appendChild(bat)
        }

        let categorySelect;
        let chance = Math.random();
        let selectVariant = function() {
            categorySelect = batVariety[Math.floor(Math.random() * batVariety.length)];
            return categorySelect[Math.floor(Math.random() * categorySelect.length)];
        }

        let currentPick = selectVariant();

        let duplicatePrevent = function() {
            let currTrait = [];
            let newTrait = [];

            while (newTrait.length < 2 && currTrait.length < 2 ) {

                for ( let i = 0; i < batVariety.length; i++ ) {
                    for ( let j = 0; j < batVariety[i].length; j++ ) {
                        if ( batVariety[i][j] === bat.classList[1] ) {
                            currTrait = [i, j];
                        }

                        if ( batVariety[i][j] === `${currentPick}` ) {
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
                        bat.classList.add(`${currentPick}`);
                    }
                }
            }
        }   
        
        if ( chance > 0.4) {
            bat.classList.add(currentPick);
        }

        if ( chance > 0.7) {
            duplicatePrevent();
        } 

        placeBat();
    } 
}

export { batCloud, batRenew };