// let offset = 0
// const sliderLine = document.querySelectorAll('.cards__one')


// document.querySelector('#prev-btn').addEventListener('click', function () {
//     console.log('salom');
//     offset = offset + 256
//     if (offset > 768) {
//         offset = 0
//     }

//     offset = offset + 'px'

// })

// el.forEach((el => 'card__one' {


// }))


const carousel = document.querySelector('.card'),
    firstImg = carousel.querySelectorAll(".cards__one")[0];
arrowIcons = document.querySelectorAll('.prev-btn');



let isDragStart = false,
    prevPageX, prevScrollLeft;

let firstImgWidth = firstImg.clientWidth + 550;

arrowIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth
    })
})




const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}


const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
}


carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);