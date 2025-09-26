
export function needsLicense(kind) {
  return kind === 'car' || kind === 'truck';
}

export function chooseVehicle(option1, option2) {
  let betterChoice;

  if (option1 < option2) {
    betterChoice = option1;
  } else {
    betterChoice = option2;
  }

  return `${betterChoice} is clearly the better choice.`;
}



export function calculateResellPrice(originalPrice, age) {
  if (age < 3) {
    return originalPrice * 0.8;
  } else if (age > 10) {
    return originalPrice * 0.5;
  } else {
    return originalPrice * 0.7;
  }
}
