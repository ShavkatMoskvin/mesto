export default class Card {
  constructor(data, selector, cardClick) {
      this._link = data.link;
      this._name = data.name;
      this._selector = selector;
      this._cardClick = cardClick;
  }

  _getTemplate() {
      return document.querySelector(this._selector)
      .content
      .querySelector('.element')
      .cloneNode(true);
    /*const cardItem = this._selector.content.querySelector('.element').cloneNode(true)
    return cardItem;*/
  }

  generateCard() {
    this._card = this._getTemplate();
    this._image = this._card.querySelector('.element__image');

    this._image.src = this._link; // атрибут src 
    this._image.alt = this._name; // атрибут alt 

    this._card.querySelector('.element__title').textContent = this._name; 

    this._setEventListeners();
    return this._card;
    };

  _setEventListeners() {
    this._image.addEventListener('click', () => {
        this._cardClick(this._name, this._link);
    });

    this._card.querySelector('.element__like').addEventListener('click', function(e) {
        e.target.classList.toggle('element__like_active');
    });

    this._card.querySelector('.element__trash').addEventListener('click', () => {
        this._card.remove();
    });

    };
}