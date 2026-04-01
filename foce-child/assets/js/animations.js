const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('wipe-enter-animation');
      return;
    }

    entry.target.classList.remove('wipe-enter-animation');
  });
});


const elements = document.querySelectorAll('.banner img, .story h3, .main-character h3, #place h3, #studio h2, #story h2');

elements.forEach((element) => observer.observe(element));