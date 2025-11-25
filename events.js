new Swiper(".myReviewsSwiper", {
    loop: true,
    watchOverflow: false, // ← не скрывать стрелки
    navigation: {
        nextEl: ".reviews-next",
        prevEl: ".reviews-prev",
    },
    breakpoints: {
        // mobile
        200: {
            slidesPerView: 1.3,
            spaceBetween: 14
        },
        // tablet
        1000: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        // desktop
        1919: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }
});
