/* ================= THEME (DARK / LIGHT) ================= */

const themeButton = document.getElementById("botao-tema")
const body = document.body
const icon = themeButton.querySelector("i")

const savedTheme = localStorage.getItem("theme")

// Detectar tema do sistema
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

// aplicar tema inicial
if(savedTheme){
    if(savedTheme === "light"){
        body.classList.add("light-theme")
        icon.classList.replace("bx-sun","bx-moon")
    }
}else{
    if(!prefersDark){
        body.classList.add("light-theme")
        icon.classList.replace("bx-sun","bx-moon")
    }
}

// clique botão
themeButton.addEventListener("click", () => {

    body.classList.toggle("light-theme")

    const lightActive = body.classList.contains("light-theme")

    icon.classList.toggle("bx-sun", !lightActive)
    icon.classList.toggle("bx-moon", lightActive)

    localStorage.setItem("theme", lightActive ? "light" : "dark")

})


/* ================= MENU ACTIVE ================= */

const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll(".menu-link")

let clicking = false

window.addEventListener("scroll", () => {

    if(clicking) return

    let current = ""

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200
        const sectionHeight = section.offsetHeight

        if(scrollY >= sectionTop && scrollY < sectionTop + sectionHeight){
            current = section.getAttribute("id")
        }

    })

    navLinks.forEach(link => {

        link.classList.remove("active")

        if(link.getAttribute("href") === `#${current}`){
            link.classList.add("active")
        }

    })

})

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        clicking = true

        navLinks.forEach(l => l.classList.remove("active"))
        link.classList.add("active")

        setTimeout(() => {
            clicking = false
        }, 700)

    })

})


/* ================= WORKS FILTER ================= */

const filterButtons = document.querySelectorAll(".works__item")
const workCards = document.querySelectorAll(".works__card")

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active-work")
        })

        button.classList.add("active-work")

        const filterValue = button.dataset.filter

        workCards.forEach(card => {

            if(filterValue === "all"){
                card.classList.remove("hide")
                return
            }

            card.classList.toggle(
                "hide",
                !card.classList.contains(filterValue)
            )

        })

    })

})


/* ================= FOOTER DATE ================= */

document.getElementById("year").textContent = new Date().getFullYear()

/* ================= SCROLL REVEAL ================= */

const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 1200,
  delay: 200,
  reset: false
})

/* HERO */

sr.reveal(".hero-text", {
  origin: "left",
  distance: "80px"
})

sr.reveal(".hero-image", {
  origin: "right",
  distance: "80px",
  delay: 400
})

/* ================= ABOUT ================= */

sr.reveal(".about-image", {
  origin: "left",
  distance: "80px"
})

sr.reveal(".about-text", {
  origin: "right",
  distance: "80px",
  delay: 200
})

sr.reveal(".about-actions", {
  origin: "bottom",
  delay: 400
})

/* ================= SKILLS ================= */

sr.reveal(".section-content", {
  interval: 200
})

/* ================= WORKS ================= */

sr.reveal(".works .section-header", {
  origin: "top",
  distance: "40px"
})

sr.reveal(".works__filters", {
  delay: 200
})

sr.reveal(".work__card", {
  interval: 200
})

/* ================= CONTACT ================= */

sr.reveal(".contact-card", {
  interval: 200
})