const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");
const editButton = document.querySelector(".profile__edit-button");
const Name = document.querySelector(".profile__title");
const nameText = document.querySelector(".profile__subtitle");
const popupField = document.querySelector(".popup__input_name");
const popupFieldText = document.querySelector(".popup__input_text");
const formButton = document.querySelector(".popup__button");

function closePopup() {
  popup.classList.remove("popup__isOpen");
}
function openPopup() {
  popupField.value = Name.textContent;
  popupFieldText.value = nameText.textContent;
  popup.classList.add("popup__isOpen");
}

editButton.addEventListener("click", openPopup);
popupClose.addEventListener("click", closePopup);

formButton.addEventListener("click", function (event) {
  Name.textContent = popupField.value;
  nameText.textContent = popupFieldText.value;
  event.preventDefault();
  closePopup();
});
