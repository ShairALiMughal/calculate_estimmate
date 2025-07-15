function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  
  // Get form values
  const fullname = document.getElementById('fullname').value || 'Non specificato';
  const phone = document.getElementById('phone').value || 'Non specificato';
  const email = document.getElementById('email').value || 'Non specificato';
  const allergies = document.getElementById('allergies').value || 'Nessuna';
  const roomType = document.getElementById('roomType').value || 'Non specificato';
  const percentageDiscount = parseFloat(document.getElementById('percentageDiscount').value) || 0;
  
  const customSelect = document.querySelector('.custom-select');
  const selectedSlotData = customSelect ? customSelect.getAttribute('data-value') : null;
  const selectedSlot = selectedSlotData ? JSON.parse(selectedSlotData) : {};
  
  if (!selectedSlot.price) {
    alert("Per favore, seleziona un periodo prima di generare il PDF.");
    return;
  }
  
  // Guest counts
  const adults = parseInt(document.getElementById('adults').value) || 0;
  const children05 = parseInt(document.getElementById('children05').value) || 0;
  const children612 = parseInt(document.getElementById('children612').value) || 0;
  let disabledAdults = parseInt(document.getElementById('disabledAdults')?.value) || 0;
  let disabledChildren612 = parseInt(document.getElementById('disabledChildren612')?.value) || 0;
  
  // Ensure we don't exceed the actual counts
  if (disabledAdults > adults) disabledAdults = adults;
  if (disabledChildren612 > children612) disabledChildren612 = children612;
  
  // Services
  const petService = document.getElementById('petService').checked;
  const cribService = document.getElementById('cribService').checked;
  const poolView = document.getElementById('poolView').checked;
  const loyaltyCustomer = document.getElementById('loyaltyCustomer').checked;
  const removeClubCard = document.getElementById('removeClubCard').checked;
  
  const basePrice = selectedSlot.price;
  const nights = selectedSlot.nights;
  let totalPrice = 0;
  let calculationDetails = [];

  /*************************************************
   * 1) ADULTS Calculation
   *************************************************/
  const nonDisabledAdults = adults - disabledAdults;
  let adultCost = 0;
  let disabledCost = 0;
  
  // First two non-disabled adults pay full price
  if (nonDisabledAdults > 0) {
    const fullPayingAdults = Math.min(nonDisabledAdults, 2);
    adultCost += fullPayingAdults * basePrice;
    calculationDetails.push({
      description: `Adulti (primi 2): ${fullPayingAdults} × €${basePrice.toFixed(2)}`,
      amount: fullPayingAdults * basePrice
    });
  
    // Additional non-disabled adults get 20% off
    if (nonDisabledAdults > 2) {
      const extraAdults = nonDisabledAdults - 2;
      const discountedPrice = basePrice * 0.8;
      adultCost += extraAdults * discountedPrice;
      calculationDetails.push({
        description: `Adulti aggiuntivi : ${extraAdults} × €${discountedPrice.toFixed(2)}`,
        amount: extraAdults * discountedPrice
      });
    }
  }
  
  // Disabled adults calculation
  if (disabledAdults > 0) {
    const doubleDiscount = Math.min(disabledAdults, Math.max(0, adults - 2));
    const singleDiscount = disabledAdults - doubleDiscount;
  
    if (doubleDiscount > 0) {
      const doubleDiscountedPrice = basePrice * 0.8 * 0.9;
      disabledCost += doubleDiscount * doubleDiscountedPrice;
      calculationDetails.push({
        description: `Adulti disabili : ${doubleDiscount} × €${doubleDiscountedPrice.toFixed(2)}`,
        amount: doubleDiscount * doubleDiscountedPrice
      });
    }
    if (singleDiscount > 0) {
      const singleDiscountedPrice = basePrice * 0.9;
      disabledCost += singleDiscount * singleDiscountedPrice;
      calculationDetails.push({
        description: `Adulti disabili : ${singleDiscount} × €${singleDiscountedPrice.toFixed(2)}`,
        amount: singleDiscount * singleDiscountedPrice
      });
    }
  }
  
  totalPrice += adultCost + disabledCost;

  /*************************************************
   * 2) CHILDREN (6-12) Calculation
   *************************************************/
  const normalChildren = children612 - disabledChildren612;
  const childBase = basePrice * 0.5;
  let normalChildrenCost = normalChildren * childBase;
  let disabledChildrenCost = 0;
  
  if (normalChildren > 0) {
    calculationDetails.push({
      description: `Bambini 6-12 : ${normalChildren} × €${childBase.toFixed(2)}`,
      amount: normalChildrenCost
    });
  }
  
  if (disabledChildren612 > 0) {
    disabledChildrenCost = disabledChildren612 * childBase * 0.9;
    calculationDetails.push({
      description: `Bambini disabili 6-12 : ${disabledChildren612} × €${(childBase * 0.9).toFixed(2)}`,
      amount: disabledChildrenCost
    });
  }
  
  totalPrice += normalChildrenCost + disabledChildrenCost;

  /*************************************************
   * 3) LOYALTY DISCOUNT (10%)
   *************************************************/
  let loyaltyDiscount = 0;
  if (loyaltyCustomer) {
    loyaltyDiscount = totalPrice * 0.1;
    totalPrice *= 0.9;
  }

  /*************************************************
   * 4) PERCENTAGE DISCOUNT
   *************************************************/
  let percentageDiscountAmount = 0;
  if (percentageDiscount > 0) {
    percentageDiscountAmount = totalPrice * (percentageDiscount / 100);
    totalPrice *= (1 - percentageDiscount / 100);
  }

  /*************************************************
   * 5) CLUB CARD COST
   *************************************************/
  let clubCardCost = 0;
  if (!removeClubCard) {
    const payingClub = nonDisabledAdults + normalChildren;
    clubCardCost = 6 * payingClub * nights;
    if (clubCardCost > 0) {
      calculationDetails.push({
        description: `Tessere club: ${payingClub} × €6 × ${nights} notti`,
        amount: clubCardCost
      });
    }
  }
  totalPrice += clubCardCost;

  /*************************************************
   * 6) EXTRAS COST
   *************************************************/
  let extrasCost = 0;
  if (poolView) {
    const poolCost = 10 * nights;
    extrasCost += poolCost;
    calculationDetails.push({
      description: `Vista piscina: €10 × ${nights} notti`,
      amount: poolCost
    });
  }
  if (petService) {
    extrasCost += 30;
    calculationDetails.push({
      description: `Servizio animali`,
      amount: 30
    });
  }
  if (cribService) {
    const cribCost = 10 * nights;
    extrasCost += cribCost;
    calculationDetails.push({
      description: `Culla: €10 × ${nights} notti`,
      amount: cribCost
    });
  }
  totalPrice += extrasCost;

  // Format dates
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth()+1).toString().padStart(2, '0')}/${date.getFullYear()}`;
  };

  // Header
  doc.setFontSize(18);
  doc.setTextColor(40);
  doc.setFont(undefined, 'bold');
  doc.text('GRAND HOTEL SELINUNTE', 105, 20, { align: 'center' });
  doc.setFontSize(11);
  doc.setFont(undefined, 'normal');
  doc.text('Contrada, Via Trenta Salme, 91022 Marinella TP, Italy', 105, 26, { align: 'center' });
  
  // Divider line after header
  doc.setDrawColor(200);
  doc.line(20, 32, 190, 32);
  doc.line(20, 33, 190, 33);
  
  // Client information (left column)
  doc.setFontSize(12);
  doc.setFont(undefined, 'bold');
  doc.text('Informazioni Cliente:', 20, 42);
  doc.setFont(undefined, 'normal');
  doc.text(`Nome: ${fullname}`, 20, 48);
  doc.text(`Telefono: ${phone}`, 20, 54);
  doc.text(`Email: ${email}`, 20, 60);
  doc.text(`Allergie: ${allergies}`, 20, 66);
  
  // Booking details (right column)
  doc.setFont(undefined, 'bold');
  doc.text('Dettagli Prenotazione:', 140, 42);
  doc.setFont(undefined, 'normal');
  doc.text(`Dal ${formatDate(selectedSlot.start)} al ${formatDate(selectedSlot.end)}`, 140, 48);
  doc.text(`Notti: ${nights}`, 140, 54);
  doc.text(`Tipologia: ${roomType}`, 140, 60);
  
  // Divider line before price details
  doc.setDrawColor(200);
  doc.line(20, 72, 190, 72);
  
  // Price calculation section
  let yPos = 82;
  
  doc.setFont(undefined, 'bold');
  doc.text('Dettaglio Prezzi:', 20, yPos);
  yPos += 8;
  doc.setFont(undefined, 'normal');
  
  // Display all calculation details
  calculationDetails.forEach(item => {
    doc.text(item.description, 20, yPos);
    doc.text(`€${item.amount.toFixed(2)}`, 180, yPos, { align: 'right' });
    yPos += 7;
  });
  
  // Subtotal before discounts
  const subtotalBeforeDiscounts = adultCost + disabledCost + normalChildrenCost + disabledChildrenCost + clubCardCost + extrasCost;
  doc.setFont(undefined, 'bold');
  doc.text('Subtotale:', 20, yPos);
  doc.text(`€${subtotalBeforeDiscounts.toFixed(2)}`, 180, yPos, { align: 'right' });
  yPos += 7;
  
  // Discounts
  if (loyaltyDiscount > 0) {
    doc.text(`Sconto fedeltà (10%):`, 20, yPos);
    doc.text(`-€${loyaltyDiscount.toFixed(2)}`, 180, yPos, { align: 'right' });
    yPos += 7;
  }
  
  if (percentageDiscountAmount > 0) {
    doc.text(`Sconto aggiuntivo (${percentageDiscount}%):`, 20, yPos);
    doc.text(`-€${percentageDiscountAmount.toFixed(2)}`, 180, yPos, { align: 'right' });
    yPos += 7;
  }
  
  // Divider before total
  doc.setDrawColor(200);
  doc.line(20, yPos + 3, 190, yPos + 3);
  yPos += 10;
  
  // Total
  doc.setFontSize(14);
  doc.setFont(undefined, 'bold');
  doc.text('Prezzo Totale:', 20, yPos);
  doc.text(`€${totalPrice.toFixed(2)}`, 180, yPos, { align: 'right' });
  
  // Guest information section
  yPos += 15;
  doc.setFontSize(12);
  doc.setFont(undefined, 'bold');
  doc.text('Riepilogo Ospiti:', 20, yPos);
  yPos += 8;
  doc.setFont(undefined, 'normal');
  doc.text(`• Totali: ${adults + children612 + children05}`, 20, yPos);
  yPos += 7;
  doc.text(`• Adulti: ${adults}`, 20, yPos);
  yPos += 7;
  doc.text(`• Bambini 6-12: ${children612}`, 20, yPos);
  yPos += 7;
  doc.text(`• Bambini 0-5: ${children05}`, 20, yPos);
  yPos += 12;
  
  // Services summary
  doc.setFont(undefined, 'bold');
  doc.text('Servizi:', 20, yPos);
  yPos += 8;
  doc.setFont(undefined, 'normal');
  doc.text(`• Culla: ${cribService ? 'Sì' : 'No'}`, 20, yPos);
  yPos += 7;
  doc.text(`• Animali: ${petService ? 'Sì' : 'No'}`, 20, yPos);
  yPos += 7;
  doc.text(`• Disabilità: ${disabledAdults + disabledChildren612 > 0 ? 'Sì' : 'No'}`, 20, yPos);
  yPos += 7;
  doc.text(`• Fedeltà: ${loyaltyCustomer ? 'Sì' : 'No'}`, 20, yPos);
  
  // Footer
  doc.setFontSize(10);
  doc.setTextColor(100);
  doc.setFont(undefined, 'normal');
  doc.text('Grazie per aver scelto Grand Hotel Selinunte!', 105, 280, { align: 'center' });
  doc.text('Per confermare la prenotazione, inviare un acconto del 20%', 105, 286, { align: 'center' });
  doc.text('IBAN: IT00X0000000000000000000000', 105, 292, { align: 'center' });
  
  // Save the PDF
  doc.save(`Prenotazione_${fullname.replace(' ', '_')}.pdf`);
}