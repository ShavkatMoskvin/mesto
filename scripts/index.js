const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const editButton = document.querySelector('.profile__edit-button');
const nameTitle = document.querySelector('.profile__title');
const nameText = document.querySelector('.profile__subtitle');
const popupField = document.querySelector('.popup__user-name');
const popupFieldText = document.querySelector('.popup__user-description');
const popupForm = document.querySelector('.popup__form')


function closePopup() {
  popup.classList.remove('popup__kebab-case');
}
function openPopup() {
  popupField.value = nameTitle.textContent;
  popupFieldText.value = nameText.textContent;
  popup.classList.add('popup__kebab-case');
}
 function submitForm (event) {
  event.preventDefault();
  nameTitle.textContent = popupField.value;
  nameText.textContent = popupFieldText.value;
  closePopup();
}
editButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);

popupForm.addEventListener('submit', submitForm);
