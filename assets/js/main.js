// Menu Mobile
document.querySelector("#menu-button-open").addEventListener("click", function() {
    document.querySelector(".header-menu").classList.add("show");
});

document.querySelector("#menu-overlay").addEventListener("click", function() {
    document.querySelector(".header-menu").classList.remove("show");
});

document.querySelector("#menu-button-close").addEventListener("click", function() {
    document.querySelector(".header-menu").classList.remove("show");
});

document.querySelectorAll(".header-menu .inner-list .inner-icon-down").forEach(item => {
    item.addEventListener("click", function(item) {
        item.target.classList.toggle("active");
        item.target.parentNode.querySelector("ul").classList.toggle("active");
    });
});
// End Menu Mobile

// Search Mobile
document.querySelector("#search-button-open").addEventListener("click", function() {
    document.querySelector("#search-mobile").classList.toggle("show");
    document.querySelector("#search-mobile input").focus();
});
// End Search Mobile

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
    spaceBetween: 16,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
// End js-videos-type-1-slide

// go-to-top
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.querySelector(".go-to-top").style.display = "inline-flex";
    } else {
        document.querySelector(".go-to-top").style.display = "none";
    }
}

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

document.querySelector(".go-to-top").addEventListener("click", topFunction);

// End go-to-top