$(document).ready(function () {
	var sliderLogisticService = new Swiper(".logistic-service__slider .swiper-container", {
		spaceBetween: 10,
		slidesPerView: 1,
		watchOverflow: true,

		pagination: {
			el: ".logistic-service__slider .swiper-pagination",
			type: "bullets",
		},
	});

	var sliderGallMobileWarehouse = new Swiper(".gallary-warehouse__container", {
		slidesPerView: "auto",
		spaceBetween: 8,
		watchOverflow: true,
	});
});
