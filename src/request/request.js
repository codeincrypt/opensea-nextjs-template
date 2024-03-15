const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
const NEXT_PUBLIC_OPENSEA_APIKEY = process.env.NEXT_PUBLIC_OPENSEA_APIKEY;

const headers = { 
  'Content-Type': 'application/json',
  'accept': 'application/json',
  'x-api-key': NEXT_PUBLIC_OPENSEA_APIKEY
}

export const getAllCollections = async () => {
  let url = `${BASE_URL}/api/v2/collections`
  const response = await fetch(url, { method: 'GET', headers});
  const data = await response.json();
  return data.collections
}

export const getCollectionNft = async (slug) => {
  let url = `${BASE_URL}/api/v2/collection/${slug}/nfts?limit=20`
  const response = await fetch(url, { method: 'GET', headers});
  const data = await response.json();
  return data.nfts
};

export const getCollectionView = async (slug) => {
let url = `${BASE_URL}/api/v2/collections/${slug}`
  const response = await fetch(url, { method: 'GET', headers});
  const data = await response.json();
  return data
}

export const getCollectionData = async (slug) => {
  let url = `${BASE_URL}/api/v2/collections/${slug}/stats`
  const response = await fetch(url, { method: 'GET', headers});
  const data = await response.json();
  return data.nfts
};

export const getNftView = async (slug) => {
  let url = `${BASE_URL}/api/v2/chain/${slug[0]}/contract/${slug[1]}/nfts/${slug[2]}`;
  const response = await fetch(url, { method: 'GET', headers});
  const data = await response.json();
  return data
};

export const getConvertToUSD = async (currency) => {
  let url = `https://min-api.cryptocompare.com/data/price?fsym=${currency}&tsyms=USD`;
  const response = await fetch(url, {method: 'GET', 'Content-Type': 'application/json'});
  const data = await response.json();
  return data
};

export const getItemActivity = async (slug) => {
  let url = `${BASE_URL}/api/v2/events/chain/${slug[0]}/contract/${slug[1]}/nfts/${slug[2]}`;
  const response = await fetch(url, { method: 'GET', headers});
  const data = await response.json();
  return data
};

export const getBestOffer = async (slug) => {
  let url = `${BASE_URL}/api/v2/listings/collection/${slug}/nfts/${identifier}/best`;
  const response = await fetch(url, { method: "GET", headers });
  const data = await response.json();
  return data
};

export const getNftByAddressChain = async (chain, address) => {
  let url = `${BASE_URL}/api/v2/chain/${chain}/account/${address}/nfts`;
  const response = await fetch(url, { method: "GET", headers });
  const data = await response.json();
  return data
};

export const getNftByAddress = async (slug) => {
  let url = `${BASE_URL}/api/v2/accounts/${slug}`;
  const response = await fetch(url, { method: "GET", headers });
  const data = await response.json();
  return data
};