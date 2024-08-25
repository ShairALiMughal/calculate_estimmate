// Calculate price for adults
basePrice += selectedSlot.price * 2; // First two adults at full price
if (adults > 2) {
    for (let i = 2; i < adults; i++) {
        let adultPrice = selectedSlot.price * 0.8; // 20% discount for 3rd adult and beyond
        if (disabledAdults > 0) {
            adultPrice *= 0.9; // Additional 10% discount for disabled adults
            disabledAdults--;
        }
        basePrice += adultPrice;
    }
}

// Calculate price for children 6-12
let regularChildrenPrice = 0;
let disabledChildrenPrice = 0;
for (let i = 0; i < children612; i++) {
    let childPrice = selectedSlot.price * 0.5; // 50% of base price for children 6-12
    if (disabledChildren > 0) {
        childPrice *= 0.9; // Additional 10% discount for disabled children
        disabledChildren--;
        disabledChildrenPrice += childPrice;
    } else {
        regularChildrenPrice += childPrice;
    }
}
basePrice += regularChildrenPrice + disabledChildrenPrice;