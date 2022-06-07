$(document).ready(function () {
	//cart product delete
	$(document).on("click", ".cart-product-delete", function (event) {
		event.preventDefault();

		var thisEl = $(this);

		if ($(this).parents(".cart-product-complect").find(".cart-product-wrapper").length <= 1) {
			thisEl.parents(".cart-product-wrapper").slideUp(300, function () {
				thisEl.parents(".cart-product-wrapper").remove();
			});
		} else {
			thisEl
				.parents(".cart-product-wrapper")
				.first()
				.slideUp(300, function () {
					thisEl.parents(".cart-product-wrapper").first().remove();
				});
		}
	});

	$(document).on("click", ".cart-product-back-close", function (event) {
		event.preventDefault();

		var thisEl = $(this);
		var idProductDel = thisEl.parents(".cart-product-wrapper").attr("data-deleted-id");
 
		thisEl.parents(".cart-product-wrapper").slideUp(300, function () {
			thisEl.parents(".cart-product-wrapper").first().remove();
			$( "#" + idProductDel).remove();
		});
	});

	$(".js-toggle-complect").on("click", function () {
		var listComplect = $(this).parents(".cart-product-complect").find(".cart-product-complect-list");

		$(this).toggleClass("show");
		listComplect.slideToggle();
	});

	$(".cart-product-back-btn").on("click", function() {
		var container = $(this).parents(".cart-product-wrapper");
		var idProductDel = container.attr("data-deleted-id");
		var elProductDel = $( "#" + idProductDel);

		$(elProductDel).slideDown();

		container.slideUp(300, function () {
			container.remove();
		});
	});
});
