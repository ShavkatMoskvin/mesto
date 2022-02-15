import "./index.css";

import Api from "../components/Api.js";
import UserInfo from "../components/UserInfo.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupConfirm from "../components/PopupConfirm.js";
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
  popupDelete,
  profileAvatar,
  popupEditAvatar,
  profileChangeButton,
} from "../utils/constants.js";
let ownerId = null;

const api = new Api({
  address: "https://mesto.nomoreparties.co/v1/cohort-35",
  token: "20a5a8ca-81af-4923-972e-d4c632ea66c9",
});

api
  .getInitialData()
  .then(([userData, cards]) => {
    ownerId = userData._id;
    userInfo.setUserInfo(userData);
    userInfo.setUserAvatar(userData);
    section.renderItems(cards);
  })
  .catch((err) => {
    console.log(err);
  });

function addCard(item, condition) {
  const card = new Card(item, "#card", ownerId, api, condition, {
    cardClick: (alt, link) => {
      popupWithImage.open({ alt, link });
    },
    trashClick: () => {
      popupConfirm.open();
      popupConfirm.setSubmit(() => {
        api
          .deleteCard(card.getId())
          .then((_) => {
            popupConfirm.close();
            card.deleteCard();
          })
          .catch((err) => {
            console.log("Не ваша карточка или что-то пошло не так,", err);
          });
      });
    },
  });

  return card.generateCard();
}

const section = new Section(
  {
    renderItems: (data) => {
      section.addItem(addCard(data));
    },
  },
  elements
);

const userInfo = new UserInfo(profileName, nameText, profileAvatar);
const popupWithImage = new PopupWithImage(openImage, popupImageTitle);
const popupConfirm = new PopupConfirm(popupDelete);

const openEditProfile = new PopupWithForm(popupProfileForm, {
  formSubmit: (data) => {
    openEditProfile.renderLoading(true);
    api
      .setUserInfo(data)
      .then((res) => {
        userInfo.setUserInfo(res);
        openEditProfile.close();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        openEditProfile.renderLoading(false);
      });
  },
});

const openAddCard = new PopupWithForm(popupAddCard, {
  formSubmit: (data) => {
    openAddCard.renderLoading(true);
    api
      .addCard(data)
      .then((res) => {
        section.addItemPrepend(addCard(res));
        openAddCard.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally((_) => {
        openAddCard.renderLoading(false);
      });
  },
});

const popupWithUpdateAvatarForm = new PopupWithForm(popupEditAvatar, {
  formSubmit: (data) => {
    popupWithUpdateAvatarForm.renderLoading(true);
    api
      .setUserAvatar(data)
      .then((res) => {
        userInfo.setUserAvatar(res);
        popupWithUpdateAvatarForm.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally((_) => {
        popupWithUpdateAvatarForm.renderLoading(false);
      });
  },
});

const formValidators = [];

const resetValidation = new FormValidator(config, popupProfileForm);
resetValidation.enableValidation();

// Включение валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);

    formValidators.push(validator);
    validator.enableValidation();
  });
};
// enableValidation(config);

// const enableValidation = (config) => {
//   const forms = Array.from(document.querySelectorAll(config.formSelector));
//   forms.forEach((form) => {
//     const validForm = new FormValidator(config, form);
//     validForm.enableValidation();
//   });
// };

//Обработчики
enableValidation(config);

openEditProfile.setEventListeners();
popupWithUpdateAvatarForm.setEventListeners();
popupConfirm.setEventListeners();
popupWithImage.setEventListeners();
openAddCard.setEventListeners();

profileChangeButton.addEventListener("click", () => {
  formValidators[3].resetValidation()
  popupWithUpdateAvatarForm.open();
});

profileEditButton.addEventListener("click", () => {
  api
    .getUserInfo()
    .then((userInfo) => {
      openEditProfile.open();
      inputTypeName.value = userInfo.name;
      inputTypeText.value = userInfo.about;
      formValidators[0].resetValidation()
    })
    .catch((error) => {
      console.log(error);
    });
});

profileAddButton.addEventListener("click", () => {
  formValidators[1].resetValidation()
  openAddCard.open();
});
