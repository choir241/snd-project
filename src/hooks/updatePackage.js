import { labels } from "../static/labels";
import { packageNameCamelCase } from "./packageNameCamelCase";

export function updatePackage({ packageOption, packageName, navigate }) {
  if (packageOption) {
    const cart = sessionStorage.getItem("cart")
      ? JSON.parse(sessionStorage.getItem("cart"))
      : [];
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

  if (packageName !== "Ceramic Coating") {
    return navigate(
      `/${packageNameCamelCase({ packageName: packageName })}${labels.bookings.addOnsLink}`,
    );
  } else {
    return navigate(`${labels.bookings.appointmentsLink}`);
  }
}
