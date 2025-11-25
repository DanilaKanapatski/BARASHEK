new Swiper(".deliverySwiper", {
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 13,
    navigation: {
        nextEl: ".delivery-next",
        prevEl: ".delivery-prev",
    },
    centeredSlides: false,
    slidesPerGroup: 1, // листаем по одному

    breakpoints: {
        // MOBILE
        200: {
            slidesPerView:'auto',
            spaceBetween: 17,
        },

        // TABLET & DESKTOP
        768: {
            slidesPerView: 'auto',
            spaceBetween: 13,
        }
    }
});
