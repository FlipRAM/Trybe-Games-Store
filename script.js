const gamesContainer = document.querySelector('#games-container');

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

const createImageElement = (type, className, content) => {
  const element = document.createElement(type);
  element.className  = className;
  element.src = content;
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
  console.log(data);
  return data;
}

const getIcon = (id, listOfStores) => {
  obj = {
    storeName: listOfStores[parseInt(id) - 1].storeName,
    logo: `https://www.cheapshark.com/${listOfStores[parseInt(id) - 1].images.logo}`
  }
  return obj;
}

const appendData = async () => {
  const listDeals = await getData();
  const listOfStores = await getStores();
  console.log(listDeals);
  listDeals.forEach((element) => {
    const storeId = element.storeID;
    const div = document.createElement('div');
    div.className = 'game-column'
    const divPrice = document.createElement('div');
    divPrice.className = 'div-price';
    const divImage = document.createElement('div');
    divImage.className = 'image-container';
    const divStore = document.createElement('div');
    divStore.className = 'store-container';
    divPrice.appendChild(createTextElement('p', 'sale-price', `$ ${element.salePrice}`));
    divPrice.appendChild(createTextElement('p', 'price', `$ ${element.normalPrice}`));
    div.appendChild(createTextElement('p', 'title', element.title));
    divImage.appendChild(createImageElement('img', 'thumb', element.thumb));
    const objReturned = getIcon(storeId, listOfStores);
    console.log(objReturned);
    divStore.appendChild(createTextElement('p', 'store-name', objReturned.storeName));
    divStore.appendChild(createImageElement('img', 'store-logo', objReturned.logo));
    div.appendChild(divImage);
    div.appendChild(divPrice);
    div.appendChild(divStore);
    div.appendChild(createTextElement('p', 'rate', `Metacritic Score: ${element.metacriticScore}`));
    gamesContainer.appendChild(div);
  })
}


window.onload = () => {
  appendData();
}
