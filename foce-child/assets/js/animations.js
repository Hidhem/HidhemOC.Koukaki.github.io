// animation descendante
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('wipe-enter-animation');
      return;
    }

    entry.target.classList.remove('wipe-enter-animation');
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

    entry.target.classList.remove('wipe-enter-animation-reverse');
  });
});


const element = document.querySelectorAll('.banner__header-video, #studio p, #story__article p, #place p');

element.forEach((element) => observerReverse.observe(element));


// parallax effect

const bannerVideo = document.getElementById("wrapper__video");
const bannerTitle = document.getElementById("wrapper__title");

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  bannerVideo.style.transform = "translateY(" + offset * 0.5 + "px)";
  bannerTitle.style.transform = "translateY(" + offset * -0.5 + "px)";
});