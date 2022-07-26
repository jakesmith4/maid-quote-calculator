// ELEMENTS //
// Price Elements
const deepPrice = document.querySelector('.deep-price');
const generalPrice = document.querySelector('.general-price');
const weeklyPrice = document.querySelector('.weekly-price');
const biWeeklyPrice = document.querySelector('.bi-weekly-price');
const monthlyPrice = document.querySelector('.monthly-price');

// Hour Elements
const deepHours = document.querySelector('.deep-hours');
const generalHours = document.querySelector('.general-hours');
const weeklyHours = document.querySelector('.weekly-hours');
const biWeeklyHours = document.querySelector('.bi-weekly-hours');
const monthlyHours = document.querySelector('.monthly-hours');

// Select & Inputs
const squareFootageSelect = document.getElementById('square-footage');

// DATA //
const allDeepHours = [
  6.5, 8, 9.5, 10.5, 11.5, 12.5, 13.5, 14.5, 15.5, 16.5, 17.5, 18.5,
];
const allGeneralHours = [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5];

// FUNCTIONS //
const setCorrectData = (elementPrice, elementHours, arrElement, amount) => {
  elementPrice.textContent = arrElement * amount;
  elementHours.textContent = arrElement;
};

// EVENT HANDLERS //
squareFootageSelect.addEventListener('change', e => {
  const amountPerHour = +document.getElementById('amount-per-hour').value;
  if (squareFootageSelect.value === '1000-1500') {
    // deepPrice.textContent = allDeepHours[0] * amountPerHour;
    // deepHours.textContent = allDeepHours[0];
    setCorrectData(deepPrice, deepHours, allDeepHours[0], amountPerHour);
    setCorrectData(
      generalPrice,
      generalHours,
      allGeneralHours[0],
      amountPerHour
    );
  }
});
