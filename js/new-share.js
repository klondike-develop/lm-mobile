$(document).ready(function() {
    $(".js-toggle-share").on("click", function() {
        $(".new-product-share-modal").addClass("active");
        $(".new-product-share-modal").fadeIn(300);
    })

    $(".new-product-share-close").on("click", function() {
        $(".new-product-share-modal").removeClass("active");
        $(".new-product-share-modal").fadeOut(300);
    });

    $(".new-product-share-modal").on("click", function(e) {
        if($(e.target).is(".new-product-share-modal")) {
            $(".new-product-share-modal").removeClass("active");
            $(".new-product-share-modal").fadeOut(300);
        }
    });
}); 