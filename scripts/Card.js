export default class Card {
<<<<<<< HEAD
  constructor(data, selector, cardClick) {
      this._link = data.link;
      this._name = data.name;
      this._selector = selector;
      this._cardClick = cardClick;
  }

  _getTemplate() {
    const cardItem = this._selector.content.querySelector('.element').cloneNode(true); // нашли и клонироввали шаблон карточки
    return cardItem;
  }

  generateCard() {
    this._card = this._getTemplate(); // записали разметку в приватное поле _card
    this._image = this._card.querySelector('.element__image'); // нашли картинку в карточке для записи данных

    // записываем данные
    this._image.src = this._link; // атрибут src она же ссылка на картинку "места"
    this._image.alt = this._name; // атрибут alt он же название "места"

    this._card.querySelector('.element__title').textContent = this._name; // записали в title названия места

    this._setEventListeners();
    return this._card; //вернули карточку
    };

  _setEventListeners() { // метод отбработчик или слушатель клика
    this._image.addEventListener('click', () => { // запись данных по карточке
        this._cardClick(this._name, this._link);
    });

    this._card.querySelector('.element__like').addEventListener('click', function(e) { // поставить лайк
        e.target.classList.toggle('element__like_active');
    });

    this._card.querySelector('.element__trash').addEventListener('click', () => { // удалить карточку
        this._card.remove();
    });

};
  
=======
    constructor(selector, elements, data, title){
        this._selector = selector;
        this._elements = elements;
        this._title = title;
        this._link = data.link;
    }

    _getTemplate(){
        return document.querySelector(this._selector).content.querySelector(".element").cloneNode(true)
    }

    getView(){
        return this._getTemplate()
    }
>>>>>>> 365c3cd128f4881bee23df9ce7424d14cae6f275
}