const BASE_SCALE = 1;
const HALF_SCALE = 0.5;
let noHidden = false;

function handleNoClick() {
  noHidden = !noHidden;
  const noButton = document.querySelector('.no-button');
  noButton.classList.toggle("hidden-no-button", noHidden);

  if (!noVisible) return;

  const noButtonEl = document.createElement('button');
  Object.assign(noButtonEl, {
    className: 'no-button',
    innerText: 'No',
  });
  noButtonEl.style.setProperty('transform', `scale(${BASE_SCALE})`);
  noButtonEl.addEventListener('click', handleNoClick);
  document.body.appendChild(noButtonEl);
}

function handleYesClick() {
  const yesButton = document.querySelector('.yes-button');
  const gifContainer = document.querySelector('.gif-container');

  // Replace the existing GIF with a new one
  gifContainer.innerHTML = `
    <h1>that's kinda gay ;)</h1>
    <img src="images/IMG_8900.JPG" alt="Happy Valentine's Day!" />
  `;

  // Disable the Yes button after clicking
  yesButton.disabled = true;

  noVisible = false;

  const noButtonEl = document.querySelector('.no-button');
  if (noButtonEl) {
    noButtonEl.parentNode.removeChild(noButtonEl);
  }
}