new Swiper(".myNewsSwiper", {
    slidesPerView: 1.4,
    loop: true,
    spaceBetween: 23,

    navigation: {
        nextEl: ".news-next",
        prevEl: ".news-prev",
    },

    breakpoints: {
        768: { slidesPerView: 2 },
        1900: { slidesPerView: 3 }
    }
});

new Swiper(".myStockSwiper", {
    slidesPerView: 1.4,
    loop: true,
    spaceBetween: 23,

    navigation: {
        nextEl: ".stock-next",
        prevEl: ".stock-prev",
    },

    breakpoints: {
        768: { slidesPerView: 2 },
        1900: { slidesPerView: 3 }
    }
});
