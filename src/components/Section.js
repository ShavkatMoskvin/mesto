export default class Section {
  constructor({ renderItems }, containerSelector) {
    this._renderer = renderItems;
    this._container = containerSelector;
  }

  //* Рендер карточек
  renderItems(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItemPrepend(element) {
    this._container.prepend(element);
  }

  //* Добавление карточки
  addItem(element) {
    this._container.append(element);
  }
}
