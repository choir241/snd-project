import { setCart } from "../../static/cartItems";

export function removeAddOn({ addOnItemName }) {
  const cartItems = sessionStorage.getItem("cart")
    ? JSON.parse(sessionStorage.getItem("cart"))
    : [];

  const updatedCartRemovePackage = cartItems.map((item) => {
    item.addOns = item.addOns.filter((addOn) => {
      if (addOn.optionName !== addOnItemName) {
        return addOn;
      }
    });
    return item;
  });

  setCart(updatedCartRemovePackage);
}
