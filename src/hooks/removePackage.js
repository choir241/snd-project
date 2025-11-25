import { labels } from "../static/labels";
export function removePackage({ packageName, navigate }) {
  const cart = JSON.parse(sessionStorage.getItem("cart"));
  const updatedCartRemovePackage = cart.filter((item) => {
    if (item.packageName !== packageName) {
      return item;
    }
  });
  sessionStorage.setItem("cart", JSON.stringify(updatedCartRemovePackage));

  return navigate(labels.bookings.bookingsLink);
}
