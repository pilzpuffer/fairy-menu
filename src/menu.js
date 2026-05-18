import drinkIcon from "./assets/img/drink.svg"
import macaronIcon from "./assets/img/macaron.svg";

let menuDisplay = function() {
    let content = document.querySelector("#content");

    let places;

    let menuBlock = document.createElement("nav");
    menuBlock.classList.add("menu-nav");

    let drinksButton = document.createElement("button");
    let drinkImage = document.createElement("img");
    drinkImage.src = drinkIcon;
    drinksButton.textContent = "Drinks";
    drinksButton.append(drinkImage);
    drinksButton.id = "drinks";

    let foodButton = document.createElement("button");
    foodButton.textContent = "Food";
    foodButton.id = "food";
    let foodImage = document.createElement("img");
    foodImage.src = macaronIcon;
    foodButton.append(foodImage);
    
    menuBlock.appendChild(drinksButton);
    menuBlock.appendChild(foodButton);

    content.appendChild(menuBlock);

    if ( typeof screen.orientation !== 'undefined' ) {
        drinksButton.addEventListener("mouseover", function() {
            drinkImage.classList.add("rotate-forward");
        })

        drinksButton.addEventListener("mouseout", function() {
            drinkImage.classList.remove("rotate-forward");
        })

        foodButton.addEventListener("mouseover", function() {
            foodImage.classList.add("rotate-backward");
        })

        foodButton.addEventListener("mouseout", function() {
            foodImage.classList.remove("rotate-backward");
        })
    } 
    

    let setUpItem = function(place, title, ingredients) {
        let item = document.createElement("div");
        item.classList.add("item");
        
        let itemTitle = document.createElement("div");
        let formatTitle = function() {
            let processedTitle = title.toLowerCase().split(" ");
            for (let i = 0; i < processedTitle.length; i++) {
                processedTitle[i] = processedTitle[i].charAt(0).toUpperCase() + processedTitle[i].substring(1);
            }
            return processedTitle.join(" ")
        }
        

        if (ingredients === "") {
            item.classList.add("title-category");
            itemTitle.textContent = formatTitle(); 
        } else {
            itemTitle.textContent = formatTitle();
            itemTitle.classList.add("title");
        }
        

        let itemDescription = document.createElement("div");
        itemDescription.classList.add("description");
        itemDescription.textContent = ingredients.toLowerCase();
        itemDescription.style.display = "none";

        item.addEventListener("click", function() {
            let desc = this.lastChild;

            if (desc.textContent !== "") {   
                if (desc.style.display !== "none") {
                    
                    item.style.gridTemplateRows = "4rem 0rem";
                    setTimeout(function() {desc.style.display = "none";}, 150);
                } else {
                    
                    item.style.gridTemplateRows = "4rem 3rem";
                    setTimeout(function() {desc.style.display = "inline";}, 150);
                }
            }
            

        })
        
        item.appendChild(itemTitle);
        item.appendChild(itemDescription);

        places[`${place}`].appendChild(item);
    }

    let drinksMenu = function() {
        let wine = document.createElement("div");
        let rum = document.createElement("div");
        let gin = document.createElement("div");

        places = {
            wineNode: wine,
            rumNode: rum,
            ginNode: gin
        };

        setUpItem("wineNode", "wine", "");
        setUpItem("wineNode", "Faerie Wine", "ігристе вино, Parfait Amour, бузиновий сироп");
        setUpItem("wineNode", "Beltane Spark", "ігристе вино,  грушевий ром, лавандовий сироп");

        setUpItem("rumNode", "rum", "");
        setUpItem("rumNode", "Summer Court", "грушевий ром, сік, бузиновий сироп, лаймовий сік");
        setUpItem("rumNode", "Lavender Moon", "грушевий ром, лавандовий сироп, лаймовий сік, газована вода");
        
        setUpItem("ginNode", "gin", "");
        setUpItem("ginNode", "Fairy Ring", "джин, бузиновий сироп, лаймовий сік, тонік");
        setUpItem("ginNode", "Wild Hunt", "джин, Parfait Amour, блю кюрасао, лаймовий сік");
        
        content.append(wine, rum, gin);
    }

    let foodMenu = function() {

        let appetizers = document.createElement("div");
        let entrees = document.createElement("div");
        let desserts = document.createElement("div");

        places = {
            appNode: appetizers,
            entNode: entrees,
            desNode: desserts
        };

        setUpItem("appNode", "appetizers", "");
        setUpItem("appNode", "Summer Nectar Tartlets", "Курка, нектарин, авокадо, салатне листя, червона цибуля, кунжут");
        setUpItem("appNode", "Fairy Garden Eggs", "Ніжна жовткова начинка, гірчиця, зелень, їстівні квіти");
        setUpItem("appNode", "Wildflower Rolls", "Креветки, крабові палички, огірок, морква, болгарський перець, зелень");
        setUpItem("appNode", "Salmon Meadow", "Слабосолений лосось, крем-сир, каперси, зелень");
        setUpItem("appNode", "Forest Hummus", "Нут, тахіні, лимон, оливкова олія");
        setUpItem("appNode", "Emerald Salmon Salad", "Слабосолений лосось, огірок, редис, маслини, салатний мікс, мікрогрін");
        setUpItem("appNode", "Fairy Swords", "Асорті шпажок від шефа");

        setUpItem("entNode", "entrees", "");
        setUpItem("entNode", "Creamy Cottage Potatoes", "Вершкова картопля, бекон, карамелізована цибуля, сир, зелень");
        setUpItem("entNode", "Golden Fried Chicken", "Смажене куряче стегно, фірмові соуси");

        setUpItem("desNode", "desserts", "");
        setUpItem("desNode", "Honey Pear Puff", "Камамбер, груша, мед, листкове тісто, горіхи");
        setUpItem("desNode", "Flowery Marshmallows", "Авторський яблучний зефір");
        setUpItem("desNode", "Celebration Cake", "Торт");

        content.append(appetizers, entrees, desserts);
    }

    let menuOptions = {
        drinks: drinksMenu,
        food: foodMenu
    }

    let previousTab = [];

    let menuViews = document.querySelectorAll(".menu-nav > button");
    let longFlower = document.querySelector("#flower");
    let longFlower2 = document.querySelector("#flower2");
    let run = document.querySelector("#run");

    let renewMenu = function() {
        content.replaceChildren(menuBlock, run, longFlower, longFlower2);
        menuOptions[`${event.target.id}`]();
    }
        menuViews.forEach((button) => {
            button.addEventListener("click", function(event) {
                previousTab.push(event.target.id);

                if (previousTab.length >= 2) {
                    if (previousTab[previousTab.length-2] !== previousTab[previousTab.length-1]) {
                        renewMenu();
                    } 
                } else {
                    renewMenu();
                } 
            })
    })
}

export { menuDisplay };