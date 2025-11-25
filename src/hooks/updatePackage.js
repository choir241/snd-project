import { labels } from "../static/labels";
export function updatePackage({ packageOption, packageName, navigate }) {
  if (packageOption) {
    const cart = JSON.parse(sessionStorage.getItem("cart"));
    const updatedCartPackageOption = cart.map((item) => {
      if (item.packageName === packageName) {
        item.packageOption = packageOption;
        return item;
      } else {
        return item;
      }
    });
    sessionStorage.setItem("cart", JSON.stringify(updatedCartPackageOption));
  }

  return navigate(labels.bookings.appointmentsLink);
}
