const popups = document.querySelectorAll('.popup'); //все попапы
const popupAddCard = document.querySelector("#addCard");; //попап добавления карточки
const popupImage = document.querySelector("#openImage"); //попап просмотра картинки
const popupProfileForm = document.querySelector('#editProfile'); //попап формы
const inputTypeName = document.querySelector(".popup__input_type_name"); //инпут формы личных данных
const inputTypeJob = document.querySelector(".popup__input_type_text"); //инпут формы личных данных
const formCard = document.querySelector("#popupForm"); // форма добавления карточки
const inputTypePlaceName = formCard.querySelector("#popupInput"); //инпут формы добавления карточки
const inputTypeLink = formCard.querySelector("#popupInputLink"); //инпут формы добавления карточки
const popupCloseButtons = document.querySelectorAll('.popup__close');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__title');
const job = document.querySelector('.profile__subtitle');
const cardsContainer = document.querySelector('.elements'); //контейнер для карточек
const cardTemplate = document.querySelector('#card').content; //шаблон карточки
const picture = document.querySelector('.popup__image'); //изображение попапа просмотра картинки
const picCaption = document.querySelector('.popup__image-title'); //подпись изображения попапа просмотра картинки
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
//Функции

//открытие попапа
function openPopup(popup) {
    popup.classList.add('popup_opened');
}    

//закрытие попапа
function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

//создание карточки
function addCard (card) {
    const cardElement = cardTemplate.cloneNode(true);
    const likeButton = cardElement.querySelector('.element__like');
    const deleteButton = cardElement.querySelector('.element__trash');
    const cardPic = cardElement.querySelector('.element__image');
        
    cardPic.src = card.link;
    cardPic.alt = card.name;
    cardElement.querySelector('.element__title').textContent = card.name;

    likeButton.addEventListener('click', evt => {
        evt.target.classList.toggle('element__like_active');
    });

    deleteButton.addEventListener('click', () => {
        const cardItem = deleteButton.closest('.element');
        cardItem.remove();
    });  

    cardPic.addEventListener('click', () => {
        picture.src = card.link;
        picture.alt = card.name;
        picCaption.textContent = card.name;
        openPopup(popupImage);
    });

    return cardElement;
}

//функция отрисовки карточек
function renderCard(item, container) {
    container.append(addCard(item));
}

//отрисовка всех карточек
initialCards.forEach(item => {
    renderCard(item, cardsContainer);
});

//форма личных данных
function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    profileName.textContent = inputTypeName.value;
    job.textContent = inputTypeJob.value;

    closePopup(popupProfileForm);
}    

//отрисовка новой карточки
function handleCardFormSubmit(evt) {
    evt.preventDefault();

    cardsContainer.prepend(addCard({link: inputTypeLink.value, name: inputTypePlaceName.value}));

    formCard.reset();

    closePopup(popupAddCard);
}  


//Обработчики

profileEditButton.addEventListener('click', () => {
    inputTypeName.value = profileName.textContent;
    inputTypeJob.value = job.textContent;
    openPopup(popupProfileForm);
});

profileAddButton.addEventListener('click', () => {
    openPopup(popupAddCard);
});

popupCloseButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        closePopup(btn.closest('.popup'));
    });
});

//закрытие попапа при клике на overlay
popups.forEach(popup => {
    popup.addEventListener('click', event => {
        if (event.target === event.currentTarget) {
            closePopup(popup);
        }
    });
});

popupProfileForm.addEventListener('submit', handleProfileFormSubmit);

formCard.addEventListener('submit', handleCardFormSubmit);
//--------------------------------------------------------------------------------------------------------------------//