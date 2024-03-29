// THIS FIRST HALF OF THE CODE DEALS WITH CALCULATING & DISPLAYING THE VALUES FOR THE MAIN CALCULATOR

// ELEMENTS //
// Price Elements
const deepPrice = document.querySelector('.deep-price');
const generalPrice = document.querySelector('.general-price');
const weeklyPrice = document.querySelector('.weekly-price');
const biWeeklyPrice = document.querySelector('.bi-weekly-price');
const monthlyPrice = document.querySelector('.monthly-price');
const userPrice = document.querySelector('.user-price');

// Hour Elements
const deepHours = document.querySelector('.deep-hours');
const generalHours = document.querySelector('.general-hours');
const weeklyHours = document.querySelector('.weekly-hours');
const biWeeklyHours = document.querySelector('.bi-weekly-hours');
const monthlyHours = document.querySelector('.monthly-hours');
const userHours = document.querySelector('.user-hours');

// Forms & Inputs
const formControl = document.querySelector('.form-control');
const cleanAdjustForm = document.querySelector('.clean-adjust');
const sqFootage = document.getElementById('square-footage');
const taxRateInput = document.getElementById('tax-rate');
const inputPerHour = document.getElementById('amount-per-hour');

// Taxes Display Indicator
const taxesDisplayDom = document.querySelector('.taxes-display');

// Change Hours Adjust Elements
const changeDeepInput = document.getElementById('change-hours-deep');
const changeGeneralInput = document.getElementById('change-hours-general');
const changeWeeklyInput = document.getElementById('change-hours-weekly');
const changeBiWeeklyInput = document.getElementById('change-hours-bi-weekly');
const changeMonthlyInput = document.getElementById('change-hours-monthly');
const changeUserInput = document.getElementById('change-hours-user');

// All Change Input Icons
const icons = document.querySelectorAll('.deep-changed');
const numIcons = document.querySelectorAll('.num-icon');
const allCleanArticles = document.querySelectorAll('.main-article');

// Spinner
const spinnerDom = document.querySelector('.spinner');
const quotesContainerDom = document.querySelector('.quotes-container');

// Alert Message Vars
const messageExclamationDom = document.querySelector('.message-exclamation');
const priceText = document.querySelector('.span-tax-text');
const alertTaxDom = document.querySelector('.alert-tax');
const alertSavingForm = document.querySelector('.alert-saving-form');

// Change Clean Vars
const deepCleanChangeInputs = document.querySelectorAll(
  '.deep-clean-input-change'
);
const generalCleanChangeInputs = document.querySelectorAll(
  '.general-clean-input-change'
);
const weeklyCleanChangeInputs = document.querySelectorAll(
  '.weekly-clean-input-change'
);
const biWeeklyCleanChangeInputs = document.querySelectorAll(
  '.bi-weekly-clean-input-change'
);
const monthlyCleanChangeInputs = document.querySelectorAll(
  '.monthly-clean-input-change'
);
const userCleanChangeInputs = document.querySelectorAll(
  '.user-clean-input-change'
);

const deepCleanType = document.querySelector('.deep-clean-type');
const generalCleanType = document.querySelector('.general-clean-type');
const weeklyCleanType = document.querySelector('.weekly-clean-type');
const biWeeklyCleanType = document.querySelector('.bi-weekly-clean-type');
const monthlyCleanType = document.querySelector('.monthly-clean-type');

// Counter Var For Clean Adjust Slider
counter = 0;

// Global State Var
let flag = true;
let taxFlag = true;

// Check Local Storage To Add Taxes Or Not
if (localStorage.getItem('taxFlag')) {
  taxFlag = JSON.parse(localStorage.getItem('taxFlag'));
}

// Check Local Storage To Restore User Input Data
if (localStorage.getItem('inputPerHour')) {
  // Set Input Per Hour To User Data
  inputPerHour.value = localStorage.getItem('inputPerHour');

  // Set Input Tax Rate To User Data
  taxRateInput.value = localStorage.getItem('taxRateInput');
}

// DATA //
// Deep Hours
const allDeepHoursMain = [
  4.5, 5.5, 6.5, 7.5, 8.5, 9.5, 10.5, 11.5, 12.5, 13.5, 14.5, 15.5, 16.5, 17.5,
  18.5, 19.5, 20.5, 21.5, 22.5,
];
let allDeepHours;
if (localStorage.getItem('changedDeepHours')) {
  allDeepHours = JSON.parse(localStorage.getItem('changedDeepHours'));
} else {
  allDeepHours = allDeepHoursMain.slice();
}

// General Hours
const allGeneralHoursMain = [
  2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11,
  11.5,
];
let allGeneralHours;
if (localStorage.getItem('changedGeneralHours')) {
  allGeneralHours = JSON.parse(localStorage.getItem('changedGeneralHours'));
} else {
  allGeneralHours = allGeneralHoursMain.slice();
}

// Weekly Hours
const allWeeklyHoursMain = [
  2.25, 2.5, 2.75, 3, 3.25, 3.5, 3.75, 4, 4.25, 4.5, 4.75, 5, 5.25, 5.5, 5.75,
  6, 6.25, 6.5, 6.75,
];
let allWeeklyHours;
if (localStorage.getItem('changedWeeklyHours')) {
  allWeeklyHours = JSON.parse(localStorage.getItem('changedWeeklyHours'));
} else {
  allWeeklyHours = allWeeklyHoursMain.slice();
}

// Bi Weekly Hours
const allBiWeeklyHoursMain = [
  2.5, 2.75, 3, 3.25, 3.5, 3.75, 4, 4.25, 4.5, 4.75, 5, 5.25, 5.5, 5.75, 6,
  6.25, 6.5, 6.75, 7,
];
let allbiWeeklyHours;
if (localStorage.getItem('changedBiWeeklyHours')) {
  allbiWeeklyHours = JSON.parse(localStorage.getItem('changedBiWeeklyHours'));
} else {
  allbiWeeklyHours = allBiWeeklyHoursMain.slice();
}

// Monthly Hours
const allMonthlyHoursMain = [
  2.75, 3, 3.25, 3.5, 3.75, 4, 4.25, 4.5, 4.75, 5, 5.25, 5.5, 5.75, 6, 6.25,
  6.5, 6.75, 7, 7.25,
];
// let allMonthlyHours = allMonthlyHoursMain.slice();
let allMonthlyHours;
if (localStorage.getItem('changedMonthlyHours')) {
  allMonthlyHours = JSON.parse(localStorage.getItem('changedMonthlyHours'));
} else {
  allMonthlyHours = allMonthlyHoursMain.slice();
}

// User Hours
const allUserHoursMain = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];
let allUserHours;
if (localStorage.getItem('changedUserHours')) {
  allUserHours = JSON.parse(localStorage.getItem('changedUserHours'));
} else {
  allUserHours = allUserHoursMain.slice();
}

const checkLocalStorage = className => {
  if (localStorage.getItem(className)) {
    document.querySelector(`.${className}`).value =
      localStorage.getItem(className);
  }
};

// Deep Clean Adjust Local Storage Check
checkLocalStorage('deep-clean-adjust-500-700');
checkLocalStorage('deep-clean-adjust-800-1000');
checkLocalStorage('deep-clean-adjust-1100-1300');
checkLocalStorage('deep-clean-adjust-1400-1600');
checkLocalStorage('deep-clean-adjust-1700-1900');
checkLocalStorage('deep-clean-adjust-2000-2200');
checkLocalStorage('deep-clean-adjust-2300-2500');
checkLocalStorage('deep-clean-adjust-2600-2800');
checkLocalStorage('deep-clean-adjust-2900-3100');
checkLocalStorage('deep-clean-adjust-3200-3400');
checkLocalStorage('deep-clean-adjust-3500-3700');
checkLocalStorage('deep-clean-adjust-3800-4000');
checkLocalStorage('deep-clean-adjust-4100-4300');
checkLocalStorage('deep-clean-adjust-4400-4600');
checkLocalStorage('deep-clean-adjust-4700-4900');
checkLocalStorage('deep-clean-adjust-5000-5200');
checkLocalStorage('deep-clean-adjust-5300-5500');
checkLocalStorage('deep-clean-adjust-5600-5800');
checkLocalStorage('deep-clean-adjust-5900-6100');

// General Clean Adjust Local Storage Check
checkLocalStorage('general-clean-adjust-500-700');
checkLocalStorage('general-clean-adjust-800-1000');
checkLocalStorage('general-clean-adjust-1100-1300');
checkLocalStorage('general-clean-adjust-1400-1600');
checkLocalStorage('general-clean-adjust-1700-1900');
checkLocalStorage('general-clean-adjust-2000-2200');
checkLocalStorage('general-clean-adjust-2300-2500');
checkLocalStorage('general-clean-adjust-2600-2800');
checkLocalStorage('general-clean-adjust-2900-3100');
checkLocalStorage('general-clean-adjust-3200-3400');
checkLocalStorage('general-clean-adjust-3500-3700');
checkLocalStorage('general-clean-adjust-3800-4000');
checkLocalStorage('general-clean-adjust-4100-4300');
checkLocalStorage('general-clean-adjust-4400-4600');
checkLocalStorage('general-clean-adjust-4700-4900');
checkLocalStorage('general-clean-adjust-5000-5200');
checkLocalStorage('general-clean-adjust-5300-5500');
checkLocalStorage('general-clean-adjust-5600-5800');
checkLocalStorage('general-clean-adjust-5900-6100');

// Weekly Clean Adjust Local Storage Check
checkLocalStorage('weekly-clean-adjust-500-700');
checkLocalStorage('weekly-clean-adjust-800-1000');
checkLocalStorage('weekly-clean-adjust-1100-1300');
checkLocalStorage('weekly-clean-adjust-1400-1600');
checkLocalStorage('weekly-clean-adjust-1700-1900');
checkLocalStorage('weekly-clean-adjust-2000-2200');
checkLocalStorage('weekly-clean-adjust-2300-2500');
checkLocalStorage('weekly-clean-adjust-2600-2800');
checkLocalStorage('weekly-clean-adjust-2900-3100');
checkLocalStorage('weekly-clean-adjust-3200-3400');
checkLocalStorage('weekly-clean-adjust-3500-3700');
checkLocalStorage('weekly-clean-adjust-3800-4000');
checkLocalStorage('weekly-clean-adjust-4100-4300');
checkLocalStorage('weekly-clean-adjust-4400-4600');
checkLocalStorage('weekly-clean-adjust-4700-4900');
checkLocalStorage('weekly-clean-adjust-5000-5200');
checkLocalStorage('weekly-clean-adjust-5300-5500');
checkLocalStorage('weekly-clean-adjust-5600-5800');
checkLocalStorage('weekly-clean-adjust-5900-6100');

// Bi-Weekly Clean Adjust Local Storage Check
checkLocalStorage('bi-weekly-clean-adjust-500-700');
checkLocalStorage('bi-weekly-clean-adjust-800-1000');
checkLocalStorage('bi-weekly-clean-adjust-1100-1300');
checkLocalStorage('bi-weekly-clean-adjust-1400-1600');
checkLocalStorage('bi-weekly-clean-adjust-1700-1900');
checkLocalStorage('bi-weekly-clean-adjust-2000-2200');
checkLocalStorage('bi-weekly-clean-adjust-2300-2500');
checkLocalStorage('bi-weekly-clean-adjust-2600-2800');
checkLocalStorage('bi-weekly-clean-adjust-2900-3100');
checkLocalStorage('bi-weekly-clean-adjust-3200-3400');
checkLocalStorage('bi-weekly-clean-adjust-3500-3700');
checkLocalStorage('bi-weekly-clean-adjust-3800-4000');
checkLocalStorage('bi-weekly-clean-adjust-4100-4300');
checkLocalStorage('bi-weekly-clean-adjust-4400-4600');
checkLocalStorage('bi-weekly-clean-adjust-4700-4900');
checkLocalStorage('bi-weekly-clean-adjust-5000-5200');
checkLocalStorage('bi-weekly-clean-adjust-5300-5500');
checkLocalStorage('bi-weekly-clean-adjust-5600-5800');
checkLocalStorage('bi-weekly-clean-adjust-5900-6100');

// Monthly Clean Adjust Local Storage Check
checkLocalStorage('monthly-clean-adjust-500-700');
checkLocalStorage('monthly-clean-adjust-800-1000');
checkLocalStorage('monthly-clean-adjust-1100-1300');
checkLocalStorage('monthly-clean-adjust-1400-1600');
checkLocalStorage('monthly-clean-adjust-1700-1900');
checkLocalStorage('monthly-clean-adjust-2000-2200');
checkLocalStorage('monthly-clean-adjust-2300-2500');
checkLocalStorage('monthly-clean-adjust-2600-2800');
checkLocalStorage('monthly-clean-adjust-2900-3100');
checkLocalStorage('monthly-clean-adjust-3200-3400');
checkLocalStorage('monthly-clean-adjust-3500-3700');
checkLocalStorage('monthly-clean-adjust-3800-4000');
checkLocalStorage('monthly-clean-adjust-4100-4300');
checkLocalStorage('monthly-clean-adjust-4400-4600');
checkLocalStorage('monthly-clean-adjust-4700-4900');
checkLocalStorage('monthly-clean-adjust-5000-5200');
checkLocalStorage('monthly-clean-adjust-5300-5500');
checkLocalStorage('monthly-clean-adjust-5600-5800');
checkLocalStorage('monthly-clean-adjust-5900-6100');

// User Clean Adjust Local Storage Check
checkLocalStorage('user-clean-adjust-500-700');
checkLocalStorage('user-clean-adjust-800-1000');
checkLocalStorage('user-clean-adjust-1100-1300');
checkLocalStorage('user-clean-adjust-1400-1600');
checkLocalStorage('user-clean-adjust-1700-1900');
checkLocalStorage('user-clean-adjust-2000-2200');
checkLocalStorage('user-clean-adjust-2300-2500');
checkLocalStorage('user-clean-adjust-2600-2800');
checkLocalStorage('user-clean-adjust-2900-3100');
checkLocalStorage('user-clean-adjust-3200-3400');
checkLocalStorage('user-clean-adjust-3500-3700');
checkLocalStorage('user-clean-adjust-3800-4000');
checkLocalStorage('user-clean-adjust-4100-4300');
checkLocalStorage('user-clean-adjust-4400-4600');
checkLocalStorage('user-clean-adjust-4700-4900');
checkLocalStorage('user-clean-adjust-5000-5200');
checkLocalStorage('user-clean-adjust-5300-5500');
checkLocalStorage('user-clean-adjust-5600-5800');
checkLocalStorage('user-clean-adjust-5900-6100');

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
  if (taxFlag) {
    elementPrice.textContent = (allHours * amount + tax)
      .toFixed(2)
      .replace(/^/, '$');
  } else {
    elementPrice.textContent = (allHours * amount).toFixed(2).replace(/^/, '$');
  }
  // Display Hours
  elementHours.textContent = allHours;
  // Display Taxes
  if (flag) {
    taxDomElement.textContent = tax.toFixed(2).replace(/^/, '$');
  }
};

// Displays Hours Changed Icon In Each Article
const displayChangeIcon = (hour, tax, change, selectEl, allHours) => {
  const element = document.getElementById(selectEl);
  const article = element.parentElement.parentElement;
  const icon = article.querySelector('.deep-changed');
  const numIcon = article.querySelector('.num-icon');
  const taxElementContainer = article.querySelector('.tax-element');
  const taxElement = taxElementContainer.children[1];

  // Calculate Taxes
  const taxAmount = ((tax / 100) * allHours[sqFootage.selectedIndex - 1] * hour)
    .toFixed(2)
    .replace(/^/, '$');

  // Remove Change Icons
  const removeChangeIcon = () => {
    icon.classList.add('hidden');
    numIcon.style.background = '';
    numIcon.classList.add('hidden');
  };

  // Change Article Background
  const changeArticleBcg = () => {
    article.classList.remove('border-[#e5e7eb]');
    article.classList.add('border-transparent');
    article.style.background = '#f8f3f9';
  };

  // Add Or Remove Tax Element
  if (tax > 0) {
    taxElementContainer.classList.remove('hidden');
    taxElementContainer.classList.add('flex');
  } else {
    taxElementContainer.classList.add('hidden');
    taxElementContainer.classList.remove('flex');
  }

  // Add Change Icons
  if (change !== 0) {
    icon.classList.remove('hidden');
    // article.style.background =
    //   'linear-gradient(to bottom right, #f9f7f4, #f6f3f8)';
    article.classList.add('shadow-lg');
    article.classList.add('border-[#e5e7eb]');
    article.classList.remove('border-transparent');
    numIcon.classList.remove('hidden');
    numIcon.textContent = `${change > 0 ? '+' : ''}${change}`;
    numIcon.style.background = `${
      change > 0 ? 'rgb(52 211 153)' : 'rgb(248 113 113)'
    }`;
  } else {
    removeChangeIcon();
    article.classList.add('border-transparent');
    article.classList.remove('shadow-lg');
  }

  // Change Back Hours
  element.previousElementSibling.addEventListener('click', () => {
    flag = false;
    element.value = 0;
    removeChangeIcon();
    article.classList.add('border-transparent');
    if (flag) {
      changeArticleBcg();
    }

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

// Add Amount Per Hour & Tax Rate To Local Storage
const setUserDataToLocalStorage = () => {
  // Set User Input Per Hour To Local Storage
  localStorage.setItem('inputPerHour', inputPerHour.value);

  // Set User Input Tax Rate To Local Storage
  localStorage.setItem('taxRateInput', taxRateInput.value);
};

const processQuotes = (
  hoursDeep,
  hoursGeneral,
  hoursWeekly,
  hoursBiWeekly,
  hoursMonthly,
  hoursUser,
  hourAmount,
  taxAmount,
  taxDeep,
  taxGeneral,
  taxWeekly,
  taxBiWeekly,
  taxMonthly,
  taxesUser,
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

  calcDisplayQuote(
    userPrice,
    userHours,
    allUserHours[num],
    hourAmount,
    taxAmount,
    hoursUser,
    taxesUser
  );

  // Add Current User Input Data To Local Storage
  setUserDataToLocalStorage();
};

// Show Taxes Display Indicator
const showTaxIndicator = () => {
  // Display Tax Indicator
  if (+taxRateInput.value <= 0) {
    taxesDisplayDom.style.display = 'none';
  } else {
    taxesDisplayDom.style.display = 'inline';
  }
  // Change Tax Indicator Text & Background
  if (taxFlag) {
    taxesDisplayDom.style.background = '#059669';
    taxesDisplayDom.textContent = 'Taxes Included In Price';
  } else {
    taxesDisplayDom.style.background = '#dc2626';
    taxesDisplayDom.textContent = 'Taxes NOT Included In Price';
  }
};

// Change Display Of Quotes Container On Browser Resize
const mediaQuery = window.matchMedia('(min-width: 768px)');
const changeDisplayOnResize = () => {
  if (mediaQuery.matches) {
    quotesContainerDom.style.display = 'flex';
  } else {
    quotesContainerDom.style.display = 'block';
  }
};

// Display Spinner
const displaySpinner = () => {
  spinnerDom.style.display = 'flex';
  quotesContainerDom.style.display = 'none';
  setTimeout(() => {
    spinnerDom.style.display = 'none';
    // Change Display Depending On Browser Size
    changeDisplayOnResize();
  }, 1000);
};

// Carousel For Clean Adjust Slider
const carousel = () => {
  cleanAdjustSlides.forEach(slide => {
    if (counter === cleanAdjustSlides.length) {
      counter = 0;
    }
    if (counter < 0) {
      counter = cleanAdjustSlides.length - 1;
    }
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

const showQuote = (event, slide = false) => {
  // Show Tax Indicator
  if (!event.target.classList?.contains('change-individual')) {
    showTaxIndicator();
    changeDisplayOnResize();
  }
  if (event.target.classList?.contains('square-foot-select')) {
    // Display Spinner
    displaySpinner();
  }

  const amountPerHour = +document.getElementById('amount-per-hour').value;
  const taxRate = +document.getElementById('tax-rate').value;
  const changeDeep = +document.getElementById('change-hours-deep').value;
  const changeGeneral = +document.getElementById('change-hours-general').value;
  const changeWeekly = +document.getElementById('change-hours-weekly').value;
  const changeBiWeekly = +document.getElementById('change-hours-bi-weekly')
    .value;
  const changeMonthly = +document.getElementById('change-hours-monthly').value;
  const changeUser = +document.getElementById('change-hours-user').value;

  const taxesDeep = document.querySelector('.taxes-deep');
  const taxesGeneral = document.querySelector('.taxes-general');
  const taxesWeekly = document.querySelector('.taxes-weekly');
  const taxesBiWeekly = document.querySelector('.taxes-bi-weekly');
  const taxesMonthly = document.querySelector('.taxes-monthly');
  const taxesUser = document.querySelector('.taxes-user');

  const processedQuotes = processQuotes.bind(
    processQuotes,
    changeDeep,
    changeGeneral,
    changeWeekly,
    changeBiWeekly,
    changeMonthly,
    changeUser,
    amountPerHour,
    taxRate,
    taxesDeep,
    taxesGeneral,
    taxesWeekly,
    taxesBiWeekly,
    taxesMonthly,
    taxesUser
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

  processedDisplayChangeIcon(changeUser, 'change-hours-user', allUserHours);

  if (sqFootage.value === '500-700') {
    processedQuotes(0);
    if (!slide) {
      counter = 0;
      carousel();
    }
  }
  if (sqFootage.value === '800-1000') {
    processedQuotes(1);
    if (!slide) {
      counter = 1;
      carousel();
    }
  }
  if (sqFootage.value === '1100-1300') {
    processedQuotes(2);
    if (!slide) {
      counter = 2;
      carousel();
    }
  }
  if (sqFootage.value === '1400-1600') {
    processedQuotes(3);
    if (!slide) {
      counter = 3;
      carousel();
    }
  }
  if (sqFootage.value === '1700-1900') {
    processedQuotes(4);
    if (!slide) {
      counter = 4;
      carousel();
    }
  }
  if (sqFootage.value === '2000-2200') {
    processedQuotes(5);
    if (!slide) {
      counter = 5;
      carousel();
    }
  }
  if (sqFootage.value === '2300-2500') {
    processedQuotes(6);
    if (!slide) {
      counter = 6;
      carousel();
    }
  }
  if (sqFootage.value === '2600-2800') {
    processedQuotes(7);
    if (!slide) {
      counter = 7;
      carousel();
    }
  }
  if (sqFootage.value === '2900-3100') {
    processedQuotes(8);
    if (!slide) {
      counter = 8;
      carousel();
    }
  }
  if (sqFootage.value === '3200-3400') {
    processedQuotes(9);
    if (!slide) {
      counter = 9;
      carousel();
    }
  }
  if (sqFootage.value === '3500-3700') {
    processedQuotes(10);
    if (!slide) {
      counter = 10;
      carousel();
    }
  }
  if (sqFootage.value === '3800-4000') {
    processedQuotes(11);
    if (!slide) {
      counter = 11;
      carousel();
    }
  }
  if (sqFootage.value === '4100-4300') {
    processedQuotes(12);
    if (!slide) {
      counter = 12;
      carousel();
    }
  }
  if (sqFootage.value === '4400-4600') {
    processedQuotes(13);
    if (!slide) {
      counter = 13;
      carousel();
    }
  }
  if (sqFootage.value === '4700-4900') {
    processedQuotes(14);
    if (!slide) {
      counter = 14;
      carousel();
    }
  }
  if (sqFootage.value === '5000-5200') {
    processedQuotes(15);
    if (!slide) {
      counter = 15;
      carousel();
    }
  }
  if (sqFootage.value === '5300-5500') {
    processedQuotes(16);
    if (!slide) {
      counter = 16;
      carousel();
    }
  }
  if (sqFootage.value === '5600-5800') {
    processedQuotes(17);
    if (!slide) {
      counter = 17;
      carousel();
    }
  }
  if (sqFootage.value === '5900-6100') {
    processedQuotes(18);
    if (!slide) {
      counter = 18;
      carousel();
    }
  }
};

// Change Deep Hours
const changeDeepHours = (event, className, index) => {
  if (event.target.classList.contains(className)) {
    if (+event.target.value === allDeepHoursMain[0]) {
      allDeepHours[index] = allDeepHoursMain.slice()[index];
      // Set Item To Local Storage
      localStorage.setItem(
        'changedDeepHours',
        JSON.stringify(allDeepHoursMain.slice())
      );
      localStorage.setItem(className, allDeepHoursMain[0]);
    } else {
      allDeepHours[index] = +event.target.value;
      // Set Item To Local Storage
      localStorage.setItem('changedDeepHours', JSON.stringify(allDeepHours));
      localStorage.setItem(
        className,
        document.querySelector(`.${className}`).value
      );
    }
  }
};

// Change General Hours
const changeGeneralHours = (event, className, index) => {
  if (event.target.classList.contains(className)) {
    if (+event.target.value === allGeneralHoursMain[0]) {
      allGeneralHours[index] = allGeneralHoursMain.slice()[index];
      // Set Item To Local Storage
      localStorage.setItem(
        'changedGeneralHours',
        JSON.stringify(allGeneralHoursMain.slice())
      );
      localStorage.setItem(className, allGeneralHoursMain[0]);
    } else {
      allGeneralHours[index] = +event.target.value;
      // Set Item To Local Storage
      localStorage.setItem(
        'changedGeneralHours',
        JSON.stringify(allGeneralHours)
      );
      localStorage.setItem(
        className,
        document.querySelector(`.${className}`).value
      );
    }
  }
};

// Change Weekly Hours
const changeWeeklyHours = (event, className, index) => {
  if (event.target.classList.contains(className)) {
    if (+event.target.value === allWeeklyHoursMain[0]) {
      allWeeklyHours[index] = allWeeklyHoursMain.slice()[index];
      // Set Item To Local Storage
      localStorage.setItem(
        'changedWeeklyHours',
        JSON.stringify(allWeeklyHoursMain.slice())
      );
      localStorage.setItem(className, allWeeklyHoursMain[0]);
    } else {
      allWeeklyHours[index] = +event.target.value;
      // Set Item To Local Storage
      localStorage.setItem(
        'changedWeeklyHours',
        JSON.stringify(allWeeklyHours)
      );
      localStorage.setItem(
        className,
        document.querySelector(`.${className}`).value
      );
    }
  }
};

// Change Bi-Weekly Hours
const changeBiWeeklyHours = (event, className, index) => {
  if (event.target.classList.contains(className)) {
    if (+event.target.value === allBiWeeklyHoursMain[0]) {
      allbiWeeklyHours[index] = allBiWeeklyHoursMain.slice()[index];
      // Set Item To Local Storage
      localStorage.setItem(
        'changedBiWeeklyHours',
        JSON.stringify(allBiWeeklyHoursMain.slice())
      );
      localStorage.setItem(className, allBiWeeklyHoursMain[0]);
    } else {
      allbiWeeklyHours[index] = +event.target.value;
      // Set Item To Local Storage
      localStorage.setItem(
        'changedBiWeeklyHours',
        JSON.stringify(allbiWeeklyHours)
      );
      localStorage.setItem(
        className,
        document.querySelector(`.${className}`).value
      );
    }
  }
};

// Change Monthly Hours
const changeMonthlyHours = (event, className, index) => {
  if (event.target.classList.contains(className)) {
    if (+event.target.value === allMonthlyHoursMain[0]) {
      allMonthlyHours[index] = allMonthlyHoursMain.slice()[index];
      // Set Item To Local Storage
      localStorage.setItem(
        'changedMonthlyHours',
        JSON.stringify(allMonthlyHoursMain.slice())
      );
      localStorage.setItem(className, allMonthlyHoursMain[0]);
    } else {
      allMonthlyHours[index] = +event.target.value;
      // Set Item To Local Storage
      localStorage.setItem(
        'changedMonthlyHours',
        JSON.stringify(allMonthlyHours)
      );
      localStorage.setItem(
        className,
        document.querySelector(`.${className}`).value
      );
    }
  }
};

// Change User Hours
const changeUserHours = (event, className, index) => {
  if (event.target.classList.contains(className)) {
    if (+event.target.value === allUserHoursMain[0]) {
      allUserHours[index] = allUserHoursMain.slice()[index];
      // Set Item To Local Storage
      localStorage.setItem(
        'changedUserHours',
        JSON.stringify(allUserHoursMain.slice())
      );
      localStorage.setItem(className, allUserHoursMain[0]);
    } else {
      allUserHours[index] = +event.target.value;
      // Set Item To Local Storage
      localStorage.setItem('changedUserHours', JSON.stringify(allUserHours));
      localStorage.setItem(
        className,
        document.querySelector(`.${className}`).value
      );
    }
  }
};

const changeHours = e => {
  // Change Deep Hours
  changeDeepHours(e, 'deep-clean-adjust-500-700', 0);
  changeDeepHours(e, 'deep-clean-adjust-800-1000', 1);
  changeDeepHours(e, 'deep-clean-adjust-1100-1300', 2);
  changeDeepHours(e, 'deep-clean-adjust-1400-1600', 3);
  changeDeepHours(e, 'deep-clean-adjust-1700-1900', 4);
  changeDeepHours(e, 'deep-clean-adjust-2000-2200', 5);
  changeDeepHours(e, 'deep-clean-adjust-2300-2500', 6);
  changeDeepHours(e, 'deep-clean-adjust-2600-2800', 7);
  changeDeepHours(e, 'deep-clean-adjust-2900-3100', 8);
  changeDeepHours(e, 'deep-clean-adjust-3200-3400', 9);
  changeDeepHours(e, 'deep-clean-adjust-3500-3700', 10);
  changeDeepHours(e, 'deep-clean-adjust-3800-4000', 11);
  changeDeepHours(e, 'deep-clean-adjust-4100-4300', 12);
  changeDeepHours(e, 'deep-clean-adjust-4400-4600', 13);
  changeDeepHours(e, 'deep-clean-adjust-4700-4900', 14);
  changeDeepHours(e, 'deep-clean-adjust-5000-5200', 15);
  changeDeepHours(e, 'deep-clean-adjust-5300-5500', 16);
  changeDeepHours(e, 'deep-clean-adjust-5600-5800', 17);
  changeDeepHours(e, 'deep-clean-adjust-5900-6100', 18);

  // Change General Hours
  changeGeneralHours(e, 'general-clean-adjust-500-700', 0);
  changeGeneralHours(e, 'general-clean-adjust-800-1000', 1);
  changeGeneralHours(e, 'general-clean-adjust-1100-1300', 2);
  changeGeneralHours(e, 'general-clean-adjust-1400-1600', 3);
  changeGeneralHours(e, 'general-clean-adjust-1700-1900', 4);
  changeGeneralHours(e, 'general-clean-adjust-2000-2200', 5);
  changeGeneralHours(e, 'general-clean-adjust-2300-2500', 6);
  changeGeneralHours(e, 'general-clean-adjust-2600-2800', 7);
  changeGeneralHours(e, 'general-clean-adjust-2900-3100', 8);
  changeGeneralHours(e, 'general-clean-adjust-3200-3400', 9);
  changeGeneralHours(e, 'general-clean-adjust-3500-3700', 10);
  changeGeneralHours(e, 'general-clean-adjust-3800-4000', 11);
  changeGeneralHours(e, 'general-clean-adjust-4100-4300', 12);
  changeGeneralHours(e, 'general-clean-adjust-4400-4600', 13);
  changeGeneralHours(e, 'general-clean-adjust-4700-4900', 14);
  changeGeneralHours(e, 'general-clean-adjust-5000-5200', 15);
  changeGeneralHours(e, 'general-clean-adjust-5300-5500', 16);
  changeGeneralHours(e, 'general-clean-adjust-5600-5800', 17);
  changeGeneralHours(e, 'general-clean-adjust-5900-6100', 18);

  // Change Weekly Hours
  changeWeeklyHours(e, 'weekly-clean-adjust-500-700', 0);
  changeWeeklyHours(e, 'weekly-clean-adjust-800-1000', 1);
  changeWeeklyHours(e, 'weekly-clean-adjust-1100-1300', 2);
  changeWeeklyHours(e, 'weekly-clean-adjust-1400-1600', 3);
  changeWeeklyHours(e, 'weekly-clean-adjust-1700-1900', 4);
  changeWeeklyHours(e, 'weekly-clean-adjust-2000-2200', 5);
  changeWeeklyHours(e, 'weekly-clean-adjust-2300-2500', 6);
  changeWeeklyHours(e, 'weekly-clean-adjust-2600-2800', 7);
  changeWeeklyHours(e, 'weekly-clean-adjust-2900-3100', 8);
  changeWeeklyHours(e, 'weekly-clean-adjust-3200-3400', 9);
  changeWeeklyHours(e, 'weekly-clean-adjust-3500-3700', 10);
  changeWeeklyHours(e, 'weekly-clean-adjust-3800-4000', 11);
  changeWeeklyHours(e, 'weekly-clean-adjust-4100-4300', 12);
  changeWeeklyHours(e, 'weekly-clean-adjust-4400-4600', 13);
  changeWeeklyHours(e, 'weekly-clean-adjust-4700-4900', 14);
  changeWeeklyHours(e, 'weekly-clean-adjust-5000-5200', 15);
  changeWeeklyHours(e, 'weekly-clean-adjust-5300-5500', 16);
  changeWeeklyHours(e, 'weekly-clean-adjust-5600-5800', 17);
  changeWeeklyHours(e, 'weekly-clean-adjust-5900-6100', 18);

  // Change Bi-Weekly Hours
  changeBiWeeklyHours(e, 'bi-weekly-clean-adjust-500-700', 0);
  changeBiWeeklyHours(e, 'bi-weekly-clean-adjust-800-1000', 1);
  changeBiWeeklyHours(e, 'bi-weekly-clean-adjust-1100-1300', 2);
  changeBiWeeklyHours(e, 'bi-weekly-clean-adjust-1400-1600', 3);
  changeBiWeeklyHours(e, 'bi-weekly-clean-adjust-1700-1900', 4);
  changeBiWeeklyHours(e, 'bi-weekly-clean-adjust-2000-2200', 5);
  changeBiWeeklyHours(e, 'bi-weekly-clean-adjust-2300-2500', 6);
  changeBiWeeklyHours(e, 'bi-weekly-clean-adjust-2600-2800', 7);
  changeBiWeeklyHours(e, 'bi-weekly-clean-adjust-2900-3100', 8);
  changeBiWeeklyHours(e, 'bi-weekly-clean-adjust-3200-3400', 9);
  changeBiWeeklyHours(e, 'bi-weekly-clean-adjust-3500-3700', 10);
  changeBiWeeklyHours(e, 'bi-weekly-clean-adjust-3800-4000', 11);
  changeBiWeeklyHours(e, 'bi-weekly-clean-adjust-4100-4300', 12);
  changeBiWeeklyHours(e, 'bi-weekly-clean-adjust-4400-4600', 13);
  changeBiWeeklyHours(e, 'bi-weekly-clean-adjust-4700-4900', 14);
  changeBiWeeklyHours(e, 'bi-weekly-clean-adjust-5000-5200', 15);
  changeBiWeeklyHours(e, 'bi-weekly-clean-adjust-5300-5500', 16);
  changeBiWeeklyHours(e, 'bi-weekly-clean-adjust-5600-5800', 17);
  changeBiWeeklyHours(e, 'bi-weekly-clean-adjust-5900-6100', 18);

  // Change Monthly Hours
  changeMonthlyHours(e, 'monthly-clean-adjust-500-700', 0);
  changeMonthlyHours(e, 'monthly-clean-adjust-800-1000', 1);
  changeMonthlyHours(e, 'monthly-clean-adjust-1100-1300', 2);
  changeMonthlyHours(e, 'monthly-clean-adjust-1400-1600', 3);
  changeMonthlyHours(e, 'monthly-clean-adjust-1700-1900', 4);
  changeMonthlyHours(e, 'monthly-clean-adjust-2000-2200', 5);
  changeMonthlyHours(e, 'monthly-clean-adjust-2300-2500', 6);
  changeMonthlyHours(e, 'monthly-clean-adjust-2600-2800', 7);
  changeMonthlyHours(e, 'monthly-clean-adjust-2900-3100', 8);
  changeMonthlyHours(e, 'monthly-clean-adjust-3200-3400', 9);
  changeMonthlyHours(e, 'monthly-clean-adjust-3500-3700', 10);
  changeMonthlyHours(e, 'monthly-clean-adjust-3800-4000', 11);
  changeMonthlyHours(e, 'monthly-clean-adjust-4100-4300', 12);
  changeMonthlyHours(e, 'monthly-clean-adjust-4400-4600', 13);
  changeMonthlyHours(e, 'monthly-clean-adjust-4700-4900', 14);
  changeMonthlyHours(e, 'monthly-clean-adjust-5000-5200', 15);
  changeMonthlyHours(e, 'monthly-clean-adjust-5300-5500', 16);
  changeMonthlyHours(e, 'monthly-clean-adjust-5600-5800', 17);
  changeMonthlyHours(e, 'monthly-clean-adjust-5900-6100', 18);

  // Change User Hours
  changeUserHours(e, 'user-clean-adjust-500-700', 0);
  changeUserHours(e, 'user-clean-adjust-800-1000', 1);
  changeUserHours(e, 'user-clean-adjust-1100-1300', 2);
  changeUserHours(e, 'user-clean-adjust-1400-1600', 3);
  changeUserHours(e, 'user-clean-adjust-1700-1900', 4);
  changeUserHours(e, 'user-clean-adjust-2000-2200', 5);
  changeUserHours(e, 'user-clean-adjust-2300-2500', 6);
  changeUserHours(e, 'user-clean-adjust-2600-2800', 7);
  changeUserHours(e, 'user-clean-adjust-2900-3100', 8);
  changeUserHours(e, 'user-clean-adjust-3200-3400', 9);
  changeUserHours(e, 'user-clean-adjust-3500-3700', 10);
  changeUserHours(e, 'user-clean-adjust-3800-4000', 11);
  changeUserHours(e, 'user-clean-adjust-4100-4300', 12);
  changeUserHours(e, 'user-clean-adjust-4400-4600', 13);
  changeUserHours(e, 'user-clean-adjust-4700-4900', 14);
  changeUserHours(e, 'user-clean-adjust-5000-5200', 15);
  changeUserHours(e, 'user-clean-adjust-5300-5500', 16);
  changeUserHours(e, 'user-clean-adjust-5600-5800', 17);
  changeUserHours(e, 'user-clean-adjust-5900-6100', 18);
};

// Set All Change Hour Inputs Back To 0
const changeHourInputsBack = (
  deepInput,
  generalInput,
  weeklyInput,
  biWeeklyInput,
  monthlyInput
) => {
  deepInput.selectedIndex = 0;

  generalInput.selectedIndex = 0;

  weeklyInput.selectedIndex = 0;

  biWeeklyInput.selectedIndex = 0;

  monthlyInput.selectedIndex = 0;
};

// Remove Change Icons
const removeChangeIcons = () => {
  icons.forEach(icon => icon.classList.add('hidden'));
  numIcons.forEach(icon => (icon.style.background = ''));
  numIcons.forEach(icon => icon.classList.add('hidden'));
  allCleanArticles.forEach(article => {
    article.classList.add('border-transparent');
    article.classList.remove('shadow-lg');
  });
};

// Bring In Users Cleaning Types From Local Storage
const bringInCleanTypeFromStorage = (
  storageKeyInput,
  cleanInputs,
  cleanType,
  otherClean
) => {
  if (localStorage.getItem(storageKeyInput)) {
    const localStorageCleanInput = localStorage.getItem(storageKeyInput);

    // Bring In User Custom Clean Names Into App Settings
    cleanInputs.forEach(input => (input.value = localStorageCleanInput));

    // Bring In User Custom Clean Names Into App Main Clean Headings
    document.querySelector(cleanType).textContent = localStorageCleanInput;

    // Bring In User Custom Clean Names Into App Other Clean Headings
    document.querySelector(otherClean).textContent = localStorageCleanInput;

    // Bring In User Custom Clean Names into App Articles
    document.querySelector(cleanType).dataset.id =
      localStorage.getItem(storageKeyInput);
  }
};

// Bring In Deep Clean Type From Local Storage
bringInCleanTypeFromStorage(
  'deep-clean-input-change',
  deepCleanChangeInputs,
  '.deep-clean-type',
  '.other-deep-clean'
);

// Bring In General Clean Type From Local Storage
bringInCleanTypeFromStorage(
  'general-clean-input-change',
  generalCleanChangeInputs,
  '.general-clean-type',
  '.other-general-clean'
);

// Bring In Weekly Clean Type From Local Storage
bringInCleanTypeFromStorage(
  'weekly-clean-input-change',
  weeklyCleanChangeInputs,
  '.weekly-clean-type',
  '.other-weekly-clean'
);

// Bring In Bi-Weekly Clean Type From Local Storage
bringInCleanTypeFromStorage(
  'bi-weekly-clean-input-change',
  biWeeklyCleanChangeInputs,
  '.bi-weekly-clean-type',
  '.other-bi-weekly-clean'
);

// Bring In Monthly Clean Type From Local Storage
bringInCleanTypeFromStorage(
  'monthly-clean-input-change',
  monthlyCleanChangeInputs,
  '.monthly-clean-type',
  '.other-monthly-clean'
);

// Bring In User Clean Type From Local Storage
bringInCleanTypeFromStorage(
  'user-clean-input-change',
  userCleanChangeInputs,
  '.user-clean-type',
  '.other-user-clean'
);

// Change Quotes Container Display On Browser Resize
window.onresize = () => {
  changeDisplayOnResize();
};

// EVENT HANDLERS //
formControl.addEventListener('input', e => {
  if (e.target.classList.contains('square-foot-select')) {
    // Change All Change Hour Inputs Back To 0
    changeHourInputsBack(
      changeDeepInput,
      changeGeneralInput,
      changeWeeklyInput,
      changeBiWeeklyInput,
      changeMonthlyInput
    );

    removeChangeIcons();
  }

  showQuote(e);
});

window.addEventListener('load', e => {
  showQuote(e);
});

// Change Hours & Cleaning Type Names Depending On What Ajustment Is Made In Settings
cleanAdjustForm.addEventListener('change', e => {
  changeHours(e);
  showQuote(e, true);

  // Change Clean Inputs Function
  const changeCleanInputs = (
    currentCleanInput,
    allCleanInputs,
    cleanType,
    otherCleanHeading
  ) => {
    if (e.target.classList.contains(currentCleanInput)) {
      // Change All Clean Inputs
      allCleanInputs.forEach(input => (input.value = e.target.value));

      document.querySelector(cleanType).dataset.id = e.target.value;

      document.querySelector(otherCleanHeading).textContent = e.target.value;
    }
  };

  // Change All Deep Clean Custom Inputs
  changeCleanInputs(
    'deep-clean-input-change',
    deepCleanChangeInputs,
    '.deep-clean-type',
    '.other-deep-clean'
  );

  // Change All General Clean Custom Inputs
  changeCleanInputs(
    'general-clean-input-change',
    generalCleanChangeInputs,
    '.general-clean-type',
    '.other-general-clean'
  );

  // Change All Weekly Clean Custom Inputs
  changeCleanInputs(
    'weekly-clean-input-change',
    weeklyCleanChangeInputs,
    '.weekly-clean-type',
    '.other-weekly-clean'
  );

  // Change All Bi-Weekly Clean Custom Inputs
  changeCleanInputs(
    'bi-weekly-clean-input-change',
    biWeeklyCleanChangeInputs,
    '.bi-weekly-clean-type',
    '.other-bi-weekly-clean'
  );

  // Change All Monthly Clean Custom Inputs
  changeCleanInputs(
    'monthly-clean-input-change',
    monthlyCleanChangeInputs,
    '.monthly-clean-type',
    '.other-monthly-clean'
  );

  // Change All User Clean Custom Inputs
  changeCleanInputs(
    'user-clean-input-change',
    userCleanChangeInputs,
    '.user-clean-type',
    '.other-user-clean'
  );
});

cleanAdjustForm.addEventListener('input', e => {
  // Change Cleaning Type Function
  const changeCleaningType = (storageKeyInput, cleanTypeDom, article) => {
    if (e.target.classList.contains(storageKeyInput)) {
      // Change Cleaing Type In UI
      document.querySelector(cleanTypeDom).textContent = e.target.value;

      // Scroll Into View Of The Cleaning Type You Are Changing
      document.querySelector(article).scrollIntoView({ block: 'center' });

      // Store The New Cleaning Type Into Local Storage
      localStorage.setItem(storageKeyInput, e.target.value);
    }
  };

  // Change Cleaning Type For Each Diffrent Clean
  // Change Deep Clean Type
  changeCleaningType(
    'deep-clean-input-change',
    '.deep-clean-type',
    '.deep-article'
  );

  // Change General Clean Type
  changeCleaningType(
    'general-clean-input-change',
    '.general-clean-type',
    '.general-article'
  );

  // Change Weekly Clean Type
  changeCleaningType(
    'weekly-clean-input-change',
    '.weekly-clean-type',
    '.weekly-article'
  );

  // Change Bi-Weekly Clean Type
  changeCleaningType(
    'bi-weekly-clean-input-change',
    '.bi-weekly-clean-type',
    '.bi-weekly-article'
  );

  // Change Monthly Clean Type
  changeCleaningType(
    'monthly-clean-input-change',
    '.monthly-clean-type',
    '.monthly-article'
  );

  // Change User Clean Type
  changeCleaningType(
    'user-clean-input-change',
    '.user-clean-type',
    '.user-article'
  );
});

cleanAdjustForm.addEventListener('click', e => {
  if (e.target.closest('.default-hours-btn')) {
    e.preventDefault();
    const currentSelect = e.target
      .closest('.select-container')
      .querySelector('.select-adjust');

    const selectHours = event => {
      changeHours(event);
      showQuote(event, true);
    };

    // Add Event Listener
    currentSelect.addEventListener('change', selectHours);

    currentSelect.value = currentSelect.dataset.id;
    const changeEvent = new Event('change');
    currentSelect.dispatchEvent(changeEvent, {
      bubbles: true,
      cancelable: false,
    });

    // Remove Event Listener
    currentSelect.removeEventListener('change', selectHours);
  }

  const scrollCleanIntoView = (cleanElement, article) => {
    if (e.target.closest('.clean-scroll')?.classList.contains(cleanElement)) {
      document.querySelector(article).scrollIntoView({ block: 'center' });
    }
  };

  // Scroll Clean Element Into View
  scrollCleanIntoView('deep-clean-scroll', '.deep-article');
  scrollCleanIntoView('general-clean-scroll', '.general-article');
  scrollCleanIntoView('weekly-clean-scroll', '.weekly-article');
  scrollCleanIntoView('bi-weekly-clean-scroll', '.bi-weekly-article');
  scrollCleanIntoView('monthly-clean-scroll', '.monthly-article');
  scrollCleanIntoView('user-clean-scroll', '.user-article');
});

// THIS SECOND HALF OF CODE DEALS WITH SHOWING ALL MODALS & DISPLAYING ALL THE DATA FOR SAVING QUOTES

// MODALS
const settingsIcon = document.querySelector('.settings');
const saveIcon = document.querySelector('.save');
const iconPickerModal = document.querySelector('.icon-modal');
const settingsModal = document.querySelector('.modal');
const saveQuoteModal = document.querySelector('.modal-quote');
const savedQuoteModal = document.querySelector('.modal-saved');
const showQuoteModal = document.querySelector('.modal-show');
const analyticsModal = document.querySelector('.modal-analytics');
const analyticsIcon = document.querySelector('.analytics');
const closeModal = document.querySelector('.close-modal');
const quoteHeading = document.querySelector('.quote-heading');

// Display Current Quote
const showQuoteHeading = document.querySelector('.show-quote-heading');
const amountPerHour = document.querySelector('.single-per-hour');
const quoteInfo = document.querySelector('.quote-info');
const singleTaxRate = document.querySelector('.single-tax-rate');
const singlePrice = document.querySelector('.single-price');
const singleHours = document.querySelector('.single-hours');
const singleHoursChanged = document.querySelector('.single-hours-changed');
const cleanType = document.querySelector('.clean-type');
const squareFootVal = document.querySelector('.square-foot-val');
const taxIncluded = document.querySelector('.tax-included');
const singleTaxes = document.querySelector('.single-taxes');
const singleEmail = document.getElementById('single-email');
const singlePhone = document.getElementById('single-phone');
const singleAddress = document.getElementById('single-address');
const singleCity = document.getElementById('single-city');
const singleZipcode = document.getElementById('single-zipcode');
const singleNotes = document.getElementById('single-notes');
const singleStatus = document.querySelector('.single-status');
const singleDeepPrice = document.querySelector('.single-deep-price');
const singleDeepHours = document.querySelector('.single-deep-hours');
const singleGeneralPrice = document.querySelector('.single-general-price');
const singleGeneralHours = document.querySelector('.single-general-hours');
const singleWeeklyPrice = document.querySelector('.single-weekly-price');
const singleWeeklyHours = document.querySelector('.single-weekly-hours');
const singleBiWeeklyPrice = document.querySelector('.single-bi-weekly-price');
const singleBiWeeklyHours = document.querySelector('.single-bi-weekly-hours');
const singleMonthlyPrice = document.querySelector('.single-monthly-price');
const singleUserPrice = document.querySelector('.single-user-price');
const singleUserHours = document.querySelector('.single-user-hours');
const singleMonthlyHours = document.querySelector('.single-monthly-hours');
const singleDeepHoursChanged = document.querySelector('.deep-hours-changed');
const singleGeneralHoursChanged = document.querySelector(
  '.general-hours-changed'
);
const singleWeeklyHoursChanged = document.querySelector(
  '.weekly-hours-changed'
);
const singleBiWeeklyHoursChanged = document.querySelector(
  '.bi-weekly-hours-changed'
);
const singleMonthlyHoursChanged = document.querySelector(
  '.monthly-hours-changed'
);
const singleUserHoursChanged = document.querySelector('.user-hours-changed');

// Single Input Form Selection
const singleInputForm = document.querySelector('.single-input-form');

// Select All Quotes
const deepArticle = document.querySelector('.deep-article');
const generalArticle = document.querySelector('.general-article');
const weeklyArticle = document.querySelector('.weekly-article');
const biWeeklyArticle = document.querySelector('.bi-weekly-article');
const monthlyArticle = document.querySelector('.monthly-article');

// Saved Quotes Slider Elements
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

// Clean Adjust Slider Elements
const cleanAdjustSlides = document.querySelectorAll('.clean-adjust-slide');
const cleanAdjustNextBtn = document.querySelector('.clean-adjust-next-btn');
const cleanAdjustPrevBtn = document.querySelector('.clean-adjust-prev-btn');

// Save Quote Info
const quoteNamesContainer = document.querySelector('.quote-names');
let savedQuotes;

// Filter Quotes
const filterSelect = document.getElementById('saved-quotes');
const filterDate = document.getElementById('filter-date');
const bothSavedQuoteFilters = document.querySelector(
  '.saved-quotes-filter-container'
);

// Sort Elements
let sort = false;
const sortBtn = document.querySelector('.sort-btn');

// Grid Elements
const gridBtn = document.querySelector('.grid-btn');
const gridIcon = document.querySelector('.grid-icon');

// Sort Icons
const sortedIcon = document.querySelector('.sorted-icon');
const notSortedIcon = document.querySelector('.not-sorted-icon');

// Toggle Dark Functionality
// Dark flag is used as a state variable (in this toggleDark function) to toggle dark mode on and off
let darkFlag = true;

// Toggler Vars
const toggler = document.querySelector('.toggler');
const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon');

// Show Current Quote
const quoteDate = document.querySelector('.quote-date');
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long',
};

// Name Search Input
const searchInput = document.getElementById('search-by-name');

// All Saved Quotes Icons
const calenderIcon = document.querySelector('.calender-icon');
const allContactsIcon = document.querySelector('.all-contacts-icon');
const gaveQuoteIcon = document.querySelector('.gave-quote-icon');
const giveCallbackIcon = document.querySelector('.give-callback-icon');
const bookedJobIcon = document.querySelector('.booked-job-icon');
const deadQuoteIcon = document.querySelector('.dead-quote-icon');

// Filter Select Colors
const allColor = '#15803d';
const todayColor = '#22c55e';
const last3DaysColor = '#14b8a6';
const last7DaysColor = '#6366f1';
const last31DaysColor = '#d946ef';
const last2MonthsColor = '#ec4899';
const last3MonthsColor = '#84cc16';
const last6MonthsColor = '#06b6d4';
const overLastYearColor = '#8b5cf6';

// Status Colors
let statusColor;
const gaveQuoteColor = '#2563eb';
const giveCallbackColor = '#f97316';
const bookedJobColor = '#10B981';
const deadQuotesColor = '#DC2626';

// Status Select
const statusBox = document.querySelector('.status-box');

// Change Quote Theme For Current Quote
const statusBackgrounds = document.querySelectorAll('.status-bg');

const mainQuoteIcon = document.querySelector('.main-quote-icon');

// Change Quote Theme For Save Quote
const savedQuotesIcon = document.querySelector('.saved-quotes-icon');

// Save Quote Modal Elements
const savedQuoteLabels = document.querySelectorAll('.save-quote-label');
const saveQuoteInputs = document.querySelectorAll('.save-quote-input');
const allInputFields = document.querySelectorAll('.input-field');
const showAllFieldsCheckbox = document.getElementById('show-all-fields');
const nameInput = document.querySelector('.name');

// Analytics Data
const statusDataContainer = document.querySelector('.status-data');
const noDataMessage = document.querySelector('.no-data-message');
const analyticsFilter = document.getElementById('analytics-filter');
const gaveQuoteDataBar = document.querySelector('.gave-quote-data');
const giveCallbackDataBar = document.querySelector('.give-callback-data');
const allBookedJobsDataBar = document.querySelector('.all-booked-jobs-data');
const allDeadQuotesDataBar = document.querySelector('.all-dead-quotes-data');
const allAnalyticsData = document.querySelectorAll('.analytics-data');
const totalQuotesGiven = document.querySelector('.total-quotes-given');
const gaveQuoteCircle = document.querySelector('.gave-quote-circle');
const giveCallbackCircle = document.querySelector('.give-callback-circle');
const bookedJobCircle = document.querySelector('.booked-job-circle');
const deadQuotesCircle = document.querySelector('.dead-quotes-circle');

// Icon Picker Vars
let articleNum;
const iconPickerContainer = document.querySelector('.icon-picker-container');

// User Clean Vars
const newCleanBtn = document.querySelector('.new-clean-btn');
const newCleanFormWrapper = document.querySelector('.new-clean-from-wrapper');

const addCleanBtn = document.querySelector('.add-clean-btn');
const userArticle = document.querySelector('.user-article');
const userCleanInput = document.getElementById('clean-name');
const userCleanType = document.querySelector('.user-clean-type');
const userCleanAdjustSettings = document.querySelectorAll(
  '.user-clean-settings'
);
const userSlide = document.querySelector('.user-slide');
const deleteCleanBtn = document.querySelector('.delete-clean-btn');
const cancelAddCleanBtn = document.querySelector('.cancel-add-clean');

// HTML Element
const html = document.documentElement;

// Save Quote Select Var
const statusSelectSave = document.querySelector('.others-select-colors');

showAllFieldsCheckbox.addEventListener('click', () => {
  if (showAllFieldsCheckbox.checked) {
    allInputFields.forEach(input => input.classList.remove('hidden'));
    nameInput.classList.remove('mb-1');
  } else {
    allInputFields.forEach(input => input.classList.add('hidden'));
    nameInput.classList.add('mb-1');
  }
});

// FUNCTIONS //
// Close Modal
const closeModalFunc = modal => {
  modal.addEventListener('click', e => {
    // Close Modal And Return To Home Screen
    if (e.target.classList.contains('close')) {
      modal.classList.add('invisible');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      html.classList.remove('overflow-y-hidden');
    }

    // Close Alerts On Close Icon Click
    if (e.target.classList.contains('close-alert')) {
      // Close Tax Alert Message On Close Btn Click
      alertTaxDom.classList.add('hidden', 'opacity-0');
    }

    if (e.target.classList.contains('close-save-alert')) {
      // Close Save Quote Alert Message On Close Btn Click
      alertSavingForm.classList.add('hidden', 'opacity-0');
    }
  });
};
// Run Close Modal Function On Each Modal
closeModalFunc(saveQuoteModal);
closeModalFunc(savedQuoteModal);
closeModalFunc(settingsModal);
closeModalFunc(showQuoteModal);
closeModalFunc(analyticsModal);
closeModalFunc(iconPickerModal);

// Remove Other Active Modals
const removeactiveModals = (
  firstModal,
  secondModal,
  thirdModal,
  forthModal,
  fifthModal
) => {
  if (!firstModal.classList.contains('invisible')) {
    firstModal.classList.add('invisible');
    firstModal.classList.remove('flex');
    firstModal.classList.add('hidden');
    html.classList.add('overflow-y-hidden');
  }
  if (!secondModal.classList.contains('invisible')) {
    secondModal.classList.add('invisible');
    secondModal.classList.remove('flex');
    secondModal.classList.add('hidden');
    html.classList.add('overflow-y-hidden');
  }
  if (!thirdModal.classList.contains('invisible')) {
    thirdModal.classList.add('invisible');
    thirdModal.classList.remove('flex');
    thirdModal.classList.add('hidden');
    html.classList.add('overflow-y-hidden');
  }
  if (!forthModal.classList.contains('invisible')) {
    forthModal.classList.add('invisible');
    forthModal.classList.remove('flex');
    forthModal.classList.add('hidden');
    html.classList.add('overflow-y-hidden');
  }
  if (!fifthModal.classList.contains('invisible')) {
    fifthModal.classList.add('invisible');
    fifthModal.classList.remove('flex');
    fifthModal.classList.add('hidden');
    html.classList.add('overflow-y-hidden');
  }
};

// Escape Keypress Modal Close
const keypressEscModal = modalName => {
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !closeModal.classList.contains('invisible')) {
      modalName.classList.add('invisible');
      modalName.classList.add('hidden');
      modalName.classList.remove('flex');
      html.classList.remove('overflow-y-hidden');
    }
  });
};
// Run Escape Keypress Modal Close One Each Modal
keypressEscModal(settingsModal);
keypressEscModal(savedQuoteModal);
keypressEscModal(saveQuoteModal);
keypressEscModal(showQuoteModal);
keypressEscModal(analyticsModal);
keypressEscModal(iconPickerModal);

// Show Alert Message
let alertTimer;
const showAlertMessage = (alertDom, parDom, spanDom, parText, spanText) => {
  // Declare Remove Alert Message Function
  const removeAlertMessage = () => {
    alertDom.classList.remove('opacity-1');
    alertDom.classList.add('opacity-0');
    alertDom.classList.add('hidden');
  };

  // Show Alert Message
  alertDom.classList.remove('opacity-0');
  alertDom.classList.remove('hidden');
  alertDom.classList.add('opacity-1');
  parDom.textContent = parText;
  spanDom.textContent = spanText;

  // Clear Alert Message Timer
  clearTimeout(alertTimer);

  // Add Alert Message Timer (setTimeout)
  // Hides Message After 4 Seconds
  alertTimer = setTimeout(removeAlertMessage, 4000);
};

// Delete Quote
const deleteQuote = () => {
  const allQuoteNames = [...document.querySelectorAll('.quote-name')];
  // Find Correct Quote To Delete
  const quoteToDelete = allQuoteNames.find(
    quote => quote.dataset.id === currentQuote.name
  );

  // Show Alert Message
  showAlertMessage(
    document.querySelector('.alert-saved-quotes'),
    document.querySelector('.saved-text'),
    document.querySelector('.small-text'),
    'Quote Deleted',
    currentQuote.name
  );

  // Remove That Quote From The DOM
  quoteToDelete.remove();

  // Find The Index Of The Quote That Needs To Be Deleted From savedQuotes
  const savedQuoteIndex = savedQuotes.findIndex(
    quote => quote.name === currentQuote.name
  );

  // Remove That Quote From The savedQuotes Array
  savedQuotes.splice(savedQuoteIndex, 1);

  // Update Local Storage
  localStorage.setItem('savedQuotes', JSON.stringify(savedQuotes));

  // Close Modal
  showQuoteModal.classList.add('invisible');
  showQuoteModal.classList.add('hidden');
  showQuoteModal.classList.remove('flex');

  // Open Saved Quotes Modal
  savedQuoteModal.classList.remove('invisible');
  savedQuoteModal.classList.remove('hidden');
  savedQuoteModal.classList.add('flex');
};

// Change Color Status
const changeColorStatus = select => {
  // Change Quote Theme Function
  const changeQuoteTheme = (index, color, icon, status) => {
    if (select.selectedIndex === index) {
      mainQuoteIcon.innerHTML = '';
      mainQuoteIcon.innerHTML = `<i class="fa-solid ${icon} fa-3x text-[${color}]"></i><h3 class="text-2xl text-[${color}] font-bold tracking-widest">${status}</h3>`;

      select.style.background = color;
      statusBox.style.background = color;

      statusBackgrounds.forEach(el => (el.style.background = color));

      singlePrice.style.background = color;
      singleTaxes.style.background = color;
      singleHours.style.background = color;

      singleDeepPrice.style.background = color;
      singleDeepHours.style.background = color;

      singleGeneralPrice.style.background = color;
      singleGeneralHours.style.background = color;

      singleWeeklyPrice.style.background = color;
      singleWeeklyHours.style.background = color;

      singleBiWeeklyPrice.style.background = color;
      singleBiWeeklyHours.style.background = color;

      singleMonthlyPrice.style.background = color;
      singleMonthlyHours.style.background = color;

      singleUserPrice.style.background = color;
      singleUserHours.style.background = color;
    }
  };

  // Change Quote Theme
  changeQuoteTheme(0, gaveQuoteColor, `fa-comments-dollar`, 'GAVE QUOTE');
  changeQuoteTheme(1, giveCallbackColor, `fa-square-phone`, 'GIVE CALLBACK');
  changeQuoteTheme(2, bookedJobColor, `fa-book-open`, 'BOOKED JOB');
  changeQuoteTheme(3, deadQuotesColor, `fa-file-circle-xmark`, 'DEAD QUOTE');
};

// Change Save Select Backgrounds Function
const changeSaveSelectBackgrounds = (index, color, icon) => {
  if (statusSelectSave.selectedIndex === index) {
    statusSelectSave.style.background = color;

    savedQuotesIcon.innerHTML = `<i class="fa-solid ${icon} fa-2x text-[${color}]"></i>`;

    savedQuoteLabels.forEach(label => (label.style.color = color));

    saveQuoteInputs.forEach(input => (input.style.outlineColor = color));
  }
};

// Change Save Modal Select Status Color and Icon
const changeSaveSelectStatus = () => {
  savedQuotesIcon.innerHTML = '';

  // Change Backgrounds For Save Select
  changeSaveSelectBackgrounds(0, gaveQuoteColor, `fa-comments-dollar`);
  changeSaveSelectBackgrounds(1, giveCallbackColor, `fa-square-phone`);
  changeSaveSelectBackgrounds(2, bookedJobColor, `fa-book-open`);
  changeSaveSelectBackgrounds(3, deadQuotesColor, `fa-file-circle-xmark`);
};

const statusGrey = document.querySelector('.status-grey');
// Display Current Quote
const displayCurrentQuote = () => {
  // Set Heading As Name
  showQuoteHeading.value = currentQuote.name;

  // Internationalization API
  const currentDate = new Date(currentQuote.date);
  const date = new Intl.DateTimeFormat(navigator.language, options).format(
    currentDate
  );

  // Set Quote Date
  quoteDate.textContent = date;

  // Set All Main Content
  singleHoursChanged.textContent = `Hours Changed ${currentQuote.hoursChanged}`;
  amountPerHour.textContent = `$${currentQuote.amountPerHour} per hour`;
  singleTaxRate.textContent = `${currentQuote.taxRate}% tax rate`;
  cleanType.textContent = currentQuote.clean;
  squareFootVal.textContent = `${currentQuote.squareFootage} Sq foot`;

  // If Taxes Are Over 0: Include A String Indicating If Taxes Are Included In Price Or Not
  if (+currentQuote.taxes.slice(1) > 0) {
    taxIncluded.textContent = `Taxes ${
      currentQuote.taxesAddedToPrice ? 'Included' : 'NOT Included'
    } In Price`;
  } else {
    taxIncluded.textContent = '';
  }

  // Set All Price Content
  singlePrice.textContent = currentQuote.price;
  singleHours.textContent = currentQuote.hours;
  singleTaxes.textContent = currentQuote.taxes;

  // Set All Input Content
  singleEmail.value = currentQuote.email;
  singlePhone.value = currentQuote.phoneNumber;
  singleAddress.value = currentQuote.address;
  singleCity.value = currentQuote.city;
  singleZipcode.value = currentQuote.zipCode;
  singleNotes.value = currentQuote.specialNotes;
  singleStatus.selectedIndex = currentQuote.status;
  showQuoteHeading.value = fixName(currentQuote.name);

  // Set Other Quotes Info
  // Deep
  singleDeepPrice.textContent = currentQuote.deepPrice;
  singleDeepHours.textContent = currentQuote.deepHours;

  // General
  singleGeneralPrice.textContent = currentQuote.generalPrice;
  singleGeneralHours.textContent = currentQuote.generalHours;

  // Weekly
  singleWeeklyPrice.textContent = currentQuote.weeklyPrice;
  singleWeeklyHours.textContent = currentQuote.weeklyHours;

  // Bi-Weekly
  singleBiWeeklyPrice.textContent = currentQuote.biWeeklyPrice;
  singleBiWeeklyHours.textContent = currentQuote.biWeeklyHours;

  // Monthly
  singleMonthlyPrice.textContent = currentQuote.monthlyPrice;
  singleMonthlyHours.textContent = currentQuote.monthlyHours;

  // User
  singleUserPrice.textContent = currentQuote.userPrice;
  singleUserHours.textContent = currentQuote.userHours;

  console.log(currentQuote.userPrice);

  // Deep Hours Changed
  singleDeepHoursChanged.textContent = `Hours Changed ${currentQuote.deepHoursChanged}`;

  // General Hours Changed
  singleGeneralHoursChanged.textContent = `Hours Changed ${currentQuote.generalHoursChanged}`;

  // Weekly Hours Changed
  singleWeeklyHoursChanged.textContent = `Hours Changed ${currentQuote.weeklyHoursChanged}`;

  // Bi Weekly Hours Changed
  singleBiWeeklyHoursChanged.textContent = `Hours Changed ${currentQuote.biWeeklyHoursChanged}`;

  // Monthly Hours Changed
  singleMonthlyHoursChanged.textContent = `Hours Changed ${currentQuote.monthlyHoursChanged}`;

  // User Hours Changed
  singleUserHoursChanged.textContent = `Hours Changed ${currentQuote.userHoursChanged}`;

  // Remove Event Listener From Delete Quote Btn
  document
    .querySelector('.delete-quote')
    .removeEventListener('click', deleteQuote);

  // Add Event Listener To Delete Quote Btn
  addListenerToDeleteBtn();

  // Set Status To Correct Color
  changeColorStatus(statusGrey);
};

// Clean Adjust Slider
const cleanAdjustSlider = () => {
  cleanAdjustNextBtn.addEventListener('click', e => {
    e.preventDefault();
    counter++;
    carousel();
  });

  cleanAdjustPrevBtn.addEventListener('click', e => {
    e.preventDefault();
    counter--;
    carousel();
  });
};
cleanAdjustSlider();

// All Cleans Slider
const carouselSlider = () => {
  const slides = document.querySelectorAll('.slide');
  // Carousel Function
  const carousel = () => {
    slides.forEach(slide => {
      if (counter === slides.length) {
        counter = 0;
      }
      if (counter < 0) {
        counter = slides.length - 1;
      }
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });
  };

  let counter = 0;
  nextBtn.addEventListener('click', () => {
    counter++;
    carousel();
  });
  prevBtn.addEventListener('click', () => {
    counter--;
    carousel();
  });
};
carouselSlider();

// Fix Name
const fixName = str => {
  return str
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase()
    .split(' ')
    .map(str => `${str[0]?.toUpperCase()}${str.slice(1)}`)
    .join(' ');
};

// Calc Days Passed Function
const calcDaysPassed = (date1, date2) =>
  Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

const removeAllFilterIcons = () => {
  allContactsIcon.classList.add('hidden');
  gaveQuoteIcon.classList.add('hidden');
  giveCallbackIcon.classList.add('hidden');
  bookedJobIcon.classList.add('hidden');
  deadQuoteIcon.classList.add('hidden');
};

const filterDisplaySavedQuotes = (
  selectedIndex,
  index,
  storedDaysPassed,
  color
) => {
  if (selectedIndex.selectedIndex === index) {
    // Filter Saved Quotes Array For Both Status & Dates
    const quotesLastFewDaysAgo = savedQuotes
      .filter(quote => quote.daysPassed <= storedDaysPassed)
      .filter(quote => +quote.status === filterSelect.selectedIndex - 1);

    // Filter Saved Quotes Array Just Dates
    const quotesToday = savedQuotes.filter(
      quote => quote.daysPassed <= storedDaysPassed
    );

    // Change Background Color Of Filter Dates
    selectedIndex.style.background = color;

    // Display Quotes
    if (filterSelect.selectedIndex === 0) {
      sortDisplayFilteredQuotes(quotesToday);
    } else {
      sortDisplayFilteredQuotes(quotesLastFewDaysAgo);
    }
  }
};

const dateIsValid = date => !Number.isNaN(new Date(date).getTime());

const changeFiltersToDefault = () => {
  filterSelect.selectedIndex = 0;
  filterSelect.style.background = allColor;
  filterDate.selectedIndex = 0;
  filterDate.style.background = allColor;
  removeAllFilterIcons();
  allContactsIcon.classList.remove('hidden');
};

const filterDisplaySearchQuotes = () => {
  // Assign Search Input Value
  const searchValue = searchInput.value;

  // Assign Quotes By Name
  const quotesByName = savedQuotes.filter(quote =>
    quote.name.toLowerCase().includes(searchInput.value.toLowerCase())
  );

  // Declare Quotes By Date
  let quotesByDate;

  // Options For Intl Date
  const options = {
    day: 'numeric',
    month: 'numeric',
  };

  if (dateIsValid(searchValue)) {
    quotesByDate = savedQuotes.filter(
      quote =>
        Intl.DateTimeFormat(navigator.language, options).format(
          new Date(quote.date)
        ) ===
        Intl.DateTimeFormat(navigator.language, options).format(
          new Date(searchValue)
        )
    );
  }

  // HTML For Quote Names Container Filling
  const html = `
      <div class="text-center">
      <i class="fa-solid fa-circle-exclamation text-4xl text-red-500"></i>
      <h3 class="text-center text-2xl font-bold mb-2">Could Not Find Any Quotes Under</h3>
      <span class="bg-red-500 text-white text-lg font-semibold tracking-wider p-1 px-3 capitalize shadow-lg">${searchValue}</span>
      </div>
      `;

  // Run Regular Filter
  if (searchValue === '') {
    checkDisplayFilteredDates(filterDate);
  } else {
    // Show Could Not Find Info
    quoteNamesContainer.innerHTML = '';

    // Change Filters Back To All
    changeFiltersToDefault();

    if (quotesByName.length >= 1) {
      // Display Filtered Quotes By Name
      sortDisplayFilteredQuotes(quotesByName);
    } else {
      // Show Could Not Find Info
      quoteNamesContainer.innerHTML = html;
    }

    if (quotesByDate?.length >= 1) {
      // Display Filtered Quotes By Date
      sortDisplayFilteredQuotes(quotesByDate);
    }

    // Show Could Not Find Info
    if (quotesByName.length < 1 && quotesByDate?.length < 1) {
      quoteNamesContainer.innerHTML = html;
    }
  }
};

const checkDisplayFilteredDates = selectedIndex => {
  searchInput.value = '';

  // All
  filterDisplaySavedQuotes(selectedIndex, 0, Infinity, allColor);

  // Today
  filterDisplaySavedQuotes(selectedIndex, 1, 0, todayColor);
  // Last 3 Days
  filterDisplaySavedQuotes(selectedIndex, 2, 3, last3DaysColor);

  // Last 7 Days
  filterDisplaySavedQuotes(selectedIndex, 3, 7, last7DaysColor);

  // Last 31 Days
  filterDisplaySavedQuotes(selectedIndex, 4, 31, last31DaysColor);

  // Last 2 Months
  filterDisplaySavedQuotes(selectedIndex, 5, 61, last2MonthsColor);

  // Last 3 Months
  filterDisplaySavedQuotes(selectedIndex, 6, 91, last3MonthsColor);

  // Last 6 Months
  filterDisplaySavedQuotes(selectedIndex, 7, 182, last6MonthsColor);

  // Over Last Year
  filterDisplaySavedQuotes(selectedIndex, 8, 365, overLastYearColor);
};

// Fill QuotesNamesContainer Function
const fillSavedQuotesContainer = (quoteInfo, placement) => {
  // Split Names & Dates Into An Array
  const namePlusDatePlusClean = quoteInfo.split('+');

  // Store Names & Dates Into Diffrent Vars
  let [quoteName, date, clean] = namePlusDatePlusClean;

  // Find Current Quote
  const currentQuote = savedQuotes.find(quote => quote.name === quoteName);

  // Calculate Days Passed
  const daysPassed = calcDaysPassed(new Date(), new Date(date));

  // Format Date
  date = Intl.DateTimeFormat(navigator.language).format(new Date(date));

  // Change Formatted Date To Today, Yesterday, or Days Ago
  if (daysPassed === 0) date = 'TODAY';
  if (daysPassed === 1) date = 'YESTERDAY';
  if (daysPassed !== 0 && daysPassed !== 1 && daysPassed <= 7) {
    date = `${daysPassed} DAYS AGO`;
  }

  // Add daysPassed Property To Current Quote Object
  currentQuote.daysPassed = daysPassed;

  // Set Color Status
  if (currentQuote.status === 0) {
    statusColor = gaveQuoteColor;
  }
  if (currentQuote.status === 1) {
    statusColor = giveCallbackColor;
  }
  if (currentQuote.status === 2) {
    statusColor = bookedJobColor;
  }
  if (currentQuote.status === 3) {
    statusColor = deadQuotesColor;
  }

  const html = `<a href="#" class="font-bold text-white tracking-widest flex items-center justify-between flex-wrap px-2 py-1 quote-name" data-id="${quoteName}" style="background: ${statusColor}"><p class="flex flex-col mr-4"><span class="name-sizes">${quoteName}</span><span class="text-xs sm:text-base capitalize text-white font-normal">${clean}</span></p><span class="text-xs text-white bg-black px-2 py-1">${date}</span></a>`;
  quoteNamesContainer.insertAdjacentHTML(placement, html);
};

const sortDisplaySavedQuotes = () => {
  // Clear QuoteNamesContainer
  quoteNamesContainer.innerHTML = '';

  // Store SavedQuotes Names Into Array
  const savedQuotesNames = savedQuotes.map(quote => quote.name);

  // Store All Saved Quote Dates Into Array
  const savedQuoteDates = savedQuotes.map(quote => quote.date);

  // Store All Saved Quote Cleaning Types Into Array
  const savedQuoteCleans = savedQuotes.map(quote => quote.clean);

  // Store All Saved Names & Dates Into An Array
  const quoteNamesPlusDatesPlusCleans = savedQuotesNames.map(
    (name, i) => `${name}+${savedQuoteDates[i]}+${savedQuoteCleans[i]}`
  );

  // Store SavedQuotes Into Sorted Array
  const namesSorted = quoteNamesPlusDatesPlusCleans.slice().sort();

  if (sort) {
    // Show Not Sorted Icon
    sortedIcon.classList.add('hidden');
    notSortedIcon.classList.remove('hidden');

    // Display Sorted Quotes
    namesSorted.forEach(name => fillSavedQuotesContainer(name, 'beforeend'));
  } else {
    // Show Sorted Icon
    notSortedIcon.classList.add('hidden');
    sortedIcon.classList.remove('hidden');

    // Display Non Sorted Quotes
    quoteNamesPlusDatesPlusCleans.forEach(name =>
      fillSavedQuotesContainer(name, 'afterbegin')
    );
  }
};

const sortDisplayFilteredQuotes = savedQuotes => {
  // Clear QuoteNamesContainer
  quoteNamesContainer.innerHTML = '';

  // Store All Saved Quote Dates Into Array
  const savedQuoteDates = savedQuotes.map(quote => quote.date);

  // Store All Saved Quote Names Into Array
  const savedQuotesNames = savedQuotes.map(quote => quote.name);

  // Store All Saved Quote Cleans Into Array
  const savedQuotesCleans = savedQuotes.map(quote => quote.clean);

  // Store All Saved Names & Dates Into An Array
  const quoteNamesPlusDatesPlusCleans = savedQuotesNames.map(
    (name, i) => `${name}+${savedQuoteDates[i]}+${savedQuotesCleans[i]}`
  );

  if (sort) {
    // Show Not Sorted Icon
    sortedIcon.classList.add('hidden');
    notSortedIcon.classList.remove('hidden');

    // Display Sorted Quotes
    quoteNamesPlusDatesPlusCleans
      .slice()
      .sort()
      .forEach(name => fillSavedQuotesContainer(name, 'beforeend'));
  } else {
    // Show Sorted Icon
    notSortedIcon.classList.add('hidden');
    sortedIcon.classList.remove('hidden');

    // Display Non Sorted Quotes
    quoteNamesPlusDatesPlusCleans.forEach(name =>
      fillSavedQuotesContainer(name, 'afterbegin')
    );
  }
};

// Bring In User Icons From Local Storage Functon
const bringInUserIconsFromStorage = (article, articleQuery) => {
  if (localStorage.getItem(article)) {
    const storeageClassList = JSON.parse(localStorage.getItem(article));

    quotesContainerDom.querySelector(articleQuery).firstElementChild.className =
      storeageClassList.join(' ');
  }
};

// LOCAL STORAGE //
// Change Sort Var If It Is Found In Local Storage
if (localStorage.getItem('sort')) {
  sort = JSON.parse(localStorage.getItem('sort'));
}

// Get savedQuotes from Local Storage & Put It into the savedQuotes array
if (localStorage.getItem('savedQuotes')) {
  // Add Local Storage Items To savedQuotes Array
  savedQuotes = JSON.parse(localStorage.getItem('savedQuotes'));
  // Loop Over Each Quote and Create A Link. Set Link In quoteNamesContainer
  sortDisplaySavedQuotes();
} else {
  savedQuotes = [];
}

// If Darkflag Is Stored In Local Storage, Assign The Value
if (localStorage.getItem('darkFlag')) {
  darkFlag = JSON.parse(localStorage.getItem('darkFlag'));
}

// Bring In User Icons From Local Storage
bringInUserIconsFromStorage('deep-article', '.deep-article');
bringInUserIconsFromStorage('general-article', '.general-article');
bringInUserIconsFromStorage('weekly-article', '.weekly-article');
bringInUserIconsFromStorage('bi-weekly-article', '.bi-weekly-article');
bringInUserIconsFromStorage('monthly-article', '.monthly-article');
bringInUserIconsFromStorage('user-article', '.user-article');

// Show User Clean If It Is In Local Storage
if (localStorage.getItem('show-user-article') === 'true') {
  // Show New User Clean
  newCleanBtn.classList.add('hidden');
  newCleanFormWrapper.classList.add('hidden');
  userArticle.classList.remove('hidden');

  // Show New User Clean In Settings
  userCleanAdjustSettings.forEach(el => {
    el.classList.remove('hidden');
    el.classList.add('flex');
  });

  // Show New User Clean in Show Current Quote Modal, Other Quote Slider
  userSlide.classList.add('slide');
  userSlide.classList.remove('hidden');

  // Add New User Clean In The Other Cleans Slider
  carouselSlider();
}

const calcDisplayAnalyticsData = daysPassed => {
  let allSavedQuotes;

  let currentSavedQuotes;

  const analyticsIndex = analyticsFilter.selectedIndex;

  // Show Analytics Data If There Are Saved Quotes
  if (savedQuotes.length !== 0) {
    allAnalyticsData.forEach(el => {
      el.classList.remove('opacity-0');
    });
  } else {
    // Remove Analytics Data If There Are NO Saved Quotes
    allAnalyticsData.forEach(el => {
      el.classList.add('opacity-0');
    });
  }

  if (analyticsIndex === 0) {
    allSavedQuotes = savedQuotes.length;
    currentSavedQuotes = savedQuotes;
  }

  if (analyticsIndex === 1) {
    const allFilteredQuotes = savedQuotes.filter(
      quote => quote.daysPassed === daysPassed
    );

    allSavedQuotes = allFilteredQuotes.length;

    currentSavedQuotes = allFilteredQuotes;
  }

  if (analyticsIndex > 1) {
    const allFilteredQuotes = savedQuotes.filter(
      quote => quote.daysPassed <= daysPassed
    );

    allSavedQuotes = allFilteredQuotes.length;

    currentSavedQuotes = allFilteredQuotes;
  }

  // Show Or Hide Analytics Data Bar
  if (currentSavedQuotes.length === 0) {
    statusDataContainer.style.display = 'none';
    noDataMessage.classList.remove('hidden');
  } else {
    statusDataContainer.style.display = 'flex';
    noDataMessage.classList.add('hidden');
  }

  // Assign Total Number Of Quotes
  totalQuotesGiven.textContent = allSavedQuotes;

  // Store All Given Quotes Total Length Into Var
  const allGaveQuotes = currentSavedQuotes.filter(
    quote => quote.status === 0
  ).length;

  // Store All Give Callbacks Total Length Into Var
  const allGiveCallback = currentSavedQuotes.filter(
    quote => quote.status === 1
  ).length;

  // Store All Booked Jobs Total Length Into Var
  const allBookedJob = currentSavedQuotes.filter(
    quote => quote.status === 2
  ).length;

  // Store All Dead Quotes Total Length Into Var
  const allDeadQuotes = currentSavedQuotes.filter(
    quote => quote.status === 3
  ).length;

  // Get The Percentage Of All Given Quotes
  const gaveQuotesPercentage = ((allGaveQuotes / allSavedQuotes) * 100).toFixed(
    0
  );

  // Get The Percentage Of All Give Callbacks
  const giveCallbacksPercentage = (
    (allGiveCallback / allSavedQuotes) *
    100
  ).toFixed(0);

  // Get The Percentage Of All Booked Jobs
  const allBookedJobsPercentage = (
    (allBookedJob / allSavedQuotes) *
    100
  ).toFixed(0);

  // Get The Percentage Of All Dead Quotes
  const allDeadQuotesPercentage = (
    (allDeadQuotes / allSavedQuotes) *
    100
  ).toFixed(0);

  // Add Status Data To Gave Quote Data Bar
  gaveQuoteDataBar.style.width = `${gaveQuotesPercentage}%`;

  allGaveQuotes
    ? (gaveQuoteDataBar.textContent = `${gaveQuotesPercentage}%`)
    : (gaveQuoteDataBar.textContent = '');

  gaveQuoteCircle.textContent = allGaveQuotes;

  // Add Status Data To Give Callback Data Bar & Circles
  giveCallbackDataBar.style.width = `${giveCallbacksPercentage}%`;

  allGiveCallback
    ? (giveCallbackDataBar.textContent = `${giveCallbacksPercentage}%`)
    : (giveCallbackDataBar.textContent = '');

  giveCallbackCircle.textContent = allGiveCallback;

  // Add Status Data To All Booked Jobs Data Bar & Circles
  allBookedJobsDataBar.style.width = `${allBookedJobsPercentage}%`;

  allBookedJob
    ? (allBookedJobsDataBar.textContent = `${allBookedJobsPercentage}%`)
    : (allBookedJobsDataBar.textContent = '');

  bookedJobCircle.textContent = allBookedJob;

  // Add Status Data To All Dead Quotes Data Bar & Circles
  allDeadQuotesDataBar.style.width = `${allDeadQuotesPercentage}%`;

  allDeadQuotes
    ? (allDeadQuotesDataBar.textContent = `${allDeadQuotesPercentage}%`)
    : (allDeadQuotesDataBar.textContent = '');

  deadQuotesCircle.textContent = allDeadQuotes;
};
calcDisplayAnalyticsData(null, '#10b981');

const filterAnalyticsData = () => {
  if (analyticsFilter.selectedIndex === 0) {
    calcDisplayAnalyticsData(null);
    analyticsFilter.style.background = allColor;
  }
  if (analyticsFilter.selectedIndex === 1) {
    calcDisplayAnalyticsData(0);
    analyticsFilter.style.background = todayColor;
  }
  if (analyticsFilter.selectedIndex === 2) {
    calcDisplayAnalyticsData(3);
    analyticsFilter.style.background = last3DaysColor;
  }
  if (analyticsFilter.selectedIndex === 3) {
    calcDisplayAnalyticsData(7);
    analyticsFilter.style.background = last7DaysColor;
  }
  if (analyticsFilter.selectedIndex === 4) {
    calcDisplayAnalyticsData(31);
    analyticsFilter.style.background = last31DaysColor;
  }
  if (analyticsFilter.selectedIndex === 5) {
    calcDisplayAnalyticsData(61);
    analyticsFilter.style.background = last2MonthsColor;
  }
  if (analyticsFilter.selectedIndex === 6) {
    calcDisplayAnalyticsData(91);
    analyticsFilter.style.background = last3MonthsColor;
  }
  if (analyticsFilter.selectedIndex === 7) {
    calcDisplayAnalyticsData(183);
    analyticsFilter.style.background = last6MonthsColor;
  }
  if (analyticsFilter.selectedIndex === 8) {
    calcDisplayAnalyticsData(365);
    analyticsFilter.style.background = overLastYearColor;
  }
};

// EVENT HANDLERS //
// Toggle Save Quote Modal On Save Icon Click (Sidebar)
saveIcon.addEventListener('click', () => {
  savedQuoteModal.classList.remove('invisible');
  savedQuoteModal.classList.remove('hidden');
  savedQuoteModal.classList.add('flex');
  html.classList.add('overflow-y-hidden');
  // Remove Other Active Modals
  removeactiveModals(
    settingsModal,
    saveQuoteModal,
    showQuoteModal,
    analyticsModal,
    iconPickerModal
  );
});

// Toggle Settings Modal On Setting Icon Click (Sidebar)
settingsIcon.addEventListener('click', () => {
  settingsModal.classList.toggle('invisible');
  settingsModal.classList.toggle('flex');
  settingsModal.classList.toggle('hidden');
  html.classList.toggle('overflow-y-hidden');
  // Remove Other Active Modals
  removeactiveModals(
    saveQuoteModal,
    savedQuoteModal,
    showQuoteModal,
    analyticsModal,
    iconPickerModal
  );
});

// Toggle Analytics Modal On Analytics Modal Click (Sidebar)
analyticsIcon.addEventListener('click', () => {
  analyticsModal.classList.toggle('invisible');
  analyticsModal.classList.toggle('flex');
  analyticsModal.classList.toggle('hidden');
  html.classList.toggle('overflow-y-hidden');
  // Remove Other Active Modals
  removeactiveModals(
    saveQuoteModal,
    savedQuoteModal,
    showQuoteModal,
    settingsModal,
    iconPickerModal
  );

  filterAnalyticsData();
});

// Show Icon Picker Modal On Article Icon Click
quotesContainerDom.addEventListener('click', e => {
  // Guard Cause
  if (!e.target.classList.contains('clean-icon')) return;

  // Add Overflow Hidden To HTML
  html.classList.add('overflow-y-hidden');

  // Store All Icon Links Into Array
  const allIconLinks = [...iconPickerContainer.firstElementChild.children];

  // Store The Icon Out Of Each Link Into An Array
  const allIcons = allIconLinks.map(icon => icon.firstElementChild);

  // Remove The Green Highlight On All Icons
  allIcons.forEach(icon => icon.classList.remove('text-emerald-600'));

  // Find The Current Icon That Is Being Clicked
  const currentIcon = allIcons.find(
    icon =>
      icon.classList[1] === e.target.classList[1] &&
      icon.classList[0] === e.target.classList[0]
  );

  // Add The Green Highlight To The Current Icon That Is Being Clicked
  currentIcon.classList.add('text-emerald-600');

  // Show The Icon Picker Modal
  iconPickerModal.classList.remove('invisible');
  iconPickerModal.classList.remove('hidden');
  iconPickerModal.classList.add('flex');

  const changeArticleNum = (article, num) => {
    if (e.target.closest(article)) {
      articleNum = num;
    }
  };

  // Change Article Numbers For Icon Picker Container Function To Use
  changeArticleNum('.deep-article', 1);
  changeArticleNum('.general-article', 2);
  changeArticleNum('.weekly-article', 3);
  changeArticleNum('.bi-weekly-article', 4);
  changeArticleNum('.monthly-article', 5);
  changeArticleNum('.user-article', 6);
});

// Change The Current Clean Articles Icon
iconPickerContainer.addEventListener('click', e => {
  e.preventDefault();

  // Gaurd Cause
  if (!e.target.classList.contains('picker-icon')) return;

  // Select All Icons And Store Into An Array
  const allIcons = [...e.currentTarget.firstElementChild.children];

  // Remove The Green Highlight From All Icons
  allIcons.forEach(icon =>
    icon.firstElementChild.classList.remove('text-emerald-600')
  );

  // Add The Green Highlight To The Current Icon Being Clicked
  e.target.classList.add('text-emerald-600');

  // Change Article Icon Function
  const changeArticleIcon = (num, article) => {
    // Find The Current Article
    if (articleNum === num) {
      // Select Current Article And Store Into Var
      const currentArticle = document.querySelector(article);

      // Change The Current Article Icon To The Icon Being Clicked
      currentArticle.firstElementChild.classList = e.target.classList;

      // Remove The Green Highlight From The Current Article
      currentArticle.firstElementChild.classList.remove('text-emerald-600');

      // Add The Classes That Make The Current Article Back To Being Regular
      currentArticle.firstElementChild.classList.add(
        'p-4',
        'text-xl',
        'bg-white',
        'rounded-full',
        'dark:bg-neutral-800',
        'clean-icon'
      );

      // Store Current Article ClassList Into Array
      const [articleStorageKey] = [...currentArticle.classList].slice(-1);

      // Store Current Article ClassList Into Local Storage
      localStorage.setItem(
        articleStorageKey,
        JSON.stringify([...currentArticle.firstElementChild.classList])
      );

      // Make The Current Article Scroll Into View
      currentArticle.scrollIntoView({ block: 'center' });
    }
  };

  // Run Change Article Icon Fuction For Each Of The Articles
  changeArticleIcon(1, '.deep-article');
  changeArticleIcon(2, '.general-article');
  changeArticleIcon(3, '.weekly-article');
  changeArticleIcon(4, '.bi-weekly-article');
  changeArticleIcon(5, '.monthly-article');
  changeArticleIcon(6, '.user-article');
});

// Show Create New User Clean Form
newCleanBtn.addEventListener('click', e => {
  e.preventDefault();
  newCleanBtn.classList.add('hidden');
  newCleanFormWrapper.classList.remove('hidden');
});

// Add New User Clean To The UI
addCleanBtn.addEventListener('click', e => {
  e.preventDefault();
  // Show User Clean
  userArticle.classList.remove('hidden');
  newCleanFormWrapper.classList.add('hidden');

  // Set New User Clean Showing To Local Storage
  localStorage.setItem('show-user-article', 'true');

  // Add New User Clean Name Heading To The Heading
  userCleanType.textContent = userCleanInput.value;

  // Add New User Clean Name To Each Of The Settings Inputs
  userCleanChangeInputs.forEach(input => (input.value = userCleanInput.value));

  // Add New User Clean Name To Local Storage
  localStorage.setItem('user-clean-input-change', userCleanInput.value);

  // Add New User Clean Name To Other Cleans Slides Heading
  document.querySelector('.other-user-clean').textContent =
    userCleanInput.value;

  // Show New User Clean In The Settings
  userCleanAdjustSettings.forEach(el => {
    el.classList.remove('hidden');
    el.classList.add('flex');
  });

  // Allow New User Clean To Slide In the Other Cleans Slider
  userSlide.classList.add('slide');
  userSlide.classList.remove('hidden');

  carouselSlider();
});

// Remove New User Clean From UI
deleteCleanBtn.addEventListener('click', e => {
  e.preventDefault();

  // Update Local Storage For New User Clean
  localStorage.setItem('show-user-article', false);

  // Remove New User Clean From UI
  newCleanBtn.classList.remove('hidden');
  newCleanFormWrapper.classList.add('hidden');
  userArticle.classList.add('hidden');

  // Remove New User Clean From Settings
  userCleanAdjustSettings.forEach(el => {
    el.classList.add('hidden');
    el.classList.remove('flex');
  });

  // Remove New User Clean From Other Cleans Slider
  userSlide.classList.remove('slide');
  userSlide.classList.add('hidden');

  carouselSlider();
});

// Cancel The Add New User Clean Form
cancelAddCleanBtn.addEventListener('click', e => {
  e.preventDefault();
  newCleanFormWrapper.classList.add('hidden');
  newCleanBtn.classList.remove('hidden');
});

// Go Back To Saved Quotes Modal
const backBtn = document.querySelector('.back-btn');
backBtn.addEventListener('click', () => {
  // Show Saved Quotes Modal
  showQuoteModal.classList.add('invisible');
  savedQuoteModal.classList.remove('invisible');
});

// Add Event Listener To Delete Btn
const addListenerToDeleteBtn = () => {
  const deleteQuoteBtn = document.querySelector('.delete-quote');
  deleteQuoteBtn.addEventListener('click', deleteQuote);
};

// Filter Analytics Data
analyticsFilter.addEventListener('change', () => {
  filterAnalyticsData();
});

// Search Input Event For Filtering Names & Dates
searchInput.addEventListener('input', filterDisplaySearchQuotes);

// Show Current Quote On Name Click
let currentQuote;
document.addEventListener('click', e => {
  // Guard Cause
  // If Current Clicked Element Is Not A Proper Link Stop Here!

  if (!e.target.closest('.quote-name')?.classList.contains('quote-name'))
    return;

  // Assign Current Quote
  currentQuote = savedQuotes.find(
    quote =>
      quote.name ===
      e.target.closest('.quote-name').firstElementChild.firstElementChild
        .textContent
  );

  // Display Show Quote Modal
  showQuoteModal.classList.remove('invisible');
  showQuoteModal.classList.remove('hidden');
  showQuoteModal.classList.add('flex');
  if (!savedQuoteModal.classList.contains('invisible')) {
    savedQuoteModal.classList.add('invisible');
  }

  // Display Current Quote
  displayCurrentQuote();
});

// Update Current Quote Info On Single Input Event Change
singleInputForm.addEventListener('input', () => {
  // Update Current Quote Info
  currentQuote.email = singleEmail.value;
  currentQuote.phoneNumber = singlePhone.value;
  currentQuote.address = singleAddress.value;
  currentQuote.city = singleCity.value;
  currentQuote.zipCode = singleZipcode.value;
  currentQuote.specialNotes = singleNotes.value;

  // Set Saved Quotes To Local Storage
  localStorage.setItem('savedQuotes', JSON.stringify(savedQuotes));
});

// Update Current Quote Name On Name Input Event Change
showQuoteHeading.addEventListener('input', () => {
  // Get The Index Of The Current Link

  const currentName = [...quoteNamesContainer.children].findIndex(
    el =>
      el.firstElementChild.firstElementChild.textContent === currentQuote.name
  );

  const currentElement = quoteNamesContainer.children[currentName];

  // Assign New Current Quote Name Property To The Current Input Value
  const sameQuoteName = savedQuotes.find(
    quote => quote.name === fixName(showQuoteHeading.value)
  );

  if (sameQuoteName && currentQuote.name !== fixName(showQuoteHeading.value)) {
    currentQuote.name = fixName(
      `${showQuoteHeading.value}${Math.floor(Math.random() * 999) + 1}`
    );
  } else {
    currentQuote.name = fixName(showQuoteHeading.value);
  }

  // Assign New Current Quote Data Id To The Current Element
  currentElement.firstElementChild.firstElementChild.dataset.id =
    currentQuote.name;

  // Update The Current Quote Name In The Saved Quotes Modal
  currentElement.firstElementChild.firstElementChild.textContent =
    currentQuote.name;

  // Set Saved Quotes To Local Storage
  localStorage.setItem('savedQuotes', JSON.stringify(savedQuotes));
});

// Lose Focus On Input On Keyup Event
singleInputForm.addEventListener('keyup', e => {
  if (e.key === 'Enter') {
    e.target.blur();
  }
});

// See All Cleans Dropdown
const seeCleans = document.querySelector('.see-cleans');
const showCleans = document.querySelector('.show-cleans');
seeCleans.addEventListener('click', () => {
  showCleans.classList.toggle('hidden');
});

// Change Darkflag Toggler Button Color & Icon Depending What Is In Local Storage
if (darkFlag) {
  moonIcon.classList.add('hidden');
  sunIcon.classList.remove('hidden');
  toggler.classList.add('bg-gray-500');
  toggler.classList.remove('bg-green-700');
  html.classList.remove('dark');
} else {
  sunIcon.classList.add('hidden');
  moonIcon.classList.remove('hidden');
  toggler.classList.add('bg-green-700');
  toggler.classList.remove('bg-gray-500');
  html.classList.add('dark');
}

// Toggle Dark Mode
toggler.addEventListener('click', () => {
  // Toggle Sun & Moon Icon
  sunIcon.classList.toggle('hidden');
  moonIcon.classList.toggle('hidden');

  // Toggle Dark Toggler Background From Gray To Green
  toggler.classList.toggle('bg-green-700');
  toggler.classList.toggle('bg-gray-500');

  // Add Or Remove Dark Class From HTML Element
  if (darkFlag) {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }

  // Change Darkflag
  darkFlag = !darkFlag;

  // Add Darkflag Status To Local Storage
  localStorage.setItem('darkFlag', darkFlag);
});

// Toggler Tax
// Toggle flag is used to toggle as a global variable to toggle taxes on and off in the calcDisplayQuote Function
const toggleTaxEl = document.querySelector('.toggler-tax');
const showAlertMessageBinded = showAlertMessage.bind(
  showAlertMessage,
  document.querySelector('.alert-tax'),
  document.querySelector('.tax-text'),
  document.querySelector('.span-tax-text')
);

// Change Toggle Tax Switch On Or Off Depending On Local Storage
if (taxFlag) {
  toggleTaxEl.children[0].classList.add('translate-x-6');
  toggleTaxEl.classList.add('bg-green-700');
  toggleTaxEl.classList.remove('bg-gray-500');
} else {
  toggleTaxEl.children[0].classList.remove('translate-x-6');
  toggleTaxEl.classList.add('bg-gray-500');
  toggleTaxEl.classList.remove('bg-green-700');
}

toggleTaxEl.addEventListener('click', e => {
  toggleTaxEl.children[0].classList.toggle('translate-x-6');
  if (toggleTaxEl.classList.contains('bg-green-700')) {
    // Show Alert Message
    showAlertMessageBinded('Taxes Removed From Total', 'Price');

    // Change Color Of Price Background
    priceText.classList.add('bg-red-500');
    priceText.classList.remove('bg-emerald-500');

    // Change Color Of Exclamation Background
    messageExclamationDom.classList.add('bg-red-500');
    messageExclamationDom.classList.remove('bg-emerald-500');

    // Change Color Of Tax Toggle Switch Background
    toggleTaxEl.classList.remove('bg-green-700');
    toggleTaxEl.classList.add('bg-gray-500');
  } else {
    // Show Alert Message
    showAlertMessageBinded('Taxes Included In Total', 'Price');

    // Change Color Of Price Background
    priceText.classList.add('bg-emerald-500');
    priceText.classList.remove('bg-red-500');

    // Change Color Of Exclamation Background
    messageExclamationDom.classList.remove('bg-red-500');
    messageExclamationDom.classList.add('bg-emerald-500');

    // Change Color Of Tax Toggle Switch Background
    toggleTaxEl.classList.add('bg-green-700');
  }
  taxFlag = !taxFlag;
  localStorage.setItem('taxFlag', taxFlag);
  showQuote(e);
});

// Display Save Quote Modal
const saveQuoteBtns = document.querySelectorAll('.quote-btn');
let price;
let hours;
let clean;
let taxes;
let hoursChanged;
// Price
let deepSavedPrice;
let generalSavedPrice;
let weeklySavedPrice;
let biWeeklySavedPrice;
let monthlySavedPrice;
let userSavedPrice;
// Hours
let deepSavedHours;
let generalSavedHours;
let weeklySavedHours;
let biWeeklySavedHours;
let monthlySavedHours;
let userSavedHours;
// Hours Changed
let deepHoursChanged;
let generalHoursChanged;
let weeklyHoursChanged;
let biWeeklyHoursChanged;
let monthlyHoursChanged;
let userHoursChanged;

// Save Quote Info On Save Quote Btn Click
saveQuoteBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();

    // Change Quote Status Back To GAVE QUOTE
    statusSelectSave.selectedIndex = 0;
    changeSaveSelectStatus();

    // Show Save Quote Modal
    saveQuoteModal.classList.remove('invisible');
    saveQuoteModal.classList.remove('hidden');
    saveQuoteModal.classList.add('flex');
    html.classList.add('overflow-y-hidden');

    // Select Current Quote
    const article = e.currentTarget.parentElement.parentElement;

    // STORE CURRENT QUOTE
    // Store Price Into Var
    price = article.querySelector('.price').textContent;

    // Store Hours Into Var
    hours = article.querySelector('.hours').textContent;

    // Store Cleanining Type Into Var
    clean = article.querySelector('.cleaning-type').dataset.id;

    // Store Taxes Into Var
    taxes = article.querySelector('.tax-number').textContent;

    // Store Hours Changed Intor Var
    hoursChanged = article.querySelector('.change-individual').value;

    // STORE OTHER QUOTES

    // PRICE
    // Store Deep Price Into Var
    deepSavedPrice = deepArticle.querySelector('.price').textContent;

    // Store General Price Into Var
    generalSavedPrice = generalArticle.querySelector('.price').textContent;

    // Store Weekly Price Into Var
    weeklySavedPrice = weeklyArticle.querySelector('.price').textContent;

    // Store Bi-Weekly Price Into Var
    biWeeklySavedPrice = biWeeklyArticle.querySelector('.price').textContent;

    // Store Monthly Price Into Var
    monthlySavedPrice = monthlyArticle.querySelector('.price').textContent;

    // Store User Price Into Var
    userSavedPrice = userArticle.querySelector('.price').textContent;

    // HOURS
    // Store Deep Hours Into Var
    deepSavedHours = deepArticle.querySelector('.hours').textContent;

    // Store General Hours Into Var
    generalSavedHours = generalArticle.querySelector('.hours').textContent;

    // Store Weekly Hours Into Var
    weeklySavedHours = weeklyArticle.querySelector('.hours').textContent;

    // Store Bi-Weekly Hours Into Var
    biWeeklySavedHours = biWeeklyArticle.querySelector('.hours').textContent;

    // Store Monthly Hours Into Var
    monthlySavedHours = monthlyArticle.querySelector('.hours').textContent;

    // Store User Hours Into Var
    userSavedHours = userArticle.querySelector('.hours').textContent;

    // Store Deep Hours Changed Into Var
    deepHoursChanged = deepArticle.querySelector('.change-individual').value;

    // Store General Hours Changed Into Var
    generalHoursChanged =
      generalArticle.querySelector('.change-individual').value;

    // Store Weekly Hours Changed Into Var
    weeklyHoursChanged =
      weeklyArticle.querySelector('.change-individual').value;

    // Store Bi-Weekly Hours Changed Into Var
    biWeeklyHoursChanged =
      biWeeklyArticle.querySelector('.change-individual').value;

    // Store Monthly Hours Changed Into Var
    monthlyHoursChanged =
      monthlyArticle.querySelector('.change-individual').value;

    // Store User Hours Changed Into Var
    userHoursChanged = userArticle.querySelector('.change-individual').value;
  });
});

// Set Status To Local Storage
singleStatus.addEventListener('change', () => {
  // Change Current Quote Status
  currentQuote.status = singleStatus.selectedIndex;

  // Update Local Storage
  localStorage.setItem('savedQuotes', JSON.stringify(savedQuotes));

  // Change Filter Select Back To All
  filterSelect.selectedIndex = 0;

  // Clear Search Input
  searchInput.value = '';

  // Change Icon Back To All Contacts
  removeAllFilterIcons();
  allContactsIcon.classList.remove('hidden');

  // Display Todays Links Function
  const displayTodaysLinks = (statusIndex, days) => {
    if (filterDate.selectedIndex === statusIndex) {
      const quotesToDisplay = savedQuotes.filter(
        quote => quote.daysPassed === days
      );
      sortDisplayFilteredQuotes(quotesToDisplay);
    }
  };

  // Display Days Passed Links Function
  const displayPassedLinks = (statusIndex, days) => {
    if (filterDate.selectedIndex === statusIndex) {
      const quotesToDisplay = savedQuotes.filter(
        quote => quote.daysPassed <= days
      );
      sortDisplayFilteredQuotes(quotesToDisplay);
    }
  };

  if (filterDate.selectedIndex === 0) {
    sortDisplaySavedQuotes();
  }

  displayTodaysLinks(1, 0);

  displayPassedLinks(2, 3);
  displayPassedLinks(3, 7);
  displayPassedLinks(4, 31);
  displayPassedLinks(5, 61);
  displayPassedLinks(6, 91);
  displayPassedLinks(7, 183);
  displayPassedLinks(8, 365);
});

bothSavedQuoteFilters.addEventListener('change', () => {
  // Store Selected Index Into Var
  const statusIndex = filterSelect.selectedIndex;

  // Add Correct Icon Function
  const addCorrectIcon = (index, icon) => {
    if (statusIndex === index) {
      removeAllFilterIcons();
      icon.classList.remove('hidden');

      checkDisplayFilteredDates(filterDate);
    }
  };

  addCorrectIcon(0, allContactsIcon);
  addCorrectIcon(1, gaveQuoteIcon);
  addCorrectIcon(2, giveCallbackIcon);
  addCorrectIcon(3, bookedJobIcon);
  addCorrectIcon(4, deadQuoteIcon);
});

// Change Colors On Status Select Saved Quote Modal
filterSelect.addEventListener('change', e => {
  // Store Filter Select Into Var
  const filterSelect = e.target;

  const changeFilterSelectBcgColor = (index, color) => {
    if (filterSelect.selectedIndex === index) {
      filterSelect.style.background = color;
    }
  };

  changeFilterSelectBcgColor(0, allColor);
  changeFilterSelectBcgColor(1, gaveQuoteColor);
  changeFilterSelectBcgColor(2, giveCallbackColor);
  changeFilterSelectBcgColor(3, bookedJobColor);
  changeFilterSelectBcgColor(4, deadQuotesColor);
});

// Add Main Status Back To Green When, Also Change Induidual Status To Proper Color When Changed
statusGrey.addEventListener('change', () => {
  // Add Main Status Back To Green
  filterSelect.style.background = allColor;
  changeColorStatus(statusGrey);
});

// Change Colors On Status Select Save Quote Modal
statusSelectSave.addEventListener('change', () => {
  changeSaveSelectStatus();
});

// Push Data Into Saved Quotes Array, On Save Form Quote Submit (Array Of Objects)
const saveQuoteForm = document.querySelector('.save-quote-form');
saveQuoteForm.addEventListener('submit', e => {
  e.preventDefault();
  // Select Inputs
  const nameInput = document.querySelector('.name');
  const emailInput = document.querySelector('.email');
  const phoneNumberInput = document.querySelector('.phone-number');
  const addressInput = document.querySelector('.address');
  const cityInput = document.querySelector('.city');
  const zipCodeInput = document.querySelector('.zip-code');
  const specialNotesInput = document.querySelector('.special-notes');
  const squareFootSelect = document.querySelector('.square-foot-select');
  const amountPerHour = document.getElementById('amount-per-hour');
  const taxRate = document.getElementById('tax-rate');
  const status = document.getElementById('status');

  if (nameInput.value !== '') {
    // Add Number To End Of Name If That Name Already Exists
    let quoteName;
    const savedQuotesNames = savedQuotes.map(quote => quote.name.toLowerCase());
    if (savedQuotesNames.includes(fixName(nameInput.value).toLowerCase())) {
      quoteName = `${nameInput.value}${Math.floor(Math.random() * 999) + 1}`;
    } else {
      quoteName = nameInput.value;
    }

    // Remove Overflow Hidden From HTML
    html.classList.remove('overflow-y-hidden');

    // Clear Search Input
    searchInput.value = '';

    // Show Alert Message
    showAlertMessage(
      document.querySelector('.alert-save-form'),
      document.querySelector('.par-text'),
      document.querySelector('.span-text'),
      'Quote Saved',
      fixName(quoteName)
    );

    // Store Current Date Into ISOString
    const ISOString = new Date().toISOString();

    // Add A + Symbol In Front Of Hours Changed If It Is Positive
    if (Math.sign(+hoursChanged) === 1) {
      hoursChanged = `+${hoursChanged}`;
    }
    if (Math.sign(+deepHoursChanged) === 1) {
      deepHoursChanged = `+${deepHoursChanged}`;
    }
    if (Math.sign(+generalHoursChanged) === 1) {
      generalHoursChanged = `+${generalHoursChanged}`;
    }
    if (Math.sign(+weeklyHoursChanged) === 1) {
      weeklyHoursChanged = `+${weeklyHoursChanged}`;
    }
    if (Math.sign(+biWeeklyHoursChanged) === 1) {
      biWeeklyHoursChanged = `+${biWeeklyHoursChanged}`;
    }
    if (Math.sign(+monthlyHoursChanged) === 1) {
      monthlyHoursChanged = `+${monthlyHoursChanged}`;
    }
    if (Math.sign(+userHoursChanged) === 1) {
      userHoursChanged = `+${userHoursChanged}`;
    }

    // Push Data Into Saved Quotes Array
    savedQuotes.push({
      name: `${fixName(quoteName)}`,
      email: `${emailInput.value}`,
      phoneNumber: `${phoneNumberInput.value}`,
      address: `${addressInput.value}`,
      city: `${cityInput.value}`,
      zipCode: `${zipCodeInput.value}`,
      price: `${price}`,
      hours: `${hours}`,
      taxes: `${taxes}`,
      clean: clean,
      hoursChanged: `${hoursChanged}`,
      squareFootage: `${squareFootSelect.value}`,
      amountPerHour: `${amountPerHour.value}`,
      taxRate: `${taxRate.value}`,
      specialNotes: `${specialNotesInput.value}`,
      status: status.selectedIndex,
      deepPrice: `${deepSavedPrice}`,
      generalPrice: `${generalSavedPrice}`,
      weeklyPrice: `${weeklySavedPrice}`,
      biWeeklyPrice: `${biWeeklySavedPrice}`,
      monthlyPrice: `${monthlySavedPrice}`,
      userPrice: `${userSavedPrice}`,
      deepHours: `${deepSavedHours}`,
      generalHours: `${generalSavedHours}`,
      weeklyHours: `${weeklySavedHours}`,
      biWeeklyHours: `${biWeeklySavedHours}`,
      monthlyHours: `${monthlySavedHours}`,
      userHours: `${userSavedHours}`,
      deepHoursChanged: `${deepHoursChanged}`,
      generalHoursChanged: `${generalHoursChanged}`,
      biWeeklyHoursChanged: `${biWeeklyHoursChanged}`,
      weeklyHoursChanged: `${weeklyHoursChanged}`,
      monthlyHoursChanged: `${monthlyHoursChanged}`,
      userHoursChanged: `${userHoursChanged}`,
      taxesAddedToPrice: taxFlag,
      date: ISOString,
    });

    // Make Filter Select Go Back All Selection
    filterSelect.selectedIndex = 0;
    filterSelect.style.background = allColor;

    // Make Filter Date Go Back To All Selection
    filterDate.selectedIndex = 0;
    filterDate.style.background = allColor;

    // Change Filter Icon Back To Book
    removeAllFilterIcons();
    allContactsIcon.classList.remove('hidden');

    // Add Newley Created Quote To SavedQuotesContainer Modal
    sortDisplaySavedQuotes();

    // Set Saved Quotes To Local Storage
    localStorage.setItem('savedQuotes', JSON.stringify(savedQuotes));

    // Close Modal
    saveQuoteModal.classList.add('invisible');
    saveQuoteModal.classList.add('hidden');
    saveQuoteModal.classList.remove('flex');

    // Clear Input Values
    nameInput.value =
      emailInput.value =
      phoneNumberInput.value =
      addressInput.value =
      cityInput.value =
      zipCodeInput.value =
      specialNotesInput.value =
        '';
  } else {
    showAlertMessage(
      document.querySelector('.alert-saving-form'),
      document.querySelector('.saving-text'),
      document.querySelector('.span-saving-text'),
      '',
      'Please Enter A Name'
    );
  }
});

// Sort Names
sortBtn.addEventListener('click', () => {
  sort = !sort;

  // Set Sort To Local Storage
  localStorage.setItem('sort', sort);

  if (searchInput.value.length === 0) {
    checkDisplayFilteredDates(filterDate);
  } else {
    filterDisplaySearchQuotes();
  }
});

// Display Grid View
gridBtn.addEventListener('click', () => {
  gridIcon.classList.toggle('emerald-color');
  quoteNamesContainer.classList.toggle('grid-class');
  quoteNamesContainer.classList.toggle('space-y-3');
});
