let links = document.querySelectorAll(".navbar-nav .nav-link"); // Select All links in Header
console.log(links);
let sections = document.querySelectorAll("section"); // Select All sections in HTML File
// Determine Section On Scroll And Change
// link Class active According to The textContent of The Section
window.onscroll = function () {
  let scrollPosition = document.documentElement.scrollTop;
  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - 200 &&
      scrollPosition <= section.offsetHeight + section.offsetTop
    ) {
      links.forEach((link) => {
        if (section.classList.contains("landing")) {
          removeClass(links);
          addClass(links[0]);
        } else if (section.classList.contains(link.textContent.toLowerCase())) {
          removeClass(links);
          addClass(link);
        }
      });
    }
  });
};
function removeClass(links) {
  links.forEach((ele) => {
    ele.classList.remove("active");
  });
}
function addClass(link) {
  link.classList.add("active");
}
// ------------------------------------Global Animate Content Function------------------------------------
function animateContent(parent, beforeContent = 300, ...childs) {
  window.addEventListener("scroll", function () {
    if (window.scrollY >= parent.offsetTop - beforeContent) {
      childs.forEach((ele) => {
        let arr = Array.from(ele);
        if (arr.length === 0) {
          ele.style.cssText = `opacity:1;transform:translate(0,0);-webkit-transform:translate(0,0));-moz-transform:translate(0,0);-ms-transform:translate(0,0);-o-transform:translate(0,0);`;
        } else {
          arr.forEach((element) => {
            element.style.cssText = `opacity:1;transform:translate(0,0);-webkit-transform:translate(0,0));-moz-transform:translate(0,0);-ms-transform:translate(0,0);-o-transform:translate(0,0);`;
          });
        }
      });
    }
  });
}

// ---------------------- Serivces Section------------------------------
let servicesSection = document.querySelector(".services");
let servicesFeats = document.querySelectorAll(".services .feat");
animateContent(servicesSection, null, servicesFeats);
// ---------------------- Work Section------------------------------
let workSection = document.querySelector(".work");
let workLi = document.querySelectorAll(".work ul li");
let workBoxes = document.querySelectorAll(".work .row .box");
// ----------------------
animateContent(workSection, null, workBoxes);
// ----------------------
workLi.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    workLi.forEach((li) => {
      li.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
workLi.forEach((li) => {
  li.addEventListener("click", function (e) {
    filterFunction(e.target);
  });
});
let filterFunction = function (li) {
  if (li.textContent !== "All") {
    workBoxes.forEach((content) => {
      if (content.dataset.category === li.dataset.filter) {
        content.parentElement.style.cssText = `display:block;`;
      } else {
        content.parentElement.style.cssText = `display:none;`;
      }
    });
  } else {
    workBoxes.forEach((content) => {
      content.parentElement.style.cssText = `display:block;`;
    });
  }
};
// ---------------------- About Section------------------------------
let aboutSection = document.querySelector(".about");
let aboutText = document.querySelector(".about .text");
let aboutImage = document.querySelector(".about .image");
animateContent(aboutSection, null, aboutText, aboutImage);
// ---------------------- Portfolio Section------------------------------
let portfolioSection = document.querySelector(".portfolio");
let portfolioBoxes = document.querySelectorAll(".portfolio .main-box");
animateContent(portfolioSection, null, portfolioBoxes);
// ---------------------- Techs Section------------------------------
let techsSection = document.querySelector(".techs");
let techsBoxes = document.querySelectorAll(".techs .box");
animateContent(techsSection, 700, techsBoxes);
// ---------------------- Blog Section------------------------------
let blogSection = document.querySelector(".blog");
let blogBoxes = document.querySelectorAll(".blog .box");
let blogBtn = document.querySelectorAll(".blog .main-btn");
animateContent(blogSection, null, blogBoxes, blogBtn);
