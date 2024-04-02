const dataEl = JSON.parse(dataInfo);
console.log(dataEl);

const bodyContent = document.querySelector('body');
const productContent = document.createElement('div');
productContent.classList.add('product__content');

dataEl.forEach(element => {
    const cardProduct = document.createElement('div');
    cardProduct.classList.add('product');

    const porductText = document.createElement('h2');
    porductText.classList.add('product__text');
    porductText.textContent = element.text;

    const porductScores = document.createElement('p');
    porductScores.classList.add('product__scores');
    porductScores.textContent = element.scores;

    const porductImg = document.createElement('img');
    porductImg.classList.add('product__img');
    porductImg.setAttribute('src', element.image);

    bodyContent.appendChild(productContent);
    productContent.appendChild(cardProduct);
    cardProduct.appendChild(porductImg);
    cardProduct.appendChild(porductText);
    cardProduct.appendChild(porductScores);
});

