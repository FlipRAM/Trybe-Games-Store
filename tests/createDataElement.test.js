/**
 * @jest-environment jsdom
 */
 const myDealsList = require("../myDealsList");
 const myRatingList = require("../myRatingList");
 const myStoresList = require("../myStoresList");
 const prices = require("../salePrice");
const { createDataElement } = require("../script");
 

describe('Testa a função createDataElement', () => {
    it('Verifica se createDataElement é uma função', () => {
        expect(typeof createDataElement).toBe('function');
    })
    it('Verifica se createDataElement retorna o valor esperado', () => {
        document.body.innerHTML = '<section id="games-container"></section>';
        createDataElement(myDealsList, myStoresList, prices);
        expect(document.querySelectorAll('.game-column').length).toBe(5);
    })
})