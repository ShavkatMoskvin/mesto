import Popup from "./Popup.js";

export default class PopupConfirm extends Popup {
  constructor(popup) {
    super(popup);
    this._form = popup.querySelector(".popup__form");
  }

  setSubmit(submit) {
    this._formSubmit = submit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
      this._formSubmit();
    });
  }
}
