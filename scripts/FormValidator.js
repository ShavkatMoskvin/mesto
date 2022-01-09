export default class FormValidator {
  constructor(config, form,) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._form = form;
  }
    enableValidation() {
    this._form.addEventListener('submit', (evt) => {
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
  /*
  const setInputListeners = (form, { inputSelector, submitButtonSelector, inactiveButtonClass, ...rest }) => {
    const inputs = form.querySelectorAll(inputSelector);
    const submitButton = form.querySelector(submitButtonSelector);
  
    inputs.forEach((input) => {
        input.addEventListener('input', () => {
            checkIfInputValid(form, input, rest);
            toggleButtonError(inputs, submitButton,inactiveButtonClass);
        });
    });
  }
  */
  _setInputListeners() {
    this._inputs = this._form.querySelectorAll(this._inputSelector);
    this._submitButton = this._form.querySelector(this._submitButtonSelector);

    this._inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValid(input);
        this._toggleButtonError();
      })
    })
  }


}
const config = ({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_inactive",
    inputErrorClass: "popup__input_type-error",
    errorClass: "form__input-error_active",
  });

const enableValidation = (config) => {
    const forms = Array.from(document.querySelectorAll(config.formSelector));
    console.log(forms)
    forms.forEach((form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
        });
        const validForm = new FormValidator(config, form);
        validForm.enableValidation();
        validForm._toggleButtonError()
    });
  }

  enableValidation(config)

