export function checkIfPackageAdded({ packageName }) {
  const cart = sessionStorage.getItem("cart")
    ? JSON.parse(sessionStorage.getItem("cart"))
    : [];

  if (cart) {
    let isAdded = false;

    cart.forEach((item) => {
      if (item.packageName === packageName) {
        isAdded = true;
        return;
      }
    });

    return isAdded;
  }
}
