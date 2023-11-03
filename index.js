const randomIdea = document.querySelector(".bot--url");
const button = document.querySelector("button");
const courseDisplayer = document.querySelector(".visit-course");
const educationFee = document.querySelector(".course--price");
const footer = document.querySelector(".footer")


// console.log(footer)

// fetch("https://apis.scrimba.com/bored/api/activity")

button.addEventListener("click", () => {
    fetch("http://www.boredapi.com/api/activity/")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(data.link)
            randomIdea.textContent = data.activity;

            if(data.link === ""){
                courseDisplayer.style.display = "none";
            } else {
                courseDisplayer.style.display = "block";
                courseDisplayer.style.padding = ".5em";
                courseDisplayer.innerHTML = `
                                                <p>
                                                    Link : 
                                                    <a target="-blank" href="${data.link}" class="course-link">
                                                    ${data.link}
                                                    </a>
                                                </p>

                                                <p>
                                                    Price : $ 
                                                    ${data.price}
                                                </p>
                                            `;
            }
        })
})