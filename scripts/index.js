import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { config } from "./constants.js";

const popups = document.querySelectorAll(".popup"); //все попапы
const popupAddCard = document.querySelector("#addCard"); //попап добавления карточки
const openImage = document.querySelector("#openImage"); //попап просмотра картинки
const popupProfileForm = document.querySelector("#editProfile"); //попап формы
const inputTypeName = document.querySelector(".popup__input_type_name"); //инпут формы личных данных
const inputTypeText = document.querySelector(".popup__input_type_text"); //инпут формы личных данных
const popupForm = document.querySelector("#formAddCard"); // форма добавления карточки
const popupInputName = popupForm.querySelector("#title-card"); //инпут формы добавления карточки
const popupInputLink = popupForm.querySelector("#link-card"); //инпут формы добавления карточки
const popupClose = document.querySelectorAll(".popup__close");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const profileName = document.querySelector(".profile__title");
const nameText = document.querySelector(".profile__subtitle");
const elements = document.querySelector(".elements"); //контейнер для карточек
const popupImage = document.querySelector(".popup__image"); //изображение попапа просмотра картинки
const popupImageTitle = document.querySelector(".popup__image-title"); //подпись изображения попапа просмотра картинки
const addCardButton = document.querySelector("#addCardButton");
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

//закрытие попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", keyHandler);
}
//открытие попапа
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", keyHandler);
}
//закрытие попапа на ESC
function keyHandler(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}
//Добавление карточки
function addCard(item) {
  const card = new Card(item, "#card", openClickImage);
  return card.generateCard();
}

function openClickImage(name, link) {
  popupImage.src = link;
  popupImage.alt = name;
  popupImageTitle.textContent = name;
  openPopup(openImage);
}

function renderCard(item, container) {
  container.append(addCard(item));
}

initialCards.forEach((item) => {
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

  elements.prepend(
    addCard({ link: popupInputLink.value, name: popupInputName.value })
  );
  closePopup(popupAddCard);
  popupForm.reset();
}

const enableValidation = (config) => {
  const forms = Array.from(document.querySelectorAll(config.formSelector));
  const buttons = document.querySelectorAll('button[type="button"]')
  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    const validForm = new FormValidator(config, form, buttons);
    validForm.enableValidation();
  });
};

//Обработчики
profileEditButton.addEventListener("click", () => {
  inputTypeName.value = profileName.textContent;
  inputTypeText.value = nameText.textContent;
  openPopup(popupProfileForm);
});

profileAddButton.addEventListener("click", () => {
  openPopup(popupAddCard);
});

popupClose.forEach((btn) => {
  btn.addEventListener("click", () => {
    closePopup(btn.closest(".popup"));
  });
});

popups.forEach((popup) => {
  popup.addEventListener("click", (event) => {
    if (event.target === event.currentTarget) {
      closePopup(popup);
    }
  });
});

enableValidation(config);
popupForm.addEventListener("submit", submitForm);
popupProfileForm.addEventListener("submit", handleProfileFormSubmit);
