import { MOVIES_API_URL } from './apiConf';

class MoviesApi {
  constructor(url) {
    this._url = url;
  }

  _checkResponse(response) {
    if (!response.ok) {
      return Promise.reject(response.status);
    }
    return response.json();
  }

  getInitialCards() {
    return fetch(`${this._url}`, {
      headers: {
        ...this._headers,
      },
    }).then((response) => this._checkResponse(response));
  }
}

export const moviesApi = new MoviesApi(MOVIES_API_URL);
