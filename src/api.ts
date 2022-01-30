const BASE_URL = `https://api.coinpaprika.com/v1`;

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) =>
    response.json()
  );
}

export function fetchCoinInfo(coindId: string) {
    return fetch(`${BASE_URL}/coins/${coindId}`).then((response) =>
        response.json());
}

export function fetchCoinTicker(coinId: string) {
    return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
        response.json());
}