import { labels } from "../static/labels";
import { packageNameCamelCase } from "./packageNameCamelCase";

export function addPackage({
  packageOption,
  packageName,
  packagePrice,
  packageTimeAlloted,
  navigate,
}) {
  if (!packageOption) {
    document.querySelector("#noOptionSelected").innerHTML =
      "&#x26A0; Please select an option.";
    throw new Error("Please select an option.");
  }

  sessionStorage.setItem(
    "cart",
    JSON.stringify([
      {
        packageName: packageName,
        packagePrice: packagePrice,
        packageTimeAlloted: packageTimeAlloted,
        packageOption: packageOption,
      },
    ]),
  );

  return navigate(
    `/${packageNameCamelCase({ packageName: packageName })}${labels.bookings.addOnsLink}`,
  );
}
