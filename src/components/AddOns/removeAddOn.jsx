import { setCart } from "../../static/cartItems";

export function removeAddOn({ addOnItemName }) {
  const cartItems = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
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
