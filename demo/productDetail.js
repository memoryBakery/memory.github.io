function increaseValue1(a) {
    var value = parseInt(a, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('quantity1').value = value;
}

function decreaseValue1(a) {
    var value = parseInt(a, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('quantity1').value = value;
}


const imgs = document.querySelectorAll('.img-select a');
                    const imgBtns = [...imgs];
                    let imgId = 1;

                    imgBtns.forEach((imgItem) => {
                        imgItem.addEventListener('click', (event) => {
                            event.preventDefault();
                            imgId = imgItem.dataset.id;
                            slideImage();
                        });
                    });

                    function slideImage() {
                        const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

                        document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
                    }

                    window.addEventListener('resize', slideImage);