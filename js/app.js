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

// Global State Var
let flag = true;

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
  3.25, 3.5, 4, 4.25, 4.5, 4.75, 5, 5.25, 5.5, 5.75, 6, 6.25,
];

// FUNCTIONS //
const calcDisplayQuote = (
  elementPrice,
  elementHours,
  arrElement,
  amount,
  taxRate,
  changeHours,
  taxDomElement
) => {
  // Calculate Hours
  const allHours = arrElement + changeHours;
  // Calculate Tax
  const tax = (taxRate / 100) * allHours * amount;
  // Display Price
  elementPrice.textContent = (allHours * amount + tax)
    .toFixed(2)
    .replace(/^/, '$');
  // Display Hours
  elementHours.textContent = allHours;
  // Display Taxes
  if (flag) {
    taxDomElement.textContent = tax.toFixed(2).replace(/^/, '$');
  }
};

const processQuotes = (
  hoursDeep,
  hoursGeneral,
  hoursWeekly,
  hoursBiWeekly,
  hoursMonthly,
  hourAmount,
  taxAmount,
  taxDeep,
  taxGeneral,
  taxWeekly,
  taxBiWeekly,
  taxMonthly,
  num
) => {
  calcDisplayQuote(
    deepPrice,
    deepHours,
    allDeepHours[num],
    hourAmount,
    taxAmount,
    hoursDeep,
    taxDeep
  );
  calcDisplayQuote(
    generalPrice,
    generalHours,
    allGeneralHours[num],
    hourAmount,
    taxAmount,
    hoursGeneral,
    taxGeneral
  );
  calcDisplayQuote(
    weeklyPrice,
    weeklyHours,
    allWeeklyHours[num],
    hourAmount,
    taxAmount,
    hoursWeekly,
    taxWeekly
  );
  calcDisplayQuote(
    biWeeklyPrice,
    biWeeklyHours,
    allbiWeeklyHours[num],
    hourAmount,
    taxAmount,
    hoursBiWeekly,
    taxBiWeekly
  );
  calcDisplayQuote(
    monthlyPrice,
    monthlyHours,
    allMonthlyHours[num],
    hourAmount,
    taxAmount,
    hoursMonthly,
    taxMonthly
  );
};

const displayChangeIcon = (hour, tax, change, selectEl, allHours) => {
  const element = document.getElementById(selectEl);
  const article = element.parentElement.parentElement;
  const icon = article.querySelector('.deep-changed');
  const numIcon = article.querySelector('.num-icon');
  const taxElementContainer = article.querySelector('.tax-element');
  const taxElement = taxElementContainer.children[1];

  // Calculate Taxes
  const taxAmount = (
    (tax / 100) *
    allHours[sqFootage.selectedIndex - 1] *
    hour
  ).toFixed(2);

  // Remove Change Icons
  const removeChangeIcon = () => {
    icon.classList.add('hidden');
    article.classList.remove('border-[#e5e7eb]');
    article.classList.add('border-transparent');
    article.style.background = '#f8f3f9';
    numIcon.style.background = '';
    numIcon.classList.add('hidden');
  };

  // Add Or Remove Tax Element
  if (tax > 0) {
    taxElementContainer.classList.remove('hidden');
  } else {
    taxElementContainer.classList.add('hidden');
  }

  // Add Change Icons
  if (change !== 0) {
    icon.classList.remove('hidden');
    article.style.background =
      'linear-gradient(to bottom right, #f9f7f4, #f6f3f8)';
    article.classList.add('border-[#e5e7eb]');
    article.classList.remove('border-transparent');
    numIcon.classList.remove('hidden');
    numIcon.textContent = `${change > 0 ? '+' : ''}${change}`;
    numIcon.style.background = `${
      change > 0 ? 'rgb(52 211 153)' : 'rgb(248 113 113)'
    }`;
  } else {
    removeChangeIcon();
  }

  // Change Back Hours
  element.previousElementSibling.addEventListener('click', () => {
    flag = false;
    element.value = 0;
    removeChangeIcon();
    calcDisplayQuote(
      article.children[4].children[1],
      article.children[5].children[1],
      allHours[sqFootage.selectedIndex - 1],
      hour,
      tax,
      0
    );
    taxElement.textContent = taxAmount;
    flag = !flag;
  });
};

// EVENT HANDLERS //
formControl.addEventListener('change', () => {
  const amountPerHour = +document.getElementById('amount-per-hour').value;
  const taxRate = +document.getElementById('tax-rate').value;
  const changeDeep = +document.getElementById('change-hours-deep').value;
  const changeGeneral = +document.getElementById('change-hours-general').value;
  const changeWeekly = +document.getElementById('change-hours-weekly').value;
  const changeBiWeekly = +document.getElementById('change-hours-bi-weekly')
    .value;
  const changeMonthly = +document.getElementById('change-hours-monthly').value;

  const taxesDeep = document.querySelector('.taxes-deep');
  const taxesGeneral = document.querySelector('.taxes-general');
  const taxesWeekly = document.querySelector('.taxes-weekly');
  const taxesBiWeekly = document.querySelector('.taxes-bi-weekly');
  const taxesMonthly = document.querySelector('.taxes-monthly');

  const processedQuotes = processQuotes.bind(
    processQuotes,
    changeDeep,
    changeGeneral,
    changeWeekly,
    changeBiWeekly,
    changeMonthly,
    amountPerHour,
    taxRate,
    taxesDeep,
    taxesGeneral,
    taxesWeekly,
    taxesBiWeekly,
    taxesMonthly
  );
  const processedDisplayChangeIcon = displayChangeIcon.bind(
    displayChangeIcon,
    amountPerHour,
    taxRate
  );

  // Processed Display Changed Icon
  processedDisplayChangeIcon(changeDeep, 'change-hours-deep', allDeepHours);

  processedDisplayChangeIcon(
    changeGeneral,
    'change-hours-general',
    allGeneralHours
  );

  processedDisplayChangeIcon(
    changeWeekly,
    'change-hours-weekly',
    allWeeklyHours
  );

  processedDisplayChangeIcon(
    changeBiWeekly,
    'change-hours-bi-weekly',
    allbiWeeklyHours
  );

  processedDisplayChangeIcon(
    changeMonthly,
    'change-hours-monthly',
    allMonthlyHours
  );

  if (sqFootage.value === '1000-1500') {
    processedQuotes(0);
  }
  if (sqFootage.value === '1600-2000') {
    processedQuotes(1);
  }
  if (sqFootage.value === '2100-2200') {
    processedQuotes(2);
  }
  if (sqFootage.value === '2300-2500') {
    processedQuotes(3);
  }
  if (sqFootage.value === '2600-2800') {
    processedQuotes(4);
  }
  if (sqFootage.value === '2900-3100') {
    processedQuotes(5);
  }
  if (sqFootage.value === '3200-3400') {
    processedQuotes(6);
  }
  if (sqFootage.value === '3500-3700') {
    processedQuotes(7);
  }
  if (sqFootage.value === '3800-4000') {
    processedQuotes(8);
  }
  if (sqFootage.value === '4100-4300') {
    processedQuotes(9);
  }
  if (sqFootage.value === '4400-4600') {
    processedQuotes(10);
  }
  if (sqFootage.value === '4800-5000') {
    processedQuotes(11);
  }
});
