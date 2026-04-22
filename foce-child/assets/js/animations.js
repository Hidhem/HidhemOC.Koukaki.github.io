// animation descendante
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('wipe-enter-animation');
      return;
    }
  });
});

const elements = document.querySelectorAll('.banner__title, .characters, .place, #studio, #oscars, footer, #story__title h2, #story__article');

elements.forEach((element) => observer.observe(element));

// animation montante

const observerReverse = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('wipe-enter-animation-reverse');
      return;
    }

  });
});

const element = document.querySelectorAll('.banner__header-video, #studio p, #story__article p, #place p');

element.forEach((element) => observerReverse.observe(element));

// parallax effect Y

const bannerVideo = document.getElementById("wrapper__video");
const bannerTitle = document.getElementById("wrapper__title");

window.addEventListener("scroll", function () {
  let offsetY = window.pageYOffset;
  bannerVideo.style.transform = "translateY(" + offsetY * 0.5 + "px)";
  bannerTitle.style.transform = "translateY(" + offsetY * -0.5 + "px)";
});

// parallax effect X 0 to 300px

const placeCloud = document.getElementById("swiper__cloud");
const placeSection = document.getElementById("place");

window.addEventListener("scroll", function () {
  let scrollY = window.pageYOffset;
  const sectionTop = placeSection.offsetTop;
  let relativeScroll = scrollY - sectionTop;
  let move = Math.max(0, Math.min(relativeScroll * 0.3, 300));
  placeCloud.style.transform = `translateX(${-move}px)`;
});

// burger menu animation

const burgerButton = document.getElementById("navigation__burger");
const burgerMenu = document.getElementById("nav__burger-menu");

burgerButton.addEventListener("click", function () {
  burgerMenu.classList.toggle("active");
  burgerButton.classList.toggle("active");
});

const links = document.querySelectorAll(".burger-menu__list");

links.forEach(link => {
  link.addEventListener("click", () => {
    burgerMenu.classList.remove("active");
    burgerButton.classList.remove("active");
  });
});