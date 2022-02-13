const gamesContainer = document.querySelector('#games-container');
const ratingContainer = document.querySelector('#rating-container');
const sectionAll = document.querySelector('.everything');
const btn = document.querySelector('.btn');
const textInput = document.querySelector('#search');
const logoHeader = document.querySelector('#logo-header');
const sectionGames = document.querySelector('#section-search');
const API_KEY = 'edd790f37703711c2db0506a4a4f38aa';


const getGames = async (games) => {
  const url = `https://www.cheapshark.com/api/1.0/games?title=${games}`;
  const request = {
    method: 'GET',
    redirect: 'follow',
  }
  const response = await fetch(url, request);
  const data = await response.json();
  console.log(data)
  return data;
}
// getGames('batman');

const getData = async () => {
  const url = 'https://www.cheapshark.com/api/1.0/deals';
  const request = {
    method: 'GET',
    redirect: 'follow'
  };
  const response = await fetch(url, request);
  const data = await response.json();
  return data;
}

const getRating = async () => {
  const url = 'https://www.cheapshark.com/api/1.0/deals?sortBy=Metacritic';
  const request = {
    method: 'GET',
    redirect: 'follow'
  };
  const response = await fetch(url, request);
  const data = await response.json();
  return data;
}

const getLatestCurrency = async () => {
  const url = 'http://api.exchangeratesapi.io/v1/';
  const response = await fetch(`${url}/latest?access_key=${API_KEY}`)
  const data = await response.json();
  console.log(data);
  return data;
}

const createTextElement = (type, className, content) => {
  const element = document.createElement(type);
  element.className  = className;
  if (content === 'Metacritic Score: 0') {
    element.innerText = 'Não avaliado ainda.';
    return element;
  }
  element.innerText = content;
  return element;
}

const createImageElement = (type, className, content, link) => {
  const element = document.createElement(type);
  element.className  = className;
  element.src = content;
  element.href = link;
  return element;
}

const getStores = async () => {
  const url = 'https://www.cheapshark.com/api/1.0/stores';
  const request = {
    method: 'GET',
    redirect: 'follow'
  };
  const response = await fetch(url, request);
  const data = await response.json();
  // console.log(data);
  return data;
}

const getIcon = (id, listOfStores) => {
  obj = {
    storeName: listOfStores[parseInt(id) - 1].storeName,
    logo: `https://www.cheapshark.com/${listOfStores[parseInt(id) - 1].images.logo}`
  }
  return obj;
}

const removePrev = async (title) => {
  const listDeals = await getRating();
  for (let i = 1; i < listDeals.length; i += 1) {
    if (listDeals[i].title === listDeals[i-1].title) {
    ratingContainer.removeChild(title[i].parentNode);
    }
  }
  // console.log(listDeals);
};

const createRatingElement = async (listDeals, listOfStores, { rates:{ USD,BRL } }) => {
  testArray = [];
  /* const exchange = await getLatestCurrency();
  const { rates: { USD, BRL } } = exchange; */
  listDeals.forEach((element) => {
    const anchor = document.createElement('a');
    const url = `https://www.cheapshark.com/redirect?dealID=${element.dealID}`;
    anchor.href = url;
    anchor.target = '_blank';
    const storeId = element.storeID;
    const div = document.createElement('div');
    div.className = 'game-column'
    const divPrice = document.createElement('div');
    divPrice.className = 'div-price';
    const divImage = document.createElement('div');
    divImage.className = 'image-container';
    const divStore = document.createElement('div');
    divStore.className = 'store-container';
    divPrice.appendChild(createTextElement('p', 'sale-price', `R$ ${((element.salePrice / USD) * BRL).toFixed(2)}`));
    divPrice.appendChild(createTextElement('p', 'price', `R$ ${((element.normalPrice / USD) * BRL).toFixed(2)}`));
    div.appendChild(createTextElement('p', 'title-r', element.title));
    divImage.appendChild(anchor);
    anchor.appendChild(createImageElement('img', 'thumb', element.thumb, url))
    const objReturned = getIcon(storeId, listOfStores);
    // console.log(objReturned);
    divStore.appendChild(createTextElement('p', 'store-name', objReturned.storeName));
    divStore.appendChild(createImageElement('img', 'store-logo', objReturned.logo));
    div.appendChild(divImage);
    div.appendChild(divPrice);
    div.appendChild(divStore);
    div.appendChild(createTextElement('p', 'rate', `Metacritic Score: ${element.metacriticScore}`));
    document.querySelector('#rating-container').appendChild(div);
    testArray.push(div.innerHTML);
  })
 return console.log(testArray[0]);
}

const appendRating = async () => {
  const listDeals = await getRating();
  const listOfStores = await getStores();
  console.log(listDeals);
  const exchange = await getLatestCurrency();
  //const { rates: { USD, BRL } } = exchange;
  await createRatingElement(listDeals, listOfStores, exchange);
}



const createDataElement = async (listDeals, listOfStores, { rates:{ USD,BRL } }) => {
  listDeals.forEach((element) => {
    const anchor = document.createElement('a');
    const url = `https://www.cheapshark.com/redirect?dealID=${element.dealID}`;
    anchor.href = url;
    anchor.target = '_blank';
    const storeId = element.storeID;
    const div = document.createElement('div');
    div.className = 'game-column'
    const divPrice = document.createElement('div');
    divPrice.className = 'div-price';
    const divImage = document.createElement('div');
    divImage.className = 'image-container';
    const divStore = document.createElement('div');
    divStore.className = 'store-container';
    divPrice.appendChild(createTextElement('p', 'sale-price', `R$ ${((element.salePrice / USD) * BRL).toFixed(2)}`));
    divPrice.appendChild(createTextElement('p', 'price', `R$ ${((element.normalPrice / USD) * BRL).toFixed(2)}`));
    div.appendChild(createTextElement('p', 'title', element.title));
    divImage.appendChild(anchor);
    anchor.appendChild(createImageElement('img', 'thumb', element.thumb, url))
    const objReturned = getIcon(storeId, listOfStores);
    // console.log(objReturned);
    divStore.appendChild(createTextElement('p', 'store-name', objReturned.storeName));
    divStore.appendChild(createImageElement('img', 'store-logo', objReturned.logo));
    div.appendChild(divImage);
    div.appendChild(divPrice);
    div.appendChild(divStore);
    div.appendChild(createTextElement('p', 'rate', `Metacritic Score: ${element.metacriticScore}`));
    document.querySelector('#games-container').appendChild(div);
  })
}

const appendData = async () => {
  const listDeals = await getData();
  const listOfStores = await getStores();
  const exchange = await getLatestCurrency();
  await createDataElement(listDeals, listOfStores, exchange);

}

const searchGame = async () => {
  let gameName = localStorage.getItem('inputText');
  const listOfGames = await getGames(gameName);
  sectionGames.className = 'games-list'
  const exchange = await getLatestCurrency();
  const { rates: { USD, BRL } } = exchange;
  listOfGames.forEach((element) => {
    const anchor = document.createElement('a');
    const url = `https://www.cheapshark.com/redirect?dealID=${element.cheapestDealID}`;
    anchor.href = url;
    anchor.target = '_blank';
    const divGame = document.createElement('div');
    divGame.className = 'container-game';
    const gamePerTitle = document.createElement('div');
    gamePerTitle.className = 'game-search';
    const divImage = document.createElement('div');
    divImage.className = 'image-div';
    const gameTitle = document.createElement('div');
    gameTitle.className = 'game-title';
    const priceTitle = document.createElement('div');
    priceTitle.className = 'price-title';
    anchor.appendChild(createImageElement('img', 'search-gameThumb', element.thumb, url));
    divImage.appendChild(anchor);
    gameTitle.appendChild(createTextElement('p', 'search-gameName', element.external));
    priceTitle.appendChild(createTextElement('p', 'search-salePrice', `R$ ${((element.cheapest / USD) * BRL).toFixed(2)}`));
    gamePerTitle.appendChild(divImage);
    gamePerTitle.appendChild(gameTitle);
    gamePerTitle.appendChild(priceTitle);
    divGame.appendChild(gamePerTitle);
    sectionGames.appendChild(divGame);
  })
}

//logoHeader.addEventListener('click', () => window.location = '/');

if (window.location.href.includes('search.html')) {
  searchGame();
  logoHeader.addEventListener('click', () => window.location = '/');
  const btnSearch = document.querySelector('.btn-search')
  btnSearch.addEventListener('click', () => {
    sectionGames.innerHTML = '';
    console.log(textInput.value)
    localStorage.setItem('inputText', textInput.value);
    searchGame();
  })
}


window.onload = async () => {
  if (!window.location.href.includes('search.html')) {
    logoHeader.addEventListener('click', () => window.location = '/')
    await appendData();
    await appendRating();
    const title = document.querySelectorAll('.title-r')
    await removePrev(title);
    btn.addEventListener('click', () => {
      sectionAll.innerHTML = '';
      localStorage.setItem('inputText', textInput.value);
      window.location = "./search.html"
    })
  };
}
 
if (typeof module !== 'undefined') {
  module.exports = {
    createRatingElement,
    createDataElement,
  };
}