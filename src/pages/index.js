import  "./index.css"

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
  popupDeleteForm,
  profileAvatar,
  popupEditAvatar,
  profileChangeButton,
} from "../utils/constants.js";
let ownerId = null;

const api = new Api({
  address: "https://mesto.nomoreparties.co/v1/cohort-35",
  token: "20a5a8ca-81af-4923-972e-d4c632ea66c9",
});

api.getInitialData().then((data) => {
    api.getCards().then((result) => {
      section.renderItems(result);
    });

    const [userData] = data;
    ownerId = userData._id;
    userInfo.setUserInfo(userData);
    userInfo.setUserAvatar(userData);
  }).catch((err) => {console.log(err)})

function addCard(item) {
  const card = new Card(item, "#card", ownerId, api, {
    cardClick: (alt, link) => {
      card.getId();
      popupWithImage.open({ alt, link });
    },
    trashClick: () => {
      popupConfirm.open();
      popupConfirm.setSubmit(() => {
        popupConfirm.close();
        api
          .deleteCard(card.getId())
          .then((_) => {
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
)

const userInfo = new UserInfo(profileName, nameText, profileAvatar);
const popupWithImage = new PopupWithImage(openImage, popupImageTitle);
const popupConfirm = new PopupConfirm(popupDelete);

const openEditProfile = new PopupWithForm(popupProfileForm, {
  formSubmit: (data) => {
    openEditProfile.renderLoading(true);
    api.setUserInfo(data).catch((error) => {
      console.log(error);
    })
    .finally(() => {
      openEditProfile.renderLoading(false);
      openEditProfile.close();
    })
      
  },
});

const openAddCard = new PopupWithForm(popupAddCard, {
  formSubmit: (data) => {
    openAddCard.renderLoading(true);
    api.addCard(data).then(() => { 
      console.log(data)
      const card2 = addCard(data);
      const cardElement = card2.generateCard();
      section.addItem(cardElement);
     })
      .catch((err) => {
        console.log(err);
      })
      .finally((_) => {
        openAddCard.renderLoading(false);
        openAddCard.close();
      });
  },
});

const popupWithUpdateAvatarForm = new PopupWithForm(popupEditAvatar, {
  formSubmit: (data) => {
    popupWithUpdateAvatarForm.renderLoading(true);
    api.setUserAvatar(data)
      .catch((err) => {
        console.log(err);
      })
      .finally((_) => {
        popupWithUpdateAvatarForm.renderLoading(false);
        popupWithUpdateAvatarForm.close();
      });
  },
});

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

openEditProfile.setInputListeners();
popupWithUpdateAvatarForm.setInputListeners();
popupConfirm.setInputListeners();
popupWithImage.setInputListeners();
openAddCard.setInputListeners();

profileChangeButton.addEventListener("click", () => {
  popupWithUpdateAvatarForm.open();
});

profileEditButton.addEventListener("click", () => {
  inputTypeName.value = profileName.textContent;
  inputTypeText.value = nameText.textContent;
  openEditProfile.open();
});

profileAddButton.addEventListener("click", () => {
  openAddCard.open();
});
enableValidation(config);
