function preload() {
    const preloader = document.querySelector(".preloader");
    console.log(preloader)

    const loading = (elem) => elem.style.display = 'block';
    const loaded = (elem) => elem.style.display = 'none';

    document.addEventListener('readystatechange', () => {
        if (document.readyState == 'complete') {
            loaded(preloader);
        } else {
            loading(preloader);
        }
    })
}



function navItemHandleEvent() {
    const navItems = document.querySelectorAll(".nav__item");

    for (let i = 1; i < navItems.length; i++) {
        navItems[i].addEventListener('mouseover', () => navItems[i].classList.add('nav--active'));
        navItems[i].addEventListener('mouseleave', () => navItems[i].classList.remove('nav--active'));
    }
}

function isInViewPort(element) {
    const elemBounding = element.getBoundingClientRect();
    return (
        elemBounding.top >= 0 &&
        elemBounding.left >= 0 &&
        elemBounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        elemBounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function displayStickyNav() {
    const nav = document.querySelector(".nav");

    window.addEventListener('scroll', () => {
        if (window.scrollY > 255) {
            nav.classList.add('sticky-nav');
            nav.style.animation = 'stickyNavAppearence 1s ease-in-out';
        } else {
            nav.classList.remove('sticky-nav');
            nav.removeAttribute('style');
        }
    });
}

function dropdownHandleEvent() {
    const itemsHasDropdown = document.querySelectorAll(".item-dropdown");
    const dropdownMenus = document.querySelectorAll(".nav__item-dropdown");

    function multipleElementsEvent(elements, event, eventHandler) {
        for (const element of elements) {
            element.addEventListener(event, () => {
                eventHandler();
            });
        }
    }

    function displayDropdown(navItem, dropdown) {
        navItem.classList.add('nav--active');
        dropdown.style.animation = 'dropdownAppearence .2s linear';
        setTimeout(() => dropdown.style.display = 'block', 100);
    }

    function hideDropdown(navItem, dropdown) {
        navItem.classList.remove('nav--active');
        dropdown.style.animation = 'dropdownDisappearence .2s linear';
        setTimeout(() => dropdown.style.display = 'none', 100);
    }

    multipleElementsEvent([itemsHasDropdown[0], dropdownMenus[0]], 'mouseover', displayDropdown.bind(null, itemsHasDropdown[0], dropdownMenus[0]));

    itemsHasDropdown[0].addEventListener('mouseleave', () => {
        dropdownMenus[0].style.animation = 'dropdownDisappearence .2s linear';
        setTimeout(() => dropdownMenus[0].style.display = 'none', 100);
    });
    dropdownMenus[0].addEventListener('mouseleave', () => {
        dropdownMenus[0].style.animation = 'dropdownDisappearence .2s linear';
        setTimeout(() => dropdownMenus[0].style.display = 'none', 100);
    });

    for (let i = 1; i < itemsHasDropdown.length; i++) {

        multipleElementsEvent([itemsHasDropdown[i], dropdownMenus[i]], 'mouseover', displayDropdown.bind(null, itemsHasDropdown[i], dropdownMenus[i]));

        multipleElementsEvent([itemsHasDropdown[i], dropdownMenus[i]], 'mouseleave', hideDropdown.bind(null, itemsHasDropdown[i], dropdownMenus[i]));
    }
}

function sliderHandleEvent() {
    const previousBtn = document.querySelector(".slider__btn--previous");
    const nextBtn = document.querySelector(".slider__btn--next");
    const sliderImgs = ['../assets/slider/slider_bg.jpg', '../assets/slider/slider_bg02.jpg']
    const slide = document.querySelector(".slider");
    const sliderTexts = slide.querySelectorAll('h3, h1, p');

    function slideTextAppear() {
        for (let i = 0; i < sliderTexts.length - 1; i++) {
            sliderTexts[i].style.animation = 'slideTextChanging .8s ease-in-out';
        }
        sliderTexts[sliderTexts.length - 1].style.animation = 'slideTextChanging .8s ease-in-out .2s';
    }

    nextBtn.addEventListener('click', () => {
        changeSlide();
        slideTextAppear();
    })

}

function buttonHandleEvent() {
    const buttons = document.querySelectorAll(".btn-wrapper");

    buttons.forEach(button => button.addEventListener('mouseover', () => {
        button.style.animation = 'buttonHovered .5s ease-in-out';
        setTimeout(() => button.style.paddingRight = 0, 400);
    }));
    buttons.forEach(button => button.addEventListener('mouseleave', () => {
        button.style.animation = 'buttonUnhovered .5s ease-in-out';
        setTimeout(() => button.style.paddingRight = '15px', 400);
    }));
}

function featureGamesHandleEvent() {
    const items = document.querySelectorAll(".just-feature-games__item");

    console.log(items[0])

    const hoveredItem = document.createElement('div');
    hoveredItem.classList.add('hovered-item');

    const icon = document.createElement('img');
    icon.setAttribute('src', './assets/illustrations/featured_game_icon.png');

    const content = document.createElement('div');
    content.classList.add('.just-feature-games__content-wrapper');

    content.innerHTML = `<h5>just for gamers</h5>
        <p>playstation 5 , xbox</p>`

    function hoverToItem() {
        hoveredItem.appendChild(icon);
        hoveredItem.appendChild(content);

        items.forEach(item => item.appendChild(hoveredItem));

        console.log('hovered');
    }

    function unhoverToItem() {
        items.forEach(item => item.removeChild(hoveredItem))
    }

    items.forEach(item => item.addEventListener('mouseover', () => {
        hoverToItem();
    }));
    items.forEach(item => item.addEventListener('mouseleave', unhoverToItem));
}

function carouselItemRoll() {
    const carousel = document.querySelector(".gaming-products__carousel");

    carousel.addEventListener('mousemove', (e) => {
        let currentOffset = e.offsetX;

        if (e.offsetX > currentOffset) {
            carousel.style.transform = `translateX(${currentOffset}px)`;
        } else {
            carousel.style.transform = `translateX(${-currentOffset}px)`
        }
        currentOffset = e.offsetX;
    })
}

function hoverToCatergoryList() {
    const categoryList = document.querySelector(".footer__category-list");
    const li = categoryList.querySelector('a');
}

function buttonScrollAppear() {
    const btnScroll = document.querySelector(".btn--scroll-to-top");

    window.addEventListener('scroll', () => {
        if (window.scrollY > 255) {
            btnScroll.style.animation = 'buttonAppear .2s ease-in-out'
            setTimeout(() => btnScroll.style.display = 'block', 100);
        } else {
            btnScroll.style.animation = 'buttonDisappear .2s ease-in-out'
            setTimeout(() => btnScroll.style.display = 'none', 100);
        }
    });
}


preload();
displayStickyNav();
navItemHandleEvent();
dropdownHandleEvent();
// sliderHandleEvent();
buttonHandleEvent();
// featureGamesHandleEvent();
// carouselItemRoll();
hoverToCatergoryList();
buttonScrollAppear();