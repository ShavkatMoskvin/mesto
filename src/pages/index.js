import  "./index.css"

import UserInfo from "../components/UserInfo.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import {
  config,
  popupAddCard,
  openImage,
  popupProfileForm,
  inputTypeName,
  inputTypeText,
  profileEditButton,
  profileAddButton,
  profileName,
  nameText,
  elements,
  popupImageTitle,
  initialCards,
} from "../utils/constants.js";

function addCard(item) {
  const card = new Card(item, "#card", {
    cardClick: (alt, link) => {
      popupWithImage.open({ alt, link });
    },
  });
  return card.generateCard();
}

const userInfo = new UserInfo(profileName, nameText);

const popupWithImage = new PopupWithImage(openImage, popupImageTitle);
popupWithImage.setInputListeners();

const section = new Section(
  {
    renderItems: (data) => {
      section.addItem(addCard(data));
    },
  },
  elements
);
section.renderItems(initialCards);

const openEditProfile = new PopupWithForm(popupProfileForm, {
  formSubmit: (data) => {
    userInfo.setUserInfo(data);
    openEditProfile.close();
  },
});
openEditProfile.setInputListeners();

const openAddCard = new PopupWithForm(popupAddCard, {
  formSubmit: (cardItems) => {
    elements.addItemPrepend(createCard(cardItems));;
    openAddCard.close();
  },
});
openAddCard.setInputListeners();

const enableValidation = (config) => {
  const forms = Array.from(document.querySelectorAll(config.formSelector));
  forms.forEach((form) => {
    const validForm = new FormValidator(
      config,
      form,
      profileEditButton,
      profileAddButton
    );
    validForm.enableValidation();
  });
};

//Обработчики
profileEditButton.addEventListener("click", () => {
  inputTypeName.value = profileName.textContent;
  inputTypeText.value = nameText.textContent;
  openEditProfile.open();
});

profileAddButton.addEventListener("click", () => {
  openAddCard.open();
});
enableValidation(config);
