/**
 * @jest-environment jsdom
 */
 const myDealsList = require("../myDealsList");
 const myRatingList = require("../myRatingList");
 const myStoresList = require("../myStoresList");
 const prices = require("../salePrice");
 const { createSearchElement } = require("../script"); 

describe('Testa a função createRatingElement', () => {
    it('Verifica se createRatingElement é uma função', () => {
        expect(typeof createSearchElement).toBe('function');
    })
    it('Verifica se appednRating retorna o valor esperado', () => {
        document.body.innerHTML = '<section id="section-search"></section>';
        createSearchElement(myDealsList, prices);
        expect(document.querySelectorAll('.container-game').length).toBe(5);
    })
})