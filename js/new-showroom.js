$(document).ready(function () {

    $(document).on('click', '.showrooms-gallery .gallery-thumb', function (e) {
        e.preventDefault();

        let group = this.getAttribute('data-fancybox-group');
        let siblings = document.querySelectorAll(`[data-fancybox-group="${group}"]`);
        let src = [];

        for (let i = 0; i < siblings.length; i++) {
            src.push({
                src: siblings[i].href,
                opts: {
                    thumb: siblings[i].href
                }
            });
        }

        $.fancybox.open(src)
    });
});
