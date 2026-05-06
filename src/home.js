let homeDisplay = function() {
    let content = document.querySelector("#content");

    let homeBlock = document.createElement("div");
    homeBlock.classList.add("home-text");

    let addLine = function(text) {
        let newLine = document.createElement("div");
        newLine.textContent = text;

        homeBlock.appendChild(newLine);
    }

    addLine("Come in, dear guest, and be welcome.");
    addLine("We serve those who wander after dusk - and those who find themselves a little lost.");
    addLine("At The Last Drop, we take pride in every detail, from the first sip to the final bite, best savored long after sunset.");
    addLine("Stay as long as you like. There’s no need to rush the night.");
    addLine("Step in, and take a bite.");

    homeBlock.addEventListener("mouseover", function(event) {
        if (event.target === homeBlock.lastChild) {
            homeBlock.lastChild.style.fontWeight = "bold";
        } else {
            homeBlock.lastChild.style.fontWeight = ""
        }
    })

    homeBlock.lastChild.addEventListener("click", function() {
        document.getElementById('menu').click();
    })

    content.appendChild(homeBlock);  
}

export { homeDisplay };