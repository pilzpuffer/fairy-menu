import bloodIcon from "./assets/img/blood.svg";
import fangsIcon from "./assets/img/fangs.svg";

let menuDisplay = function() {
    let content = document.querySelector("#content");

    let menuBlock = document.createElement("nav");
    menuBlock.classList.add("menu-nav");
    
    let bloodButton = document.createElement("button");
    bloodButton.textContent = "blood";
    bloodButton.id = "blood";
    let bloodImage = document.createElement("img");
    let secondDrop = document.createElement("img");
    secondDrop.classList.add("droplet");
    bloodImage.src = bloodIcon;
    secondDrop.src = bloodIcon;
    bloodButton.append(bloodImage);
    bloodButton.append(secondDrop);

    let fleshButton = document.createElement("button");
    let fleshImage = document.createElement("img");
    fleshImage.src = fangsIcon;
    fleshButton.textContent = "flesh";
    fleshButton.append(fleshImage);
    fleshButton.id = "flesh";
    
    menuBlock.appendChild(bloodButton);
    menuBlock.appendChild(fleshButton);

    content.appendChild(menuBlock);

    let drinksMenu = function() {
        let setUpDrink = function(title, ingredients) {
            let drinkItem = document.createElement("div");
            drinkItem.classList.add("item");
            
            let drinkTitle = document.createElement("div");
            drinkTitle.classList.add("title");
            drinkTitle.textContent = title.toUpperCase();

            let drinkDescription = document.createElement("div");
            drinkDescription.classList.add("description");
            drinkDescription.textContent = ingredients;
            drinkDescription.style.display = "none";

            drinkTitle.addEventListener("click", function() {
                let content = this.nextElementSibling;
                let parent = this.parentElement;
                if (content.style.display !== "none") {
                    
                    parent.style.gridTemplateRows = "4rem 0rem";
                    setTimeout(function() {content.style.display = "none";}, 150);
                } else {
                    
                    parent.style.gridTemplateRows = "4rem 1.3rem";
                    setTimeout(function() {content.style.display = "inline";}, 150);
                }

            })
            
            drinkItem.appendChild(drinkTitle);
            drinkItem.appendChild(drinkDescription);

            content.appendChild(drinkItem);
        }

        let normalDrinks = function() {
            setUpDrink("prosecco blood shot", "Prosecco, Aperol, grenadine");
            setUpDrink("vampire's kiss", "Vodka, grenadine, cranberry juice, Prosecco");
            setUpDrink("ruby flash", "Aperol, cranberry juice, tonic water");
            setUpDrink("bloody mary", "Vodka, tomato juice, spices");
            setUpDrink("graveyard rose", "Pink gin, pomegranate juice, tonic water" );
            setUpDrink("black daiquiri", "Rum, lemon, simple syrup");
            setUpDrink("moonlight bite", "Rum, mint, lime, grenadine");
        }

        normalDrinks();
    }

    let foodMenu = function() {
        let setUpDish = function(category, [...dishes]) {
            let foodSection = document.createElement("div");
            foodSection.classList.add("item");
            
            let foodCategory = document.createElement("div");
            foodCategory.classList.add("title");
            foodCategory.textContent = category.toUpperCase();

            foodSection.appendChild(foodCategory);

            [...dishes].forEach((foodItem) => {
                let foodList = document.createElement("div");
                foodList.classList.add("description");
                foodList.textContent = foodItem;
                foodSection.appendChild(foodList);
            })        
            
            content.appendChild(foodSection);
        }

        let normalFood = function() {
            setUpDish("appetizers", ["Roasted beet carpaccio with whipped goat cheese", "Prosciutto-wrapped figs with balsamic glaze", "Mini tartlets with caramelized onions and brie", "Mushroom vol-au-vents"]);
            setUpDish("entrees", ["Eggplant roulade with ricotta and tomato confit", "Red wine braised beef with rosemary potatoes", "Seared duck breast with cherry sauce", "Dark cherry chicken salad with goat cheese", "Truffle cream fettuccine with wild mushrooms"]);
            setUpDish("desserts", ["Black Forest gâteau", "Red Velvet cheesecake", "Dark chocolate raspberry torte", "Cherry mascarpone tart"]);
        }
        
        normalFood();
    }

    let menuOptions = {
        blood: drinksMenu,
        flesh: foodMenu
    }

    let menuViews = document.querySelectorAll(".menu-nav > button");
        menuViews.forEach((button) => {
            button.addEventListener("click", function(event) {
                content.replaceChildren(menuBlock);
                menuOptions[`${event.target.id}`]();
            })
    })
}

export { menuDisplay };