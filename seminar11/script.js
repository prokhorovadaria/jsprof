const parseData = JSON.parse(data);
const container = document.querySelector('div.container');

const template = news__template.content;
parseData.forEach(element => {
    const newTemplate = template.cloneNode(true);
    if (element.img) {
        newTemplate.querySelector('img.item__img').src = element.img;
    } else {
        newTemplate.querySelector('img.item__img').src = 'img/zaglushka.jpg'
    }
    newTemplate.querySelector('div.item__title').innerHTML=element.title;
    newTemplate.querySelector('div.item__text').innerHTML=element.text;
    newTemplate.querySelector('div.item__price').innerHTML=element.price;
    container.appendChild(newTemplate);
});


