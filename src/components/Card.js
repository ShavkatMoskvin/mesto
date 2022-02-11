export default class Card {
  constructor(data, selector, userId, api, { cardClick, trashClick }) {
    this._link = data.link;
    this._name = data.name;
    this._id = data._id;
    this._likes = data.likes;
    this._owner = data.owner;
    this._userId = userId;
    this._api = api;
    this._selector = selector;
    this._cardClick = cardClick;
    this._trashClick = trashClick;
  }

  getId() {
    return this._id;
  }

  deleteCard() {
    this._card.remove();
    this._card = null;
  }

  generateCard() {
    this._card = this._getTemplate();
    this._image = this._card.querySelector(".element__image");

    this._image.src = this._link; // атрибут src
    this._image.alt = this._name; // атрибут alt

    this._card.querySelector(".element__title").textContent = this._name;

    this._renderLikes(this._card);
    this._renderBins(this._card);
    this._setEventListeners();

    return this._card;
  }

  _renderLikes(card) {
    this.likeButton = card.querySelector(".element__like");
    this.likeNumber = card.querySelector(".element__counter");

    for (let i = 0; i < this._likes.length; i++) {
      this.likeNumber.textContent = this._likes.length;
      if (this._likes[i]._id == this._userId)
        this.likeButton.classList.add(`element__like_active`);
    }

    this.likeButton.addEventListener("click", () => {
      if (this.likeButton.classList.contains("element__like_active")) {
        this._api.dislikeCard(this._id).then((data) => {
            this.likeNumber.textContent = data.likes.length;
            this.likeButton.classList.remove("element__like_active");
          }).catch((err) => console.log(err));
      } else {
        this._api.likeCard(this._id).then((data) => {
            this.likeNumber.textContent = data.likes.length;
            this.likeButton.classList.add("element__like_active");
          }).catch((err) => console.log(err));
      }
    });
  }

  _renderBins(card) {
    this.deleteButton = card.querySelector(".element__trash");
    if (this._owner._id != this._userId) {
      this.deleteButton.style.display = "none";
    }
  }

  _setEventListeners() {
    this._image.addEventListener("click", () => {
      this._cardClick(this._name, this._link);
    });

    this._card.querySelector(".element__trash").addEventListener("click", () => {
        this._trashClick();
      });
  }

  _getTemplate() {
    return document
      .querySelector(this._selector)
      .content.querySelector(".element")
      .cloneNode(true);
  }
}
