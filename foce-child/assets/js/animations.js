const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('wipe-enter-animation');
      return;
    }

    entry.target.classList.remove('wipe-enter-animation');
  });
});


const elements = document.querySelectorAll('.banner img, #characters, #place, #studio, #oscars, footer');

elements.forEach((element) => observer.observe(element));