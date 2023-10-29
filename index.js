const randomIdea = document.querySelector(".bot--url");
const image = document.querySelector(".card--img");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            randomIdea.textContent = data.activity;
        })
})


