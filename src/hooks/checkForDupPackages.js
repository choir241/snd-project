export function checkForDupPackages({ packageName }) {
  const cartItems = sessionStorage.getItem("cart")
    ? JSON.parse(sessionStorage.getItem("cart"))
    : [];

  let isDup = false;

  if (cartItems) {
    cartItems.forEach((cartItem) => {
      if (cartItem.packageName === packageName) {
        isDup = true;
        return;
      }
    });
    return isDup;
  }
}
