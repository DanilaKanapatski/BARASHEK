new Swiper(".myNewsSwiper", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 16,

    navigation: {
        nextEl: ".news-next",
        prevEl: ".news-prev",
    },

    breakpoints: {
        320: { slidesPerView: 1.1 },
        768: { slidesPerView: 2 },
        1900: { slidesPerView: 3 }
    }
});

new Swiper(".myStockSwiper", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 16,

    navigation: {
        nextEl: ".stock-next",
        prevEl: ".stock-prev",
    },

    breakpoints: {
        320: { slidesPerView: 1.1 },
        768: { slidesPerView: 2 },
        1296: { slidesPerView: 3 }
    }
});
