var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      rewind: true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "5",
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: false,
      },
    });
