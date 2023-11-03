const randomIdea = document.querySelector(".bot--url");
const image = document.querySelector(".card--img");
const button = document.querySelector("button");
const education = document.querySelector(".visit-course");
const educationLink = document.querySelector(".course--link");
const educationFee = document.querySelector(".course--price");
const footer = document.querySelector(".footer")


console.log(educationFee, footer)

// fetch("https://apis.scrimba.com/bored/api/activity")

button.addEventListener("click", () => {
    fetch("http://www.boredapi.com/api/activity/")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(data.link)
            randomIdea.textContent = data.activity;

            if(data.link === ""){
                education.style.display = "none";
            } else {
                education.style.display = "block";
                education.style.width = "90%";
                educationLink.innerHTML = `
                                                Link : <a target="-blank" href="${data.link}" class="course-link">
                                                    ${data.link}
                                                </a>`;
                educationFee.innerHTML = `Price : $ ${data.price}`;
            }
        })
})


