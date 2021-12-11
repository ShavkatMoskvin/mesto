
const popups = document.querySelectorAll('.popup'); //все попапы
const popupAddCard = document.querySelector("#addCard");; //попап добавления карточки
const openImage = document.querySelector("#openImage"); //попап просмотра картинки
const popupProfileForm = document.querySelector('#editProfile'); //попап формы
const inputTypeName = document.querySelector(".popup__input_type_name"); //инпут формы личных данных
const inputTypeText = document.querySelector(".popup__input_type_text"); //инпут формы личных данных
const popupForm = document.querySelector("#formAddCard"); // форма добавления карточки
const popupInputName = popupForm.querySelector("#popupInput"); //инпут формы добавления карточки
const popupInputLink = popupForm.querySelector("#popupInputLink"); //инпут формы добавления карточки
const popupClose = document.querySelectorAll('.popup__close');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__title');
const nameText = document.querySelector('.profile__subtitle');
const elements = document.querySelector('.elements'); //контейнер для карточек
const cardTemplate = document.querySelector('#card').content; //шаблон карточки
const popupImage = document.querySelector('.popup__image'); //изображение попапа просмотра картинки
const popupImageTitle = document.querySelector('.popup__image-title'); //подпись изображения попапа просмотра картинки
const formErrorTitle = document.querySelector(`.popup__form_error-title`);
const formErrorLink =  document.querySelector('.popup__form_error-link');
const formErrorName =  document.querySelector('.popup__form_error-name');
const formErrorText =  document.querySelector('.popup__form_error-text');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//Валидация форм

//Показ ошибки
function showError(input, errorMessage, error){
  input.classList.add('popup__input_type-error');
  error.textContent = errorMessage;
  error.classList.add('form__input-error_active');
};
//Убрать ошибку
function hideError(input, error){
  input.classList.remove('popup__input_type-error');
  error.classList.remove('form__input-error_active');
  error.textContent = '';
};
//Проверка на валидность
const hasInvalidInput = (inputs) => {
  return Array.from(inputs).some((el) => !el.validity.valid);
}

function showError2(input, errorMessage, error){
  input.classList.add('popup__input_type-error');
  error.textContent = errorMessage;
  error.classList.add('form__input-error_active');
};

function hideError2(input, error){
input.classList.remove('popup__input_type-error');
error.classList.remove('form__input-error_active');
error.textContent = '';
};
//Функция ошибки
const checkInputValidity = (input, error) => {
if (!input.validity.valid) {
  console.log('error')
  showError2(input, input.validationMessage, error);
} else {
  console.log('good')
  hideError2(input, error);
}
};
//Неактивная кнопка если форма не валидна
const toggleButtonError = (inputs, button, inactiveButtonClass) => {
  console.log(hasInvalidInput(inputs))
  if (hasInvalidInput(inputs)) {
      button.classList.add(inactiveButtonClass);
      button.disabled = true;
  } else {
      button.classList.remove(inactiveButtonClass);
      button.disabled = false;
  }
}

const checkIfInputValid = (form, input, { inputErrorClass, errorClass }) => {
  if (!input.validity.valid) {
      showError(input, input.validationMessage, input);
  } else {
      hideError(input, input);
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
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});


//закрытие попапа
function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

//открытие попапа
function openPopup(popup) {
    popup.classList.add('popup_opened');
}    

popupForm.addEventListener('submit', submitForm);

//Добавление карточки
function addCard (card) {
    const cardElement = cardTemplate.cloneNode(true);
    const elementLike = cardElement.querySelector('.element__like');
    const elementTrash = cardElement.querySelector('.element__trash');
    const elementImage = cardElement.querySelector('.element__image');
        
    elementImage.src = card.link;
    elementImage.alt = card.name;
    cardElement.querySelector('.element__title').textContent = card.name;

    elementLike.addEventListener('click', evt => {
        evt.target.classList.toggle('element__like_active');
    });

    elementTrash.addEventListener('click', () => {
        const cardItem = elementTrash.closest('.element');
        cardItem.remove();
    });  

    elementImage.addEventListener('click', () => {
        popupImage.src = card.link;
        popupImage.alt = card.name;
        popupImageTitle.textContent = card.name;
        openPopup(openImage);
    });

    return cardElement;
}

function renderCard(item, container) {
    container.append(addCard(item));
}

initialCards.forEach(item => {
    renderCard(item, elements);
});

function handleProfileFormSubmit(event) {
    event.preventDefault();

    profileName.textContent = inputTypeName.value;
    nameText.textContent = inputTypeText.value;

    closePopup(popupProfileForm);
}    

function submitForm(event) {
    event.preventDefault();

    elements.prepend(addCard({link: popupInputLink.value, name: popupInputName.value}));
    popupForm.reset();

    closePopup(popupAddCard);
}  

//Обработчики  
profileEditButton.addEventListener('click', () => {
    inputTypeName.value = profileName.textContent;
    inputTypeText.value = nameText.textContent;
    openPopup(popupProfileForm);
});

profileAddButton.addEventListener('click', () => {
    openPopup(popupAddCard);
});

popupClose.forEach(btn => {
    btn.addEventListener('click', () => {
        closePopup(btn.closest('.popup'));
    });
});

popups.forEach(popup => {
    popup.addEventListener('click', event => {
        if (event.target === event.currentTarget) {
            closePopup(popup);
        }
    });
});

popupProfileForm.addEventListener('submit', handleProfileFormSubmit);

popupInputName.addEventListener('input', function (evt) {
  checkInputValidity(popupInputName, formErrorTitle)
  setEventListeners()
});
popupInputLink.addEventListener('input', function (evt) {
  checkInputValidity(popupInputLink, formErrorLink)
  setEventListeners()
})
inputTypeName.addEventListener('input', function (evt) {
  checkInputValidity(inputTypeName, formErrorName)
  setEventListeners()
})
inputTypeText.addEventListener('input', function (evt) {
  checkInputValidity(inputTypeText, formErrorText)
  setEventListeners()
})

/*enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});*/ 