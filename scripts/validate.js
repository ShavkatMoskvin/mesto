//Показ ошибки
const showError = (form, input, errorMessageText, errorMessageClass, inputErrorClass) => {
  const errorMessage = form.querySelector(`#${input.id}-error`);
  errorMessage.textContent = errorMessageText;
  errorMessage.classList.add(errorMessageClass);
  input.classList.add(inputErrorClass);
}
//Убрать ошибку
const hideError = (form, input, errorMessageClass, inputErrorClass) => {
  const errorMessage = form.querySelector(`#${input.id}-error`);
  errorMessage.textContent = '';
  errorMessage.classList.remove(errorMessageClass);
  input.classList.remove(inputErrorClass);
}
//Проверка на валидность
const hasInvalidInput = (inputs) => {
  return Array.from(inputs).some((el) => !el.validity.valid);
};
//Функция ошибки
const checkInputValidity = (input, error) => {
  if (!input.validity.valid) {
    showError(input, input.validationMessage, error);
  } else {
    hideError(input, error);
  }
};
//Неактивная кнопка если форма не валидна
const toggleButtonError = (inputs, button, inactiveButtonClass) => {
  if (hasInvalidInput(inputs)) {
    button.classList.add(inactiveButtonClass);
    button.disabled = true;
  } else {
    button.classList.remove(inactiveButtonClass);
    button.disabled = false;
  }
};

const checkIfInputValid = (form, input, { inputErrorClass, errorClass }) => {
  if (!input.validity.valid) {
      showError(form, input, input.validationMessage, errorClass, inputErrorClass);
  } else {
      hideError(form, input, errorClass, inputErrorClass);
  }
}

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

const enableValidation = ({ formSelector, ...rest }) => {
  const forms = document.querySelectorAll(formSelector);

  forms.forEach((form) => {
      form.addEventListener('submit', (event) => {
          event.preventDefault();
      });

      setInputListeners(form, rest);
  });
}

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__input_type-error",
  errorClass: "form__input-error_active",
});
/*
//Обработчики
popupInputName.addEventListener("input", function (evt) {
  checkInputValidity(popupInputName, formErrorTitle);
  setEventListeners();
});
popupInputLink.addEventListener("input", function (evt) {
  checkInputValidity(popupInputLink, formErrorLink);
  setEventListeners();
});
inputTypeName.addEventListener("input", function (evt) {
  checkInputValidity(inputTypeName, formErrorName);
  setEventListeners();
});
inputTypeText.addEventListener("input", function (evt) {
  checkInputValidity(inputTypeText, formErrorText);
  setEventListeners();
});*/
