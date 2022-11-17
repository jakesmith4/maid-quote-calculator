// THIS FIRST HALF OF THE CODE DEALS WITH CALCULATING & DISPLAYING THE VALUES FOR THE MAIN CALCULATOR

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

// Change Hours Adjust Elements
const cleanAdjustForm = document.querySelector('.clean-adjust');
const select1s = document.querySelectorAll('.select-1');
const select2s = document.querySelectorAll('.select-2');
const select3s = document.querySelectorAll('.select-3');
const select4s = document.querySelectorAll('.select-4');
const select5s = document.querySelectorAll('.select-5');

// Global State Var
let flag = true;

// Options Var
const options = `
<option value="0">0</option>
                    <option value=".25">.25</option>
                    <option value=".50">.50</option>
                    <option value=".75">.75</option>
                    <option value="1">1</option>
                    <option value="1.25">1.25</option>
                    <option value="1.5">1.5</option>
                    <option value="1.75">1.75</option>
                    <option value="2">2</option>
                    <option value="2.25">2.25</option>
                    <option value="2.5">2.5</option>
                    <option value="2.75">2.75</option>
                    <option value="3">3</option>
                    <option value="3.25">3.25</option>
                    <option value="3.5">3.5</option>
                    <option value="3.75">3.75</option>
                    <option value="4">4</option>
                    <option value="4.25">4.25</option>
                    <option value="4.5">4.5</option>
                    <option value="4.75">4.75</option>
                    <option value="5">5</option>
                    <option value="5.25">5.25</option>
                    <option value="5.5">5.5</option>
                    <option value="5.75">5.75</option>
                    <option value="6">6</option>
                    <option value="6.25">6.25</option>
                    <option value="6.5">6.5</option>
                    <option value="6.75">6.75</option>
                    <option value="7">7</option>
                    <option value="7.25">7.25</option>
                    <option value="7.5">7.5</option>
                    <option value="7.75">7.75</option>
                    <option value="8">8</option>
                    <option value="8.25">8.25</option>
                    <option value="8.5">8.5</option>
                    <option value="8.75">8.75</option>
                    <option value="9">9</option>
                    <option value="9.25">9.25</option>
                    <option value="9.5">9.5</option>
                    <option value="9.75">9.75</option>
                    <option value="10">10</option>
                    <option value="10.25">10.25</option>
                    <option value="10.5">10.5</option>
                    <option value="10.75">10.75</option>
                    <option value="11">11</option>
                    <option value="11.25">11.25</option>
                    <option value="11.5">11.5</option>
                    <option value="11.75">11.75</option>
                    <option value="12">12</option>
                    <option value="12.25">12.25</option>
                    <option value="12.5">12.5</option>
                    <option value="12.75">12.75</option>
                    <option value="13">13</option>
                    <option value="13.25">13.25</option>
                    <option value="13.5">13.5</option>
                    <option value="13.75">13.75</option>
                    <option value="14">14</option>
                    <option value="14.25">14.25</option>
                    <option value="14.5">14.5</option>
                    <option value="14.75">14.75</option>
                    <option value="15">15</option>
                    <option value="15.25">15.25</option>
                    <option value="15.5">15.5</option>
                    <option value="15.75">15.75</option>
                    <option value="16">16</option>
                    <option value="16.25">16.25</option>
                    <option value="16.5">16.5</option>
                    <option value="16.75">16.75</option>
                    <option value="17">17</option>
                    <option value="17.25">17.25</option>
                    <option value="17.5">17.5</option>
                    <option value="17.75">17.75</option>
                    <option value="18">18</option>
                    <option value="18.25">18.25</option>
                    <option value="18.5">18.5</option>
                    <option value="18.75">18.75</option>
                    <option value="19">19</option>
                    <option value="19.25">19.25</option>
                    <option value="19.5">19.5</option>
                    <option value="19.75">19.75</option>
                    <option value="20">20</option>
`;

// Add Option Dropdowns
const addOptionDropdowns = (el, hours) => {
  el.forEach((select, i) => {
    select.innerHTML = options;
    select.value = hours[i];

    const element = select.children[select.selectedIndex];
    element.style.background = 'green';
    element.style.fontWeight = 'bold';
  });
};

// DATA //
// Deep Hours
const allDeepHoursMain = [
  6.5, 8, 9.5, 10.5, 11.5, 12.5, 13.5, 14.5, 15.5, 16.5, 17.5, 18.5,
];
let allDeepHours;
if (localStorage.getItem('changedDeep')) {
  allDeepHours = JSON.parse(localStorage.getItem('changedDeep'));
} else {
  allDeepHours = allDeepHoursMain.slice();
}
addOptionDropdowns(select1s, allDeepHoursMain);

// General Hours
const allGeneralHoursMain = [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5];
let allGeneralHours;
if (localStorage.getItem('changedGeneral')) {
  allGeneralHours = JSON.parse(localStorage.getItem('changedGeneral'));
} else {
  allGeneralHours = allGeneralHoursMain.slice();
}
addOptionDropdowns(select2s, allGeneralHoursMain);

// Weekly Hours
const allWeeklyHoursMain = [
  2.5, 3, 3.5, 3.75, 4, 4.25, 4.5, 4.75, 5, 5.25, 5.5, 5.75,
];
let allWeeklyHours;
if (localStorage.getItem('changedWeekly')) {
  allWeeklyHours = JSON.parse(localStorage.getItem('changedWeekly'));
} else {
  allWeeklyHours = allWeeklyHoursMain.slice();
}
addOptionDropdowns(select3s, allWeeklyHoursMain);

// Bi Weekly Hours
const allBiWeeklyHoursMain = [
  3, 3.25, 3.75, 4, 4.25, 4.5, 4.75, 5, 5.25, 5.5, 5.75, 6,
];
let allbiWeeklyHours;
if (localStorage.getItem('changedBiWeekly')) {
  allbiWeeklyHours = JSON.parse(localStorage.getItem('changedBiWeekly'));
} else {
  allbiWeeklyHours = allBiWeeklyHoursMain.slice();
}
addOptionDropdowns(select4s, allBiWeeklyHoursMain);

// Monthly Hours
const allMonthlyHoursMain = [
  3.25, 3.5, 4, 4.25, 4.5, 4.75, 5, 5.25, 5.5, 5.75, 6, 6.25,
];
// let allMonthlyHours = allMonthlyHoursMain.slice();
let allMonthlyHours;
if (localStorage.getItem('changedMonthly')) {
  allMonthlyHours = JSON.parse(localStorage.getItem('changedMonthly'));
} else {
  allMonthlyHours = allMonthlyHoursMain.slice();
}
addOptionDropdowns(select5s, allMonthlyHoursMain);

const checkLocalStorage = className => {
  if (localStorage.getItem(className)) {
    document.querySelector(`.${className}`).value =
      localStorage.getItem(className);
  } else {
    // document.querySelector(`.${className}`).value = '0';
  }
};

// Deep Clean Adjust Local Storage Check
checkLocalStorage('deep-clean-adjust-1000-1500');
checkLocalStorage('deep-clean-adjust-1600-2000');
checkLocalStorage('deep-clean-adjust-2100-2200');
checkLocalStorage('deep-clean-adjust-2300-2500');
checkLocalStorage('deep-clean-adjust-2600-2800');
checkLocalStorage('deep-clean-adjust-2900-3100');
checkLocalStorage('deep-clean-adjust-3200-3400');
checkLocalStorage('deep-clean-adjust-3500-3700');
checkLocalStorage('deep-clean-adjust-3800-4000');
checkLocalStorage('deep-clean-adjust-4100-4300');
checkLocalStorage('deep-clean-adjust-4400-4600');
checkLocalStorage('deep-clean-adjust-4800-5000');

// General Clean Adjust Local Storage Check
checkLocalStorage('general-clean-adjust-1000-1500');
checkLocalStorage('general-clean-adjust-1600-2000');
checkLocalStorage('general-clean-adjust-2100-2200');
checkLocalStorage('general-clean-adjust-2300-2500');
checkLocalStorage('general-clean-adjust-2600-2800');
checkLocalStorage('general-clean-adjust-2900-3100');
checkLocalStorage('general-clean-adjust-3200-3400');
checkLocalStorage('general-clean-adjust-3500-3700');
checkLocalStorage('general-clean-adjust-3800-4000');
checkLocalStorage('general-clean-adjust-4100-4300');
checkLocalStorage('general-clean-adjust-4400-4600');
checkLocalStorage('general-clean-adjust-4800-5000');

// Weekly Clean Adjust Local Storage Check
checkLocalStorage('weekly-clean-adjust-1000-1500');
checkLocalStorage('weekly-clean-adjust-1600-2000');
checkLocalStorage('weekly-clean-adjust-2100-2200');
checkLocalStorage('weekly-clean-adjust-2300-2500');
checkLocalStorage('weekly-clean-adjust-2600-2800');
checkLocalStorage('weekly-clean-adjust-2900-3100');
checkLocalStorage('weekly-clean-adjust-3200-3400');
checkLocalStorage('weekly-clean-adjust-3500-3700');
checkLocalStorage('weekly-clean-adjust-3800-4000');
checkLocalStorage('weekly-clean-adjust-4100-4300');
checkLocalStorage('weekly-clean-adjust-4400-4600');
checkLocalStorage('weekly-clean-adjust-4800-5000');

// Bi-Weekly Clean Adjust Local Storage Check
checkLocalStorage('bi-weekly-clean-adjust-1000-1500');
checkLocalStorage('bi-weekly-clean-adjust-1600-2000');
checkLocalStorage('bi-weekly-clean-adjust-2100-2200');
checkLocalStorage('bi-weekly-clean-adjust-2300-2500');
checkLocalStorage('bi-weekly-clean-adjust-2600-2800');
checkLocalStorage('bi-weekly-clean-adjust-2900-3100');
checkLocalStorage('bi-weekly-clean-adjust-3200-3400');
checkLocalStorage('bi-weekly-clean-adjust-3500-3700');
checkLocalStorage('bi-weekly-clean-adjust-3800-4000');
checkLocalStorage('bi-weekly-clean-adjust-4100-4300');
checkLocalStorage('bi-weekly-clean-adjust-4400-4600');
checkLocalStorage('bi-weekly-clean-adjust-4800-5000');

// Monthly Clean Adjust Local Storage Check
checkLocalStorage('monthly-clean-adjust-1000-1500');
checkLocalStorage('monthly-clean-adjust-1600-2000');
checkLocalStorage('monthly-clean-adjust-2100-2200');
checkLocalStorage('monthly-clean-adjust-2300-2500');
checkLocalStorage('monthly-clean-adjust-2600-2800');
checkLocalStorage('monthly-clean-adjust-2900-3100');
checkLocalStorage('monthly-clean-adjust-3200-3400');
checkLocalStorage('monthly-clean-adjust-3500-3700');
checkLocalStorage('monthly-clean-adjust-3800-4000');
checkLocalStorage('monthly-clean-adjust-4100-4300');
checkLocalStorage('monthly-clean-adjust-4400-4600');
checkLocalStorage('monthly-clean-adjust-4800-5000');

// Change Deep Hours
const changeDeepHours = (event, className, index) => {
  showQuote(event);
  if (event.target.classList.contains(className)) {
    if (+event.target.value === allDeepHoursMain[0]) {
      allDeepHours[index] = allDeepHoursMain.slice()[index];
      // Set Item To Local Storage
      localStorage.setItem(
        'changedDeep',
        JSON.stringify(allDeepHoursMain.slice())
      );
      console.log(allDeepHoursMain[0]);
      localStorage.setItem(className, allDeepHoursMain[0]);
    } else {
      allDeepHours[index] = +event.target.value;
      // Set Item To Local Storage
      localStorage.setItem('changedDeep', JSON.stringify(allDeepHours));
      localStorage.setItem(
        className,
        document.querySelector(`.${className}`).value
      );
    }
  }
};

// Change General Hours
const changeGeneralHours = (event, className, index) => {
  showQuote(event);
  if (event.target.classList.contains(className)) {
    if (+event.target.value === allGeneralHoursMain[0]) {
      allGeneralHours[index] = allGeneralHoursMain.slice()[index];
      // Set Item To Local Storage
      localStorage.setItem(
        'changedGeneral',
        JSON.stringify(allGeneralHoursMain.slice())
      );
      localStorage.setItem(className, allGeneralHoursMain[0]);
    } else {
      allGeneralHours[index] = +event.target.value;
      // Set Item To Local Storage
      localStorage.setItem('changedGeneral', JSON.stringify(allGeneralHours));
      localStorage.setItem(
        className,
        document.querySelector(`.${className}`).value
      );
    }
  }
};

// Change Weekly Hours
const changeWeeklyHours = (event, className, index) => {
  showQuote(event);
  if (event.target.classList.contains(className)) {
    if (+event.target.value === allWeeklyHoursMain[0]) {
      allWeeklyHours[index] = allWeeklyHoursMain.slice()[index];
      // Set Item To Local Storage
      localStorage.setItem(
        'changedWeekly',
        JSON.stringify(allWeeklyHoursMain.slice())
      );
      localStorage.setItem(className, allWeeklyHoursMain[0]);
    } else {
      allWeeklyHours[index] = +event.target.value;
      // Set Item To Local Storage
      localStorage.setItem('changedWeekly', JSON.stringify(allWeeklyHours));
      localStorage.setItem(
        className,
        document.querySelector(`.${className}`).value
      );
    }
  }
};

// Change Bi-Weekly Hours
const changeBiWeeklyHours = (event, className, index) => {
  showQuote(event);
  if (event.target.classList.contains(className)) {
    if (+event.target.value === allBiWeeklyHoursMain[0]) {
      allbiWeeklyHours[index] = allBiWeeklyHoursMain.slice()[index];
      // Set Item To Local Storage
      localStorage.setItem(
        'changedBiWeekly',
        JSON.stringify(allBiWeeklyHoursMain.slice())
      );
      localStorage.setItem(className, allBiWeeklyHoursMain[0]);
    } else {
      allbiWeeklyHours[index] = +event.target.value;
      // Set Item To Local Storage
      localStorage.setItem('changedBiWeekly', JSON.stringify(allbiWeeklyHours));
      localStorage.setItem(
        className,
        document.querySelector(`.${className}`).value
      );
    }
  }
};

// Change Monthly Hours
const changeMonthlyHours = (event, className, index) => {
  showQuote(event);
  if (event.target.classList.contains(className)) {
    if (+event.target.value === allMonthlyHoursMain[0]) {
      allMonthlyHours[index] = allMonthlyHoursMain.slice()[index];
      // Set Item To Local Storage
      localStorage.setItem(
        'changedMonthly',
        JSON.stringify(allMonthlyHoursMain.slice())
      );
      localStorage.setItem(className, allMonthlyHoursMain[0]);
    } else {
      allMonthlyHours[index] = +event.target.value;
      // Set Item To Local Storage
      localStorage.setItem('changedMonthly', JSON.stringify(allMonthlyHours));
      localStorage.setItem(
        className,
        document.querySelector(`.${className}`).value
      );
    }
  }
};

// Change Hours Depending On What Ajustment Is Made In Settings
cleanAdjustForm.addEventListener('change', e => {
  // Change Deep Hours
  changeDeepHours(e, 'deep-clean-adjust-1000-1500', 0);
  changeDeepHours(e, 'deep-clean-adjust-1600-2000', 1);
  changeDeepHours(e, 'deep-clean-adjust-2100-2200', 2);
  changeDeepHours(e, 'deep-clean-adjust-2300-2500', 3);
  changeDeepHours(e, 'deep-clean-adjust-2600-2800', 4);
  changeDeepHours(e, 'deep-clean-adjust-2900-3100', 5);
  changeDeepHours(e, 'deep-clean-adjust-3200-3400', 6);
  changeDeepHours(e, 'deep-clean-adjust-3500-3700', 7);
  changeDeepHours(e, 'deep-clean-adjust-3800-4000', 8);
  changeDeepHours(e, 'deep-clean-adjust-4100-4300', 9);
  changeDeepHours(e, 'deep-clean-adjust-4400-4600', 10);
  changeDeepHours(e, 'deep-clean-adjust-4800-5000', 11);

  // Change General Hours
  changeGeneralHours(e, 'general-clean-adjust-1000-1500', 0);
  changeGeneralHours(e, 'general-clean-adjust-1600-2000', 1);
  changeGeneralHours(e, 'general-clean-adjust-2100-2200', 2);
  changeGeneralHours(e, 'general-clean-adjust-2300-2500', 3);
  changeGeneralHours(e, 'general-clean-adjust-2600-2800', 4);
  changeGeneralHours(e, 'general-clean-adjust-2900-3100', 5);
  changeGeneralHours(e, 'general-clean-adjust-3200-3400', 6);
  changeGeneralHours(e, 'general-clean-adjust-3500-3700', 7);
  changeGeneralHours(e, 'general-clean-adjust-3800-4000', 8);
  changeGeneralHours(e, 'general-clean-adjust-4100-4300', 9);
  changeGeneralHours(e, 'general-clean-adjust-4400-4600', 10);
  changeGeneralHours(e, 'general-clean-adjust-4800-5000', 11);

  // Change Weekly Hours
  changeWeeklyHours(e, 'weekly-clean-adjust-1000-1500', 0);
  changeWeeklyHours(e, 'weekly-clean-adjust-1600-2000', 1);
  changeWeeklyHours(e, 'weekly-clean-adjust-2100-2200', 2);
  changeWeeklyHours(e, 'weekly-clean-adjust-2300-2500', 3);
  changeWeeklyHours(e, 'weekly-clean-adjust-2600-2800', 4);
  changeWeeklyHours(e, 'weekly-clean-adjust-2900-3100', 5);
  changeWeeklyHours(e, 'weekly-clean-adjust-3200-3400', 6);
  changeWeeklyHours(e, 'weekly-clean-adjust-3500-3700', 7);
  changeWeeklyHours(e, 'weekly-clean-adjust-3800-4000', 8);
  changeWeeklyHours(e, 'weekly-clean-adjust-4100-4300', 9);
  changeWeeklyHours(e, 'weekly-clean-adjust-4400-4600', 10);
  changeWeeklyHours(e, 'weekly-clean-adjust-4800-5000', 11);

  // Change Bi-Weekly Hours
  changeBiWeeklyHours(e, 'bi-weekly-clean-adjust-1000-1500', 0);
  changeBiWeeklyHours(e, 'bi-weekly-clean-adjust-1600-2000', 1);
  changeBiWeeklyHours(e, 'bi-weekly-clean-adjust-2100-2200', 2);
  changeBiWeeklyHours(e, 'bi-weekly-clean-adjust-2300-2500', 3);
  changeBiWeeklyHours(e, 'bi-weekly-clean-adjust-2600-2800', 4);
  changeBiWeeklyHours(e, 'bi-weekly-clean-adjust-2900-3100', 5);
  changeBiWeeklyHours(e, 'bi-weekly-clean-adjust-3200-3400', 6);
  changeBiWeeklyHours(e, 'bi-weekly-clean-adjust-3500-3700', 7);
  changeBiWeeklyHours(e, 'bi-weekly-clean-adjust-3800-4000', 8);
  changeBiWeeklyHours(e, 'bi-weekly-clean-adjust-4100-4300', 9);
  changeBiWeeklyHours(e, 'bi-weekly-clean-adjust-4400-4600', 10);
  changeBiWeeklyHours(e, 'bi-weekly-clean-adjust-4800-5000', 11);

  // Change Monthly Hours
  changeMonthlyHours(e, 'monthly-clean-adjust-1000-1500', 0);
  changeMonthlyHours(e, 'monthly-clean-adjust-1600-2000', 1);
  changeMonthlyHours(e, 'monthly-clean-adjust-2100-2200', 2);
  changeMonthlyHours(e, 'monthly-clean-adjust-2300-2500', 3);
  changeMonthlyHours(e, 'monthly-clean-adjust-2600-2800', 4);
  changeMonthlyHours(e, 'monthly-clean-adjust-2900-3100', 5);
  changeMonthlyHours(e, 'monthly-clean-adjust-3200-3400', 6);
  changeMonthlyHours(e, 'monthly-clean-adjust-3500-3700', 7);
  changeMonthlyHours(e, 'monthly-clean-adjust-3800-4000', 8);
  changeMonthlyHours(e, 'monthly-clean-adjust-4100-4300', 9);
  changeMonthlyHours(e, 'monthly-clean-adjust-4400-4600', 10);
  changeMonthlyHours(e, 'monthly-clean-adjust-4800-5000', 11);
});

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
  const taxAmount = ((tax / 100) * allHours[sqFootage.selectedIndex - 1] * hour)
    .toFixed(2)
    .replace(/^/, '$');

  // Remove Change Icons
  const removeChangeIcon = () => {
    icon.classList.add('hidden');
    // article.classList.remove('border-[#e5e7eb]');
    // article.classList.add('border-transparent');
    // article.style.background = '#f8f3f9';
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
  } else {
    taxElementContainer.classList.add('hidden');
  }

  // Add Change Icons
  if (change !== 0) {
    icon.classList.remove('hidden');
    // article.style.background =
    //   'linear-gradient(to bottom right, #f9f7f4, #f6f3f8)';
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

let taxFlag = true;
// Show Taxes Display Indicator
const taxesDisplayDom = document.querySelector('.taxes-display');
const showTaxIndicator = () => {
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
const spinnerDom = document.querySelector('.spinner');
const quotesContainerDom = document.querySelector('.quotes-container');
const displaySpinner = () => {
  spinnerDom.style.display = 'flex';
  quotesContainerDom.style.display = 'none';
  setTimeout(() => {
    spinnerDom.style.display = 'none';
    // Change Display Depending On Browser Size
    changeDisplayOnResize();
  }, 1000);
};

// Change Quotes Container Display On Browser Resize
window.onresize = () => {
  changeDisplayOnResize();
};

const showQuote = event => {
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
};

// EVENT HANDLERS //
formControl.addEventListener('change', e => {
  showQuote(e);
});

window.addEventListener('load', e => {
  showQuote(e);
});

// THIS SECOND HALF OF CODE DEALS WITH SHOWING ALL MODALS & DISPLAYING ALL THE DATA FOR SAVING QUOTES

// MODALS
const settingsIcon = document.querySelector('.settings');
const saveIcon = document.querySelector('.save');
const settingsModal = document.querySelector('.modal');
const saveQuoteModal = document.querySelector('.modal-quote');
const savedQuoteModal = document.querySelector('.modal-saved');
const showQuoteModal = document.querySelector('.modal-show');
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

// Single Input Form Selection
const singleInputForm = document.querySelector('.single-input-form');

// Select All Quotes
const deepArticle = document.querySelector('.deep-article');
const generalArticle = document.querySelector('.general-article');
const weeklyArticle = document.querySelector('.weekly-article');
const biWeeklyArticle = document.querySelector('.bi-weekly-article');
const monthlyArticle = document.querySelector('.monthly-article');

// HTML Element
const html = document.documentElement;

// FUNCTIONS //
// Close Modal
const closeModalFunc = modal => {
  modal.addEventListener('click', e => {
    if (e.target.classList.contains('close')) {
      modal.classList.add('invisible');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      html.classList.remove('overflow-y-hidden');
    }
  });
};
// Run Close Modal Function On Each Modal
closeModalFunc(saveQuoteModal);
closeModalFunc(savedQuoteModal);
closeModalFunc(settingsModal);
closeModalFunc(showQuoteModal);

// Remove Other Active Modals
const removeactiveModals = (firstModal, secondModal, thirdModal) => {
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
    quoteToDelete.textContent
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
  if (select.selectedIndex === 0) {
    select.style.background = '#2563eb';
  }
  if (select.selectedIndex === 1) {
    select.style.background = '#dc2626';
  }
  if (select.selectedIndex === 2) {
    select.style.background = '#262626';
  }
};

const statusGrey = document.querySelector('.status-grey');
// Display Current Quote
const displayCurrentQuote = () => {
  // Set Heading As Name
  showQuoteHeading.textContent = currentQuote.name;
  // Set All Main Content
  amountPerHour.textContent = `$${currentQuote.amountPerHour} per hour`;
  singleTaxRate.textContent = `${currentQuote.taxRate}% tax rate`;
  cleanType.textContent = currentQuote.clean;
  squareFootVal.textContent = `${currentQuote.squareFootage} Sq foot`;
  singleHoursChanged.textContent = `Hours Changed ${currentQuote.hoursChanged}`;

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

  // Remove Event Listener From Delete Quote Btn
  // FIXME //
  document
    .querySelector('.delete-quote')
    .removeEventListener('click', deleteQuote);
  addListenerToDeleteBtn();

  // Set Status To Correct Color
  changeColorStatus(statusGrey);
};

// Saved Quotes Slider Elements
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

// Clean Adjust Slider Elements
const cleanAdjustSlides = document.querySelectorAll('.clean-adjust-slide');
const cleanAdjustNextBtn = document.querySelector('.clean-adjust-next-btn');
const cleanAdjustPrevBtn = document.querySelector('.clean-adjust-prev-btn');

// Clean Adjust Slider
const cleanAdjustSlider = () => {
  let counter = 0;
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
};
cleanAdjustSlider();

// All Cleans Slider
const carouselSlider = () => {
  let counter = 0;
  nextBtn.addEventListener('click', () => {
    counter++;
    carousel();
  });
  prevBtn.addEventListener('click', () => {
    counter--;
    carousel();
  });

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
};
carouselSlider();

// Show Alert Message
const showAlertMessage = (alertDom, parDom, spanDom, parText, spanText) => {
  alertDom.classList.remove('opacity-0');
  alertDom.classList.remove('hidden');
  alertDom.classList.add('opacity-1');
  parDom.textContent = parText;
  spanDom.textContent = spanText;
  setTimeout(() => {
    alertDom.classList.remove('opacity-1');
    alertDom.classList.add('opacity-0');
    alertDom.classList.add('hidden');
  }, 4000);
};

// Fill QuotesNamesContainer Function
const fillSavedQuotesContainer = quoteName => {
  const html = `<a href="#" class="text-semibold text-emerald-600 tracking-widest block mb-3 quote-name" data-id="${quoteName}">${quoteName}</a>`;
  quoteNamesContainer.insertAdjacentHTML('beforeend', html);
};

// EVENT HANDLERS //
// Toggle Save Quote Modal On Save Icon Click (Sidebar)
saveIcon.addEventListener('click', () => {
  savedQuoteModal.classList.remove('invisible');
  savedQuoteModal.classList.remove('hidden');
  savedQuoteModal.classList.add('flex');
  html.classList.add('overflow-y-hidden');
  // Remove Other Active Modals
  removeactiveModals(settingsModal, saveQuoteModal, showQuoteModal);
});

// Toggle Settings Modal On Setting Icon Click (Sidebar)
settingsIcon.addEventListener('click', e => {
  settingsModal.classList.toggle('invisible');
  settingsModal.classList.toggle('flex');
  settingsModal.classList.toggle('hidden');
  html.classList.toggle('overflow-y-hidden');
  // Remove Other Active Modals
  removeactiveModals(saveQuoteModal, savedQuoteModal, showQuoteModal);
});

// Go Back To Saved Quotes Modal
const backBtn = document.querySelector('.back-btn');
backBtn.addEventListener('click', () => {
  showQuoteModal.classList.add('invisible');
  savedQuoteModal.classList.remove('invisible');
});

// Add Event Listener To Delete Btn
const addListenerToDeleteBtn = () => {
  const deleteQuoteBtn = document.querySelector('.delete-quote');
  deleteQuoteBtn.addEventListener('click', deleteQuote);
};

// Show Current Quote On Name Click
let currentQuote;
document.addEventListener('click', e => {
  const allQuoteNames = document.querySelectorAll('.quote-name');
  allQuoteNames.forEach(quote => {
    quote.addEventListener('click', e => {
      currentQuote = savedQuotes.find(
        quote => quote.name === e.target.textContent
      );
      showQuoteModal.classList.remove('invisible');
      showQuoteModal.classList.remove('hidden');
      showQuoteModal.classList.add('flex');
      if (!savedQuoteModal.classList.contains('invisible')) {
        savedQuoteModal.classList.add('invisible');
      }
      displayCurrentQuote();
    });
  });
});

// Update Current Quote Info On Sinlge Input Event Change
singleInputForm.addEventListener('change', () => {
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

// See All Cleans Dropdown
const seeCleans = document.querySelector('.see-cleans');
const showCleans = document.querySelector('.show-cleans');
seeCleans.addEventListener('click', () => {
  showCleans.classList.toggle('hidden');
});

// Toggle Dark Functionality
// Dark flag is used as a state variable (in this toggleDark function) to toggle dark mode on and off
let darkFlag = true;
const toggler = document.querySelector('.toggler');
const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon');

// Toggle Dark Mode
toggler.addEventListener('click', () => {
  sunIcon.classList.toggle('hidden');
  moonIcon.classList.toggle('hidden');
  if (darkFlag) {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
  darkFlag = !darkFlag;
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

toggleTaxEl.addEventListener('click', () => {
  toggleTaxEl.children[0].classList.toggle('translate-x-6');
  if (toggleTaxEl.classList.contains('bg-green-700')) {
    // Show Alert Message
    showAlertMessageBinded(
      'Tax will be Removed from price on next quote given',
      'Taxes Removed'
    );
    toggleTaxEl.classList.remove('bg-green-700');
    toggleTaxEl.classList.add('bg-gray-500');
  } else {
    // Show Alert Message
    showAlertMessageBinded(
      'Tax will be Added to price on next quote given',
      'Taxes added'
    );
    toggleTaxEl.classList.add('bg-green-700');
  }
  taxFlag = !taxFlag;
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
// Hours
let deepSavedHours;
let generalSavedHours;
let weeklySavedHours;
let biWeeklySavedHours;
let monthlySavedHours;
// Hours Changed
let deepHoursChanged;
let generalHoursChanged;
let weeklyHoursChanged;
let biWeeklyHoursChanged;
let monthlyHoursChanged;

// Save Quote Info On Save Quote Btn Click
saveQuoteBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
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
    clean = article.querySelector('.cleaning-type').textContent;

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
  });
});

// Set Status To Local Storage
singleStatus.addEventListener('change', () => {
  currentQuote.status = singleStatus.selectedIndex;
  // Update Local Storage
  localStorage.setItem('savedQuotes', JSON.stringify(savedQuotes));
  filterSelect.selectedIndex = 0;
  quoteNamesContainer.innerHTML = '';
  savedQuotes.forEach(quote => {
    fillSavedQuotesContainer(quote.name);
  });
});

// Save Quote Info
const quoteNamesContainer = document.querySelector('.quote-names');
let savedQuotes;

// Filter Quotes
const filterSelect = document.getElementById('saved-quotes');
filterSelect.addEventListener('change', () => {
  const savedQuotes2 = savedQuotes.filter(
    quote => +quote.status === filterSelect.selectedIndex - 1
  );
  quoteNamesContainer.innerHTML = '';
  if (filterSelect.selectedIndex === 0) {
    savedQuotes.forEach(quote => {
      fillSavedQuotesContainer(quote.name);
    });
  } else {
    savedQuotes2.forEach(quote => {
      fillSavedQuotesContainer(quote.name);
    });
  }
});

// Change Colors On Status Select Saved Quote Modal
const statusSelectSaved = document.querySelector('.select-colors');

statusSelectSaved.addEventListener('change', () => {
  if (statusSelectSaved.selectedIndex === 0) {
    statusSelectSaved.style.background = '#059669';
  }
  if (statusSelectSaved.selectedIndex === 1) {
    statusSelectSaved.style.background = '#2563eb';
  }
  if (statusSelectSaved.selectedIndex === 2) {
    statusSelectSaved.style.background = '#dc2626';
  }
  if (statusSelectSaved.selectedIndex === 3) {
    statusSelectSaved.style.background = '#262626';
  }
});

// Add Main Status Back To Green When, Also Change Induidual Status To Proper Color When Changed
statusGrey.addEventListener('change', () => {
  // Add Main Status Back To Green
  filterSelect.style.background = '#059669';
  changeColorStatus(statusGrey);
});

// Change Colors On Status Select Save Quote Modal
const statusSelectSave = document.querySelector('.others-select-colors');

statusSelectSave.addEventListener('change', () => {
  changeColorStatus(statusSelectSave);
});

// Get savedQuotes from Local Storage & Put It into the savedQuotes array
if (localStorage.getItem('savedQuotes')) {
  // Add Local Storage Items To savedQuotes Array
  savedQuotes = JSON.parse(localStorage.getItem('savedQuotes'));
  // Loop Over Each Quote and Create A Link. Set Link In quoteNamesContainer
  savedQuotes.forEach(quote => {
    fillSavedQuotesContainer(quote.name);
  });
} else {
  savedQuotes = [];
}

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
    const savedQuotesNames = savedQuotes.map(quote => quote.name);
    if (savedQuotesNames.includes(nameInput.value)) {
      quoteName = `${nameInput.value}${Math.floor(Math.random() * 999) + 1}`;
    } else {
      quoteName = nameInput.value;
    }

    // Remove Overflow Hidden From HTML
    html.classList.remove('overflow-y-hidden');

    // Show Alert Message
    showAlertMessage(
      document.querySelector('.alert-save-form'),
      document.querySelector('.par-text'),
      document.querySelector('.span-text'),
      'Quote Saved',
      quoteName
    );

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

    // Push Data Into Saved Quotes Array
    savedQuotes.push({
      name: `${quoteName}`,
      email: `${emailInput.value}`,
      phoneNumber: `${phoneNumberInput.value}`,
      address: `${addressInput.value}`,
      city: `${cityInput.value}`,
      zipCode: `${zipCodeInput.value}`,
      price: `${price}`,
      hours: `${hours}`,
      taxes: `${taxes}`,
      clean: `${clean}`,
      hoursChanged: `${hoursChanged}`,
      squareFootage: `${squareFootSelect.value}`,
      amountPerHour: `${amountPerHour.value}`,
      taxRate: `${taxRate.value}`,
      specialNotes: `${specialNotesInput.value}`,
      status: `${status.selectedIndex}`,
      deepPrice: `${deepSavedPrice}`,
      generalPrice: `${generalSavedPrice}`,
      weeklyPrice: `${weeklySavedPrice}`,
      biWeeklyPrice: `${biWeeklySavedPrice}`,
      monthlyPrice: `${monthlySavedPrice}`,
      deepHours: `${deepSavedHours}`,
      generalHours: `${generalSavedHours}`,
      weeklyHours: `${weeklySavedHours}`,
      biWeeklyHours: `${biWeeklySavedHours}`,
      monthlyHours: `${monthlySavedHours}`,
      deepHoursChanged: `${deepHoursChanged}`,
      generalHoursChanged: `${generalHoursChanged}`,
      biWeeklyHoursChanged: `${biWeeklyHoursChanged}`,
      weeklyHoursChanged: `${weeklyHoursChanged}`,
      monthlyHoursChanged: `${monthlyHoursChanged}`,
    });

    // Add Newley Created Quote To SavedQuotesContainer Modal
    fillSavedQuotesContainer(quoteName);

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
