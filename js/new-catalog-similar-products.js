$(document).ready(function () {
	var newSimilarProductsSlider;
	var newSimilarProductsSliderLength = $(".new-similar-products-slider-container").length;

	if (newSimilarProductsSliderLength) {
		newSimilarProductsSlider = new Swiper(".new-similar-products-slider-container", {
			slidesPerView: "auto",
			watchOverflow: true,
			speed: 500,
			pagination: {
				el: ".new-similar-products-slider-container .swiper-pagination",
				type: "bullets",
			},
		});
	}
});
