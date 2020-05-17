const imageFilters = (() => {
    const $ = document;
    const imageUploadInput = $.querySelector('input');
    const imagePreview = $.querySelector('.imagePreview');
    const buttons = $.querySelectorAll('button');
    const imageEditContainer = $.getElementById('imageContainer');
    let img = '';

    const imageUpload = () => {
        imageUploadInput.addEventListener('change', function () {
            let reader = new FileReader;

            reader.readAsDataURL(this.files[0]);

            reader.onload = function (event) {
                imagePreview.innerHTML = `<img src=${event.target.result} height="200"/> `
            }

            imageEditContainer.classList.remove('none');

        })
    }

    const addEffects = () => {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function () {
                img = $.querySelector('.imagePreview img');
                img.classList = '';
                img.classList.toggle(buttons[i].getAttribute('data-type'));
            })
        }
    }

    return {
        init: function () {
            imageUpload();
            addEffects();
        }
    }
})();

imageFilters.init();