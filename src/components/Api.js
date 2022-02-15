export default class Api {
  constructor({ address, token }) {
    this._address = address;
    this._token = token;
  }

  likeCard(id) {
    return fetch(`${this._address}/cards/likes/${id}`, {
      method: 'PUT',
      headers: {
        authorization: this._token,
      }
    }).then(this._handleOriginalResponse)
  }

  dislikeCard(id) {
    return fetch(`${this._address}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
      }
    }).then(this._handleOriginalResponse)
  }

  getUserInfo() {
    return fetch(`${this._address}/users/me`, {
      method: 'GET',
      headers: {
        authorization: this._token,
      }
    }).then(this._handleOriginalResponse)
  }

  setUserInfo(data) {
    return fetch(`${this._address}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    }).then(this._handleOriginalResponse)
  }

  setUserAvatar(data) {
    return fetch(`${this._address}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(this._handleOriginalResponse)
  }
  
  getInitialData() {
    return Promise.all([this.getUserInfo(), this.getCards()]);
  }

  getCards() {
    return fetch(`${this._address}/cards`, {
      headers: {
        authorization: this._token,
      },
    }).then(this._handleOriginalResponse);
  }

  addCard(data) {
    return fetch(`${this._address}/cards`, {
      method: "POST",
      headers: {
        authorization: this._token,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      }),
    }).then(this._handleOriginalResponse);
  }

  deleteCard(id){
    return fetch(`${this._address}/cards/${id}`, {
        method: "DELETE",
        headers: {
          authorization: this._token,
          "Content-type": "application/json",
        },
      }).then(this._handleOriginalResponse);
  }

  _handleOriginalResponse(res){
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`ошибка:${res.status}`);
  }
}
