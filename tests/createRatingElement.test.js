/**
 * @jest-environment jsdom
 */
const myDealsList = require("../myDealsList");
const myRatingList = require("../myRatingList");
const myStoresList = require("../myStoresList");
const prices = require("../salePrice");
const { createRatingElement } = require("../script"); 

describe('Testa a função createRatingElement', () => {
    it('Verifica se createRatingElement é uma função', () => {
        expect(typeof createRatingElement).toBe('function');
    })
    it('Verifica se appednRating retorna o valor esperado', () => {
        document.body.innerHTML = '<section id="rating-container"></section>';
        createRatingElement(myRatingList, myStoresList, prices);
        expect(document.querySelectorAll('.game-column').length).toBe(5);
        //expect(document.querySelectorAll('#rating-container')[0]).toEqual('<p class="title-r">Disco Elysium - The Final Cut</p><div class="image-container"><a href="https://www.cheapshark.com/redirect?dealID=fo%2BHT27GrgZT0g2USsPLQ2dVGTnq%2Fb%2FBnY2L2%2Bi8BWk%3D" target="_blank"><img class="thumb" src="https://cdn.cloudflare.steamstatic.com/steam/apps/632470/capsule_sm_120_alt_assets_5.jpg?t=1644249931"></a></div><div class="div-price"><p class="sale-price">$ 39.99</p><p class="price">$ 39.99</p></div><div class="store-container"><p class="store-name">GOG</p><img class="store-logo" src="https://www.cheapshark.com//img/stores/logos/6.png"></div><p class="rate">Metacritic Score: 97</p>')
    })
})








