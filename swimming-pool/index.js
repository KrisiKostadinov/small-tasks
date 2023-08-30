function calculateFillTime(volume, flowRate) {
  return volume / flowRate;
}

const poolVolume = 10000; // обем на басейна в литри
const waterFlowRate = 500; // дебит на водата в литри в минута

const fillTime = calculateFillTime(poolVolume, waterFlowRate);

console.log(`Басейнът ще се напълни за ${fillTime.toFixed(2)} минути.`);