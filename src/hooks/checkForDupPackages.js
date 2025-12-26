export function checkForDupPackages({ packageName }) {
  const cartArray = sessionStorage.getItem("cart")
    ? JSON.parse(sessionStorage.getItem("cart"))
    : [];

  let isDup = false;

  if (cartArray) {
    cartArray.forEach((cart) => {
      if (cart.packageName === packageName) {
        isDup = true;
        return;
      }
    });
    return isDup;
  }
}
