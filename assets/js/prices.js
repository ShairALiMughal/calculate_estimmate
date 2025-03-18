// prices.js

const slots = [
  // APRIL
  { start: "2025-04-01", end: "2025-04-04", nights: 3, price: 210, description: "Dal 1 al 4 aprile 210€ (3 notti)" },
  { start: "2025-04-01", end: "2025-04-06", nights: 5, price: 350, description: "Dal 1 al 6 aprile 350€ (5 notti)" },
  { start: "2025-04-04", end: "2025-04-06", nights: 2, price: 160, description: "Dal 4 al 6 aprile 160€ (2 notti)" },
  { start: "2025-04-06", end: "2025-04-11", nights: 5, price: 350, description: "Dal 6 al 11 aprile 350€ (5 notti)" },
  { start: "2025-04-06", end: "2025-04-13", nights: 7, price: 500, description: "Dal 6 al 13 aprile 500€ (7 notti)" },
  { start: "2025-04-11", end: "2025-04-13", nights: 2, price: 160, description: "Dal 11 al 13 aprile 160€ (2 notti)" },
  { start: "2025-04-13", end: "2025-04-18", nights: 5, price: 350, description: "Dal 13 al 18 aprile 350€ (5 notti)" },
  { start: "2025-04-13", end: "2025-04-20", nights: 7, price: 500, description: "Dal 13 al 20 aprile 500€ (7 notti)" },
  { start: "2025-04-18", end: "2025-04-20", nights: 2, price: 160, description: "Dal 18 al 20 aprile 160€ (2 notti)" },
  { start: "2025-04-20", end: "2025-04-25", nights: 5, price: 350, description: "Dal 20 al 25 aprile 350€ (5 notti)" },
  { start: "2025-04-20", end: "2025-04-27", nights: 7, price: 500, description: "Dal 20 al 27 aprile 500€ (7 notti)" },
  { start: "2025-04-25", end: "2025-04-27", nights: 2, price: 160, description: "Dal 25 al 27 aprile 160€ (2 notti)" },
  { start: "2025-04-27", end: "2025-05-01", nights: 4, price: 350, description: "Dal 27 aprile al 1 maggio 350€ (4 notti)" },
  { start: "2025-04-27", end: "2025-05-04", nights: 7, price: 570, description: "Dal 27 aprile al 4 maggio 570€ (7 notti)" },
    
  

  // MAY
  { start: "2025-05-01", end: "2025-05-04", nights: 3, price: 250, description: "Dal 1 al 4 maggio 250€ (3 notti)" },
  { start: "2025-05-04", end: "2025-05-11", nights: 7, price: 480, description: "Dal 4 al 11 maggio 480€ (7 notti)" },
  { start: "2025-05-04", end: "2025-05-08", nights: 4, price: 280, description: "Dal 4 al 8 maggio 280€ (4 notti)" },
  { start: "2025-05-08", end: "2025-05-11", nights: 3, price: 230, description: "Dal 8 al 11 maggio 230€ (3 notti)" },
  { start: "2025-05-11", end: "2025-05-18", nights: 7, price: 480, description: "Dal 11 al 18 maggio 480€ (7 notti)" },
  { start: "2025-05-11", end: "2025-05-15", nights: 4, price: 280, description: "Dal 11 al 15 maggio 280€ (4 notti)" },
  { start: "2025-05-15", end: "2025-05-18", nights: 3, price: 230, description: "Dal 15 al 18 maggio 230€ (3 notti)" },
  { start: "2025-05-18", end: "2025-05-25", nights: 7, price: 480, description: "Dal 18 al 25 maggio 480€ (7 notti)" },
  { start: "2025-05-18", end: "2025-05-22", nights: 4, price: 280, description: "Dal 18 al 22 maggio 280€ (4 notti)" },
  { start: "2025-05-22", end: "2025-05-25", nights: 3, price: 230, description: "Dal 22 al 25 maggio 230€ (3 notti)" },
  { start: "2025-05-25", end: "2025-06-01", nights: 7, price: 480, description: "Dal 25 maggio al 1 giugno 480€ (7 notti)" },
  { start: "2025-05-25", end: "2025-05-29", nights: 4, price: 280, description: "Dal 25 al 29 maggio 280€ (4 notti)" },
  { start: "2025-05-29", end: "2025-06-01", nights: 3, price: 230, description: "Dal 29 maggio al 1 giugno 230€ (3 notti)" },
  

   // JUNE
   { start: "2025-06-01", end: "2025-06-08", nights: 7, price: 500, description: "Dal 1 al 8 giugno 500€ (7 notti)" },
   { start: "2025-06-01", end: "2025-06-05", nights: 4, price: 300, description: "Dal 1 al 5 giugno 300€ (4 notti)" },
   { start: "2025-06-05", end: "2025-06-08", nights: 3, price: 230, description: "Dal 5 al 8 giugno 230€ (3 notti)" },
   { start: "2025-06-08", end: "2025-06-15", nights: 7, price: 480, description: "Dal 8 al 15 giugno 480€ (7 notti)" },
   { start: "2025-06-08", end: "2025-06-12", nights: 4, price: 280, description: "Dal 8 al 12 giugno 280€ (4 notti)" },
   { start: "2025-06-12", end: "2025-06-15", nights: 3, price: 230, description: "Dal 12 al 15 giugno 230€ (3 notti)" },
   { start: "2025-06-15", end: "2025-06-22", nights: 7, price: 550, description: "Dal 15 al 22 giugno 550€ (7 notti)" },
   { start: "2025-06-15", end: "2025-06-19", nights: 4, price: 320, description: "Dal 15 al 19 giugno 320€ (4 notti)" },
   { start: "2025-06-19", end: "2025-06-22", nights: 3, price: 260, description: "Dal 19 al 22 giugno 260€ (3 notti)" },
   { start: "2025-06-22", end: "2025-06-29", nights: 7, price: 550, description: "Dal 22 al 29 giugno 550€ (7 notti)" },
   { start: "2025-06-22", end: "2025-06-26", nights: 4, price: 320, description: "Dal 22 al 26 giugno 320€ (4 notti)" },
   { start: "2025-06-26", end: "2025-06-29", nights: 3, price: 260, description: "Dal 26 al 29 giugno 260€ (3 notti)" },
   { start: "2025-06-29", end: "2025-07-06", nights: 7, price: 570, description: "Dal 29 giugno al 6 luglio 570€ (7 notti)" },
   { start: "2025-06-29", end: "2025-07-03", nights: 4, price: 320, description: "Dal 29 giugno al 3 luglio 320€ (4 notti)" },
   { start: "2025-07-03", end: "2025-07-06", nights: 3, price: 280, description: "Dal 3 al 6 luglio 280€ (3 notti)" },
   
  // JULY
  { start: "2025-07-06", end: "2025-07-13", nights: 7, price: 600, description: "Dal 6 al 13 luglio 600€ (7 notti)" },
  { start: "2025-07-06", end: "2025-07-10", nights: 4, price: 360, description: "Dal 6 al 10 luglio 360€ (4 notti)" },
  { start: "2025-07-10", end: "2025-07-13", nights: 3, price: 280, description: "Dal 10 al 13 luglio 280€ (3 notti)" },
  { start: "2025-07-13", end: "2025-07-20", nights: 7, price: 660, description: "Dal 13 al 20 luglio 660€ (7 notti)" },
  { start: "2025-07-13", end: "2025-07-17", nights: 4, price: 380, description: "Dal 13 al 17 luglio 380€ (4 notti)" },
  { start: "2025-07-17", end: "2025-07-20", nights: 3, price: 315, description: "Dal 17 al 20 luglio 315€ (3 notti)" },
  { start: "2025-07-20", end: "2025-07-27", nights: 7, price: 690, description: "Dal 20 al 27 luglio 690€ (7 notti)" },
  { start: "2025-07-20", end: "2025-07-24", nights: 4, price: 400, description: "Dal 20 al 24 luglio 400€ (4 notti)" },
  { start: "2025-07-24", end: "2025-07-27", nights: 3, price: 330, description: "Dal 24 al 27 luglio 330€ (3 notti)" },
  { start: "2025-07-27", end: "2025-07-31", nights: 4, price: 400, description: "Dal 27 al 31 luglio 400€ (4 notti)" },
  { start: "2025-07-27", end: "2025-08-03", nights: 7, price: 690, description: "Dal 27 luglio al 3 agosto 690€ (7 notti)" },
  { start: "2025-07-31", end: "2025-08-03", nights: 3, price: 330, description: "Dal 31 luglio al 3 agosto 330€ (3 notti)" },
  

  // AUGUST
{ start: "2025-08-03", end: "2025-08-10", nights: 7, price: 725, description: "Dal 3 al 10 agosto 725€ (7 notti)" },
{ start: "2025-08-03", end: "2025-08-07", nights: 4, price: 420, description: "Dal 3 al 7 agosto 420€ (4 notti)" },
{ start: "2025-08-07", end: "2025-08-10", nights: 3, price: 345, description: "Dal 7 al 10 agosto 345€ (3 notti)" },
{ start: "2025-08-10", end: "2025-08-17", nights: 7, price: 960, description: "Dal 10 al 17 agosto 960€ (7 notti)" },
{ start: "2025-08-10", end: "2025-08-13", nights: 3, price: 330, description: "Dal 10 al 13 agosto 330€ (3 notti)" },
{ start: "2025-08-13", end: "2025-08-17", nights: 4, price: 680, description: "Dal 13 al 17 agosto 680€ (4 notti)" },
{ start: "2025-08-17", end: "2025-08-24", nights: 7, price: 900, description: "Dal 17 al 24 agosto 900€ (7 notti)" },
{ start: "2025-08-17", end: "2025-08-21", nights: 4, price: 520, description: "Dal 17 al 21 agosto 520€ (4 notti)" },
{ start: "2025-08-21", end: "2025-08-24", nights: 3, price: 435, description: "Dal 21 al 24 agosto 435€ (3 notti)" },
{ start: "2025-08-24", end: "2025-08-31", nights: 7, price: 780, description: "Dal 24 al 31 agosto 780€ (7 notti)" },
{ start: "2025-08-24", end: "2025-08-28", nights: 4, price: 460, description: "Dal 24 al 28 agosto 460€ (4 notti)" },
{ start: "2025-08-28", end: "2025-08-31", nights: 3, price: 360, description: "Dal 28 al 31 agosto 360€ (3 notti)" },

  // SEPTEMBER
  { start: "2025-08-31", end: "2025-09-07", nights: 7, price: 690, description: "Dal 31 agosto al 7 settembre 690€ (7 notti)" },
  { start: "2025-08-31", end: "2025-09-04", nights: 4, price: 400, description: "Dal 31 agosto al 4 settembre 400€ (4 notti)" },
  { start: "2025-09-04", end: "2025-09-07", nights: 3, price: 330, description: "Dal 4 al 7 settembre 330€ (3 notti)" },
  { start: "2025-09-07", end: "2025-09-14", nights: 7, price: 630, description: "Dal 7 al 14 settembre 630€ (7 notti)" },
  { start: "2025-09-07", end: "2025-09-11", nights: 4, price: 360, description: "Dal 7 al 11 settembre 360€ (4 notti)" },
  { start: "2025-09-11", end: "2025-09-14", nights: 3, price: 300, description: "Dal 11 al 14 settembre 300€ (3 notti)" },
  { start: "2025-09-14", end: "2025-09-21", nights: 7, price: 580, description: "Dal 14 al 21 settembre 580€ (7 notti)" },
  { start: "2025-09-14", end: "2025-09-18", nights: 4, price: 340, description: "Dal 14 al 18 settembre 340€ (4 notti)" },
  { start: "2025-09-18", end: "2025-09-21", nights: 3, price: 270, description: "Dal 18 al 21 settembre 270€ (3 notti)" },
  { start: "2025-09-21", end: "2025-09-28", nights: 7, price: 540, description: "Dal 21 al 28 settembre 540€ (7 notti)" },
  { start: "2025-09-21", end: "2025-09-25", nights: 4, price: 320, description: "Dal 21 al 25 settembre 320€ (4 notti)" },
  { start: "2025-09-25", end: "2025-09-28", nights: 3, price: 250, description: "Dal 25 al 28 settembre 250€ (3 notti)" },
  
  // OCTOBER
  { start: "2025-09-28", end: "2025-10-05", nights: 7, price: 520, description: "Dal 28 settembre al 5 ottobre 520€ (7 notti)" },
  { start: "2025-09-28", end: "2025-10-02", nights: 4, price: 320, description: "Dal 28 settembre al 2 ottobre 320€ (4 notti)" },
  { start: "2025-10-02", end: "2025-10-05", nights: 3, price: 235, description: "Dal 2 al 5 ottobre 235€ (3 notti)" }
  
];


slots.sort((a, b) => new Date(a.start) - new Date(b.start));

function saveSlots() {
  localStorage.setItem('hotelSlots', JSON.stringify(slots));
}

function loadSlots() {
  const savedSlots = localStorage.getItem('hotelSlots');
  return savedSlots ? JSON.parse(savedSlots) : slots;
}

saveSlots();

document.addEventListener('DOMContentLoaded', function() {
  // --- Setup Custom Select ---
  const customSlotSelect = document.getElementById('customSlotSelect');
  if (customSlotSelect) {
    customSlotSelect.innerHTML = `
      <div class="custom-select">
        <div class="custom-select__trigger"><span>Seleziona un periodo</span><div class="arrow"></div></div>
        <div class="custom-options">
          <input type="text" class="custom-select__search" placeholder="Cerca periodo...">
        </div>
      </div>
    `;
  
    const customSelect = customSlotSelect.querySelector('.custom-select');
    const optionsContainer = customSlotSelect.querySelector('.custom-options');
    const searchInput = customSlotSelect.querySelector('.custom-select__search');
    const triggerSpan = customSlotSelect.querySelector('.custom-select__trigger span');
  
    // Populate custom options
    slots.forEach(slot => {
      const option = document.createElement('span');
      option.className = 'custom-option';
      option.setAttribute('data-value', JSON.stringify(slot));
      option.textContent = slot.description;
  
      // Set background color based on number of nights
      if (slot.nights === 2) {
        option.style.backgroundColor = '#90EE90';
      } else if (slot.nights === 3) {
        option.style.backgroundColor = '#FFFFE0';
      } else if (slot.nights === 4) {
        option.style.backgroundColor = '#FFA500';
      } else if (slot.nights === 7) {
        option.style.backgroundColor = '#FFB6C1';
      }
  
      optionsContainer.appendChild(option);
    });
  
    // Option selection
    optionsContainer.addEventListener('click', function(e) {
      if (e.target.classList.contains('custom-option')) {
        triggerSpan.textContent = e.target.textContent;
        customSelect.setAttribute('data-value', e.target.getAttribute('data-value'));
        customSelect.classList.remove('open');
        calculateTotalPrice();
        e.stopPropagation();
      }
    });
  
    // Toggle custom select
    customSelect.addEventListener('click', function(e) {
      if (!e.target.classList.contains('custom-select__search')) {
        this.classList.toggle('open');
      }
    });
  
    // Close custom select on outside click
    document.addEventListener('click', function(e) {
      if (!customSelect.contains(e.target)) {
        customSelect.classList.remove('open');
      }
    });
  
    // Search functionality
    searchInput.addEventListener('input', function(e) {
      const searchTerm = this.value.toLowerCase();
      const options = optionsContainer.querySelectorAll('.custom-option');
      options.forEach(option => {
        const text = option.textContent.toLowerCase();
        option.style.display = text.includes(searchTerm) ? 'block' : 'none';
      });
    });
  
    // Additional update after option click (using a short delay)
    const options = customSelect.querySelectorAll('.custom-option');
    options.forEach(option => {
      option.addEventListener('click', function() {
        setTimeout(calculateTotalPrice, 0);
      });
    });
  }
  
  // --- Setup Discount Slider ---
  // (Assuming your HTML now uses a slider with ID "percentageDiscount" and a label with ID "discountValue")
  const percentageDiscountSlider = document.getElementById('percentageDiscount');
  const discountValueLabel = document.getElementById('discountValue');
  if (percentageDiscountSlider && discountValueLabel) {
    percentageDiscountSlider.addEventListener('input', function() {
      discountValueLabel.textContent = percentageDiscountSlider.value + '%';
      calculateTotalPrice();
    });
  }
  
  // --- Setup Form Input Listeners ---
  const form = document.getElementById('scheduleForm');
  if (form) {
    form.querySelectorAll('input, select').forEach(input => {
      input.addEventListener('change', calculateTotalPrice);
      input.addEventListener('input', calculateTotalPrice);
    });
  }
  
  // Initial calculation
  calculateTotalPrice();
});

function calculateTotalPrice() {
  const customSelect = document.querySelector('.custom-select');
  const selectedSlotData = customSelect ? customSelect.getAttribute('data-value') : null;
  const selectedSlot = selectedSlotData ? JSON.parse(selectedSlotData) : {};
  
  if (!selectedSlot.price) {
    document.getElementById('totalPrice').textContent = 'Prezzo totale: €0.00';
    return;
  }
  
  const adults = parseInt(document.getElementById('adults').value) || 0;
  const children05 = parseInt(document.getElementById('children05').value) || 0;
  const children612 = parseInt(document.getElementById('children612').value) || 0;
  const petService = document.getElementById('petService').checked;
  const cribService = document.getElementById('cribService').checked;
  const poolView = document.getElementById('poolView').checked;
  const loyaltyCustomer = document.getElementById('loyaltyCustomer').checked;
  const removeClubCard = document.getElementById('removeClubCard').checked;
  const percentageDiscount = parseFloat(document.getElementById('percentageDiscount').value) || 0;
  
  let basePrice = selectedSlot.price;
  let totalPrice = 0;
  
  // Calculate price for adults
  if (adults <= 2) {
    totalPrice += basePrice * adults;
  } else {
    totalPrice += basePrice * 2;
    const discountedAdults = adults - 2;
    const discountedPrice = basePrice * 0.8;
    totalPrice += discountedPrice * discountedAdults;
  }
  
  // Price for children (6-12 get 50% off)
  const childPrice = basePrice * 0.5;
  totalPrice += childPrice * children612;
  
  // Apply loyalty discount (10%)
  if (loyaltyCustomer) {
    totalPrice *= 0.9;
  }
  
  // Apply percentage discount from slider
  if (percentageDiscount > 0) {
    totalPrice *= (1 - percentageDiscount / 100);
  }
  
  // Club card cost if not removed
  let clubCardCost = 0;
  if (!removeClubCard) {
    const peoplePayingClubCard = adults + children612;
    clubCardCost = 6 * peoplePayingClubCard * selectedSlot.nights;
  }
  totalPrice += clubCardCost;
  
  // Add extras
  let extrasCost = 0;
  if (poolView) extrasCost += 10 * selectedSlot.nights;
  if (petService) extrasCost += 30;
  if (cribService) extrasCost += 10 * selectedSlot.nights;
  
  totalPrice += extrasCost;
  
  document.getElementById('totalPrice').textContent = `Prezzo totale: €${totalPrice.toFixed(2)}`;
  
  console.log('Base Price:', basePrice);
  console.log('Club Card Cost:', clubCardCost);
  console.log('Extras Cost:', extrasCost);
  console.log('Total:', totalPrice);
}

function generateBookingMessage() {
  const customSelect = document.querySelector('.custom-select');
  const selectedSlotData = customSelect ? customSelect.getAttribute('data-value') : null;
  const selectedSlot = selectedSlotData ? JSON.parse(selectedSlotData) : {};
  if (!selectedSlot.price) {
    alert("Per favore, seleziona un periodo prima di generare il messaggio di prenotazione.");
    return null;
  }
  
  const adults = parseInt(document.getElementById('adults')?.value) || 0;
  const children05 = parseInt(document.getElementById('children05')?.value) || 0;
  const children612 = parseInt(document.getElementById('children612')?.value) || 0;
  const petService = document.getElementById('petService')?.checked || false;
  const cribService = document.getElementById('cribService')?.checked || false;
  const poolView = document.getElementById('poolView')?.checked || false;
  const loyaltyCustomer = document.getElementById('loyaltyCustomer')?.checked || false;
  const removeClubCard = document.getElementById('removeClubCard')?.checked || false;
  const percentageDiscount = parseFloat(document.getElementById('percentageDiscount').value) || 0;
  
  const totalPriceElement = document.getElementById('totalPrice');
  const totalPrice = totalPriceElement ? parseFloat(totalPriceElement.textContent.split('€')[1]) : 0;
  const deposit = totalPrice * 0.2;
  const remainingPayment = totalPrice - deposit;
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth()+1).toString().padStart(2, '0')}/${date.getFullYear()}`;
  };
  
  let message = `PREVENTIVO PER IL GRAND HOTEL SELINUNTE.\n\n`;
  message += `🗓️ PERIODO DEL SOGGIORNO:\n`;
  message += `Dal ${formatDate(selectedSlot.start)} al ${formatDate(selectedSlot.end)}\n`;
  message += `Numero di notti: ${selectedSlot.nights}\n\n`;
  
  message += `🗓️ ECCO LA NOSTRA MIGLIORE OFFERTA\n`;
  message += `IL TOTALE IN PENSIONE COMPLETA CON TESSERE CLUB GIÀ INCLUSE: €${totalPrice.toFixed(2)}\n\n`;
  
  message += `TIPOLOGIA CAMERA:\n`;
  message += `${adults} AD ${children612} CHD ${children05} INF\n`;
  
  if (percentageDiscount > 0) {
    message += `Sconto percentuale applicato: ${percentageDiscount}%\n`;
  }
  
  const clubCardCost = removeClubCard ? 0 : 6 * (adults + children612) * selectedSlot.nights;
  if (!removeClubCard) {
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
  
  message += `⚠️'NOTA BENE': IL PREZZO INDICATO SOPRA E IL TOTALE COMPLESSIVO IN PENSIONE COMPLETA E CON IL COSTO DELLE TESSERE CLUB GIÀ INSERITE, SENZA ALCUN AGGIUNTIVO (ESCLUSA TASSA DI SOGGIORNO).\n\n`;
  message += `INFORMAZIONI GENERALI ⬇️\n\n`;
  message += `I bambini da 0 a 5 anni gratuiti nel letto con i genitori.\n`;
  message += `Da 6 ai 12 anni sconto del 50% in terzo e quarto letto.\n`;
  message += `Dai 13 anni in su sconto del 20% in terzo e quarto letto.\n`;
  message += `Supplemento Camera con vista piscina €10,00 a notte.\n`;
  message += `Supplemento Culla: €10,00 a notte\n`;
  message += `Supplemento Cane: €30,00 (in totale)\n`;
  if (loyaltyCustomer) {
    message += `Sconto fedeltà del 10% applicato alla tariffa base.\n`;
  }
  message += `\n`;
  
  message += `La tessera club ha un costo di €6,00 a notte e per persona (gratuita fino ai 5 anni) e include tutti i nostri servizi.\n\n`;
  message += `Modalità SOFT ALL INCLUSIVE: €5,00 a notte a persona (a partire dai 6 anni) - include analcolici, crema caffe, e caffetteria Bar Piscina.\n\n`;
  
  message += `Conferma prenotazione con acconto del 20% (€${deposit.toFixed(2)}) tramite bonifico bancario e saldo in hotel (€${remainingPayment.toFixed(2)}).\n\n`;
  message += `IMPORTANTE: La prenotazione sarà confermata solo dopo il ricevimento dell'acconto.\n\n`;
  
  return message;
}

function displayBookingMessage(message) {
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
        alert('Impossibile copiare automaticamente. Per favore, seleziona e copia il messaggio manualmente.');
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
        alert('Errore nel copiare il messaggio. Per favore, copia manualmente prima di aprire WhatsApp.');
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
    alert('Impossibile aprire WhatsApp. Per favore, apri WhatsApp manualmente.');
  } else {
    newWindow.focus();
    alert('Il messaggio è stato copiato negli appunti. WhatsApp è stato aperto. Incolla il messaggio nella chat desiderata.');
  }
}

function resetForm() {
  const customSelect = document.querySelector('.custom-select');
  if (customSelect) {
    const triggerSpan = customSelect.querySelector('.custom-select__trigger span');
    triggerSpan.textContent = 'Seleziona un periodo';
    customSelect.removeAttribute('data-value');
  }
  
  document.getElementById('adults').value = '1';
  document.getElementById('children05').value = '0';
  document.getElementById('children612').value = '0';
  
  // Reset discount slider
  const percentageDiscountSlider = document.getElementById('percentageDiscount');
  if (percentageDiscountSlider) {
    percentageDiscountSlider.value = '0';
  }
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
  
  // Hide discount panel if it exists (if still in the HTML)
  const discountPanel = document.getElementById('discountPanel');
  if (discountPanel) {
    discountPanel.style.display = 'none';
  }
  
  document.getElementById('totalPrice').textContent = 'Prezzo totale: €0.00';
  calculateTotalPrice();
  
  const bookingMessageDiv = document.getElementById('bookingMessageDiv');
  if (bookingMessageDiv) {
    bookingMessageDiv.style.display = 'none';
  }
}

document.getElementById('scheduleForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const bookingMessage = generateBookingMessage();
  if (bookingMessage) {
    displayBookingMessage(bookingMessage);
  }
});

// Export functions if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { slots, saveSlots, loadSlots, calculateTotalPrice, generateBookingMessage, displayBookingMessage };
}
