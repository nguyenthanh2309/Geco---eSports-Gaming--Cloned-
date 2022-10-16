function navItemHandleEvent() {
    const navItems = document.querySelectorAll(".nav__item");

    for (let i = 1; i < navItems.length; i++) {
        navItems[i].addEventListener('mouseover', () => navItems[i].classList.add('nav--active'));
        navItems[i].addEventListener('mouseleave', () => navItems[i].classList.remove('nav--active'));
    }
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

    itemsHasDropdown[0].addEventListener('mouseover', () => {
        dropdownMenus[0].style.animation = 'dropdownAppearence .2s linear';
        setTimeout(() => dropdownMenus[0].style.display = 'block', 100);
    });
    itemsHasDropdown[0].addEventListener('mouseleave', () => {
        dropdownMenus[0].style.animation = 'dropdownDisappearence .2s linear';
        setTimeout(() => dropdownMenus[0].style.display = 'none', 100);
    });

    for (let i = 1; i < itemsHasDropdown.length; i++) {

        multipleElementsEvent([itemsHasDropdown[i], dropdownMenus[i]], 'mouseover', displayDropdown.bind(null, itemsHasDropdown[i], dropdownMenus[i]));

        multipleElementsEvent([itemsHasDropdown[i], dropdownMenus[i]], 'mouseleave', hideDropdown.bind(null, itemsHasDropdown[i], dropdownMenus[i]));
    }
}

function sliderHandleEvent() {
    const sliderBtns = document.querySelectorAll(".slider__btn");
    const sliderItem = document.querySelector(".slider__item");
    const sliderTexts = sliderItem.querySelectorAll('h3, h1, p');

    function slideTextAppear() {
        for (let i = 0; i < sliderTexts.length - 1; i++) {
            sliderTexts[i].style.animation = 'slideTextChanging .8s ease-in-out';
        }
        sliderTexts[sliderTexts.length - 1].style.animation = 'slideTextChanging .8s ease-in-out .2s';
    }
    sliderBtns.forEach(btn => btn.addEventListener('click', () => {
        if (!btn.style.animation) {
            slideTextAppear();
        } else {
            sliderTexts.forEach(text => text.style.removeProperty('animation'));
            console.log('remove')
        }
    }));
}

navItemHandleEvent();
dropdownHandleEvent();
sliderHandleEvent();