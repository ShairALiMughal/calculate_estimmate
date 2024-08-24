// prices.js

const slots = [
  { start: "2024-06-02", end: "2024-06-09", nights: 7, price: 413, description: "Dal 2 al 9 giugno 413€ (7 notti)" },
  { start: "2024-06-02", end: "2024-06-06", nights: 4, price: 240, description: "Dal 2 al 6 giugno 240€ (4 notti)" },
  { start: "2024-06-06", end: "2024-06-09", nights: 3, price: 195, description: "Dal 6 al 9 giugno 195€ (3 notti)" },
  { start: "2024-06-09", end: "2024-06-16", nights: 7, price: 413, description: "Dal 9 al 16 giugno 413€ (7 notti)" },
  { start: "2024-06-09", end: "2024-06-13", nights: 4, price: 240, description: "Dal 9 al 13 Giugno 240€ (4 notti)" },
  { start: "2024-06-13", end: "2024-06-16", nights: 3, price: 195, description: "Dal 13 al 16 giugno 195€ (3 notti)" },
  { start: "2024-06-16", end: "2024-06-23", nights: 7, price: 447, description: "Dal 16 al 23 giugno 447€ (7 notti)" },
  { start: "2024-06-16", end: "2024-06-20", nights: 4, price: 260, description: "Dal 16 al 20 giugno 260€ (4 notti)" },
  { start: "2024-06-20", end: "2024-06-23", nights: 3, price: 210, description: "Dal 20 al 23 giugno 210€ (3 notti)" },
  { start: "2024-06-23", end: "2024-06-30", nights: 7, price: 447, description: "Dal 23 al 30 giugno 447€ (7 notti)" },
  { start: "2024-06-23", end: "2024-06-27", nights: 4, price: 260, description: "Dal 23 al 27 giugno 260€ (4 notti)" },
  { start: "2024-06-27", end: "2024-06-30", nights: 3, price: 210, description: "Dal 27 al 30 giugno 210€ (3 notti)" },
  { start: "2024-06-30", end: "2024-07-07", nights: 7, price: 485, description: "Dal 30 giugno al 7 luglio 485€ (7 notti)" },
  { start: "2024-06-30", end: "2024-07-04", nights: 4, price: 280, description: "DAL 30 giugno Al 4 luglio 280€ (4 notti)" },
  { start: "2024-07-04", end: "2024-07-07", nights: 3, price: 230, description: "DAL 4  al 7 luglio 230€ (3 notti)" },
  { start: "2024-07-07", end: "2024-07-14", nights: 7, price: 485, description: "Dal 7 luglio al 14 luglio 485€ (7 notti)" },
  { start: "2024-07-07", end: "2024-07-11", nights: 4, price: 280, description: "Dal 7 al 11 luglio 280€ (4 notti)" },
  { start: "2024-07-11", end: "2024-07-14", nights: 3, price: 230, description: "Dal 11 al 14 luglio 230€ (3 notti)" },
  { start: "2024-07-14", end: "2024-07-21", nights: 7, price: 561, description: "Dal 14 al 21 luglio 561€ (7 notti)" },
  { start: "2024-07-14", end: "2024-07-18", nights: 4, price: 320, description: "Dal 14 al 18 luglio 320€ (4 notti)" },
  { start: "2024-07-18", end: "2024-07-21", nights: 3, price: 270, description: "Dal 18 al 21 luglio 270€ (3 notti)" },
  { start: "2024-07-21", end: "2024-07-28", nights: 7, price: 561, description: "Dal 21 al 28 luglio 561€ (7 notti)" },
  { start: "2024-07-21", end: "2024-07-25", nights: 4, price: 320, description: "Dal 21 al 25 luglio 320€ (4 notti)" },
  { start: "2024-07-25", end: "2024-07-28", nights: 3, price: 270, description: "Dal 25 al 28 luglio 270€ (3 notti)" },
  { start: "2024-07-28", end: "2024-08-01", nights: 4, price: 360, description: "Dal 28 luglio al 1 agosto 360€ (4 notti)" },
  { start: "2024-07-28", end: "2024-08-04", nights: 7, price: 627, description: "Dal 28 luglio al 4 agosto 627€ (7 notti)" },
  { start: "2024-08-04", end: "2024-08-11", nights: 7, price: 656, description: "Dal 4 al 11 agosto 656€ (7 notti)" },
  { start: "2024-08-01", end: "2024-08-04", nights: 3, price: 300, description: "Dal 1 al 4 agosto 300€ (3 notti)" },
  { start: "2024-08-04", end: "2024-08-08", nights: 4, price: 360, description: "Dal 4 al 8 agosto 360€ (4 notti)" },
  { start: "2024-08-08", end: "2024-08-11", nights: 3, price: 330, description: "Dal 8 al 11 agosto 330€ (3 notti)" },
  { start: "2024-08-11", end: "2024-08-18", nights: 7, price: 899, description: "Dal 11 al 18 agosto 899€ (7 notti)" },
  { start: "2024-08-11", end: "2024-08-14", nights: 3, price: 360, description: "Dal 11 al 14 agosto 360€ (3 notti)" },
  { start: "2024-08-14", end: "2024-08-18", nights: 4, price: 600, description: "Dal 14 al 18 agosto 600€ (4 notti)" },
  { start: "2024-08-18", end: "2024-08-25", nights: 7, price: 694, description: "Dal 18 al 25 agosto 694€ (7 notti)" },
  { start: "2024-08-18", end: "2024-08-22", nights: 4, price: 400, description: "Dal 18 al 22 agosto 400€ (4 notti)" },
  { start: "2024-08-22", end: "2024-08-25", nights: 3, price: 330, description: "Dal 22 al 25 agosto 330€ (3 notti)" },
  { start: "2024-08-25", end: "2024-09-01", nights: 7, price: 656, description: "Dal 25 agosto al 1 settembre 656€ (7 notti)" },
  { start: "2024-08-25", end: "2024-08-29", nights: 4, price: 360, description: "Dal 25 al 29 agosto 360€ (4 notti)" },
  { start: "2024-08-29", end: "2024-09-01", nights: 3, price: 330, description: "Dal 29 agosto al 1 settembre 330€" },
  { start: "2024-09-01", end: "2024-09-08", nights: 7, price: 561, description: "Dal 1 al 8 settembre 561€ (7 notti)" },
  { start: "2024-09-01", end: "2024-09-05", nights: 4, price: 320, description: "Dal 1 al 5 settembre 320€ (4 notti)" },
  { start: "2024-09-05", end: "2024-09-08", nights: 3, price: 270, description: "Dal 5 al 8 settembre 270€ (3 notti)" },
  { start: "2024-09-08", end: "2024-09-15", nights: 7, price: 561, description: "Dal 8 al 15 settembre 561€ (7 notti)" },
  { start: "2024-09-08", end: "2024-09-12", nights: 4, price: 320, description: "Dal 8 al 12 settembre 320€  (4 notti)" },
  { start: "2024-09-12", end: "2024-09-15", nights: 3, price: 270, description: "Dal 12 al 15 settembre 270€ (3 notti)" },
  { start: "2024-09-15", end: "2024-09-22", nights: 7, price: 475, description: "Dal 15 al 22 settembre 475€ (7 notti)" },
  { start: "2024-09-15", end: "2024-09-19", nights: 4, price: 280, description: "Dal 15 al 19 settembre 280€ (4 notti)" },
  { start: "2024-09-19", end: "2024-09-22", nights: 3, price: 220, description: "Dal 19 al 22 settembre 220€ (3 notti)" },
  { start: "2024-09-22", end: "2024-09-29", nights: 7, price: 409, description: "Dal 22 al 29 settembre 409€ (7 notti)" },
  { start: "2024-09-22", end: "2024-09-26", nights: 4, price: 240, description: "Dal 22 al 26 settembre 240€ (4 notti)" },
  { start: "2024-09-26", end: "2024-09-29", nights: 3, price: 190, description: "Dal 26 al 29 settembre 190€ (3 notti)" },
  { start: "2024-06-07", end: "2024-06-09", nights: 2, price: 150, description: "Dal 7 al 8 giugno 150€ a persona 2 notti" },
  { start: "2024-06-14", end: "2024-06-16", nights: 2, price: 150, description: "Dal 14 al 16 giugno 150€ a persona 2 notti" },
  { start: "2024-07-05", end: "2024-07-07", nights: 2, price: 170, description: "Dal 5 al 7 luglio 170€ a persona 2 notti" },
  { start: "2024-07-12", end: "2024-07-14", nights: 2, price: 170, description: "Dal 12 al 14 170€ a persona 2 notti" },
  { start: "2024-09-06", end: "2024-09-08", nights: 2, price: 180, description: "Dal 6 al 8 settembre 180€ a persona 2 notti" },
  { start: "2024-09-13", end: "2024-09-15", nights: 2, price: 180, description: "Dal 13 al 15 settembre 180€ a persona 2 notti" }
];

// Sort slots by start date
slots.sort((a, b) => new Date(a.start) - new Date(b.start));

// Function to save slots to localStorage
function saveSlots() {
  localStorage.setItem('hotelSlots', JSON.stringify(slots));
}

// Function to load slots from localStorage
function loadSlots() {
  const savedSlots = localStorage.getItem('hotelSlots');
  return savedSlots ? JSON.parse(savedSlots) : slots;
}

// Save slots when the script loads
saveSlots();

document.addEventListener('DOMContentLoaded', function() {
    const customSlotSelect = document.getElementById('customSlotSelect');
    
    // Create the custom select structure
    customSlotSelect.innerHTML = `
        <div class="custom-select">
            <div class="custom-select__trigger"><span>Seleziona un periodo</span><div class="arrow"></div></div>
            <div class="custom-options">
                <input type="text" class="custom-select__search" placeholder="Cerca periodo...">
                <!-- Options will be inserted here -->
            </div>
        </div>
    `;

    const customSelect = customSlotSelect.querySelector('.custom-select');
    const optionsContainer = customSlotSelect.querySelector('.custom-options');
    const searchInput = customSlotSelect.querySelector('.custom-select__search');
    const triggerSpan = customSlotSelect.querySelector('.custom-select__trigger span');

    // Populate the custom dropdown
    slots.forEach(slot => {
        const option = document.createElement('span');
        option.className = 'custom-option';
        option.setAttribute('data-value', JSON.stringify(slot));
        option.textContent = slot.description;
        
        // Apply color based on number of nights
        if (slot.nights === 2) {
            option.style.backgroundColor = '#90EE90'; // Light green
        } else if (slot.nights === 3) {
            option.style.backgroundColor = '#FFFFE0'; // Light yellow
        } else if (slot.nights === 4) {
            option.style.backgroundColor = '#FFA500'; // Orange
        } else if (slot.nights === 7) {
            option.style.backgroundColor = '#FFB6C1'; // Light red
        }
        
        optionsContainer.appendChild(option);
    });

    // Toggle custom select
    customSelect.addEventListener('click', function(e) {
        if (!e.target.classList.contains('custom-select__search')) {
            this.classList.toggle('open');
        }
    });

    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const options = optionsContainer.querySelectorAll('.custom-option');
        options.forEach(option => {
            const text = option.textContent.toLowerCase();
            option.style.display = text.includes(searchTerm) ? 'block' : 'none';
        });
    });

    // Select option
    optionsContainer.addEventListener('click', function(e) {
      if (e.target.classList.contains('custom-option')) {
        triggerSpan.textContent = e.target.textContent;
        customSelect.setAttribute('data-value', e.target.getAttribute('data-value'));
        customSelect.classList.remove('open'); // This line hides the dropdown
        calculateTotalPrice();
        }
    });

    // Close custom select when clicking outside
    document.addEventListener('click', function(e) {
        const isClickInside = customSelect.contains(e.target);
        if (!isClickInside) {
            customSelect.classList.remove('open');
        }
    });

  const disabledGuestsBtn = document.getElementById('disabledGuestsBtn');
  const disabledGuestsPanel = document.getElementById('disabledGuestsPanel');

  disabledGuestsBtn.addEventListener('click', function() {
      if (disabledGuestsPanel.style.display === 'none' || disabledGuestsPanel.style.display === '') {
          disabledGuestsPanel.style.display = 'block';
      } else {
          disabledGuestsPanel.style.display = 'none';
      }
  });

  // Add search functionality
  slotSearch.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      Array.from(slotSelect.options).forEach(option => {
          const text = option.textContent.toLowerCase();
          option.style.display = text.includes(searchTerm) ? '' : 'none';
      });
  });

  // Update calculation when slot is selected
  slotSelect.addEventListener('change', calculateTotalPrice);

  // Other event listeners
  document.getElementById('scheduleForm').addEventListener('input', calculateTotalPrice);
  document.getElementById('poolView').addEventListener('change', calculateTotalPrice);
  document.getElementById('loyaltyCustomer').addEventListener('change', calculateTotalPrice);
  document.getElementById('disabledAdults').addEventListener('change', calculateTotalPrice);
  document.getElementById('disabledChildren').addEventListener('change', calculateTotalPrice);
});

function calculateTotalPrice() {
  const customSelect = document.querySelector('.custom-select');
    const selectedSlot = JSON.parse(customSelect.getAttribute('data-value') || '{}');
  if (!selectedSlot.price) {
      document.getElementById('totalPrice').textContent = 'Prezzo totale: €0.00';
      return;
  }

  const adults = parseInt(document.getElementById('adults').value) || 0;
  const children05 = parseInt(document.getElementById('children05').value) || 0;
  const children612 = parseInt(document.getElementById('children612').value) || 0;
  let disabledAdults = parseInt(document.getElementById('disabledAdults').value) || 0;
  let disabledChildren = parseInt(document.getElementById('disabledChildren').value) || 0;
  const petService = document.getElementById('petService').checked;
  const cribService = document.getElementById('cribService').checked;
  const poolView = document.getElementById('poolView').checked;
  const loyaltyCustomer = document.getElementById('loyaltyCustomer').checked;

  // Validate disabled guests
  // Validate disabled guests
  if (disabledAdults > adults) {
    disabledAdults = adults;
    document.getElementById('disabledAdults').value = adults;
    alert("Il numero di adulti con disabilità è stato adeguato al numero totale di adulti.");
}

if (disabledChildren > children612) {
    disabledChildren = children612;
    document.getElementById('disabledChildren').value = children612;
    alert("Il numero di bambini con disabilità è stato adeguato al numero totale di bambini (6-12).");
}

let basePrice = selectedSlot.price * adults;
let clubCardCost = 6 * (adults - disabledAdults + children612 - disabledChildren) * selectedSlot.nights;
let extrasCost = 0;

// Apply discounts for additional adults
if (adults > 2) {
    const discountedAdults = adults - 2;
    const regularDiscountedAdults = discountedAdults - disabledAdults;
    basePrice -= selectedSlot.price * 0.2 * regularDiscountedAdults; // 20% discount
    basePrice -= selectedSlot.price * 0.3 * disabledAdults; // 30% discount for disabled adults
}

// Apply discounts for children
basePrice += (selectedSlot.price / 2) * (children612 - disabledChildren); // 50% for regular children 6-12
basePrice += selectedSlot.price * 0.4 * disabledChildren; // 60% discount for disabled children 6-12

// Apply loyalty discount
if (loyaltyCustomer) {
    basePrice *= 0.9; // 10% discount
}

// Add extras
if (poolView) {
    extrasCost += 10 * selectedSlot.nights;
}
if (petService) {
    extrasCost += 30;
}
if (cribService) {
    extrasCost += 10 * selectedSlot.nights;
}

const total = basePrice + clubCardCost + extrasCost;
document.getElementById('totalPrice').textContent = `Prezzo totale: €${total.toFixed(2)}`;
}

function generateBookingMessage() {
  const customSelect = document.querySelector('.custom-select');
  const selectedSlot = JSON.parse(customSelect.getAttribute('data-value') || '{}');
if (!selectedSlot.price) {
    alert("Per favore, seleziona un periodo prima di generare il messaggio di prenotazione.");
    return;
}

const adults = parseInt(document.getElementById('adults').value) || 0;
const children05 = parseInt(document.getElementById('children05').value) || 0;
const children612 = parseInt(document.getElementById('children612').value) || 0;
const disabledAdults = parseInt(document.getElementById('disabledAdults').value) || 0;
const disabledChildren = parseInt(document.getElementById('disabledChildren').value) || 0;
const petService = document.getElementById('petService').checked;
const cribService = document.getElementById('cribService').checked;
const poolView = document.getElementById('poolView').checked;
const loyaltyCustomer = document.getElementById('loyaltyCustomer').checked;

const totalPrice = parseFloat(document.getElementById('totalPrice').textContent.split('€')[1]);
const deposit = totalPrice * 0.2;
const remainingPayment = totalPrice - deposit;

// Format dates as dd/mm/yyyy
const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
};

let message = `PREVENTIVO PER IL GRAND HOTEL SELINUNTE.\n\n`;

message += `🗓️ PERIODO DEL SOGGIORNO:\n`;
message += `Dal ${formatDate(selectedSlot.start)} al ${formatDate(selectedSlot.end)}\n`;
message += `Numero di notti: ${selectedSlot.nights}\n\n`;

message += `🗓️ECCO LA NOSTRA MIGLIORE OFFERTA\n`;
message += `IL TOTALE IN PENSIONE COMPLETA CON TESSERE CLUB GIÀ INCLUSE NEL PREZZO E DI: ${totalPrice.toFixed(2)} EURO\n\n`;

message += `TIPOLOGIA CAMERA:\n`;
message += `${adults} AD ${children612} CHD ${children05} INF\n`;
if (disabledAdults > 0 || disabledChildren > 0) {
    message += `di cui ${disabledAdults} adulti con disabilità e ${disabledChildren} bambini con disabilità\n`;
}
const clubCardCost = 6 * (adults - disabledAdults + children612 - disabledChildren) * selectedSlot.nights;
message += `COSTO TESSERE CLUB: ${clubCardCost.toFixed(2)} (già incluso nel prezzo)\n\n`;

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
message += `Sconto del 10% per ospiti con disabilità\n`;
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

function displayBookingMessage(message) {
// Create a new div for the booking message
const messageDiv = document.createElement('div');
messageDiv.id = 'bookingMessageDiv';
messageDiv.style.marginTop = '20px';
messageDiv.style.padding = '20px';
messageDiv.style.backgroundColor = '#f0f0f0';
messageDiv.style.border = '1px solid #ddd';
messageDiv.style.borderRadius = '5px';

// Add the message text
const messageText = document.createElement('pre');
messageText.textContent = message;
messageText.style.whiteSpace = 'pre-wrap';
messageText.style.wordWrap = 'break-word';
messageDiv.appendChild(messageText);

// Create a container for buttons
const buttonContainer = document.createElement('div');
buttonContainer.style.display = 'flex';
buttonContainer.style.justifyContent = 'space-between';
buttonContainer.style.marginTop = '10px';

// Add a copy button
const copyButton = document.createElement('button');
copyButton.textContent = 'Copia messaggio';
copyButton.className = 'orange-button';
copyButton.style.flex = '1';
copyButton.style.marginRight = '10px';
copyButton.addEventListener('click', function() {
    navigator.clipboard.writeText(message).then(function() {
        alert('Messaggio copiato negli appunti!');
    }, function(err) {
        console.error('Impossibile copiare il testo: ', err);
    });
});

// Add a WhatsApp forward button
const whatsappButton = document.createElement('button');
whatsappButton.textContent = 'Invia su WhatsApp';
whatsappButton.className = 'orange-button';
whatsappButton.style.flex = '1';
whatsappButton.addEventListener('click', function() {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://web.whatsapp.com/send?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
});

// Add buttons to the container
buttonContainer.appendChild(copyButton);
buttonContainer.appendChild(whatsappButton);

// Add the button container to the message div
messageDiv.appendChild(buttonContainer);

// Add the message div to the page
const form = document.getElementById('scheduleForm');
form.parentNode.insertBefore(messageDiv, form.nextSibling);

// Scroll to the message
messageDiv.scrollIntoView({ behavior: 'smooth' });
}

// Event listener for form submission
document.getElementById('scheduleForm').addEventListener('submit', function(e) {
e.preventDefault();
const bookingMessage = generateBookingMessage();
displayBookingMessage(bookingMessage);
});

// Export the slots and functions if using modules
if (typeof module !== 'undefined' && module.exports) {
module.exports = { slots, saveSlots, loadSlots, calculateTotalPrice, generateBookingMessage, displayBookingMessage };
}