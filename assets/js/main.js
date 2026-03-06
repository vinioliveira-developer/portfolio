/* ================= MENU ACTIVE ================= */

const sections = document.querySelectorAll('section');
const menuLink = document.querySelectorAll('.menu-link');




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