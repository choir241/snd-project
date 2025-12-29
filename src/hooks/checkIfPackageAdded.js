export function checkIfPackageAdded({ packageName }) {
  const cartItems = sessionStorage.getItem("cart")
    ? JSON.parse(sessionStorage.getItem("cart"))
    : [];
  if (cartItems) {
    let isAdded = false;

    cartItems.forEach((item) => {
      if (item.packageName === packageName) {
        isAdded = true;
        return;
      }
    });

    return isAdded;
  }
}
