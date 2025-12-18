import { labels } from "../../static/labels";

export function updateModifier({ addOn, packageName, navigate }) {
  if (addOn.length) {
    const cart = JSON.parse(sessionStorage.getItem("cart"));
    const updatedCartModifier = cart.map((item) => {
      if (item.packageName === packageName) {
        item.addOns = addOn;
        return item;
      } else {
        return item;
      }
    });
    sessionStorage.setItem("cart", JSON.stringify(updatedCartModifier));
  }

  return navigate(labels.bookings.appointmentsLink);
}
