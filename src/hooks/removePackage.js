import { labels } from "../static/labels";
import { setCart } from "../static/cartItems";

export function removePackage({ packageName, navigate }) {
  const cartItems = sessionStorage.getItem("cart")
    ? JSON.parse(sessionStorage.getItem("cart"))
    : [];

  const updatedCartRemovePackage = cartItems.filter((item) => {
    if (item.packageName !== packageName) {
      return item;
    }
  });

  setCart(updatedCartRemovePackage);

  return navigate(labels.links.bookingsLink);
}
