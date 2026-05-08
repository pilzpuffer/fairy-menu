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