$(document).ready(function () {
	$(".js-toggle-complect").on("click", function () {
		var listComplect = $(this).parents(".cart-product-complect").find(".cart-product-complect-list");

		$(this).toggleClass("show");
		listComplect.slideToggle();
	});
});
