import { reviews } from '../constants';

function reSize(width, height) {
  const svgElement = document.querySelector('.dynamic-size');
  if (svgElement) {
    svgElement.setAttribute('width', width);
    svgElement.setAttribute('height', height);
  } else {
    console.error('SVG element with class "dynamic-size" not found.');
  }
}

let currentReviewIndex = 0;

export function showNextReview() {
  const review = reviews[currentReviewIndex];

  const commentElement = document.querySelector('.header__comment');
  const dataElement = document.querySelector('.header__data');
  const reviewContainer = document.querySelector('.header__review');

  if (!commentElement || !dataElement || !reviewContainer) {
    return;
  }

  reviewContainer.style.opacity = '0';

  setTimeout(() => {
    commentElement.innerHTML = review.comment;
    dataElement.innerHTML = `${review.author}<br />${review.date}`;

    const textLength = review.comment.length;
    if (textLength < 180) {
      reSize('380', '300');
    } else {
      reSize('400', '350');
    }

    reviewContainer.style.opacity = '1';

    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
  }, 500);
}

document.addEventListener('DOMContentLoaded', () => {
  setInterval(showNextReview, 3000);
  showNextReview();
});
