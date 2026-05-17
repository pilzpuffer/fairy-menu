import "./style.css";

import { flowerStorm, replant } from "./flowers.js";
import { menuDisplay } from "./menu.js";
import { ritualDisplay } from "./ritual.js";
import { homeDisplay } from "./home.js";

import flowerCrownImage from "./assets/img/flowerCrown.svg";
import flyingFairyImage from "./assets/img/fairyFlying.svg";
import fairyRunningImage from "./assets/img/fairyRunning.svg";
import fairyLyingImage from "./assets/img/fairyLying.svg";
import longFlowerImage from "./assets/img/longFlower.png"

window.addEventListener("load", function() {
    let content = document.querySelector("#content");
    let allContent = document.querySelector("#allContent");
    flowerStorm();

    window.addEventListener("resize", function() {
        if (typeof screen.orientation !== 'undefined' && window.innerWidth >= 800) {
            replant();
        }  
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

    let longFlower = document.createElement("img");
    longFlower.src = longFlowerImage;
    longFlower.id = "flower";

    let longFlower2 = document.createElement("img");
    longFlower2.src = longFlowerImage;
    longFlower2.id = "flower2";


    navigationSection.appendChild(flowerCrown);
    navigationSection.appendChild(flyingFay);
    // allContent.appendChild(runningFay);
    allContent.appendChild(lyingFay);

    let navigation = {
        home: homeDisplay,
        menu: menuDisplay,
        ritual: ritualDisplay 
    }

    let allMenuButtons = document.querySelectorAll("nav > button");

    allMenuButtons.forEach((button) => {
        let menuMove = document.querySelector("#menu");
        let ritualMove = document.querySelector("#ritual");

        button.addEventListener('click', function(event) {
            replant();
            event.target.classList.add("hidden");
            title.textContent = event.target.textContent;

            let nonActiveMenuItems = [ ...allMenuButtons ].filter( button => button != event.target );
            nonActiveMenuItems.forEach((item) => item.classList.remove("hidden"));

            content.replaceChildren(longFlower, longFlower2, runningFay);
            navigation[`${event.target.id}`](); 

            if (event.target.id === "home") {
                menuMove.style.gridColumn = 1;
                menuMove.style.gridRow = 1;
                ritualMove.style.gridColumn = 3;
                ritualMove.style.gridRow = 1;
            } else if (event.target.id === "ritual") {
                menuMove.style.gridColumn = 3;
                menuMove.style.gridRow = 1;
            } else {
                menuMove.style.gridColumn = "";
                menuMove.style.gridRow = "";
                ritualMove.style.gridColumn = "";
                ritualMove.style.gridRow = "";
            }
        })
    })

    document.getElementById('home').click();
})