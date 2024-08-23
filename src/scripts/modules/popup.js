export function initializePopup() {
  const openPopupButton = document.querySelectorAll('.open-popup');
  const popup = document.getElementById('popup');
  const closePopupButton = document.querySelector('.popup__close');

  openPopupButton.forEach(function (button) {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      popup.style.display = 'flex';
    });
  });

  closePopupButton.addEventListener('click', function () {
    popup.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target == popup) {
      popup.style.display = 'none';
    }
  });
}
document.addEventListener('DOMContentLoaded', () => {
  initializePopup();
});
