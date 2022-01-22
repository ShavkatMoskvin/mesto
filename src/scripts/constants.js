export const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__input_type-error",
  errorClass: "form__input-error_active",
};
export const popupAddCard = document.querySelector("#addCard"); //попап добавления карточки
export const openImage = document.querySelector("#openImage"); //попап просмотра картинки
export const popupProfileForm = document.querySelector("#editProfile"); //попап формы
export const inputTypeName = document.querySelector(".popup__input_type_name"); //инпут формы личных данных
export const inputTypeText = document.querySelector(".popup__input_type_text"); //инпут формы личных данных
export const profileEditButton = document.querySelector(
  ".profile__edit-button"
);
export const profileAddButton = document.querySelector(".profile__add-button");
export const profileName = document.querySelector(".profile__title");
export const nameText = document.querySelector(".profile__subtitle");
export const elements = document.querySelector(".elements"); //контейнер для карточек
export const popupImageTitle = document.querySelector(".popup__image-title"); //подпись изображения попапа просмотра картинки
export const initialCards = [
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
