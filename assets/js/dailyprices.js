const dailyPrices = {
  // April 2025
  '2025-04-01': 70, '2025-04-02': 70, '2025-04-03': 70, '2025-04-04': 80,
  '2025-04-05': 80, '2025-04-06': 70, '2025-04-07': 70, '2025-04-08': 70,
  '2025-04-09': 70, '2025-04-10': 70, '2025-04-11': 80, '2025-04-12': 80,
  '2025-04-13': 70, '2025-04-14': 70, '2025-04-15': 70, '2025-04-16': 70,
  '2025-04-17': 70, '2025-04-18': 80, '2025-04-19': 80, '2025-04-20': 70,
  '2025-04-21': 70, '2025-04-22': 70, '2025-04-23': 70, '2025-04-24': 70,
  '2025-04-25': 80, '2025-04-26': 80, '2025-04-27': 70, '2025-04-28': 70,
  '2025-04-29': 70, '2025-04-30': 70,

  // May 2025
  '2025-05-01': 90, '2025-05-02': 80, '2025-05-03': 80, '2025-05-04': 70,
  '2025-05-05': 70, '2025-05-06': 70, '2025-05-07': 70, '2025-05-08': 70,
  '2025-05-09': 80, '2025-05-10': 80, '2025-05-11': 70, '2025-05-12': 70,
  '2025-05-13': 70, '2025-05-14': 70, '2025-05-15': 70, '2025-05-16': 80,
  '2025-05-17': 80, '2025-05-18': 70, '2025-05-19': 70, '2025-05-20': 70,
  '2025-05-21': 70, '2025-05-22': 70, '2025-05-23': 80, '2025-05-24': 80,
  '2025-05-25': 70, '2025-05-26': 70, '2025-05-27': 70, '2025-05-28': 70,
  '2025-05-29': 70, '2025-05-30': 80, '2025-05-31': 80,

  // June 2025
  '2025-06-01': 80, '2025-06-02': 80, '2025-06-03': 70, '2025-06-04': 70,
  '2025-06-05': 70, '2025-06-06': 80, '2025-06-07': 80, '2025-06-08': 70,
  '2025-06-09': 70, '2025-06-10': 70, '2025-06-11': 70, '2025-06-12': 70,
  '2025-06-13': 80, '2025-06-14': 80, '2025-06-15': 80, '2025-06-16': 80,
  '2025-06-17': 80, '2025-06-18': 80, '2025-06-19': 80, '2025-06-20': 90,
  '2025-06-21': 90, '2025-06-22': 80, '2025-06-23': 80, '2025-06-24': 80,
  '2025-06-25': 80, '2025-06-26': 80, '2025-06-27': 90, '2025-06-28': 90,
  '2025-06-29': 80, '2025-06-30': 80,

  // July 2025
  '2025-07-01': 80, '2025-07-02': 80, '2025-07-03': 80, '2025-07-04': 100,
  '2025-07-05': 100, '2025-07-06': 90, '2025-07-07': 90, '2025-07-08': 90,
  '2025-07-09': 90, '2025-07-10': 80, '2025-07-11': 100, '2025-07-12': 100,
  '2025-07-13': 95, '2025-07-14': 95, '2025-07-15': 95, '2025-07-16': 95,
  '2025-07-17': 105, '2025-07-18': 105, '2025-07-19': 105, '2025-07-20': 100,
  '2025-07-21': 100, '2025-07-22': 100, '2025-07-23': 100, '2025-07-24': 110,
  '2025-07-25': 110, '2025-07-26': 110, '2025-07-27': 100, '2025-07-28': 100,
  '2025-07-29': 100, '2025-07-30': 100, '2025-07-31': 110,

  // August 2025
  '2025-08-01': 110, '2025-08-02': 110, '2025-08-03': 105, '2025-08-04': 105,
  '2025-08-05': 105, '2025-08-06': 105, '2025-08-07': 115, '2025-08-08': 115,
  '2025-08-09': 115, '2025-08-10': 110, '2025-08-11': 110, '2025-08-12': 110,
  '2025-08-13': 170, '2025-08-14': 170, '2025-08-15': 170, '2025-08-16': 170,
  '2025-08-17': 130, '2025-08-18': 130, '2025-08-19': 130, '2025-08-20': 130,
  '2025-08-21': 145, '2025-08-22': 145, '2025-08-23': 145, '2025-08-24': 115,
  '2025-08-25': 115, '2025-08-26': 115, '2025-08-27': 115, '2025-08-28': 120,
  '2025-08-29': 120, '2025-08-30': 120, '2025-08-31': 100,

  // September 2025
  '2025-09-01': 100, '2025-09-02': 100, '2025-09-03': 100, '2025-09-04': 110,
  '2025-09-05': 110, '2025-09-06': 110, '2025-09-07': 90, '2025-09-08': 90,
  '2025-09-09': 90, '2025-09-10': 90, '2025-09-11': 100, '2025-09-12': 100,
  '2025-09-13': 100, '2025-09-14': 85, '2025-09-15': 85, '2025-09-16': 85,
  '2025-09-17': 85, '2025-09-18': 70, '2025-09-19': 100, '2025-09-20': 100,
  '2025-09-21': 80, '2025-09-22': 80, '2025-09-23': 80, '2025-09-24': 80,
  '2025-09-25': 70, '2025-09-26': 90, '2025-09-27': 90, '2025-09-28': 80,
  '2025-09-29': 80, '2025-09-30': 80, '2025-10-01': 80, '2025-10-02': 65,
  '2025-10-03': 85, '2025-10-04': 85
};  

document.addEventListener('DOMContentLoaded', function() {
  const disabledDiscountBtn = document.getElementById('disabledDiscountBtn');
  const disabledFields = document.getElementById('disabledFields');
  
  // Initially hide the panel
  disabledFields.style.display = 'none';
  
  // On button click, toggle the panel's visibility
  disabledDiscountBtn.addEventListener('click', function() {
    if (disabledFields.style.display === 'none' || disabledFields.style.display === '') {
      disabledFields.style.display = 'block';
    } else {
      disabledFields.style.display = 'none';
    }
  });
});
let payingclients=0;

function calculateTotalPrice() {
  const startDate = new Date(document.getElementById('startDate').value);
  const endDate = new Date(document.getElementById('endDate').value);
  const adults = parseInt(document.getElementById('adults').value) || 0;
  const children05 = parseInt(document.getElementById('children05').value) || 0;
  const disabledAdults = parseInt(document.getElementById('disabledAdults')?.value) || 0;
  const disabledChildren612 = parseInt(document.getElementById('disabledChildren612')?.value) || 0;
  const children612 = parseInt(document.getElementById('children612').value) || 0;
  const petService = document.getElementById('petService').checked;
  const cribService = document.getElementById('cribService').checked;
  const poolView = document.getElementById('poolView').checked;
  const loyaltyCustomer = document.getElementById('loyaltyCustomer').checked;
  const removeClubCard = document.getElementById('removeClubCard').checked;
  const percentageDiscount = parseFloat(document.getElementById('percentageDiscount').value) || 0;
  payingclients = adults + children612;
  let totalPrice = 0;
  let nights = 0;

  // Calculate base price from dailyPrices
  for (let d = new Date(startDate); d < endDate; d.setDate(d.getDate() + 1)) {
    const dateString = d.toISOString().split('T')[0];
    if (dailyPrices.hasOwnProperty(dateString)) {
      totalPrice += dailyPrices[dateString];
      nights++;
    }
  }

  const baseNightlyPrice = totalPrice / nights;
  const basePrice = baseNightlyPrice * nights;

  // Reset price for proper calculation
  totalPrice = 0;

  /*************************************************
   * 1) ADULTS
   *************************************************/
  const nonDisabledAdults = adults - disabledAdults;

  // First 2 non-disabled adults at full price, rest at 20% off
  const fullAdults = Math.min(nonDisabledAdults, 2);
  const extraAdults = Math.max(nonDisabledAdults - 2, 0);
  const fullAdultsCost = fullAdults * basePrice;
  const extraAdultsCost = extraAdults * basePrice * 0.8;

  // Disabled adults: some may get 20% + 10%, others just 10%
  let disabledAdultsCost = 0;
  const doubleDiscount = Math.min(disabledAdults, Math.max(0, adults - 2));
  const singleDiscount = disabledAdults - doubleDiscount;

  if (doubleDiscount > 0) {
    disabledAdultsCost += doubleDiscount * basePrice * 0.8 * 0.9;
  }
  if (singleDiscount > 0) {
    disabledAdultsCost += singleDiscount * basePrice * 0.9;
  }

  const adultCost = fullAdultsCost + extraAdultsCost;
  const disabledCost = disabledAdultsCost;
  totalPrice += adultCost + disabledCost;

  /*************************************************
   * 2) CHILDREN (6-12)
   *************************************************/
  const normalChildren = children612 - disabledChildren612;
  const childBase = basePrice * 0.5;
  const normalChildrenCost = normalChildren * childBase;
  const disabledChildrenCost = disabledChildren612 * childBase * 0.9;

  totalPrice += normalChildrenCost + disabledChildrenCost;


  /*************************************************
   * 4) LOYALTY DISCOUNT
   *************************************************/
  if (loyaltyCustomer) {
    totalPrice *= 0.9;
  }

  /*************************************************
   * 5) PERCENTAGE DISCOUNT
   *************************************************/
  if (percentageDiscount > 0) {
    totalPrice *= (1 - percentageDiscount / 100);
  }

  /*************************************************
   * 3) CLUB CARD
   *************************************************/
  let clubCardCost = 0;
  if (!removeClubCard) {
    const payingClub = nonDisabledAdults + normalChildren;
    clubCardCost = 6 * payingClub * nights;
    totalPrice += clubCardCost;
  }
  /*************************************************
   * 6) EXTRAS
   *************************************************/
  let extrasCost = 0;
  if (poolView) extrasCost += 10 * nights;
  if (petService) extrasCost += 30;
  if (cribService) extrasCost += 10 * nights;
  totalPrice += extrasCost;

  /*************************************************
   * DEBUG LOGS
   *************************************************/
  console.log('Base Price per Night:', baseNightlyPrice.toFixed(2));
  console.log('Non-disabled Adults Cost:', adultCost.toFixed(2));
  console.log('Disabled Adults Cost:', disabledCost.toFixed(2));
  console.log('Normal Children (6-12) Cost:', normalChildrenCost.toFixed(2));
  console.log('Disabled Children (6-12) Cost:', disabledChildrenCost.toFixed(2));
  console.log('Club Card Payers:', `${nonDisabledAdults} adults + ${normalChildren} children = ${nonDisabledAdults + normalChildren}`);
  console.log('Club Card Cost:', clubCardCost.toFixed(2));
  console.log('Extras Cost:', extrasCost.toFixed(2));
  console.log('Total:', totalPrice.toFixed(2));

  document.getElementById('totalPrice').textContent = `Prezzo totale: €${totalPrice.toFixed(2)}`;
}


function generateBookingMessage() {
  const startDate = new Date(document.getElementById('startDate').value);
  const endDate = new Date(document.getElementById('endDate').value);
  const adults = parseInt(document.getElementById('adults').value) || 0;
  const children05 = parseInt(document.getElementById('children05').value) || 0;
  const children612 = parseInt(document.getElementById('children612').value) || 0;
  const petService = document.getElementById('petService').checked;
  const cribService = document.getElementById('cribService').checked;
  const poolView = document.getElementById('poolView').checked;
  const loyaltyCustomer = document.getElementById('loyaltyCustomer').checked;
  const removeClubCard = document.getElementById('removeClubCard').checked;
  const percentageDiscount = parseFloat(document.getElementById('percentageDiscount').value) || 0;
  
  const totalPriceElement = document.getElementById('totalPrice');
  const totalPrice = parseFloat(totalPriceElement.textContent.split('€')[1]);
  const deposit = totalPrice * 0.2;
  const remainingPayment = totalPrice - deposit;
  document.addEventListener('DOMContentLoaded', function() {
    const discountBtn = document.getElementById('discountBtn');
    if (discountBtn) {
      discountBtn.addEventListener('click', function() {
        const discountPanel = document.getElementById('discountPanel');
        if (!discountPanel) return;
        // Toggle the panel's visibility
        discountPanel.style.display = (discountPanel.style.display === 'block') ? 'none' : 'block';
      });
    }
  });
   
  const formatDate = (date) => {
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
  };
  let roomtypeselction="";
  if(payingclients == 1){
    roomtypeselction = "Singola";
  }
  if(payingclients==2)
  {
    roomtypeselction = "matrimoniale";
  }
  if(payingclients == 3){
    roomtypeselction = "tripla";
  }
  if(payingclients==4)
  {
    roomtypeselction = "quadrupla";
  }
  if(payingclients>4)
    {
      roomtypeselction = "quintupla";
    }
  
  let message = `PREVENTIVO PER IL GRAND HOTEL SELINUNTE.\n\n`;
  message += `🗓️ PERIODO DEL SOGGIORNO:\n`;
  message += `Dal ${formatDate(startDate)} al ${formatDate(endDate)}\n`;
  message += `Tipologia di camera: ${roomtypeselction}\n`;
  message += `Numero di notti: ${Math.round((endDate - startDate) / (1000 * 60 * 60 * 24))}\n\n`;
  
  message += `🗓️ECCO LA NOSTRA MIGLIORE OFFERTA\n`;
  message += `IL TOTALE IN PENSIONE COMPLETA CON TESSERE CLUB GIÀ INCLUSE: €${totalPrice.toFixed(2)}\n\n`;
  message += `TIPOLOGIA CAMERA:\n`;
  message += `${adults} AD ${children612} CHD ${children05} INF\n`;
  
  if (!removeClubCard) {
    const clubCardCost = 6 * (adults + children612) * Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));
    message += `COSTO TESSERE CLUB: €${clubCardCost.toFixed(2)} (già incluso nel prezzo)\n\n`;
  } else {
    message += `TESSERE CLUB: Non incluse\n\n`;
  }
  
  message += `OPZIONI EXTRA:\n`;
  message += `culla ${cribService ? '✅' : '❌'}\n`;
  message += `supplemento pet service ${petService ? '✅' : '❌'}\n`;
  message += `vista piscina ${poolView ? '✅' : '❌'}\n`;
  message += `⚠️ TUTTI I SERVIZI SOPRA SE RICHIESTI SARANNO GIÀ INCLUSI NEL PREZZO.\n\n`;
  
  message += `🕞CHECK IN 15:30 / 🕙CHECK OUT 10:00\n\n`;
  message += `✅ PER CONFERMARE QUESTA PRENOTAZIONE CI MANDI IL SUO NOMINATIVO. ⬅️⬅️⬅️\n\n`;
  message += `⚠️ NOTA BENE: IL PREZZO INDICATO INCLUDE TUTTI I COSTI (ESCLUSA LA TASSA DI SOGGIORNO).\n\n`;
  
  message += `INFORMAZIONI GENERALI:\n`;
  message += `I bambini da 0 a 5 anni sono gratuiti nel letto con i genitori.\n`;
  message += `Da 6 ai 12 anni: sconto del 50% in terzo e quarto letto.\n`;
  message += `Dai 13 anni in su: sconto del 20% in terzo e quarto letto.\n`;
  message += `Supplemento Camera con vista piscina: €10,00 a notte.\n`;
  message += `Supplemento Culla: €10,00 a notte.\n`;
  message += `Supplemento Cane: €30,00 in totale.\n`;
  if (loyaltyCustomer) {
    message += `Sconto fedeltà del 10% applicato alla tariffa base.\n`;
  }
  message += `\n`;
  message += `La tessera club costa €6,00 a notte a persona (gratuita per i bambini fino a 5 anni) e include tutti i nostri servizi.\n\n`;
  
  message += `Modalità SOFT ALL INCLUSIVE: €5,00 a notte a persona (dai 6 anni in su)\n`;
  message += `Include: analcolici, crema caffe, e caffetteria Bar Piscina.\n\n`;
  
  message += `Per confermare la prenotazione:\n`;
  message += `- Acconto del 20%: €${deposit.toFixed(2)} tramite bonifico bancario.\n`;
  message += `- Saldo in hotel: €${remainingPayment.toFixed(2)}.\n\n`;
  message += `IMPORTANTE: La prenotazione sarà confermata solo dopo il ricevimento dell'acconto.\n\n`;
  
  return message;
}

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('scheduleForm');
  // Add listeners to all inputs/selects to recalculate price on change/input
  form.querySelectorAll('input, select').forEach(input => {
    input.addEventListener('change', calculateTotalPrice);
    input.addEventListener('input', calculateTotalPrice);
  });
  
  // --- Setup Discount Slider ---
  const percentageDiscountSlider = document.getElementById('percentageDiscount');
  const discountValueLabel = document.getElementById('discountValue');
  if (percentageDiscountSlider && discountValueLabel) {
    percentageDiscountSlider.addEventListener('input', function() {
      discountValueLabel.textContent = percentageDiscountSlider.value + '%';
      calculateTotalPrice();
    });
  }
  
  // Initial calculation
  calculateTotalPrice();
  
  // Form submission to generate booking message
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const bookingMessage = generateBookingMessage();
    displayBookingMessage(bookingMessage);
  });
});

function displayBookingMessage(message) {
  // Remove existing message if present
  const existingMessageDiv = document.getElementById('bookingMessageDiv');
  if (existingMessageDiv) {
    existingMessageDiv.remove();
  }
  
  const messageDiv = document.createElement('div');
  messageDiv.id = 'bookingMessageDiv';
  messageDiv.style.marginTop = '20px';
  messageDiv.style.padding = '20px';
  messageDiv.style.backgroundColor = '#f0f0f0';
  messageDiv.style.border = '1px solid #ddd';
  messageDiv.style.borderRadius = '5px';
  messageDiv.style.width = '100%';
  messageDiv.style.boxSizing = 'border-box';
  
  const buttonContainer = document.createElement('div');
  buttonContainer.style.display = 'flex';
  buttonContainer.style.flexDirection = 'column';
  buttonContainer.style.gap = '10px';
  buttonContainer.style.marginBottom = '10px';
  
  const copyButton = document.createElement('button');
  copyButton.textContent = 'Copia messaggio';
  copyButton.className = 'orange-button';
  copyButton.style.width = '100%';
  copyButton.addEventListener('click', function() {
    copyToClipboard(message)
      .then(() => { alert('Messaggio copiato negli appunti!'); })
      .catch((err) => {
        console.error('Impossibile copiare il testo: ', err);
        alert('Impossibile copiare automaticamente. Seleziona e copia il messaggio manualmente.');
      });
  });
  
  const closeButton = document.createElement('button');
  closeButton.textContent = 'Chiudi';
  closeButton.className = 'orange-button';
  closeButton.style.width = '100%';
  closeButton.addEventListener('click', function() {
    messageDiv.style.display = 'none';
    resetForm();
  });
  
  const whatsappButton = document.createElement('button');
  whatsappButton.textContent = 'Invia su WhatsApp';
  whatsappButton.className = 'orange-button';
  whatsappButton.style.width = '100%';
  whatsappButton.addEventListener('click', function() {
    copyToClipboard(message)
      .then(() => { openWhatsApp(); })
      .catch((err) => {
        console.error('Impossibile copiare il testo: ', err);
        alert('Errore nel copiare il messaggio. Copia manualmente prima di aprire WhatsApp.');
      });
  });
  
  buttonContainer.appendChild(copyButton);
  buttonContainer.appendChild(closeButton);
  buttonContainer.appendChild(whatsappButton);
  messageDiv.appendChild(buttonContainer);
  
  const messageText = document.createElement('pre');
  messageText.textContent = message;
  messageText.style.whiteSpace = 'pre-wrap';
  messageText.style.wordWrap = 'break-word';
  messageDiv.appendChild(messageText);
  
  const formElement = document.getElementById('scheduleForm');
  formElement.parentNode.insertBefore(messageDiv, formElement.nextSibling);
  messageDiv.scrollIntoView({ behavior: 'smooth' });
  
  // Responsive button layout
  const mediaQuery = window.matchMedia('(min-width: 768px)');
  const handleMediaQueryChange = (e) => {
    if (e.matches) {
      buttonContainer.style.flexDirection = 'row';
      buttonContainer.style.gap = '5px';
      copyButton.style.width = 'auto';
      closeButton.style.width = 'auto';
      whatsappButton.style.width = 'auto';
    } else {
      buttonContainer.style.flexDirection = 'column';
      buttonContainer.style.gap = '10px';
      copyButton.style.width = '100%';
      closeButton.style.width = '100%';
      whatsappButton.style.width = '100%';
    }
  };
  handleMediaQueryChange(mediaQuery);
  mediaQuery.addEventListener('change', handleMediaQueryChange);
}

function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text);
  } else {
    return new Promise((resolve, reject) => {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (successful) {
          resolve();
        } else {
          reject(new Error('Copia non riuscita'));
        }
      } catch (err) {
        document.body.removeChild(textArea);
        reject(err);
      }
    });
  }
}

function openWhatsApp() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  let whatsappUrl;
  if (/android/i.test(userAgent)) {
    whatsappUrl = 'intent://send#Intent;scheme=whatsapp;package=com.whatsapp;end';
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    whatsappUrl = 'whatsapp://';
  } else {
    whatsappUrl = 'https://web.whatsapp.com/';
  }
  const newWindow = window.open(whatsappUrl, '_blank');
  if (newWindow === null) {
    alert('Impossibile aprire WhatsApp. Aprilo manualmente.');
  } else {
    newWindow.focus();
    alert('Messaggio copiato negli appunti. Incolla nella chat di WhatsApp.');
  }
}
function resetForm() {
  // Reset date inputs
  document.getElementById('startDate').value = '';
  document.getElementById('endDate').value = '';

  // Reset number inputs
  document.getElementById('adults').value = '1';
  document.getElementById('children05').value = '0';
  document.getElementById('children612').value = '0';
  document.getElementById('disabledAdults').value = '0';
  document.getElementById('disabledChildren612').value = '0';

  // Reset discount slider
  document.getElementById('percentageDiscount').value = '0';
  const discountValueLabel = document.getElementById('discountValue');
  if (discountValueLabel) {
    discountValueLabel.textContent = '0%';
  }

  // Reset checkboxes
  document.getElementById('petService').checked = false;
  document.getElementById('cribService').checked = false;
  document.getElementById('poolView').checked = false;
  document.getElementById('loyaltyCustomer').checked = false;
  document.getElementById('removeClubCard').checked = false;

  // Reset custom discount if it exists
  const customDiscountField = document.getElementById('customDiscount');
  if (customDiscountField) {
    customDiscountField.value = '0';
  }

  // Reset custom select (if applicable)
  const customSelect = document.querySelector('.custom-select');
  if (customSelect) {
    const triggerSpan = customSelect.querySelector('.custom-select__trigger span');
    triggerSpan.textContent = 'Seleziona un periodo';
    customSelect.removeAttribute('data-value');
  }

  // Hide disabled fields panel
  const disabledFields = document.getElementById('disabledFields');
  if (disabledFields) {
    disabledFields.style.display = 'none';
  }

  // Reset total price display
  document.getElementById('totalPrice').textContent = 'Prezzo totale: €0.00';

  // Recalculate total just in case
  calculateTotalPrice();

  // Hide booking message if it exists
  const bookingMessageDiv = document.getElementById('bookingMessageDiv');
  if (bookingMessageDiv) {
    bookingMessageDiv.style.display = 'none';
  }
}

// (Optional) Export functions if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    calculateTotalPrice,
    generateBookingMessage,
    displayBookingMessage
  };
}
