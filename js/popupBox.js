

let optionButton = document.querySelector('.controls-button');
let closeButton = document.querySelector('.close');
let modal = document.querySelector('.entire-page');

optionButton.addEventListener('click', (clk) => {
  modal.style.display = 'block';
});

closeButton.addEventListener('click', (clk) => {
  modal.style.display = 'none';
});