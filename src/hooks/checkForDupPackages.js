export function checkForDupPackages({ packageName }) {
  const cartArray = JSON.parse(sessionStorage.getItem("cart"));
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
