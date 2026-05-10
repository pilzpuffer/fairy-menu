import "./style.css";

import { flowerStorm, replant } from "./flowers.js";
import { menuDisplay } from "./menu.js";
import { contactDisplay } from "./contact.js";
import { homeDisplay } from "./home.js";

import flowerCrownImage from "./assets/img/flowerCrown.svg";
import flyingFairyImage from "./assets/img/fairyFlying.svg";
import fairyRunningImage from "./assets/img/fairyRunning.svg";
import fairyLyingImage from "./assets/img/fairyLying.svg";

window.addEventListener("load", function() {
    let content = document.querySelector("#content");
    flowerStorm();

    window.addEventListener("resize", function() {
        replant();
    })

    let title = document.querySelector("#center-title");

    let navigationSection = document.querySelector(".main-nav");

    let flowerCrown = document.createElement("img");
    flowerCrown.src = flowerCrownImage;
    flowerCrown.id = "crown";

    let flyingFay = document.createElement("img");
    flyingFay.src = flyingFairyImage;
    flyingFay.id = "fly";

    let runningFay = document.createElement("img");
    runningFay.src = fairyRunningImage;
    runningFay.id = "run";

    let lyingFay = document.createElement("img");
    lyingFay.src = fairyLyingImage;
    lyingFay.id = "lie";

    navigationSection.appendChild(flowerCrown);
    navigationSection.appendChild(flyingFay);

    let navigation = {
        home: homeDisplay,
        menu: menuDisplay,
        ritual: contactDisplay 
    }

    let allMenuButtons = document.querySelectorAll("nav > button");

    allMenuButtons.forEach((button) => {
        let menuMove = document.querySelector("#menu");
        let contactMove = document.querySelector("#ritual");

        button.addEventListener('click', function(event) {

            event.target.classList.add("hidden");
            title.textContent = event.target.textContent;

            let nonActiveMenuItems = [ ...allMenuButtons ].filter( button => button != event.target );
            nonActiveMenuItems.forEach((item) => item.classList.remove("hidden"));

            content.replaceChildren(runningFay, lyingFay);
            navigation[`${event.target.id}`](); 

            if (event.target.id === "home") {
                menuMove.style.gridColumn = 1;
                menuMove.style.gridRow = 1;
                contactMove.style.gridColumn = 3;
                contactMove.style.gridRow = 1;
            } else if (event.target.id === "ritual") {
                menuMove.style.gridColumn = 3;
                menuMove.style.gridRow = 1;
            } else {
                menuMove.style.gridColumn = "";
                menuMove.style.gridRow = "";
                contactMove.style.gridColumn = "";
                contactMove.style.gridRow = "";
            }
        })
    })

    document.getElementById('home').click();
    content.appendChild(runningFay);
    content.appendChild(lyingFay);

    
})