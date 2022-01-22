import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popup, {formSubmit}) {
    super(popup);
    this._form = this._popup.querySelector(".popup__form");
    this._formSubmit = formSubmit;
  }

  close() {
    super.close();
    this._form.reset()
  }

  setInputListeners() {
    super.setInputListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._formSubmit(this._getInputValues());
    });
  }

  _getInputValues() {
    this._inputList = this._popup.querySelectorAll('.popup__input');
    this._formValues = {};

    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }
}
