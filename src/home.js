let homeDisplay = function() {
    let content = document.querySelector("#content");

    let homeBlock = document.createElement("div");
    homeBlock.classList.add("home-text");

    let addLine = function(text) {
        let newLine = document.createElement("div");
        newLine.textContent = text;

        homeBlock.appendChild(newLine);
    }

    addLine("Вітаємо, магістерки!");
    addLine("Магічний Ліс уже розкрив свої смарагдові обійми, а Ковен скликає вас під древні крони, де серед шепоту листя танцюють дріади й мерехтять крила фейрі.");
    addLine("Ступайте за покликом чарів - до бенкету в самому серці зачарованої гущавини");


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