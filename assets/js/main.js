/* ================= MENU ACTIVE ================= */

const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll(".menu-link");

let clicking = false;

// SCROLL
window.addEventListener("scroll", () => {

  if (clicking) return;

  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  menuLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });

});

// CLICK
menuLinks.forEach(link => {

  link.addEventListener("click", () => {

    clicking = true;

    menuLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    setTimeout(() => {
      clicking = false;
    }, 600);

  });

});



/* ================= WORKS FILTER ================= */

const filterButtons = document.querySelectorAll(".works__item");
const workCards = document.querySelectorAll(".work__card");

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    filterButtons.forEach(btn => {
      btn.classList.remove("active-work");
    });

    button.classList.add("active-work");

    const filterValue = button.getAttribute("data-filter");

    workCards.forEach(card => {

      if(filterValue === "all"){
        card.classList.remove("hide");
      }

      else if(card.classList.contains(filterValue)){
        card.classList.remove("hide");
      }

      else{
        card.classList.add("hide");
      }

    });

  });

});

/* ================= FOOTER DATE ================= */

document.getElementById("year").textContent = new Date().getFullYear();