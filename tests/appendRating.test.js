/**
 * @jest-environment jsdom
 */
const myDealsList = require("../myDealsList");
const myRatingList = require("../myRatingList");
const myStoresList = require("../myStoresList");
const { createRatingElements } = require("../script");

describe('Testa a função appendRating', () => {
    it('Verifica se appednRating é uma função', () => {
        expect(typeof createRatingElements).toBe('function');
    })
    it('Verifica se appednRating retorna o valor esperado', () => {
        //expect(createRatingElements(myDealsList, myStoresList)).toEqual(['<p class="title-r">Disco Elysium - The Final Cut</p><div class="image-container"><a href="https://www.cheapshark.com/redirect?dealID=fo%2BHT27GrgZT0g2USsPLQ2dVGTnq%2Fb%2FBnY2L2%2Bi8BWk%3D" target="_blank"><img class="thumb" src="https://cdn.cloudflare.steamstatic.com/steam/apps/632470/capsule_sm_120_alt_assets_5.jpg?t=1644249931"></a></div><div class="div-price"><p class="sale-price">$ 39.99</p><p class="price">$ 39.99</p></div><div class="store-container"><p class="store-name">GOG</p><img class="store-logo" src="https://www.cheapshark.com//img/stores/logos/6.png"></div><p class="rate">Metacritic Score: 97</p>', '<p class="title-r">Disco Elysium - The Final Cut</p><div class="image-container"><a href="https://www.cheapshark.com/redirect?dealID=Uk9pH81%2BgPUwbkh9YzwMnYLT%2B%2FEaktqN8AgwMr6Y2wQ%3D" target="_blank"><img class="thumb" src="https://cdn.cloudflare.steamstatic.com/steam/apps/632470/capsule_sm_120_alt_assets_5.jpg?t=1644249931"></a></div><div class="div-price"><p class="sale-price">$ 15.99</p><p class="price">$ 39.99</p></div><div class="store-container"><p class="store-name">Steam</p><img class="store-logo" src="https://www.cheapshark.com//img/stores/logos/0.png"></div><p class="rate">Metacritic Score: 97</p>', '<p class="title-r">The Orange Box</p><div class="image-container"><a href="https://www.cheapshark.com/redirect?dealID=TZdIf%2BhNCxhdhp2S69CaIwYmzVwD2n3OR%2BiLDGnURRo%3D" target="_blank"><img class="thumb" src="https://cdn.cloudflare.steamstatic.com/steam/subs/469/capsule_sm_120.jpg?t=1577609887"></a></div><div class="div-price"><p class="sale-price">$ 19.99</p><p class="price">$ 19.99</p></div><div class="store-container"><p class="store-name">Steam</p><img class="store-logo" src="https://www.cheapshark.com//img/stores/logos/0.png"></div><p class="rate">Metacritic Score: 96</p>', '<p class="title-r">Half-Life 2</p><div class="image-container"><a href="https://www.cheapshark.com/redirect?dealID=Vz5eZMF1sKvs02I4cuEgrGnmM1r%2BkWHig0YMa0lJ0vM%3D" target="_blank"><img class="thumb" src="https://cdn.cloudflare.steamstatic.com/steam/apps/220/capsule_sm_120.jpg?t=1591063154"></a></div><div class="div-price"><p class="sale-price">$ 9.99</p><p class="price">$ 9.99</p></div><div class="store-container"><p class="store-name">Steam</p><img class="store-logo" src="https://www.cheapshark.com//img/stores/logos/0.png"></div><p class="rate">Metacritic Score: 96</p>', '<p class="title-r">Half-Life</p><div class="image-container"><a href="https://www.cheapshark.com/redirect?dealID=G%2BXAA0GGjaN4wXzRSpEpKtspbGp%2Bz3TJoNnhJI72Bug%3D" target="_blank"><img class="thumb" src="https://cdn.cloudflare.steamstatic.com/steam/apps/70/capsule_sm_120.jpg?t=1591048039"></a></div><div class="div-price"><p class="sale-price">$ 9.99</p><p class="price">$ 9.99</p></div><div class="store-container"><p class="store-name">Steam</p><img class="store-logo" src="https://www.cheapshark.com//img/stores/logos/0.png"></div><p class="rate">Metacritic Score: 96</p>',]);
        //expect(createRatingElements(myDealsList, myStoresList)).toEqual('<p class="title-r">Disco Elysium - The Final Cut</p><div class="image-container"><a href="https://www.cheapshark.com/redirect?dealID=fo%2BHT27GrgZT0g2USsPLQ2dVGTnq%2Fb%2FBnY2L2%2Bi8BWk%3D" target="_blank"><img class="thumb" src="https://cdn.cloudflare.steamstatic.com/steam/apps/632470/capsule_sm_120_alt_assets_5.jpg?t=1644249931"></a></div><div class="div-price"><p class="sale-price">$ 39.99</p><p class="price">$ 39.99</p></div><div class="store-container"><p class="store-name">GOG</p><img class="store-logo" src="https://www.cheapshark.com//img/stores/logos/6.png"></div><p class="rate">Metacritic Score: 97</p>');
        document.body.innerHTML = '<section id="rating-container"></section>';
        createRatingElements(myRatingList, myStoresList);
        expect(document.querySelectorAll('.game-column').length).toBe(5);
        //expect(document.querySelectorAll('#rating-container')[0]).toEqual('<p class="title-r">Disco Elysium - The Final Cut</p><div class="image-container"><a href="https://www.cheapshark.com/redirect?dealID=fo%2BHT27GrgZT0g2USsPLQ2dVGTnq%2Fb%2FBnY2L2%2Bi8BWk%3D" target="_blank"><img class="thumb" src="https://cdn.cloudflare.steamstatic.com/steam/apps/632470/capsule_sm_120_alt_assets_5.jpg?t=1644249931"></a></div><div class="div-price"><p class="sale-price">$ 39.99</p><p class="price">$ 39.99</p></div><div class="store-container"><p class="store-name">GOG</p><img class="store-logo" src="https://www.cheapshark.com//img/stores/logos/6.png"></div><p class="rate">Metacritic Score: 97</p>')
    })
})








