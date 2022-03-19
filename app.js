window.addEventListener("DOMContentLoaded", (e) => {
  let ham = document.querySelectorAll(".ham")[0];
  let menu = document.querySelectorAll(".menu")[0];
  let openModal = document.querySelectorAll(".modal")[0];
  let projects = document.querySelectorAll(".projects ul li");

  const closeMenu = () => {
    if (window.visualViewport.width < 768) {
      ham.setAttribute("src", "./icons/icon-hamburger.svg");
      menu.style.display = "none";
      openModal.style.display = "none";
    }
  };

  const defaultMenu = () => {
    if (window.visualViewport.width < 768) {
      closeMenu();
    } else {
      menu.style.display = "inline-block";
    }
  };
  defaultMenu();

  window.onresize = defaultMenu; //adjust the menu on window resize

  // the menu toggle for mobile view
  ham.addEventListener("click", (e) => {
    let src = ham.getAttribute("src");

    if (src == "./icons/icon-hamburger.svg") {
      // if the menu is previously closed, show the menu and the modal
      ham.setAttribute("src", "./icons/icon-close.svg");
      menu.style.display = "block";
      openModal.style.display = "block";
    } else {
      closeMenu();
    }
  });

  //close the menu when a link is clicked
  document.querySelectorAll(".menu a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      //scroll into view
      document.querySelector(link.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });

      closeMenu(); // close menu
    });
  });

  // hover effect on projects
  projects.forEach((project) => {
    project.addEventListener("mouseover", (e) => {
      project.querySelector("a").style.display = "inline-block";
    });
    project.addEventListener("mouseout", (e) => {
      project.querySelector("a").style.display = "none";
    });
    project.addEventListener("click", (e) => {
      // go to the site when the image is clicked
      project.querySelector("a").click();
    });
  });
});
