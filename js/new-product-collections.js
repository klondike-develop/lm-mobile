$(document).ready(function() {
    var newCollectionsSlider = new Swiper('.new-collections-slider', {
        slidesPerView: "auto",
        watchOverflow: true,
        spaceBetween: 15,

        scrollbar: {
            el: '.new-collections-slider .swiper-scrollbar',
            draggable: true,
        },
    });
    
});