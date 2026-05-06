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

    let setUpItem = function(title, ingredients) {
        let item = document.createElement("div");
        item.classList.add("item");
        
        let itemTitle = document.createElement("div");
        itemTitle.classList.add("title");
        itemTitle.textContent = title.toUpperCase();

        let itemDescription = document.createElement("div");
        itemDescription.classList.add("description");
        itemDescription.textContent = ingredients;
        itemDescription.style.display = "none";

        item.addEventListener("click", function() {
            let desc = this.lastChild;
            if (desc.style.display !== "none") {
                
                item.style.gridTemplateRows = "4rem 0rem";
                setTimeout(function() {desc.style.display = "none";}, 150);
            } else {
                
                item.style.gridTemplateRows = "4rem 1.3rem";
                setTimeout(function() {desc.style.display = "inline";}, 150);
            }

        })
        
        item.appendChild(itemTitle);
        item.appendChild(itemDescription);

        content.appendChild(item);
    }

    let drinksMenu = function() {
        setUpItem("prosecco blood shot", "Prosecco, Aperol, grenadine");
        setUpItem("vampire's kiss", "Vodka, grenadine, cranberry juice, Prosecco");
        setUpItem("ruby flash", "Aperol, cranberry juice, tonic water");
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
            setUpDish("appetizers", ["Roasted beet carpaccio", "Prosciutto-wrapped figs"]);
            setUpDish("entrees", ["Eggplant roulade with ricotta", "Red wine braised beef", "Seared duck breast"]);
            setUpDish("desserts", ["Black Forest gâteau", "Red Velvet cheesecake"]);
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