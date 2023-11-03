const randomIdea = document.querySelector(".bot--url");
const button = document.querySelector("button");
const buttonBlinker = document.querySelector("#fade-icon");
const courseDisplayer = document.querySelector(".visit-course");
const educationFee = document.querySelector(".course--price");
const footer = document.querySelector(".footer");

// fetch("https://apis.scrimba.com/bored/api/activity")

button.addEventListener("click", () => {
    buttonBlinker.style.display = "none";
    fetch("http://www.boredapi.com/api/activity/")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(data.link)
            randomIdea.textContent = data.activity;

            if(data.link != ""){
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

            if(data.type=== "busywork"){
                courseDisplayer.innerHTML = `<p>Let me know how it went! 😋</p>`
            }else if(data.type=== "social"){
                courseDisplayer.innerHTML = `<p>Some how good for a day! 😉</p>`
            }else if(data.type=== "education" && data.link === ""){
                courseDisplayer.innerHTML = `<p>Sorry we couldn't provide you with a link! 😔...Perhaps you may google one. 🙈</p>`
            }else if(data.type=== "recreational"){
                courseDisplayer.innerHTML = `<p>How about you give it  a shot see how it goes? 🤪</p>`
            }else if(data.type=== "cooking"){
                courseDisplayer.innerHTML = `<p>How about looking up a Recipe on how to go about it? 🍳📜</p>`
            }else if(data.type=== "music"){
                courseDisplayer.innerHTML = `<p>Remember music reduces stress 🎶</p>`
            }else if(data.type=== "charity"){
                courseDisplayer.innerHTML = `<p>I find charity quite amazing.. Do you? 🫶</p>`
            }else if(data.type=== "relaxation"){
                courseDisplayer.innerHTML = `<p>How is that for a Relaxation? 😉</p>`
            }else {
                courseDisplayer.innerHTML = `<p>I hope all goes well! 🫶😋</p>`
            }
        })
});