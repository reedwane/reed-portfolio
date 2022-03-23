window.addEventListener("DOMContentLoaded", (e) => {
  let ham = document.querySelectorAll(".ham")[0];
  let menu = document.querySelectorAll(".menu")[0];
  let openModal = document.querySelectorAll(".modal")[0];
  let projects = document.querySelectorAll(".projects ul li");

  const closeMenu = () => {
    if (window.innerWidth < 768) {
      ham.setAttribute("src", "./icons/icon-hamburger.svg");
      menu.style.display = "none";
      openModal.style.display = "none";
    }
  };

  const defaultMenu = () => {
    if (window.innerWidth < 768) {
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

  //listening to scroll event

  // intersection (visibility) observer

  let roles = document.querySelectorAll("div.role");

  let options = {
    rootMargin: "0px 0px -200px 0px",
    threshold: 0.5,
  };

  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("animate");
        appearOnScroll.unobserve(entry.target);
        console.log("done " + entry.target.classList[0]);
      }
    });
  },
  options);

  projects.forEach((project) => {
    appearOnScroll.observe(project);
  });

  roles.forEach((role) => {
    appearOnScroll.observe(role);
  });

  // ALTERNATIVE TO ELEMENT OBSERVER!!!
  // to check if an element is in view
  // const isInView = (el) => {
  //   let top = el.offsetTop;
  //   let left = el.offsetLeft;
  //   let width = el.offsetWidth;
  //   let height = el.offsetHeight;

  //   while (el.offsetParent) {
  //     el = el.offsetParent;
  //     top += el.offsetTop;
  //     left += el.offsetLeft;
  //   }

  //   return (
  //     top < window.pageYOffset + window.innerHeight &&
  //     left < window.pageXOffset + window.innerWidth &&
  //     top + height > window.pageYOffset &&
  //     left + width > window.pageXOffset
  //   );
  // };

  // document.addEventListener(
  //   "scroll",
  //   (e) => {
  //     // roles.classList.add("animate");
  //     if (isInView(roleBox)) {
  //       //to check when a specific div comes into the viewport and not animate it again when we're not out of the section
  //       if (!roleBox.classList.contains("animate"))
  //         roleBox.classList.add("animate");
  //     } else {
  //       if (!isInView(roleBox)) roleBox.classList.remove("animate");
  //     }
  //   }
  // );

  //
});
