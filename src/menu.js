import bloodIcon from "./assets/img/blood.svg";
import fangsIcon from "./assets/img/fangs.svg";

let menuDisplay = function() {
    let content = document.querySelector("#content");

    let places;

    let menuBlock = document.createElement("nav");
    menuBlock.classList.add("menu-nav");
    
    let bloodButton = document.createElement("button");
    bloodButton.textContent = "drinks";
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
    fleshButton.textContent = "food";
    fleshButton.append(fleshImage);
    fleshButton.id = "flesh";
    
    menuBlock.appendChild(bloodButton);
    menuBlock.appendChild(fleshButton);

    content.appendChild(menuBlock);

    let setUpItem = function(place, title, ingredients) {
        let item = document.createElement("div");
        item.classList.add("item");
        
        let itemTitle = document.createElement("div");
        if (!places[`${place}`].hasChildNodes() && ingredients === "") {
            item.classList.add("title-category");
            itemTitle.textContent = title; 
        } else {
            itemTitle.textContent = title.toUpperCase();
            itemTitle.classList.add("title");
        }
        

        let itemDescription = document.createElement("div");
        itemDescription.classList.add("description");
        itemDescription.textContent = ingredients;
        itemDescription.style.display = "none";

        item.addEventListener("click", function() {
            let desc = this.lastChild;

            if (desc.textContent !== "") {   
                if (desc.style.display !== "none") {
                    
                    item.style.gridTemplateRows = "4rem 0rem";
                    setTimeout(function() {desc.style.display = "none";}, 150);
                } else {
                    
                    item.style.gridTemplateRows = "4rem 1.3rem";
                    setTimeout(function() {desc.style.display = "inline";}, 150);
                }
            }
            

        })
        
        item.appendChild(itemTitle);
        item.appendChild(itemDescription);

        places[`${place}`].appendChild(item);
    }

    let drinksMenu = function() {
        places = {
            contentNode: content,
        }

        setUpItem("contentNode", "prosecco blood shot", "Prosecco, Aperol, grenadine");
        setUpItem("contentNode", "vampire's kiss", "Vodka, grenadine, cranberry juice, Prosecco");
        setUpItem("contentNode", "ruby flash", "Aperol, cranberry juice, tonic water");
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
        setUpItem("appNode", "dishName", "something? maybe?");
        setUpItem("entNode", "entrees", "");
        setUpItem("entNode", "entrees", "this is a main dish!");
        setUpItem("desNode", "desserts", "");
        setUpItem("desNode", "dishName", "something sweet!");

        content.append(appetizers, entrees, desserts);


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