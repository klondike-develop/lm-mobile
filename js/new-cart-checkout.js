$(document).ready(function () {
    // переключение наборов полей
    $(document).on('change', '.delivery-card input', function () {
        let id = this.getAttribute('data-id');
        let fields = document.querySelector('[data-delivery-fields]');

        if (!fields) return;

        if (this.checked && fields.getAttribute('data-delivery-fields') == id) {
            fields.classList.remove('hidden');
        } else {
            fields.classList.add('hidden');
        }
    });

    // выпадающий список местоположений
    $(document).on('focus', '.input-wrapper_dropdown .input-text', function () {
        let parent = $(this).closest('.input-wrapper_dropdown').get(0);

        parent.classList.add('input-wrapper_dropdown_active');
    });

    $(document).on('blur', '.input-wrapper_dropdown .input-text', function () {
        let parent = $(this).closest('.input-wrapper_dropdown').get(0);

        parent.classList.remove('input-wrapper_dropdown_active');
    });
});