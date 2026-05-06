import bloodIcon from "./assets/img/blood.svg";

let state = {
        vampire: false
    };

let contactDisplay = function() {

    let content = document.querySelector("#content");

    let contactBlock = document.createElement("div");
    contactBlock.classList.add("contact-text");

    let addLine = function(text) {
        let newLine = document.createElement("div");
        newLine.textContent = text;

        if ((text.includes(":") && !text.includes(" ")) || (text.includes(":") && state.vampire === true)) {
            newLine.classList.add("contact-title");
        } else if (text.includes("announce") || text.includes("consent") || text.includes("admitted")) {
            newLine.classList.add("rules");
        } else if (text.includes("+")) {
            newLine.classList.add("phone");
        }

        if (newLine.classList.contains("rules")) {
            let bloodDot = document.createElement("img");
            bloodDot.src = bloodIcon;

            newLine.append(bloodDot)
        }

        contactBlock.appendChild(newLine);
    }

    let normalText = function() {
        addLine("Come find us when the evening settles in.");

        addLine("Address:");
        addLine("13 Nightfall Street, Lower District");

        addLine("Hours:");
        addLine("Monday - Thursday: 6:00 PM - 3:00 AM");
        addLine("Friday - Sunday: 6:00 PM - 4:00 AM");

        addLine("Reservations:");
        addLine("reservations@thelastdrop.com");
        addLine("+1 (555) 013-6666");
        addLine("Walk in, or call ahead - whichever suits your evening");

        content.appendChild(contactBlock);
        contactBlock.addEventListener("mouseover", function() {
        if (event.target === contactBlock.firstChild) {
            contactBlock.firstChild.style.fontWeight = "bold";
        } else {
            contactBlock.firstChild.style.fontWeight = ""
        }
    })
    }

    let vampireText = function() {
        addLine("We await your arrival.");

        addLine("Address:");
        addLine("13 Nightfall Street, Lower District");

        addLine("Hours:");
        addLine("From sunset until the first light of dawn");

        addLine("House Protocol:");
        addLine("Guests are expected to announce themselves");
        addLine("No indulgence without consent of the House");
        addLine("Those who pursue the hunt will not be admitted");

        addLine("The night is yours to enjoy.");

        content.appendChild(contactBlock);
    }

    state.vampire ? vampireText() : normalText();

    contactBlock.firstChild.addEventListener("click", function() {
        contactBlock.replaceChildren();
        state.vampire = true;
        vampireText();
    })
}

export { contactDisplay, state };