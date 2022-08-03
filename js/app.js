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

// FUNCTION //
// Close Modal
const closeModalFunc = modal => {
  modal.addEventListener('click', e => {
    if (e.target.classList.contains('close')) {
      modal.classList.add('invisible');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  });
};
closeModalFunc(saveQuoteModal);
closeModalFunc(savedQuoteModal);
closeModalFunc(settingsModal);
closeModalFunc(showQuoteModal);

// FUNCTION //
// Remove Other Active Modals
const removeactiveModals = (firstModal, secondModal) => {
  if (!firstModal.classList.contains('invisible')) {
    firstModal.classList.add('invisible');
    firstModal.classList.remove('flex');
    firstModal.classList.add('hidden');
  }
  if (!secondModal.classList.contains('invisible')) {
    secondModal.classList.add('invisible');
    secondModal.classList.remove('flex');
    secondModal.classList.add('hidden');
  }
};

// Toggle Save Quote Modal On Save Icon Click (Sidebar)
saveIcon.addEventListener('click', () => {
  savedQuoteModal.classList.remove('invisible');
  savedQuoteModal.classList.remove('hidden');
  savedQuoteModal.classList.add('flex');
  // Remove Other Active Modals
  removeactiveModals(settingsModal, saveQuoteModal);
});

// Toggle Settings Modal On Setting Icon Click (Sidebar)
settingsIcon.addEventListener('click', e => {
  settingsModal.classList.toggle('invisible');
  settingsModal.classList.toggle('flex');
  settingsModal.classList.toggle('hidden');
  // Remove Other Active Modals
  removeactiveModals(saveQuoteModal, savedQuoteModal);
});

// Go Back To Saved Quotes Modal
const backBtn = document.querySelector('.back-btn');
backBtn.addEventListener('click', () => {
  showQuoteModal.classList.add('invisible');
  savedQuoteModal.classList.remove('invisible');
});

// Escape Keypress Modal Close
const keypressEscModal = modalName => {
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !closeModal.classList.contains('invisible')) {
      modalName.classList.add('invisible');
      modalName.classList.add('hidden');
      modalName.classList.remove('flex');
    }
  });
};
keypressEscModal(settingsModal);
keypressEscModal(savedQuoteModal);
keypressEscModal(saveQuoteModal);
keypressEscModal(showQuoteModal);

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

// Display Current Quote
const showQuoteHeading = document.querySelector('.show-quote-heading');
const quoteInfo = document.querySelector('.quote-info');
const displayCurrentQuote = () => {
  showQuoteHeading.textContent = currentQuote.name;
  quoteInfo.innerHTML = `
  <div>
  <span>Price: ${currentQuote.price}</span>
  </div>
  <div>
  <span>Email: ${currentQuote.email}</span>
  </div>
  <div>
  <span>Phone Number: ${currentQuote.phoneNumber}</span>
  </div>
  <div>
  <span>Address: ${currentQuote.address}</span>
  </div>
  <div>
  <span>City: ${currentQuote.city}</span>
  </div>
  <div>
  <span>Zip Code: ${currentQuote.zipCode}</span>
  </div>
  <div>
  <span>Hours: ${currentQuote.hours}</span>
  </div>
  <div>
  <span>Taxes: ${currentQuote.taxes}</span>
  </div>
  <div>
  <span>Cleaning Type: ${currentQuote.clean}</span>
  </div>
  <div>
  <span>Square Footage: ${currentQuote.squareFootage}</span>
  </div>
  <div>
  <span>Amount Per Hour: ${currentQuote.amountPerHour}</span>
  </div>
  <div>
  <span>Tax Rate: ${currentQuote.taxRate}</span>
  </div>
  <div>
  <span>Special Notes: ${currentQuote.specialNotes}</span>
  </div>
  <button class="p-2 px-3 bg-red-400 tracking-widest delete-quote ">Delete Quote</button>
  `;
  deleteQuote();
};

// FUNCTION //
// Delete Quote
const deleteQuote = () => {
  const deleteQuoteBtn = document.querySelector('.delete-quote');
  const allQuoteNames = [...document.querySelectorAll('.quote-name')];
  deleteQuoteBtn.addEventListener('click', () => {
    // Find Correct Quote To Delete
    const quoteToDelete = allQuoteNames.find(
      quote => quote.dataset.id === currentQuote.name
    );

    // showAlertDeleteMessage('Quote Deleted');
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

    // Close Modal
    showQuoteModal.classList.add('invisible');
    showQuoteModal.classList.add('hidden');
    showQuoteModal.classList.remove('flex');

    // Open Saved Quotes Modal
    savedQuoteModal.classList.remove('invisible');
    savedQuoteModal.classList.remove('hidden');
    savedQuoteModal.classList.add('flex');
  });
};

// Toggle Dark Functionality
// FUNCTION //
// Dark flag is used as a state variable (in this toggleDark function) to toggle dark mode on and off
let darkFlag = true;
const toggler = document.querySelector('.toggler');
const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon');
// Toggle Dark Function
const toggleDark = () => {
  toggler.addEventListener('click', () => {
    const html = document.documentElement;
    sunIcon.classList.toggle('hidden');
    moonIcon.classList.toggle('hidden');
    if (darkFlag) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    darkFlag = !darkFlag;
  });
};
toggleDark();

// FUNCTION //
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

// Toggler Tax
// FUNCTION //
// Toggle flag is used to toggle as a global variable to toggle taxes on and off in the calcDisplayQuote Function
let taxFlag = true;
const toggleTaxEl = document.querySelector('.toggler-tax');
const showAlertMessageBinded = showAlertMessage.bind(
  showAlertMessage,
  document.querySelector('.alert-tax'),
  document.querySelector('.tax-text'),
  document.querySelector('.span-tax-text')
);
const toggleTax = () => {
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
};
toggleTax();

// FUNCTION //
// Display Save Quote Modal
const saveQuoteBtns = document.querySelectorAll('.quote-btn');
let price;
let hours;
let clean;
let taxes;
const displaySaveQuoteModal = () => {
  saveQuoteBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      // Show Save Quote Modal
      saveQuoteModal.classList.remove('invisible');
      saveQuoteModal.classList.remove('hidden');
      saveQuoteModal.classList.add('flex');

      // Select Current Quote
      const article = e.currentTarget.parentElement.parentElement;

      // Store Price Into Var
      price = article.querySelector('.price').textContent;

      // Store Hours Into Var
      hours = article.querySelector('.hours').textContent;

      // Store Cleanining Type Into Var
      clean = article.querySelector('.cleaning-type').textContent;

      // Store Taxes Into Var
      taxes = article.querySelector('.tax-number').textContent;
    });
  });
};
displaySaveQuoteModal();

// Save Quote Info
const savedQuotes = [];
const quoteNamesContainer = document.querySelector('.quote-names');
const saveQuoteForm = document.querySelector('.save-quote-form');
const saveQuoteInfo = () => {
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

    if (nameInput.value !== '') {
      // Add Number To End Of Name If That Name Already Exists
      let quoteName;
      const savedQuotesNames = savedQuotes.map(quote => quote.name);
      if (savedQuotesNames.includes(nameInput.value)) {
        quoteName = `${nameInput.value}${Math.floor(Math.random() * 999) + 1}`;
      } else {
        quoteName = nameInput.value;
      }

      // Show Alert Message
      showAlertMessage(
        document.querySelector('.alert-save-form'),
        document.querySelector('.par-text'),
        document.querySelector('.span-text'),
        'Quote Saved',
        nameInput.value
      );

      // DATA READY FOR DESIGN TO BE PUT INTO PLACE
      console.log(deepPrice.textContent);
      console.log(generalPrice.textContent);
      console.log(weeklyPrice.textContent);
      console.log(biWeeklyPrice.textContent);
      console.log(monthlyPrice.textContent);
      console.log(deepHours.textContent);
      console.log(generalHours.textContent);
      console.log(weeklyHours.textContent);
      console.log(biWeeklyHours.textContent);
      console.log(monthlyHours.textContent);

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
        squareFootage: `${squareFootSelect.value}`,
        amountPerHour: `${amountPerHour.value}`,
        taxRate: `${taxRate.value}`,
        specialNotes: `${specialNotesInput.value}`,
      });
      const html = `<a href="#" class="text-semibold text-emerald-600 tracking-widest block mb-3 quote-name" data-id="${quoteName}">${quoteName}</a>`;
      quoteNamesContainer.insertAdjacentHTML('beforeend', html);

      saveQuoteModal.classList.add('invisible');
      saveQuoteModal.classList.add('hidden');
      saveQuoteModal.classList.remove('flex');
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
};
saveQuoteInfo();
