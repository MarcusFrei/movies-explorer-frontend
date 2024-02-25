import { MAIN_API_URL } from './apiConf';

class MainApi {
  constructor() {
    this._url = MAIN_API_URL;
    this._headers = {
      'Content-Type': 'application/json',
    };
  }

  _checkResponse(response) {
    if (!response.ok) {
      return Promise.reject(response.status);
    }
    return response.json();
  }

  getInitialCards() {
    return fetch(`${this._url}/movies`, {
      headers: {
        ...this._headers,
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }).then((response) => this._checkResponse(response));
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: {
        ...this._headers,
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }).then((response) => this._checkResponse(response));
  }

  editProfile(info) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        ...this._headers,
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify({
        name: info.name,
        email: info.email,
      }),
    }).then((response) => this._checkResponse(response));
  }

  addMovieInSaved(movie) {
    const movieToSend = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.duration.toString(),
      description: movie.description,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: 'https://example.com/thumbnail.jpg',
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    };
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: {
        ...this._headers,
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify(movieToSend),
    }).then((response) => this._checkResponse(response));
  }

  deleteMovieFromSaved(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        ...this._headers,
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }).then((response) => this._checkResponse(response));
  }

  register = (name, email, password) => {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    }).then((response) => this._checkResponse(response));
  };

  checkToken = (token) => {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => this._checkResponse(response));
  };

  login = (email, password) => {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((response) => this._checkResponse(response));
  };
}

export const mainApi = new MainApi();
