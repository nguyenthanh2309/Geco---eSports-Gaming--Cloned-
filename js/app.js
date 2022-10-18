import { appendMutipleChilds, prependMutipleChilds } from './helper.js';

const listSliderItems = document.querySelectorAll(".slider__item");
const bgImageUrls = ['/assets/slider/slider_bg.jpg', '/assets/slider/slider_bg02.jpg'];

listSliderItems.forEach((item, index) => item.style.backgroundImage = `${bgImageUrls[index]}`);

function renderMinicartData() {
    fetch('https://mocki.io/v1/669aedd4-8ea9-4d39-b271-20b882967e9d')
        .then(res => res.json())
        .then(datas => {
            const names = datas.map(data => data.name);
            const oldPrice = datas.map(data => data.old);
            const salePrice = datas.map(data => data.sale);
            const images = datas.map(data => data.image);

            const cartProducts = document.querySelectorAll(".cart__product");
            const prices = document.querySelectorAll(".product-price");
            const cartImages = document.querySelectorAll(".product-img");
            const productNames = document.querySelectorAll(".product-name");
            const oldPrices = document.querySelectorAll(".product-old-price");
            const newPrices = document.querySelectorAll(".product-new-price");
            const totalPrices = document.querySelectorAll(".total-price>span");
            let total = 0;

            for (let i = 0; i < cartProducts.length; i++) {
                cartImages[i].setAttribute('src', images[i]);

                productNames[i].innerText = names[i];
                newPrices[i].innerHTML = `$${salePrice[i]} `;
                oldPrices[i].innerHTML = `$${oldPrice[i]} `;

                appendMutipleChilds(prices[i], productNames[i], newPrices[i], oldPrices[i])
                prependMutipleChilds(cartProducts[i], cartImages[i]);

                total += salePrice[i];
                totalPrices[i].innerText = `$${total}`;
            }
        })
        .catch(err => console.error('error'));
}

function renderReleashedGameData() {
    const cardImagesElements = document.querySelectorAll(".card__img");
    const cardTitleElements = document.querySelectorAll(".card__title");
    const cardContentElements = document.querySelectorAll(".card__content");
    const cardDescriptionElements = document.querySelectorAll(".card__description");


    fetch('https://mocki.io/v1/977e4786-50cf-4439-80dc-39bbcc467c99')
        .then(res => res.json())
        .then(datas => datas.forEach((data, index) => {
            cardImagesElements[index].firstChild.setAttribute('src', data.image);

            let handledText = data.name.split(' ').map(text => `<span>${text}</span>`).join(' ');
            cardTitleElements[index].innerHTML = handledText;

            cardContentElements[index].innerHTML = `<h5>category: <span>${data.category}</span></h5><br><h5>model: <span>${data.model}</span></h5><br><h5>controller: <span>${data.controller.join(', ')}</span></h5>`;

            cardDescriptionElements[index].innerHTML = data.description;
        }));

}

function renderFeatureGamesData() {
    const featureGamesContainer = document.querySelector(".just-feature-games__game-container");

    fetch('https://mocki.io/v1/c69f9da7-0e8a-48d6-9ff4-0bff0fb107db')
        .then(res => res.json())
        .then(datas => {
            const users = datas.map(data => data.user);
            const consoles = datas.map(data => data.console.join(' ,  '));
            const images = datas.map(data => data.image);
            for (let i = 0; i < datas.length; i++) {
                const featureGamesItem = document.createElement('div');
                featureGamesItem.classList.add('just-feature-games__item');

                const spanText = document.createElement('span');
                spanText.innerHTML = users[i].split(' ').slice(2).join(' ');

                const descriptionContainer = document.createElement('div');
                descriptionContainer.classList.add('just-feature-games__content-wrapper');

                const user = document.createElement('h5');
                user.innerHTML = users[i].split(' ').slice(0, 2).join(' ').concat('                  ');
                user.appendChild(spanText);

                const userConsole = document.createElement('p');
                userConsole.innerHTML = consoles[i];

                const image = document.createElement('img');
                image.setAttribute('src', images[i]);

                appendMutipleChilds(descriptionContainer, user, userConsole);
                appendMutipleChilds(featureGamesItem, image, descriptionContainer);

                featureGamesContainer.appendChild(featureGamesItem);

            }
        });
}

function renderGamingProductsData() {
    const gamingProductsCarousel = document.querySelector(".gaming-products__carousel");

    fetch('https://mocki.io/v1/cb2a8b62-b25b-4f88-a739-9769efeb06b4')
        .then(res => res.json())
        .then(datas => {
            const categories = datas.map(data => data.category);
            const names = datas.map(data => data.name);
            const prices = datas.map(data => data.price);
            const images = datas.map(data => data.image);

            for (let i = 0; i < datas.length; i++) {
                const gameProductsItem = document.createElement('div');
                gameProductsItem.classList.add('carousel__item');

                const productCategory = document.createElement('div');
                productCategory.classList.add('item__category')
                productCategory.innerHTML = `<span>${categories[i]}</span>`;

                const gameProductsContent = document.createElement('div');
                gameProductsContent.classList.add('item__content');

                const productName = document.createElement('h5');
                productName.innerHTML = names[i];

                const productPrice = document.createElement('p');
                productPrice.innerHTML = prices[i];

                const productImage = document.createElement('img');
                productImage.setAttribute('src', images[i]);

                appendMutipleChilds(gameProductsContent, productName, productPrice);
                appendMutipleChilds(gameProductsItem, productImage, productCategory, gameProductsContent);
                gamingProductsCarousel.appendChild(gameProductsItem);
            }
        });
}

function renderNewsArticlesData() {
    const articleContainer = document.querySelector(".lastest-news-articles__article-container");

    fetch('https://mocki.io/v1/edb0af69-adae-4801-a554-acc234c0b3d1')
        .then(res => res.json())
        .then(datas => {
            const images = datas.map(data => data.image);
            const titles = datas.map(data => data.title);
            const dates = datas.map(data => data.date);
            const tags = datas.map(data => data.tag);
            const contents = datas.map(data => data.content);

            for (let i = 0; i < datas.length; i++) {
                const articleItem = document.createElement('article');
                articleItem.classList.add('article__item');
                const articleDescription = document.createElement('div');
                articleDescription.classList.add('article__description');
                const titleContainer = document.createElement('div');
                titleContainer.classList.add('article__title-container')
                const articleImg = document.createElement('img');
                const articleTitle = document.createElement('h4');
                const articleDate = document.createElement('h6');
                const articleTag = document.createElement('span');
                const articleContent = document.createElement('p');
                const spacer = document.createElement('span');

                articleImg.setAttribute('src', images[i]);
                articleTitle.innerHTML = titles[i];
                articleDate.innerHTML = dates[i];
                spacer.innerHTML = '/';
                articleTag.innerHTML = tags[i];
                articleContent.innerHTML = contents[i];

                appendMutipleChilds(titleContainer, articleTitle, articleDate)
                appendMutipleChilds(articleDate, spacer, articleTag)
                appendMutipleChilds(articleDescription, articleImg, titleContainer, articleContent);
                articleContainer.appendChild(articleDescription);
            }
        });
};

function renderProductsCategoryData() {
    const listProducts = document.querySelector(".footer__category-list");

    fetch('https://mocki.io/v1/4e2709d4-207d-48f7-8019-78d92924e097')
        .then(res => res.json())
        .then(datas => {
            const categories = datas.map(data => data.category);
            const products = datas.map(data => data.product);

            const list = document.createElement('ul');
            for (let i = 0; i < datas.length; i++) {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<a href="">${categories[i]}(${products[i].length})</a>`;
                list.appendChild(listItem);
            }

            listProducts.appendChild(list);
        })
}

renderMinicartData();
renderReleashedGameData();
renderFeatureGamesData();
renderGamingProductsData();
renderNewsArticlesData();
renderProductsCategoryData();