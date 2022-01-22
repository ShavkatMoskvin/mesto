import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popup) {
        super(popup);
        this._image = this._popup.querySelector(".popup__image");
        this._imageTitle = this._popup.querySelector('.popup__image-title');
      }

      open({alt, link}) {
        super.open();
        this._image.src = link;
        this._image.alt = alt;
        this._imageTitle.textContent = alt;
      }
}