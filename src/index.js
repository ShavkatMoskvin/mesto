import UserInfo from "./scripts/UserInfo.js";
import Card from "./scripts/Card.js";
import FormValidator from "./scripts/FormValidator.js";
import Section from "./scripts/Section.js";
import PopupWithImage from "./scripts/PopupWithImage.js";
import PopupWithForm from "./scripts/PopupWithForm.js";
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
} from "./scripts/constants.js";

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
  formSubmit: (data) => {
    elements.prepend(addCard({ link: data.text, name: data.name }));
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
