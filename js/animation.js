function setAnimation(element, animation) {
    return element.style.animation = animation;
}


function spinningCircleAnimate() {
    const sliderCircle = document.querySelector(".slider__circle");

    setAnimation(sliderCircle, 'spinningCircle .5s linear 0 infinite alternate');

}

// spinningCircleAnimate();