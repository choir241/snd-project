export function calculateTimeTotal({ cartItems }) {
  let hrs = 0;
  let min = 0;
  cartItems.forEach((item) => {
    if (item.packageOption.timeTaken.hr) {
      hrs += item.packageOption.timeTaken.hr;
    } else if (item.packageOption.timeTaken.min) {
      min += item.packageOption.timeTaken.min;
    }
  });
  if (min >= 60) {
    while (min >= 60) {
      min -= 60;
      hrs += 1;
    }
  }
  if (min) {
    return `${hrs} hr ${min} min`;
  } else {
    return `${hrs} hr`;
  }
}
