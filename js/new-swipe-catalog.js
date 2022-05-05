$(document).ready(function() {

   $.each($(".catalog-product-slider"), function(index, val) {
        var activeLoop = false;

        if ($(val).find(".swiper-slide").length > 1) {
            activeLoop = true;
        }

        var sliderImageCard = new Swiper(val, {
            spaceBetween: 10,
            slidesPerView: 1,
            watchOverflow: true,
            loop: activeLoop,

            pagination: {
                el: '.catalog-product-slider .swiper-pagination',
                type: 'bullets',
            },
        });
    });
});