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

		if ($top > $fixedSliderPlaceholderTop + $fixedSliderPlaceholderH) {
			// if($top < ($boxEnd - 150)) {
				$('.box:visible .slider-absolute').addClass('scrolled');
				// $('.box:visible .slider-absolute').css('top', $top - $fixedSliderPlaceholderTop);
			// }
		} else {
			$('.box:visible .slider-absolute').removeClass('scrolled');
			// $('.box:visible .slider-absolute').css('top', 0);
		}
	}

	scrolling();
	$(window).on("scroll", scrolling);

    function findDifferent() {
        $(".box[style*=block] .comparison-list").each(function () {
            $this = $(this);

            //Find different
            $this.find('.comparison-option').each(function () {
                let item = $(this).closest('.comparison-item').get(0);
                let text = '';
                let isDifferent = false;

                $(this).find('.swiper-slide').each(function () {
                    if (text == '') {
                        text = $(this).text();
                    } else if (text !== $(this).text()) {
                        isDifferent = true;

                        return false;
                    }
                });

                if (isDifferent) {
                    this.classList.add('different');
                    item.classList.remove('non-different');
                    item.classList.add('different');
                } else {
                    this.classList.add('non-different');
                    
                    if (!item.classList.contains('different')) {
                        item.classList.add('non-different');
                    }
                }
            });
        });
    }

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

            // обязательно указываем observer/observeParents, чтобы слайдер корректно инициализировался на скрытых свойствах
			linked[index] = new Swiper($(this), {
				speed: 0,
				slidesPerView: "auto",
				watchOverflow: true,
                observer: true,
                observeParents: true,
				breakpoints: {
					420: {
						spaceBetween: 10,
					},
				},
			});

            linked[index].controller.control = [comparison];
		});

        comparison.controller.control = linked;
	}
	comparisonInit();
    findDifferent();

    $(document).on('change', '[data-comparison-toggle]', function () {
        let parent = $(this).closest('.box').get(0);

        if (this.checked) {
            $(parent).find('.non-different').hide();
        } else {
            $(parent).find('.non-different').show();
        }
    });

	$(document).on("click", ".comparison-toggle", function (event) {
		event.preventDefault();
		$(this).parents(".comparison-item").toggleClass("active").find(".comparison-info").slideToggle(150);
	});

	$(document).on("click", ".tabs a", function (event) {
		setTimeout(function () {
			comparisonInit();
            findDifferent();
		}, 100);
	});

	$(document).on("click", ".removeProduct", function (event) {
		$el = $(this).closest('.swiper-slide');
		$elIndex = $el.index();

        let length = $(this).closest('.comparison-products').find('.swiper-slide').length - 1;

        $('.product-tabs .active span').text(length);

		$el.remove();
		comparison.update();

		$(".box[style*=block] .comparison-linked-products").each(function (index) {
			$(this).find('.swiper-slide').eq($elIndex).remove();
		});
	});
});
