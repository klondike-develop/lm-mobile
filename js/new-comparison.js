$(document).ready(function () {

	function scrolling() {
		$wW = $(window).width();
		$wH = $(window).height();

		$top1 = $('body').scrollTop();
		$top2 = $('html').scrollTop();

		if ($top1) {
			$top = $top1;
		} else {
			$top = $top2;
		}

		$fixedSliderPlaceholder = $('.box:visible .slider-absolute-placeholder');
		$fixedSliderPlaceholderTop = $fixedSliderPlaceholder.offset().top;
		$fixedSliderPlaceholderH = $fixedSliderPlaceholder.height();

		$boxEnd = $('.box-end').offset().top;

		//console.log($top, $fixedSliderPlaceholderTop);

		if ($top > $fixedSliderPlaceholderTop + $fixedSliderPlaceholderH) {
			if($top < ($boxEnd - 150)) {
				$('.box:visible .slider-absolute').addClass('scrolled');
				$('.box:visible .slider-absolute').css('top', $top - $fixedSliderPlaceholderTop);
			}
		} else {
			$('.box:visible .slider-absolute').removeClass('scrolled');
			$('.box:visible .slider-absolute').css('top', 0);
		}
	}

	scrolling();
	$(window).on("scroll", scrolling);

	function comparisonInit() {
		comparison = new Swiper(".box[style*=block] .comparison-products", {
			scrollbar: {
				el: ".swiper-scrollbar",
				hide: false,
				draggable: true,
				snapOnRelease: false,
			},
			speed: 0,
			slidesPerView: "auto",
			watchOverflow: true,
			freeMode: false,
			breakpoints: {
				420: {
					spaceBetween: 10,
				},
			},
		});

		linked = [];
		$(".box[style*=block] .comparison-linked-products").each(function (index) {
			$(this).find('.swiper-wrapper').removeAttr('style');

			linked[index] = new Swiper($(this), {
				speed: 0,
				slidesPerView: "auto",
				watchOverflow: true,
				centerInsufficientSlides: false,
				allowTouchMove: true,
				breakpoints: {
					420: {
						spaceBetween: 10,
					},
				},
			});
		});

        comparison.controller.control = linked;
	}
	comparisonInit();

	$(document).on("click", ".comparison-toggle", function (event) {
		event.preventDefault();
		$(this).parents(".comparison-item").toggleClass("active").find(".comparison-info").slideToggle(150);
	});

	$(document).on("click", ".tabs a", function (event) {
		setTimeout(function () {
			comparisonInit();
		}, 100);
	});

	$(document).on("change", ".comparison-checkbox input", function (event) {
		window.location.href = '?diff='+($(this).is(':checked')?'Y':'N');
	});

	$(document).on("click", ".removeProduct", function (event) {
		$el = $(this).closest('.swiper-slide');
		$elIndex = $el.index();

		$el.remove();
		comparison.update();

		$(".box[style*=block] .comparison-linked-products").each(function (index) {
			$(this).find('.swiper-slide').eq($elIndex).remove();
		});
	});
});
