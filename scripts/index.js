const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close')
const editButton = document.querySelector('.profile__edit-button')
const nameText = document.querySelector('.profile__title')
const popupField = document.querySelector('.popup__input_name')
const formButton = document.querySelector('.popup__button')

editButton.addEventListener('click', function(){
    popup.classList.add('popup__isOpen')
})

popupClose.addEventListener('click', function(){
    popup.classList.remove('popup__isOpen')
})
function submitForm(event){
    
    
    nameText.textContent = formButton.nodeValue
    event.preventDefault();
    //closePopup()
}