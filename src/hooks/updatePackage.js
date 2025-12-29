import { labels } from "../static/labels";
import { packageNameCamelCase } from "./packageNameCamelCase";
import { setCart } from "../static/cartItems";

export function updatePackage({ packageOption, packageName, navigate }) {
  const cartItems = sessionStorage.getItem("cart")
    ? JSON.parse(sessionStorage.getItem("cart"))
    : [];

  if (packageOption) {
    const updatedCartPackageOption = cartItems.map((item) => {
      if (item.packageName === packageName) {
        item.packageOption = packageOption;
        return item;
      } else {
        return item;
      }
    });
    setCart(updatedCartPackageOption);
  }

  if (packageName !== "Ceramic Coating") {
    return navigate(
      `/${packageNameCamelCase({ packageName: packageName })}${labels.links.addOnsLink}`,
    );
  } else {
    return navigate(`${labels.links.appointmentsLink}`);
  }
}
