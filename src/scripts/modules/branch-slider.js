const startPhotoRotation = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const photos = document.querySelectorAll('.branch-info__photo');
    let currentPhotoIndex = 0;

    const showNextPhoto = () => {
      if (photos.length === 0) return;
      photos[currentPhotoIndex].classList.remove('active');
      currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
      photos[currentPhotoIndex].classList.add('active');
    };

    setInterval(showNextPhoto, 7000);
  });
};

startPhotoRotation();
export default startPhotoRotation;
