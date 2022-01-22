export default class FormValidator {
  constructor(config, form, editButton, addButton, inputFieldAddCard) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._form = form;
    this._editButton = editButton;
    this._addButton = addButton;
    this._inputFieldAddCard = inputFieldAddCard;
  }
  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setInputListeners();
  }

  //Показ ошибки
  _showError(input) {
    const errorMessage = this._form.querySelector(`#${input.id}-error`);
    errorMessage.textContent = input.validationMessage;
    errorMessage.classList.add(this._errorClass);
    input.classList.add(this._inputErrorClass);
  }
  //Убрать ошибку
  _hideError(input) {
    const errorMessage = this._form.querySelector(`#${input.id}-error`);
    errorMessage.textContent = "";
    errorMessage.classList.remove(this._errorClass);
    input.classList.remove(this._inputErrorClass);
  }

  //Функция ошибки
  _checkInputValid(input) {
    if (!input.validity.valid) {
      this._showError(input);
    } else {
      this._hideError(input);
    }
  }

  //Проверка на валидность
  _hasInvalidInput = (inputs) => {
    return Array.from(inputs).some((el) => !el.validity.valid);
  };

  //Неактивная кнопка если форма не валидна
  _toggleButtonError() {
    if (this._hasInvalidInput(this._inputs)) {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.disabled = true;
    } else {
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.disabled = false;
    }
  }
  _setInputListeners() {
    this._inputs = this._form.querySelectorAll(this._inputSelector);
    this._submitButton = this._form.querySelector(this._submitButtonSelector);

    this._inputs.forEach((input) => {
      //Диактвировать кнопку сохр. при нажатии кнопки "Редактировать"
      this._editButton.addEventListener("click", () => {
        this._toggleButtonError();
        this._hideError(input);
      });
      //Диактвировать кнопку сохр. при нажатии кнопки "Добавить"
      this._addButton.addEventListener("click", () => {
        this._toggleButtonError();
        this._hideError(input);
      });
      //Валидация при вводе
      input.addEventListener("input", () => {
        this._checkInputValid(input);
        this._toggleButtonError();
      });
    });
  }
}
