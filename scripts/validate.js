//Показ ошибки
function showError(input, errorMessage, error, inputErrorClass, errorClass) {
  input.classList.add(inputErrorClass);
  error.textContent = errorMessage;
  error.classList.add(errorClass);
}
//Убрать ошибку
function hideError(input, error, inputErrorClass, errorClass ) {
  input.classList.remove(inputErrorClass);
  error.classList.remove(errorClass);
  error.textContent = "";
}
//Проверка на валидность
const hasInvalidInput = (inputs) => {
  return Array.from(inputs).some((el) => !el.validity.valid);
};
//Функция ошибки
const checkInputValidity = (input, error) => {
  if (!input.validity.valid) {
    console.log("error");
    showError(input, input.validationMessage, error);
  } else {
    console.log("good");
    hideError(input, error);
  }
};
//Неактивная кнопка если форма не валидна
const toggleButtonError = (inputs, button, inactiveButtonClass) => {
  console.log(hasInvalidInput(inputs));
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
    showError(input, input.validationMessage, input);
  } else {
    hideError(input, input);
  }
};

const setInputListeners = (
  form,
  { inputSelector, submitButtonSelector, inactiveButtonClass, ...rest }
) => {
  const inputs = form.querySelectorAll(inputSelector);
  const submitButton = form.querySelector(submitButtonSelector);

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      checkIfInputValid(form, input, rest);
      toggleButtonError(inputs, submitButton, inactiveButtonClass);
    });
  });
};

const enableValidation = ({ formSelector, ...rest }) => {
  const forms = document.querySelectorAll(formSelector);

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
    });

    setInputListeners(form, rest);
  });
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__input_type-error",
  errorClass: "form__input-error_active",
});

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
});
