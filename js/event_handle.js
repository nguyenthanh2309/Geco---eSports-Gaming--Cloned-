function navItemHandleEvent() {
    const navItems = document.querySelectorAll(".nav__item");

    navItems.forEach(item => item.addEventListener('mouseover', () => item.classList.add('nav--active')));
    navItems.forEach(item => item.addEventListener('mouseleave', () => item.classList.remove('nav--active')));
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
        dropdown.style.display = 'block';
    }

    function hideDropdown(navItem, dropdown) {
        navItem.classList.remove('nav--active');
        dropdown.style.display = 'none';
    }

    for (let i = 0; i < itemsHasDropdown.length; i++) {

        multipleElementsEvent([itemsHasDropdown[i], dropdownMenus[i]], 'mouseover', displayDropdown.bind(null, itemsHasDropdown[i], dropdownMenus[i]));

        multipleElementsEvent([itemsHasDropdown[i], dropdownMenus[i]], 'mouseleave', hideDropdown.bind(null, itemsHasDropdown[i], dropdownMenus[i]));
    }
}

navItemHandleEvent();
dropdownHandleEvent();