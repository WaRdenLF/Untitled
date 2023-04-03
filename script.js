let offset = 0
const sliderLine = document.querySelectorAll('.cards__one')


document.querySelector('#prev-btn').addEventListener('click', function () {
    offset = offset + 256
    if (offset > 768) {
        offset = 0

    }
})