import "./style.css";

import { batCloud, batRenew } from "./bats.js";
import { menuDisplay } from "./menu.js";
import { contactDisplay } from "./contact.js";
import { homeDisplay } from "./home.js";

window.addEventListener("load", function() {

    let content = document.querySelector("#content");
    batCloud();

    window.addEventListener("resize", function() {
        batRenew();
    })

    let title = document.querySelector("#center-title");

    let navigation = {
        home: homeDisplay,
        menu: menuDisplay,
        contact: contactDisplay 
    }

    let allMenuButtons = document.querySelectorAll("nav > button");

    allMenuButtons.forEach((button) => {
        let menuMove = document.querySelector("#menu");
        let contactMove = document.querySelector("#contact");

        button.addEventListener('click', function(event) {
            event.target.classList.add("hidden");
            title.textContent = event.target.textContent;

            let nonActiveMenuItems = [ ...allMenuButtons ].filter( button => button != event.target);
            nonActiveMenuItems.forEach((item) => item.classList.remove("hidden"));

            content.replaceChildren();
            navigation[`${event.target.id}`](); 

            if (event.target.id === "home") {
                menuMove.style.gridColumn = 1;
                menuMove.style.gridRow = 1;
                contactMove.style.gridColumn = 3;
                contactMove.style.gridRow = 1;
            } else if (event.target.id === "contact") {
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
})

