import Card from './Card.js'

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
const cardTemplate = document.querySelector("#card").content; //шаблон карточки
const popupImage = document.querySelector(".popup__image"); //изображение попапа просмотра картинки
const popupImageTitle = document.querySelector(".popup__image-title"); //подпись изображения попапа просмотра картинки
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
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

//Добавление карточки
function addCard(item) {
  const card = new Card(item, cardTemplate, openClickImage); // Создается новая карточка и записывается в переменную
  // Создаём карточку и возвращаем наружу
  return card.generateCard(); // возвращаем публичную функцию из класса Card
  /*
  const cardElement = cardTemplate.cloneNode(true);
  const elementLike = cardElement.querySelector(".element__like");
  const elementTrash = cardElement.querySelector(".element__trash");
  const elementImage = cardElement.querySelector(".element__image");

  elementImage.src = card.link;
  elementImage.alt = card.name;
  cardElement.querySelector(".element__title").textContent = card.name;

  elementLike.addEventListener("click", (evt) => {
    evt.target.classList.toggle("element__like_active");
  });

  elementTrash.addEventListener("click", () => {
    const cardItem = elementTrash.closest(".element");
    cardItem.remove();
  });

  elementImage.addEventListener("click", () => {
    popupImage.src = card.link;
    popupImage.alt = card.name;
    popupImageTitle.textContent = card.name;
    openPopup(openImage);
  });

  return cardElement;
  */
}

function openClickImage(){
  elementImage.addEventListener("click", () => {
    popupImage.src = item.link;
    popupImage.alt = item.name;
    popupImageTitle.textContent = item.name;
    openPopup(openImage);
  });
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
  popupForm.reset();

  closePopup(popupAddCard);
}

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

popupForm.addEventListener("submit", submitForm);
popupProfileForm.addEventListener("submit", handleProfileFormSubmit);
