import { labels } from "../../static/labels";
import { setCart } from "../../static/cartItems";

export function updateModifier({ addOnItems, packageName, navigate }) {
  const cartItems = sessionStorage.getItem("cart")
    ? JSON.parse(sessionStorage.getItem("cart"))
    : [];

  if (addOnItems.length) {
    const updatedCartModifier = cartItems.map((item) => {
      if (item.packageName === packageName) {
        item.addOns = addOnItems;
        return item;
      } else {
        return item;
      }
    });
    setCart(updatedCartModifier);
  }

  return navigate(labels.links.appointmentsLink);
}
