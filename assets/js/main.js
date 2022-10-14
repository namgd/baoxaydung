// Partners Slide
var js_banner_slide = new Swiper(".js-partners-slide", {
    slidesPerView: 2,
    spaceBetween: 8,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2,
        },
    },
});
// End Partners Slide

// js-videos-type-1-slide
var js_videos_type_1_slide = new Swiper(".js-videos-type-1-slide", {
    slidesPerView: 2,
    spaceBetween: 8,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
// End js-videos-type-1-slide