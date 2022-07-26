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

// Forms & Inputs
const formControl = document.querySelector('.form-control');
const sqFootage = document.getElementById('square-footage');

// DATA //
const allDeepHours = [
  6.5, 8, 9.5, 10.5, 11.5, 12.5, 13.5, 14.5, 15.5, 16.5, 17.5, 18.5,
];
const allGeneralHours = [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5];

// FUNCTIONS //

const setCorrectData = (
  elementPrice,
  elementHours,
  arrElement,
  amount,
  taxRate
) => {
  const tax = (taxRate / 100) * (arrElement * amount);
  elementPrice.textContent = arrElement * amount + tax;
  elementHours.textContent = arrElement;
};

const runData = (num, hourAmount, taxAmount) => {
  setCorrectData(
    deepPrice,
    deepHours,
    allDeepHours[num],
    hourAmount,
    taxAmount
  );
  setCorrectData(
    generalPrice,
    generalHours,
    allGeneralHours[num],
    hourAmount,
    taxAmount
  );
};

// EVENT HANDLERS //
formControl.addEventListener('change', e => {
  const amountPerHour = +document.getElementById('amount-per-hour').value;
  const taxRate = +document.getElementById('tax-rate').value;
  console.log(taxRate);
  if (sqFootage.value === '1000-1500') {
    runData(0, amountPerHour, taxRate);
  }
  if (sqFootage.value === '1600-2000') {
    runData(1, amountPerHour, taxRate);
  }
});
