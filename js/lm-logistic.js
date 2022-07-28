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

	if ($("[data-fancybox]").length) {
		$("[data-fancybox]").fancybox({
			gutter: 0,
			loop: true,
			arrows: false,
			infobar: false,
			smallBtn: true,
			wheel: false,
			animationEffect: "fade",
			mobile: {
				preventCaptionOverlap: !1,
				idleTime: !1,
				clickSlide: "close",
			},
			touch: {
				vertical: false,
			},
		});
	}
});
