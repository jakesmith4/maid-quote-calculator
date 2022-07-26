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
const allWeeklyHours = [
  2.5, 3, 3.5, 3.75, 4, 4.25, 4.5, 4.75, 5, 5.25, 5.5, 5.75,
];
const allbiWeeklyHours = [
  3, 3.25, 3.75, 4, 4.25, 4.5, 4.75, 5, 5.25, 5.5, 5.75, 6,
];
const allMonthlyHours = [
  3.25, 3.5, 4, 4.25, 4.5, 4, 75, 5, 5.25, 5.5, 5.75, 6, 6.25,
];

// FUNCTIONS //

const setCorrectData = (
  elementPrice,
  elementHours,
  arrElement,
  amount,
  taxRate,
  changeHours
) => {
  const tax = (taxRate / 100) * (arrElement + changeHours) * amount;
  elementPrice.textContent = (arrElement + changeHours) * amount + tax;
  elementHours.textContent = arrElement + changeHours;
};

const runData = (
  num,
  hourAmount,
  taxAmount,
  hoursDeep,
  hoursGeneral,
  hoursWeekly,
  hoursBiWeekly,
  hoursMonthly
) => {
  setCorrectData(
    deepPrice,
    deepHours,
    allDeepHours[num],
    hourAmount,
    taxAmount,
    hoursDeep
  );
  setCorrectData(
    generalPrice,
    generalHours,
    allGeneralHours[num],
    hourAmount,
    taxAmount,
    hoursGeneral
  );
  setCorrectData(
    weeklyPrice,
    weeklyHours,
    allWeeklyHours[num],
    hourAmount,
    taxAmount,
    hoursWeekly
  );
  setCorrectData(
    biWeeklyPrice,
    biWeeklyHours,
    allbiWeeklyHours[num],
    hourAmount,
    taxAmount,
    hoursBiWeekly
  );
  setCorrectData(
    monthlyPrice,
    monthlyHours,
    allMonthlyHours[num],
    hourAmount,
    taxAmount,
    hoursMonthly
  );
};

// EVENT HANDLERS //
formControl.addEventListener('change', e => {
  const amountPerHour = +document.getElementById('amount-per-hour').value;
  const taxRate = +document.getElementById('tax-rate').value;
  const hoursDeep = +document.getElementById('change-hours-deep').value;
  const hoursGeneral = +document.getElementById('change-hours-general').value;
  const hoursWeekly = +document.getElementById('change-hours-weekly').value;
  const hoursBiWeekly = +document.getElementById('change-hours-bi-weekly')
    .value;
  const hoursMonthly = +document.getElementById('change-hours-monthly').value;
  if (sqFootage.value === '1000-1500') {
    runData(
      0,
      amountPerHour,
      taxRate,
      hoursDeep,
      hoursGeneral,
      hoursWeekly,
      hoursBiWeekly,
      hoursMonthly
    );
  }
  if (sqFootage.value === '1600-2000') {
    runData(
      1,
      amountPerHour,
      taxRate,
      hoursDeep,
      hoursGeneral,
      hoursWeekly,
      hoursBiWeekly,
      hoursMonthly
    );
  }
});
