function ratePool(volume, depth) {
  if (volume < 1000) {
    return "Малък";
  } else if (volume <= 5000) {
    return "Среден";
  } else if (volume > 5000 && depth >= 2) {
    return "Голям и дълбок";
  } else {
    return "Голям, но не особено дълбок";
  }
}

const poolVolume = 800; // обем на басейна в литри
const poolDepth = 1.5; // дълбочина на басейна в метри

const poolRating = ratePool(poolVolume, poolDepth);
console.log(`Оценката на басейна е: ${poolRating}`);