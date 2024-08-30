const dailyPrices = {
    // June 2024
    '2024-06-02': 60, '2024-06-03': 60, '2024-06-04': 60, '2024-06-05': 60,
    '2024-06-06': 45, '2024-06-07': 75, '2024-06-08': 75, '2024-06-09': 60,
    '2024-06-10': 60, '2024-06-11': 60, '2024-06-12': 60, '2024-06-13': 45,
    '2024-06-14': 75, '2024-06-15': 75, '2024-06-16': 65, '2024-06-17': 65,
    '2024-06-18': 65, '2024-06-19': 65, '2024-06-20': 50, '2024-06-21': 80,
    '2024-06-22': 80, '2024-06-23': 65, '2024-06-24': 65, '2024-06-25': 65,
    '2024-06-26': 65, '2024-06-27': 50, '2024-06-28': 80, '2024-06-29': 80,
    '2024-06-30': 70,
    
    // July 2024
    '2024-07-01': 70, '2024-07-02': 70, '2024-07-03': 70, '2024-07-04': 60,
    '2024-07-05': 85, '2024-07-06': 85, '2024-07-07': 70, '2024-07-08': 70,
    '2024-07-09': 70, '2024-07-10': 70, '2024-07-11': 60, '2024-07-12': 85,
    '2024-07-13': 85, '2024-07-14': 80, '2024-07-15': 80, '2024-07-16': 80,
    '2024-07-17': 80, '2024-07-18': 90, '2024-07-19': 90, '2024-07-20': 90,
    '2024-07-21': 80, '2024-07-22': 80, '2024-07-23': 80, '2024-07-24': 80,
    '2024-07-25': 90, '2024-07-26': 90, '2024-07-27': 90, '2024-07-28': 90,
    '2024-07-29': 90, '2024-07-30': 90, '2024-07-31': 90,
    
    // August 2024
    '2024-08-01': 100, '2024-08-02': 100, '2024-08-03': 100, '2024-08-04': 90,
    '2024-08-05': 90, '2024-08-06': 90, '2024-08-07': 90, '2024-08-08': 110,
    '2024-08-09': 110, '2024-08-10': 110, '2024-08-11': 120, '2024-08-12': 120,
    '2024-08-13': 120, '2024-08-14': 150, '2024-08-15': 150, '2024-08-16': 150,
    '2024-08-17': 150, '2024-08-18': 100, '2024-08-19': 100, '2024-08-20': 100,
    '2024-08-21': 100, '2024-08-22': 110, '2024-08-23': 110, '2024-08-24': 110,
    '2024-08-25': 90, '2024-08-26': 90, '2024-08-27': 90, '2024-08-28': 90,
    '2024-08-29': 110, '2024-08-30': 110, '2024-08-31': 110,
    
    // September 2024
    '2024-09-01': 80, '2024-09-02': 80, '2024-09-03': 80, '2024-09-04': 80,
    '2024-09-05': 90, '2024-09-06': 90, '2024-09-07': 90, '2024-09-08': 80,
    '2024-09-09': 80, '2024-09-10': 80, '2024-09-11': 80, '2024-09-12': 90,
    '2024-09-13': 90, '2024-09-14': 90, '2024-09-15': 70, '2024-09-16': 70,
    '2024-09-17': 70, '2024-09-18': 70, '2024-09-19': 50, '2024-09-20': 85,
    '2024-09-21': 85, '2024-09-22': 60, '2024-09-23': 60, '2024-09-24': 60,
    '2024-09-25': 60, '2024-09-26': 90, '2024-09-27': 75, '2024-09-28': 75,
    '2024-09-29': 50, '2024-09-30': 65
  };
  


function calculateTotalPrice() {
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
    const customDiscount = parseFloat(document.getElementById('customDiscount').value) || 0;
  
    let totalPrice = 0;
    let nights = 0;
  
    // Calculate base price
    for (let d = new Date(startDate); d < endDate; d.setDate(d.getDate() + 1)) {
      const dateString = d.toISOString().split('T')[0];
      if (dateString in dailyPrices) {
        totalPrice += dailyPrices[dateString];
        nights++;
      }
    }
  
    // Calculate price for adults
    if (adults <= 2) {
      totalPrice *= adults;
    } else {
      totalPrice *= 2; // Full price for first two adults
      let discountedAdults = adults - 2;
      totalPrice += (totalPrice * 0.8 * discountedAdults); // 20% off for additional adults
    }
  
    // Calculate price for children 6-12
    totalPrice += (totalPrice * 0.5 * children612);
  
    // Calculate club card cost
    let clubCardCost = 0;
    if (!removeClubCard) {
      let peoplePayingClubCard = adults + children612;
      clubCardCost = 6 * peoplePayingClubCard * nights;
    }
    totalPrice += clubCardCost;
  
    // Apply loyalty discount
    if (loyaltyCustomer) {
      totalPrice *= 0.9; // 10% discount on total price
    }
  
    // Apply custom discount
    totalPrice = Math.max(0, totalPrice - customDiscount);
  
    // Apply percentage discount
    if (percentageDiscount > 0) {
      totalPrice *= (1 - percentageDiscount / 100);
    }
  
    // Add extras
    let extrasCost = 0;
    if (poolView) extrasCost += 10 * nights;
    if (petService) extrasCost += 30;
    if (cribService) extrasCost += 10 * nights;
  
    totalPrice += extrasCost;
  
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
  
    const totalPriceElement = document.getElementById('totalPrice');
    const totalPrice = parseFloat(totalPriceElement.textContent.split('€')[1]);
    const deposit = totalPrice * 0.2;
    const remainingPayment = totalPrice - deposit;
  
    const formatDate = (date) => {
      return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
    };
  
    let message = `PREVENTIVO PER IL GRAND HOTEL SELINUNTE.\n\n`;
  
    message += `🗓️ PERIODO DEL SOGGIORNO:\n`;
    message += `Dal ${formatDate(startDate)} al ${formatDate(endDate)}\n`;
    message += `Numero di notti: ${(endDate - startDate) / (1000 * 60 * 60 * 24)}\n\n`;
  
    message += `🗓️ECCO LA NOSTRA MIGLIORE OFFERTA\n`;
    message += `IL TOTALE IN PENSIONE COMPLETA CON TESSERE CLUB GIÀ INCLUSE NEL PREZZO E DI: ${totalPrice.toFixed(2)} EURO\n\n`;
  
    message += `TIPOLOGIA CAMERA:\n`;
    message += `${adults} AD ${children612} CHD ${children05} INF\n`;
  
    if (!removeClubCard) {
      const clubCardCost = 6 * (adults + children612) * ((endDate - startDate) / (1000 * 60 * 60 * 24));
      message += `COSTO TESSERE CLUB: ${clubCardCost.toFixed(2)} (già incluso nel prezzo)\n\n`;
    } else {
      message += `TESSERE CLUB: Non incluse\n\n`;
    }
  
    message += `OPZIONI EXTRA:\n`;
    message += `culla ${cribService ? '✅' : '❌'}\n`;
    message += `supplemento pet service ${petService ? '✅' : '❌'}\n`;
    message += `vista piscina ${poolView ? '✅' : '❌'}\n`;
    message += `⚠️ TUTTI I SERVIZI SOPRA SE RICHIESTI SARANNO GIÀ INCLUSI NEL PREZZO TOTALE.\n\n`;
  
    message += `🕞CHECK IN 15:30 / 🕙CHECK OUT 10:00\n\n`;
  
    message += `✅ PER CONFERMARE QUESTA PRENOTAZIONE CI MANDI IL SUO NOMINATIVO. ⬅️⬅️⬅️\n\n`;
  
    message += `⚠️'NOTA BENE': IL PREZZO INDICATO SOPRA E IL TOTALE COMPLESSIVO IN PENSIONE COMPLETA E CON IL COSTO DELLE TESSERE CLUB GIÀ INSERITE PER TUTTI I COMPONENTI DELLA/E CAMERA/E, QUINDI CON NIENT'ALTRO DA AGGIUNGERE (ESCLUSA TASSA DI SOGGIORNO DA PAGARE IN LOCO).\n\n`;
  
    message += `INFORMAZIONI GENERALI ⬇️\n\n`;
  
    message += `I bambini da 0 a 5 anni gratuiti nel letto con i genitori.\n`;
    message += `Da 6 ai 12 anni sconto del 50% in terzo e quarto letto.\n`;
    message += `Dai 13 anni in su sconto del 20% in terzo e quarto letto.\n`;
    message += `Supplemento Camera con vista piscina € 10,00 a notte (da richiedere al momento della conferma).\n`;
    message += `Supplemento Culla: € 10,00 a notte\n`;
    message += `Supplemento Cane: € 30,00 (in totale non a notte)\n`;
    if (loyaltyCustomer) {
      message += `Sconto fedeltà del 10% applicato alla tariffa base\n`;
    }
    message += `\n`;
  
    message += `La tessera club ha un costo di € 6,00 a notte e a persona ed è gratuita fino ai 5 anni. Essa include tutti i nostri servizi: piscina con angolo idromassaggio e isoletta per bambini (2 sdraio per camera); spiaggia attrezzata all'interno della riserva naturale del Belice (1 ombrellone e 2 sdraio per camera fino ad esaurimento); navetta da e per la spiaggia; animazione diurna e serale per adulti e bambini con spettacoli di cabaret, giochi, tornei e serate a tema; area giochi per bambini; campo da tennis e calcetto; ping pong; Wi-Fi gratuito in tutta la struttura.\n\n`;
  
    message += `Possibilità di scegliere la formula SOFT ALL INCLUSIVE\n`;
    message += `€5,00 a notte a persona (a partire dai 6 anni)\n`;
    message += `Il pacchetto include\n`;
    message += `- Analcolici al Bar Piscina\n`;
    message += `- crema caffe\n`;
    message += `- Caffetteria Bar Piscina\n`;
    message += `* L'offerta è valida solo se viene attivata da tutti i componenti della camera.\n\n`;
  
    message += `La conferma della prenotazione avverrà al ricevimento di un acconto del 20% entro due giorni lavorativi tramite bonifico bancario e saldo in Hotel.\n\n`;
  
    message += `*Tassa di soggiorno (€1,00 per persona e al giorno per un massimo di 7 giorni – bambini fino a 12 anni non compiuti esenti), se dovuta, secondo regolamento comunale consultabile in reception, da pagare in loco.\n\n`;
  
    message += `Rimaniamo a vostra disposizione per ulteriori informazioni.\n\n`;
  
    message += `MODALITÀ DI PAGAMENTO:\n`;
    message += `- Acconto del 20%: €${deposit.toFixed(2)} da versare tramite bonifico bancario per confermare la prenotazione.\n`;
    message += `- Saldo rimanente: €${remainingPayment.toFixed(2)} da pagare all'arrivo in struttura.\n\n`;
    message += `Per confermare la prenotazione, si prega di effettuare il bonifico dell'acconto entro 2 giorni lavorativi.\n\n`;
  
    message += `⚠️ IMPORTANTE: La prenotazione sarà confermata solo dopo la ricezione dell'acconto. In caso di mancato pagamento entro i termini, la prenotazione potrebbe essere cancellata.\n\n`;
  
    return message;
  }
  
  // Event listeners
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('scheduleForm');
    form.querySelectorAll('input, select').forEach(input => {
      input.addEventListener('change', calculateTotalPrice);
      input.addEventListener('input', calculateTotalPrice);
    });
  
    // Initial calculation
    calculateTotalPrice();
  
    // Form submission
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const bookingMessage = generateBookingMessage();
      displayBookingMessage(bookingMessage);
    });
  });


  
function displayBookingMessage(message) {
    // Remove existing message box if present
    const existingMessageDiv = document.getElementById('bookingMessageDiv');
    if (existingMessageDiv) {
        existingMessageDiv.remove();
    }
  
    // Create a new div for the booking message
    const messageDiv = document.createElement('div');
    messageDiv.id = 'bookingMessageDiv';
    messageDiv.style.marginTop = '20px';
    messageDiv.style.padding = '20px';
    messageDiv.style.backgroundColor = '#f0f0f0';
    messageDiv.style.border = '1px solid #ddd';
    messageDiv.style.borderRadius = '5px';
  
    // Create a container for buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'space-between';
    buttonContainer.style.marginBottom = '10px';
  
   // Modify the existing copyButton creation and event listener in the displayBookingMessage function
const copyButton = document.createElement('button');
copyButton.textContent = 'Copia messaggio';
copyButton.className = 'orange-button';
copyButton.style.flex = '1';
copyButton.style.marginRight = '5px';
copyButton.addEventListener('click', function() {
    copyToClipboard(message)
        .then(() => {
            alert('Messaggio copiato negli appunti!');
        })
        .catch((err) => {
            console.error('Impossibile copiare il testo: ', err);
            alert('Impossibile copiare automaticamente. Per favore, seleziona e copia il messaggio manualmente.');
        });
});
  
    // Add a close button
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Chiudi';
    closeButton.className = 'orange-button';
    closeButton.style.flex = '1';
    closeButton.style.marginLeft = '5px';
    closeButton.style.marginRight = '5px';
    closeButton.addEventListener('click', function() {
        messageDiv.style.display = 'none';
        resetForm();
    });
  
// Modify the existing whatsappButton creation and event listener in the displayBookingMessage function
const whatsappButton = document.createElement('button');
whatsappButton.textContent = 'Invia su WhatsApp';
whatsappButton.className = 'orange-button';
whatsappButton.style.flex = '1';
whatsappButton.style.marginLeft = '5px';
whatsappButton.addEventListener('click', function() {
  copyToClipboard(message)
    .then(() => {
      openWhatsApp();
    })
    .catch((err) => {
      console.error('Impossibile copiare il testo: ', err);
      alert('Errore nel copiare il messaggio. Per favore, copia manualmente prima di aprire WhatsApp.');
    });
});
  
    // Add buttons to the container
    buttonContainer.appendChild(copyButton);
    buttonContainer.appendChild(closeButton);
    buttonContainer.appendChild(whatsappButton);
  
    // Add the button container to the message div
    messageDiv.appendChild(buttonContainer);
  
    // Add the message text
    const messageText = document.createElement('pre');
    messageText.textContent = message;
    messageText.style.whiteSpace = 'pre-wrap';
    messageText.style.wordWrap = 'break-word';
    messageDiv.appendChild(messageText);
  
    // Add the message div to the page
    const form = document.getElementById('scheduleForm');
    form.parentNode.insertBefore(messageDiv, form.nextSibling);
  
    // Scroll to the message
    messageDiv.scrollIntoView({ behavior: 'smooth' });
  }


  // Add this function to your existing JavaScript code
function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
      // Modern browsers
      return navigator.clipboard.writeText(text);
  } else {
      // Fallback for older browsers
      return new Promise((resolve, reject) => {
          const textArea = document.createElement("textarea");
          textArea.value = text;
          textArea.style.position = "fixed";  // Avoid scrolling to bottom
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
      // Android devices
      whatsappUrl = 'intent://send#Intent;scheme=whatsapp;package=com.whatsapp;end';
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      // iOS devices
      whatsappUrl = 'whatsapp://';
    } else {
      // Desktop (Windows, macOS, Linux)
      whatsappUrl = 'https://web.whatsapp.com/';
    }
  
    // Try to open WhatsApp
    const newWindow = window.open(whatsappUrl, '_blank');
    
    if (newWindow === null) {
      // If window.open returns null, it means the popup was blocked or failed
      alert('Impossibile aprire WhatsApp. Per favore, apri WhatsApp manualmente.');
    } else {
      // If a new window was opened or an existing one was focused
      newWindow.focus();
      alert('Il messaggio è stato copiato negli appunti. WhatsApp è stato aperto. Incolla il messaggio nella chat desiderata.');
    }
  }



  
  function resetForm() {
    // Reset custom select
    const customSelect = document.querySelector('.custom-select');
    const triggerSpan = customSelect.querySelector('.custom-select__trigger span');
    triggerSpan.textContent = 'Seleziona un periodo';
    customSelect.removeAttribute('data-value');
  
    // Reset number inputs
    document.getElementById('adults').value = '1';
    document.getElementById('children05').value = '0';
    document.getElementById('children612').value = '0';
  
    // Reset discount inputs
    document.getElementById('customDiscount').value = '0';
    document.getElementById('percentageDiscount').value = '0';
  
    // Reset checkboxes
    document.getElementById('petService').checked = false;
    document.getElementById('cribService').checked = false;
    document.getElementById('poolView').checked = false;
    document.getElementById('loyaltyCustomer').checked = false;
    document.getElementById('removeClubCard').checked = false;
  
    // Hide discount panel
    document.getElementById('discountPanel').style.display = 'none';
  
    // Reset total price
    document.getElementById('totalPrice').textContent = 'Prezzo totale: €0.00';
  
    // Recalculate total price (in case you have any dependencies)
    calculateTotalPrice();
  
    // Hide the booking message if it exists
    const bookingMessageDiv = document.getElementById('bookingMessageDiv');
    if (bookingMessageDiv) {
      bookingMessageDiv.style.display = 'none';
    }
  }

// Event listener for form submission
document.getElementById('scheduleForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const bookingMessage = generateBookingMessage();
    displayBookingMessage(bookingMessage);
});

const discountBtn = document.getElementById('discountBtn');
const discountPanel = document.getElementById('discountPanel');

discountBtn.addEventListener('click', function() {
  if (discountPanel.style.display === 'none' || discountPanel.style.display === '') {
    discountPanel.style.display = 'block';
  } else {
    discountPanel.style.display = 'none';
  }
});

// Export the slots and functions if using modules
if (typeof module !== 'undefined' && module.exports) {
module.exports = { slots, saveSlots, loadSlots, calculateTotalPrice, generateBookingMessage, displayBookingMessage };
}